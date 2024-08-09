const mongoose = require('mongoose')

const UserProfileSchema = new mongoose.Schema({
    dateOfBirth: {
        type: String
    },


    phoneCode: {
        type: String,
    },

    phoneNumber: {
        type: Number,
    },

    learnerCourses: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    instructorCourses: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },

})

module.exports = mongoose.model('UserProfile', UserProfileSchema);