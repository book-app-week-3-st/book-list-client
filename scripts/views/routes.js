

page('/', app.bookView.initIndexPage);
page('/books/:book_id', ctx => Book.fetchOne(ctx, app.bookView.initDetailPage));
page('/books/new', app.bookView.initFormPage);

page();