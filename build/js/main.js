function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Events =
/*#__PURE__*/
function () {
  function Events() {
    _classCallCheck(this, Events);

    this.init();
  }

  _createClass(Events, [{
    key: "init",
    value: function init() {
      this.events();
    }
  }, {
    key: "events",
    value: function events() {
      var _this = this;

      var body = document.querySelector("body");

      body.onclick = function (e) {
        var target = e.target;

        _this.resendCode(e, target);
      };
    }
  }, {
    key: "resendCode",
    value: function resendCode(e, target) {
      e.preventDefault();
      var targetElement = target.hasAttribute("data-send-code");
      var counterElement = document.querySelector("[data-send-counter]");
      var btnElement = target;

      if (targetElement && counterElement) {
        var countdown = function countdown() {
          second--;
          counterElement.innerHTML = "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u043A\u043E\u0434\u0430 \u0447\u0435\u0440\u0435\u0437 ".concat(second, "\u0441");

          if (second == 0) {
            clearTimeout(timer);
            btnElement.hidden = false; // sendCodeFunction()

            counterElement.hidden = true;
          } else {
            timer = setTimeout(countdown, 1000);
          }
        };

        var timer,
            second = 60;
        btnElement.hidden = true;
        counterElement.hidden = false;
        countdown();
      }
    }
  }]);

  return Events;
}();

new Events();
$(function () {
  if ($('select').length) {
    $('select').niceSelect();
  }

  if ($('.procurement__pagination').length && $('.procurement__content').length) {
    $('.procurement__pagination').pagination({
      dataSource: [{
        name: "Яркие фотошторы, тюль, КПБ",
        platform: "ogromno.com, Екатринбург",
        organizer: "Liliya333",
        paid: "0",
        limit: "6 700",
        topay: "6 700",
        issued: "700",
        debt: "200"
      }],
      prevText: "<div class=\"pagination__arrow\">\n\t\t\t\t\t\t\t\t\t<svg class=\"btns__add-textual-ico\">\n\t\t\t\t\t\t\t\t\t\t<use y=\"2\" xlink:href=\"/assets/images/sprite-icons/sprite/sprite-icons.svg#pagination-arrow-ico\"></use>\n\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\u043D\u0430\u0437\u0430\u0434\n\t\t\t\t\t\t\t\t</div>",
      nextText: "<div class=\"pagination__arrow\">\n\t\t\t\t\t\t\t\t\t\u0434\u0430\u043B\u0435\u0435\n\t\t\t\t\t\t\t\t\t<svg class=\"btns__add-textual-ico\" style=\"transform:rotate(180deg)\">\n\t\t\t\t\t\t\t\t\t\t<use y=\"1\" xlink:href=\"/assets/images/sprite-icons/sprite/sprite-icons.svg#pagination-arrow-ico\"></use>\n\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t</div>",
      pageSize: 6,
      callback: function callback(data, pagination) {
        var dataHtml = template(data);
        $('.procurement__content').html(dataHtml);
      }
    });
  }
});

function template(data) {
  var dataHtml = '';
  $.each(data, function (index, item) {
    dataHtml += "\n            <div class=\"purchase__acquisition\">\n                <p class=\"purchase__acquisition-name\">".concat(item.name, "</p>\n                <div class=\"purchase__acquisition-infoboard\">\n                    <div class=\"purchase__acquisition-part width-name\">\n                        <p class=\"purchase__acquisition-text\">\n                            \u041F\u043B\u043E\u0449\u0430\u0434\u043A\u0430: ").concat(item.platform, "\n                        </p>\n                        <p class=\"purchase__acquisition-text\">\n                            \u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0442\u043E\u0440: ").concat(item.organizer, "\n                        </p>\n                        <button class=\"purchase__acquisition-hover-btn\">\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u0438\u0435</button>\n                    </div>\n                    <div class=\"purchase__acquisition-part flex width-purse\">\n                        <div class=\"purchase__acquisition-purse\">\n                            <p class=\"purchase__acquisition-text align-right\">\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E</p>\n                            <p class=\"purchase__acquisition-text align-right\">\u041A \u043E\u043F\u043B\u0430\u0442\u0435</p>\n                        </div>\n                        <div class=\"purchase__acquisition-purse\">\n                            <p class=\"purchase__acquisition-text black\">").concat(item.paid, " \u20BD / ").concat(item.limit, " \u20BD</p>\n                            <p class=\"purchase__acquisition-text red\">").concat(item.topay, " \u20BD</p>\n                        </div>\n                    </div>\n                    <div class=\"purchase__acquisition-part flex width-purse\">\n                        <div class=\"purchase__acquisition-purse\">\n                            <p class=\"purchase__acquisition-text align-right\">\u0412\u044B\u0434\u0430\u043D\u043E</p>\n                            <p class=\"purchase__acquisition-text align-right\">\u0414\u043E\u043B\u0433 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0442\u043E\u0440\u0430</p>\n                        </div>\n                        <div class=\"purchase__acquisition-purse\">\n                            <p class=\"purchase__acquisition-text black\">").concat(item.issued, " \u20BD</p>\n                            <p class=\"purchase__acquisition-text black\">").concat(item.debt, " \u20BD</p>\n                        </div>\n                    </div>\n                    <div class=\"purchase__acquisition-part width-more\">\n                        <button class=\"btns__add-textual\">\n                            <svg class=\"btns__add-textual-ico\">\n                                <use xlink:href=\"/assets/images/sprite-icons/sprite/sprite-icons.svg#more-btn-ico\"></use>\n                            </svg>\n                        </button>\n                        <div class=\"purchase__dropdown\">\n                            <ul class=\"purchase__dropdown-list\">\n                                <li class=\"purchase__dropdown-item\">\n                                    <a class=\"purchase__dropdown-link\" href=\"\">\n                                        <svg class=\"purchase__dropdown-ico\">\n                                            <use xlink:href=\"/assets/images/sprite-icons/sprite/sprite-icons.svg#dropdown-payback-ico\"></use>\n                                        </svg>\n                                        \u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C\n                                    </a>\n                                </li>\n                                <li class=\"purchase__dropdown-item\">\n                                    <a class=\"purchase__dropdown-link\" href=\"\">\n                                        <svg class=\"purchase__dropdown-ico\">\n                                            <use x=\"-2\" xlink:href=\"/assets/images/sprite-icons/sprite/sprite-icons.svg#dropdown-away-ico\"></use>\n                                        </svg>\n                                        \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435\n                                    </a>\n                                </li>\n                                <li class=\"purchase__dropdown-item\">\n                                    <a class=\"purchase__dropdown-link\" href=\"\">\n                                        <svg class=\"purchase__dropdown-ico\">\n                                            <use x=\"1\" xlink:href=\"/assets/images/sprite-icons/sprite/sprite-icons.svg#dropdown-delete-ico\"></use>\n                                        </svg>\n                                        \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043A\u0443\u043F\u043A\u0443\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>");
  });
  dataHtml += '</div>';
  return dataHtml;
}
//# sourceMappingURL=main.js.map
