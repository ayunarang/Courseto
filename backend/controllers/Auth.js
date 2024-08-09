

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const UserProfile = require('../models/UserProfile.js')
const OTP = require('../models/OTP.js')
const otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');
const EmailContent = require('../mail_template/send_otp.js');


// ..................

// otp sending route

// ..................


const sendEmailNotificationForotp = (emailContent) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD,
        },
    });


    transporter.sendMail(
        {
            from: process.env.ADMIN,
            to: process.env.USER,
            subject: 'OTP Verification',
            html: emailContent,

        }, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });
};


exports.sendOTP = async (req, res) => {
    try {
        const { fullName } = req.body;
        const { email } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User Already exists"
            })
        }

        let otp;
        let result;
        do {
            // Generate new OTP
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false
            });

            // Check if the OTP already exists
            result = await OTP.findOne({ "otp": otp });
        } while (result);

        const otpDoc = new OTP({ email, otp });
        await otpDoc.save();

        function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        // Generate the email content
        const emailContent = EmailContent(capitalize(fullName), otp);

        await sendEmailNotificationForotp(emailContent);

        res.status(200).json({
            success: true,
            message: "otp generated successfully"
        })
    }
    catch (error) {
        console.log("error in sendOTP controller", error)
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// ..................

// otp verification route

// ..................


exports.verifyOTP = async (req, res) => {
    const { email, enteredOTP } = req.body;
    const otpRecord = await OTP.findOne({ email });
    if (!otpRecord) {
        return res.status(400).json({ message: 'OTP record not found' });
    }

    if (otpRecord.otp === enteredOTP) {
        await OTP.deleteOne({ _id: otpRecord._id });

        return res.json({ message: 'OTP verified successfully' });
    } else {
        return res.status(400).json({ message: 'Invalid OTP' });
    }
}


// ..................

//     SIGNUP FOR USER

// ..................


exports.register = async (req, res) => {
    try {

        const {
            fullname,
            email,
            password,
            confirmpassword,
            otp
        } = req.body



        if (!fullname || !email || !password || !confirmpassword || !otp) {
            return res.status(403).json({
                success: false,
                message: 'All fields are mandetory or you didnt verify otp'
            })
        }


        if (password !== confirmpassword) {
            return res.status(401).json({
                succes: false,
                message: 'Confirm Password and Password does not not match'
            })
        }

        const hashPass = await bcrypt.hash(password, 10);
        const profileDetails = await UserProfile.create({
            dateOfBirth: null,
            phoneCode: null,
            phoneNumber: null,
        })

        await profileDetails.save();

        const user = await User.create({
            fullName: fullname,
            email: email,
            password: hashPass,
            additionalDetail: profileDetails._id,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${fullname}`
        })


        await user.save();
        const userCreated = await User.findOne({ email });

        const payload = {
            email: email,
            id: userCreated._id,
        }

        const token = jwt.sign(payload,
            process.env.JWT_SECRET, { expiresIn: '72h' }
        )

        const options = {
            httpOnly: true,
            domain: '.localhost',
            expiresIn: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            sameSite: 'none',
            secure: true,
        }

        res.cookie("token", token, options).status(200).json({
            success: true,
            message: 'User signed up successfully'
        })
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'user can not be registered'
        })
    }
}


// ..................

//     LOGIN FOR USER

// ..................


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please fill all details'
            })
        }

        let user = await User.findOne({ email })

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'user not found'
            })
        }

        const payload = {
            email: user.email,
            id: user._id,
        }

        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(payload,
                process.env.JWT_SECRET, { expiresIn: '72h' }
            )

            const options = {
                httpOnly: true,
                domain: '.localhost',
                expiresIn: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                sameSite: 'none',
                secure: true,
            }

            res.cookie("token", token, options).status(200).json({
                success: true,
                message: 'User logged in successfully',
            })
        }
        else {
            return res.status(401).json({
                success: false,
                message: "password incorrect"
            })
        }
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'login failure'
        })
    }
}

exports.getUserData = async (req, res) => {
    try {
      const userEmail = req.user.email; 
  
      const user = await User.findOne({ email: userEmail });
  
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found',
        });
      }
  
      res.json({
        success: true,
        user: {
          email: user.email,
          fullName: user.fullName,
          image:user.image,
        },
      });
    } catch (error) {
      console.error('Error fetching user data', error);
      res.status(500).json({
        success: false,
        message: 'Server error',
      });
    }
  };
  