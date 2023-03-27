const mongoose = require('mongoose')

const PostCollection = new mongoose.Schema(
{
    date:String,
    author:String,
    img:String,
    body:String,
    tags:[String]
}
)
 const outputCollection = mongoose.model('PostCollection', PostCollection)
 
 module.exports = outputCollection