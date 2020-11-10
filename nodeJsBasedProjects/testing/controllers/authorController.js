var Author = require('../models/author')

//display list of authors
exports.author_list = (req, res)=> {
  Author.find()
  .sort([['family_name', 'ascending']])
  .exec((err, list_authors)=>{
    if(err){return next(err)}
    //succesful so render
    res.render('author_list', {title: 'Author List', author_list: list_authors})
  })
}

//display details page for specific author
exports.author_detail = (req, res) => res.send('NOT IMPLEMENTED: Author details:' + req.params.id)

//display author create form on get
exports.author_create_get = (req, res) => res.send('NOT IMPLEMENTED: Author create get')

//handle author create on POST
exports.author_create_post = (req, res)=> res.send('NOT IMPLEMENTED: Author create post')


//display author delete form on get
exports.author_delete_get = (req, res)=> res.send('NOT IMPLEMENTED: Author delete get')

//handle author delete on POST
exports.author_delete_post = (req, res)=> res.send('NOT IMPLEMENTED: Author delete post')

//display author update form on get
exports.author_update_get = (req, res)=> res.send('NOT IMPLEMENTED: Author update get')

//handle author update on POST
exports.author_update_post = (req, res)=> res.send('NOT IMPLEMENTED: Author update POST')
