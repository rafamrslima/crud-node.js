
const mongoose = require('mongoose');
const Joi = require('joi');

const schema = mongoose.Schema({
    name : {
        type : String, 
        required: true, 
        minlength: 1, 
        maxlength: 50 
    },
    price: {
        type : Number, 
        required: true, 
        min: 1 
    },
    author: {
        type : String,
        required: true, 
        minlength: 1, 
        maxlength: 30 
    }
});

function validate(body)   {
    const schema = {
        name: Joi.string().min(3).required(),
        price: Joi.number().min(1).required(),
        author: Joi.string().min(3).required()
    };

    return Joi.validate(body, schema);
} 

const Course = mongoose.model('Course', schema);
 
exports.Course = Course;
exports.validate = validate;