`use strict`;
var app = app || {};

(function(module) {

  const bookView = {};

  bookView.initIndexPage = () => {
    $('#book-list').empty();
    $('.detail-view').hide();
    $('.update-view').hide();
    $('.form-view').hide();
    $('.book-view').show();
    Book.all.map(book => {
      $('#book-list').append(book.toHtml());
    });
  };

  bookView.initDetailPage = (ctx) => {
    $('#book-detail').empty();
    $('.book-view').hide();
    $('.update-view').hide();
    $('.form-view').hide();
    $('.detail-view').show();
    let selected = Book.all.filter(el => el.book_id = ctx.params.book_id);
    console.log(selected);
    $('#book-detail').append(selected[0].toHtml());
  };

  bookView.update = (ctx, event) => {
    event.preventDefault();
    console.log(ctx.params.book_id);
    let book = new Book({
      title: $('#Ubook-title').val(),
      author: $('#Ubook-author').val(),
      isbn: $('#Uisbn').val(),
      image_url: $('#Uimage-url').val(),
      description: $('#Udescription').val(),
    });
    console.log(book);
    book.updateRecord(ctx);
  };

  bookView.submit = event => {
    event.preventDefault();
    let book = new Book({
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

  bookView.initFormPage = () => {
    $('.update-view').hide();
    $('.book-view').hide();
    $('.detail-view').hide();
    $('.form-view').show();

    $('#new-form').on('submit', bookView.submit);

  };

  bookView.initUpdatePage = (ctx) => {
    console.log(ctx.params);
    $('.update-view').show();
    $('.book-view').hide();
    $('.detail-view').hide();
    $('.form-view').hide();

    $('#update-form').on('submit', bookView.update(ctx));

    // window.location = '../';
  };

  module.bookView = bookView;

})(app);