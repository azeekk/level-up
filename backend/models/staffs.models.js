const mongoose = require("mongoose");


const StaffSchema = mongoose.Schema ({
    email:{
        type: String,
        required: [true, 'Email is required'],
    },
    name:{
        type: String,
        required:[true, "name is required"]
    },
    number:{
        type: String,
        required: [true, 'Number is required'],
    },
    password:{
        type: String,
        required: [true, 'Password is required'],
    }
})

const Staff = mongoose.model("Staff", StaffSchema);

module.exports = Staff;