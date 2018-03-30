
page('/books/update/:book_id', ctx => app.bookView.initUpdatePage(ctx, ));
page('/books/new', app.bookView.initFormPage);
page('/admin',
  (ctx, next) => app.adminView.verify(ctx, next),
  (ctx) => app.adminView.initAdminPage());
page('/books/:book_id', ctx => app.Book.fetchOne(ctx, app.bookView.initDetailPage));
page('/', ctx => app.Book.fetchAll(app.bookView.initIndexPage));

page();