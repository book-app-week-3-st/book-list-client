`use strict`;
var app = app || {};

(function(module) {

  const bookView = {};

  bookView.initIndexPage = () => {
    $('#book-list').empty();
    $('.update-view').hide();
    $('.form-view').hide();
    $('.book-view').show();
    $('.admin-view').hide();

    app.Book.all.map(book => {
      $('#book-list').append(book.toHtml());
    });
    $('.detail-view').hide();
  };

  bookView.initFormPage = () => {
    $('.update-view').hide();
    $('.book-view').hide();
    $('.detail-view').hide();
    $('.form-view').show();
    $('.admin-view').hide();

    $('#new-form').on('submit', bookView.submit);
  };

  bookView.initUpdatePage = (ctx) => {
    console.log(ctx.params);
    $('.book-view').hide();
    $('.detail-view').hide();
    $('.form-view').hide();
    $('.admin-view').hide();
    $('.update-view').show();
    
    $('#update-form').on('submit', (e) => bookView.update(e, ctx));
    
  };

  bookView.initDetailPage = (ctx) => {

    $('#book-detail').empty();
    $('.book-view').hide();
    $('.update-view').hide();
    $('.form-view').hide();
    $('.admin-view').hide();
    $('.detail-view').show();
    let selected = app.Book.all.filter(el => el.book_id = ctx.params.book_id);
    console.log(selected);
    $('#book-detail').append(selected[0].toHtml());
    $('#delete-button').on('click', (e) => bookView.delete(e, ctx));
  };

  bookView.delete = (event, ctx) => {
    console.log('delete method runs');
    console.log(ctx.params);
    event.preventDefault();

    let selected = app.Book.all.filter(el => el.book_id = ctx.params.book_id);
    console.log(selected);
    selected[0].deleteRecord(ctx);

    window.location = '../';

  };


  bookView.submit = event => {
    event.preventDefault();
    let book = new app.Book({
      title: $('#book-title').val(),
      author: $('#book-author').val(),
      isbn: $('#isbn').val(),
      image_url: $('#image-url').val(),
      description: $('#description').val(),
    });
    console.log(book);
    book.create();

    window.location = '../';
  };

  bookView.update = (event, ctx) => {
    event.preventDefault();
    console.log(event);
    console.log(ctx.params);
    let book = new app.Book({
      book_id: ctx.params.book_id,
      title: $('#Ubook-title').val(),
      author: $('#Ubook-author').val(),
      isbn: $('#Uisbn').val(),
      image_url: $('#Uimage-url').val(),
      description: $('#Udescription').val(),
    });
    console.log(book);
    book.updateRecord(ctx);

    window.location = '../../';

  };


  module.bookView = bookView;

})(app);