
//importing the mongoose
const mongoose = require('mongoose')

//creating a schema(its like a defining the columns of table)
const userSchema = new mongoose.Schema({
  email: {
  type: mongoose.SchemaTypes.String,
  required: true,
  unique:true,
 },
 password: {
  type: mongoose.SchemaTypes.String,
  required: true,
 },
 createdAt: {
  type: mongoose.SchemaTypes.Date,
  required: true,
  default: new Date(),
 }
});

//exporting the user(userschema)
// the 'user' is for calling the schema
module.exports = mongoose.model('local_user',userSchema)