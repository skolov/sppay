$(document).ready(function () {
  $('select').niceSelect();
  $('.pagination').pagination({
    dataSource: [{
      name: "hello1"
    }, {
      name: "hello2"
    }, {
      name: "hello3"
    }, {
      name: "hello4"
    }, {
      name: "hello5"
    }, {
      name: "hello6"
    }, {
      name: "hello7"
    }, {
      name: "hello8"
    }, {
      name: "hello9"
    }, {
      name: "hello10"
    }, {
      name: "hello11"
    }, {
      name: "hello12"
    }, {
      name: "hello13"
    }, {
      name: "hello14"
    }, {
      name: "hello15"
    }, {
      name: "hello16"
    }, {
      name: "hello17"
    }],
    prevText: 'назад',
    nextText: 'далее',
    callback: function callback(data, pagination) {
      var dataHtml = template(data);
      $('#data-container').html(dataHtml);
    }
  });
});

function template(data) {
  return "<h1>".concat(data, "</h1>");
}
//# sourceMappingURL=main.js.map
