`use strict`;
var app = app || {};

(function(module) {

const bookView = {};

bookView.initIndexPage = () => {
  $('.detail-view').hide();
  $('.form-view').hide();
  $('.book-view').show();
  Book.all.map(book => {
    $('#book-list').append(book.toHtml())
  });
}

bookView.initDetailPage = (ctx) => {
  $('.book-view').hide();
  $('.form-view').hide();
  $('.detail-view').show();
  let selected = Book.all.filter(el => el.book_id = ctx.params.book_id);
  console.log(selected);
  debugger;
  $('#book-detail').append(selected[0].toHtml());
}

bookView.submit = event => {
  event.preventDefault();
  let book = new Book({
    title: $('#book-title').val(),
    author: $('#book-author').val(),
    ISBN: $('#isbn').val(),
    image_url: $('#image-url').val(),
    description: $('#description').val(),
  });

  book.create();

  window.location = '../';
}

bookView.initFormPage = () => {
  $('.book-view').hide();
  $('.detail-view').hide();
  $('.form-view').show();
}




module.bookView = bookView;

})(app);