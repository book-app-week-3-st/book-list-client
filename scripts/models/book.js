`use strict`;

var app = app || {};

(function(module) {

  function Book (rawDataObj) {
    this.book_id = rawDataObj.book_id;
    this.title = rawDataObj.title;
    this.author = rawDataObj.author;
    this.isbn = rawDataObj.isbn;
    this.image_url = rawDataObj.image_url;
    this.description = rawDataObj.description;
  }

  Book.all = [];

  Book.prototype.toHtml = function() {
    let template = Handlebars.compile($('#book-list-template').text());
    return template(this);
  };

  Book.loadAll = rows => Book.all =
  rows.sort((a,b) => (b.title - a.title)).map(book => new Book(book));


  Book.fetchAll = callback => {
    $.get('http://localhost:3000/api/v1/books')
      .then(results => {
        Book.loadAll(results);
        callback();
      },
      function(err) {
        console.error(err);
      });
  };

  Book.fetchOne = function (ctx, callback) {

    $.get(`http://localhost:3000/api/v1/books/${ctx.params.book_id}`)
      .then(results => {
        Book.loadAll(results);
        callback(ctx);
      },
      function(err) {
        console.error(err);
      });
  };

  Book.prototype.create = function(callback) {
    $.post('http://localhost:3000/api/v1/books', {title: this.title, author: this.author, isbn: this.isbn, image_url: this.image_url, description: this.description})
      .then(data => {
        console.log(data);
        if(callback) callback();
      }).catch(console.error);
  };

  Book.prototype.updateRecord = function(ctx, callback) {
    $.ajax({
      url: `http://localhost:3000/api/v1/books/${ctx.params.book_id}`,
      method: 'PUT',
      data: {
        title: this.title,
        author: this.author,
        isbn: this.isbn,
        image_url: this.image_url,
        description: this.description
      }
    })
      .then(console.log)
      .then(callback)
      .catch(console.error);
  };

  Book.prototype.deleteRecord = function(ctx, callback) {
    console.log (ctx.params.book_id);
    $.ajax({
      url: `http://localhost:3000/api/v1/books/${ctx.params.book_id}`,
      method: 'DELETE'
    })
      .then(console.log)
      .then(callback)
      .catch(console.error);
  };

  module.Book = Book;

})(app);