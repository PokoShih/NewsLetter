const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;
const adminSchema = new Schema({
    adminSales:{
        type:String,
    },
    adminPromotions:{
        type:String,
    },
    adminNews:{
        type:String,
    },
    adminSafety:{
        type:String,
    },
    adminAchievements:{
        type:String,
    },
    adminBirthdays:{
        type:String,
    },
},{timestamps: true});

module.exports = mongoose.model("adminContent", adminSchema);
