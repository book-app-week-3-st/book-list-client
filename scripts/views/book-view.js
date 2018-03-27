`use strict`;

const bookView = {};

bookView.initIndexPage = () => {
  $('.container').hide();
  $('.book-view').show();
  Book.all.map(book => {
    $('#book-list').append(book.toHtml())
  });
}

$(document).ready(Book.fetchAll())