const mongoose = require('mongoose');

const detailsSchema = new mongoose.Schema({
    productName: {
        type: String},

        Category: {
            type:String
        },

        Type: {
            type:String
        },

        Spec1: {
            type:String
        },

        Spec2: {
            type:String
        },

        Spec3: {
            type:String
        },

        Spec4: {
            type:String
        },

})

const Details = mongoose.model('DETAIL', userSchema);
module.exports = Details;