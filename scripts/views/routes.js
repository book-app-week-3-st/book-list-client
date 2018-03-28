page('/', app.bookView.initIndexPage());
page('/books/:book_id', Book.fetchOne() )
page('/books/new', Book.prototype.create());

page();