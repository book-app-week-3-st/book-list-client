
page('/admin', app.adminView.initAdminPage);

page('/books/update/:book_id', ctx => app.bookView.initUpdatePage(ctx));
page('/books/new', app.bookView.initFormPage);
page('/books/:book_id', ctx => Book.fetchOne(ctx, app.bookView.initDetailPage));
page('/', ctx => Book.fetchAll(app.bookView.initIndexPage));

page();