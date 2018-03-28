

page('/', app.bookView.initIndexPage);
page('/books/:book_id', app.bookView.initDetailPage);
page('/books/new', app.bookView.initFormPage);

page();