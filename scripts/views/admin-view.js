`use strict`;
var app = app || {};

(function(module) {

  const adminView = {};

  adminView.initAdminPage = () => {
    $('.book-view').hide();
    $('.update-view').hide();
    $('.form-view').hide();
    $('.detail-view').hide();
    $('.admin-view').show();

    $('#admin-form').on('submit', app.adminView.verify);

    let token = event.target.password.value;

    $.get(`'http://localhost:3000/api/v1/admin`, { token })
      .then(() => {
        localStorage.token = true;
        page('/tasks/add');
      })
      .catch(() => page('/'));
  };

  adminView.verify = function(ctx, next) {
    if (!localStorage.token) $('.admin-view').hide();
    else console.log('token');
    next();
  };

  module.adminView = adminView;

})(app);
