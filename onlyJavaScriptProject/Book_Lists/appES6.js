class Book {
  constructor(title, author, isbn){
    this.title = title,
    this.author = author,
    this.isbn = isbn
  }
}

class UI {
  addBookToList(book){
    const list =  document.getElementById('book-list')
    const row = document.createElement('tr')
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a class = "delete" href = "#">X</a></td>
    `
    list.appendChild(row)
  }

  clearFields(){
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''
  }

  deleteBooksFromList(target){
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove()
    }
  }

  showAlert(message, className){
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
}

// local storage
class Store {
  static getBooks(){
    let books
    if(localStorage.getItem('books')=== null){
      return books = []
    }
    else{
      books = JSON.parse(localStorage.getItem('books'))
    }
    return books
  }
  static displayBooks(){
    const books = Store.getBooks();
    console.log();

    books.forEach(function(book){
        const ui = new UI
        ui.addBookToList(book)
  })
  }

  static addBooks(book){
    const books = Store.getBooks()

    books.push(book)

    localStorage.setItem('books', JSON.stringify(books))
  }
  static removeBookes(isbn){
    const books = Store.getBooks()

    books.forEach(function(book ,index){
      if(book.isbn === isbn)
        books.splice(index, 1)
    })

    localStorage.setItem('books', JSON.stringify(books))
  }
}


// DOM  load event
document.addEventListener('DOMContentLoaded', Store.displayBooks)


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
  ui.addBookToList(book)

  // add book to ls
  Store.addBooks(book)

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

  //delete from ls
  Store.removeBookes(e.target.parentElement.previousElementSibling.textContent)

  ui.showAlert('Book Removed', 'success')

  e.preventDefault()
})
