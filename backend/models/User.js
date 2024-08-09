const mongoose = require ('mongoose')


const userSchema = new mongoose.Schema({
    image: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: String },
    additionalDetail:{type:mongoose.Schema.Types.ObjectId,ref:'UserProfile'},
    isLearner:{type:Boolean,default:true},
    isInstructor:{type:Boolean,default:false},
    createdAt: { type: Date, default: Date.now }
  });
  
  const User = mongoose.model('User', userSchema);
  module.exports=User;