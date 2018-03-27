`use strict`;

function Book (title, author, isbn, image_url, discription) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.image_url = image_url;
  this,discription = discription;
}

Book.All = [];

Book.prototype.toHTML = function() {
  let template = Handlebars.compile($('#book-template').text()); 

  return template(this);
}

Book.loadAll = bookData => {
  bookData.sort((a,b) => (new Date(b)))
}