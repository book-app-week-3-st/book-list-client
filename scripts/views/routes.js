
page('/books/update/:book_id', ctx => app.bookView.initUpdatePage(ctx));
page('/', ctx => Book.fetchAll(app.bookView.initIndexPage));
page('/books/new', app.bookView.initFormPage);
page('/books/:book_id', ctx => Book.fetchOne(ctx, app.bookView.initDetailPage));

page();