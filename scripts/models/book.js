`use strict`;

function Book (title, author, isbn, image_url, discription) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.image_url = image_url;
  this,discription = discription;
}

Book.all = [];

Book.prototype.toHTML = function() {
  let template = Handlebars.compile($('#book-template').text()); 
  return template(this);
}

Book.loadAll = bookData => {
  bookData.forEach(bookObject => Book.all.push(new Book(bookObject)))
}

Book.fetchAll = () => {

  if (localStorage.rawData) {
    Book.loadAll(JSON.parse(localStorage.getItem('rawData')));
    Book.initIndexPage();

  }  else {
    $.getJSON('../data/books.JSON')
    .then( data => {
      localStorage.setItem('rawData', JSON.stringify(data));
      Book.loadAll(data);
      book.initIndexPage();
      },
      function(err) {
        console.error(err);
    });
  }  
}