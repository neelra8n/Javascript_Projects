var mongoose = require('mongoose')

var Schema = mongoose.Schema

var AuthorSchema = new Schema({
  first_name: {type: String, required: true, maxlength:100},
  family_name: {type: String, required: true, maxlength:100},
  date_of_birth: {type: Date},
  date_of_death: {type: Date}
})

// author's full name virtual
AuthorSchema
.virtual('name')
.get(()=> this.family_name + '' + this.first_name)

// lifespan virtual of author
AuthorSchema
.virtual('lifespan')
.get(()=> {return (this.date_of_birth.getYear() - this.date_of_death.getYear()).toString()})

// Virtual for author's url
AuthorSchema
.virtual('url')
.get(()=>{return '/catalog/author/' + this._id})


//export
module.exports = mongoose.model('Author', AuthorSchema)
