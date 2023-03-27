const mongoose = require('mongoose')

module.exports = new mongoose.Schema(
{
    date:String,
    author:String,
    img:String,
    body:String,
    tags:[String]
}
)
