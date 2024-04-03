const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    carBrand:{
        type: String,
        required: true
    },
    carModel:{
        type: String,
        required: true
    },
    vin:{
        type: String,
        required: true
    },
    cylinder:{
        type: String,
        required: true
    },
    carColor:{
        type: String,
        required: true
    },
    carEngine:{
        type: String,
        required: true
    },
    carCondition:{
        type: String,
        required: true
    },
    carPrice:{
        type: String,
        required: true
    },
    carImage:{
        type: String,
        // required: true
    },
},{
    timeStamps: true
})

module.exports = mongoose.model('Product', productSchema);