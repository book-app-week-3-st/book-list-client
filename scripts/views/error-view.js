`use strict`;
var app = app || {};

(function(module) {

  const errorView = {};

  errorView.initErrorPage = (err) => {
    $('.container').hide();
    $('.error-view').show();
    $('#error-message').empty();
    let template = Handlebars.compile($('#error-template').text());
    return template(err);
    $('#error-message').append(template.toHtml());
  };

  let errorCallback = (err) => console.error(err);

  errorView.initErrorpage(errorCallback);

  module.errorView = errorView;

})(app);