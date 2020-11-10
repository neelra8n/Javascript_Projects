var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {type: String, required: true, minlength: 3, maxlength: 100},
  }
)

//virtual for genre
GenreSchema
.virtual('url')
.get(()=>{
  return '/catalog/genre' + this._id
})


//exports
module.exports = mongoose.model('Genre', GenreSchema)
