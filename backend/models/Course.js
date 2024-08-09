const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    objectives: {
        type: Array,
        required: true
    },
    language:{
        type:Array,
        required:true,
        default:['English']
    },
    isPublic:{
        type:Boolean,
        default:false
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

},
    { timestamps: true }
)

module.exports = mongoose.model('Course', CourseSchema);