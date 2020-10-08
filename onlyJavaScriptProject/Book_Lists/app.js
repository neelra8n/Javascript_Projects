//Book constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI cunstructor
function UI(){
}

// shoAlert for validation
UI.prototype.showAlert = function(message, className){
  // create div
  const div = document.createElement('div')
  // add className
  div.className = `alert ${className}`
  //add text
  div.appendChild(document.createTextNode(message))
  const container = document.querySelector('.container')
  const form = document.querySelector('#book-form')
  container.insertBefore(div,form)

  //timeout for alert
  setTimeout(function(){
    document.querySelector('.alert').remove()
  }, 2000 )
}

//prototype to add book to list
UI.prototype.addBookTOList = function(book){

  const list =  document.getElementById('book-list')

  row = document.createElement('tr')

  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a class = "delete" href = "#">X</a></td>
  `
  list.appendChild(row)

}

// clear input fields
UI.prototype.clearFields = function(){
  document.getElementById('title').value = ''
  document.getElementById('author').value = ''
  document.getElementById('isbn').value = ''
}

// delete books from list
UI.prototype.deleteBooksFromList = function(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove()
  }
}

//Event Listeners after submit
document.getElementById('book-form').addEventListener('submit',
function(e){

  // taking input from form
  const title = document.getElementById("title").value
        author = document.getElementById("author").value
        isbn = document.getElementById("isbn").value

  // instantiate book
    const book = new Book(title, author, isbn)

  // instantiating UI
  const ui = new UI()

  //validation
  if(title === '' || author === '' || isbn === ''){
    ui.showAlert('Please fill in form' , 'error')
  }else{
  // add book to the list
  ui.addBookTOList(book)

  //show success
    ui.showAlert('Book added successfully', 'success')

  //clear field
  ui.clearFields()
  }

  e.preventDefault()
})

// Event listener to delete
document.getElementById('book-list').addEventListener('click', function(e){
  const ui = new UI()
  ui.deleteBooksFromList(e.target)

  ui.showAlert('Book Removed', 'success')

  e.preventDefault()
})
