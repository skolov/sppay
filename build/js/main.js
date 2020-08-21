function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dataSuppliers = [{
  name: "РИФЕЙ",
  purchases: "12",
  description: "Универсальные моющие средства, профессиональные моющие средства для уборки помещений, моющие средства для пищевых предприятий, средства для стирки, жидкое мыло, кондиционеры для белья",
  city: "Екатеринбург",
  address: "улица Белинского, 35",
  inn: "6679041197",
  site: "www.esintez.ru, bioprotex.ru"
}];
var dataPurchase = [{
  name: "Яркие фотошторы, тюль, КПБ",
  platform: "ogromno.com, Екатринбург",
  organizer: "Liliya333",
  paid: "0",
  limit: "6 700",
  topay: "6 700",
  issued: "700",
  debt: "200"
}];
var dataAdminUser = [{
  name: "Шухевич Вадим",
  phone: "+7 922 22 67 885",
  email: "maloyat284@svpmail.com",
  balance: "3 600"
}];
var dataAdminSuppliers = [{
  name: "РИФЕЙ",
  purchases: "14",
  description: "Универсальные моющие средства, профессиональные моющие средства для уборки помещений, моющие средства для пищевых предприятий, средства для стирки, жидкое мыло, кондиционеры для белья",
  city: "Екатеринбург",
  address: "улица Белинского, 35",
  inn: "6679041197",
  site: "www.esintez.ru, bioprotex.ru",
  counterparties: [{
    name: "рифей2",
    inn: "122334455667",
    kpp: "344556677",
    bik: "546789564",
    checkingAccount: "5647484940948474635323456",
    balance: "3 600 "
  }, {
    name: "рифей1",
    inn: "122334455667",
    kpp: "344556677",
    bik: "546789564",
    checkingAccount: "5647484940948474635323456",
    balance: "3 600 "
  }, {
    name: "рифей1",
    inn: "122334455667",
    kpp: "344556677",
    bik: "546789564",
    checkingAccount: "5647484940948474635323456",
    balance: "3 600 "
  }]
}];
var dataAdminPurchase = [{
  name: 'Торговая марка "СКИФ ПРО"',
  platform: "ogromno.com, zakupis-ekb.ru",
  organizer: "Пестова Елена",
  paid: "12 000",
  topay: "30 000",
  debt: "12 000"
}, {
  name: 'Торговая марка "СКИФ ПРО"',
  platform: "ogromno.com, zakupis-ekb.ru",
  organizer: "Пестова Елена",
  paid: "12 000",
  topay: "30 000",
  debt: "12 000"
}, {
  name: 'Торговая марка "СКИФ ПРО"',
  platform: "ogromno.com, zakupis-ekb.ru",
  organizer: "Пестова Елена",
  paid: "12 000",
  topay: "30 000",
  debt: "12 000"
}, {
  name: 'Торговая марка "СКИФ ПРО"',
  platform: "ogromno.com, zakupis-ekb.ru",
  organizer: "Пестова Елена",
  paid: "12 000",
  topay: "30 000",
  debt: "12 000"
}, {
  name: 'Торговая марка "СКИФ ПРО"',
  platform: "ogromno.com, zakupis-ekb.ru",
  organizer: "Пестова Елена",
  paid: "12 000",
  topay: "30 000",
  debt: "12 000"
}]; // Шаблоны для пагинаций

function templateAdminSuppliers(data) {
  var dataHtml = "";
  $.each(data, function (index, item) {
    dataHtml += "<div class=\"adminSuppliers__item\">\n        <div class=\"adminSuppliers__head\">\n            <div class=\"adminSuppliers__head-name\">\n                ".concat(item.name, "\n                <p class=\"adminSuppliers__head-counter\">\n                    \u0417\u0430\u043A\u0443\u043F\u043E\u043A - ").concat(item.purchases, "\n                </p>\n                <button class=\"adminSuppliers__head-edit\">\n                    <svg\n                        class=\"adminSuppliers__head-editico\"\n                    >\n                        <use\n                            xlink:href=\"/assets/images/sprite-icons/sprite/sprite-icons.svg#pencil-edit-ico\"\n                        ></use>\n                    </svg>\n                </button>\n            </div>\n            <div class=\"adminSuppliers__head-text\">\n                <p class=\"adminSuppliers__head-description\">\n                    ").concat(item.description, "\n                </p>\n                <div\n                    class=\"adminSuppliers__head-requisites\"\n                >\n                    <p>\u0413\u043E\u0440\u043E\u0434: ").concat(item.city, "</p>\n                    <p>\u0410\u0434\u0440\u0435\u0441: ").concat(item.address, "</p>\n                    <p>\u0418\u041D\u041D: ").concat(item.inn, "</p>\n                    <p>\n                        \u0421\u0430\u0439\u0442: ").concat(item.site, "\n                    </p>\n                </div>\n            </div>\n        </div>\n        <div class=\"adminSuppliers__body\">\n            <div class=\"adminSuppliers__tablehead\">\n                <p class=\"counterparties\">\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B</p>\n                <p class=\"inn\">\u0418\u041D\u041D/\u041A\u041F\u041F</p>\n                <p class=\"bik\">\u0411\u0418\u041A</p>\n                <p class=\"checking-account\">\n                    \u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442\n                </p>\n                <p class=\"balance\">\u0411\u0430\u043B\u0430\u043D\u0441</p>\n            </div>\n                ").concat(item.counterparties.map(function (item) {
      return "\n                    <div class=\"adminSuppliers__tableitem\">\n                        <p class=\"counterparties\">".concat(item.name, "</p>\n                        <p class=\"inn\">").concat(item.inn, "/").concat(item.kpp, "</p>\n                        <p class=\"bik\">").concat(item.bik, "</p>\n                        <p class=\"checking-account\">\n                            ").concat(item.checkingAccount, "\n                        </p>\n                        <p class=\"balance\">").concat(item.balance, " \u20BD</p>\n                        \n                        <div class=\"menu-dropdown-holder\">\n                            <div class=\"purchase__acquisition-part\">\n                                <button class=\"btns__add-textual adminSuppliers__item-more\">\n                                    <svg class=\"btns__add-textual-ico\">\n                                        <use y=\"4\" xlink:href=\"/assets/images/sprite-icons/sprite/sprite-icons.svg#more-btn-ico\"></use>\n                                    </svg>\n                                </button>\n                                <div class=\"purchase__dropdown\">\n                                    <ul class=\"purchase__dropdown-list\">\n                                        <li class=\"purchase__dropdown-item\">\n                                            <a class=\"purchase__dropdown-link\" href=\"\">\n                                                <svg class=\"purchase__dropdown-ico\">\n                                                    <use xlink:href=\"/assets/images/sprite-icons/sprite/sprite-icons.svg#dropdown-payback-ico\"></use>\n                                                </svg>\n                                                \u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0443\n                                            </a>\n                                        </li>\n                                        <li class=\"purchase__dropdown-item\" >\n                                            <a class=\"purchase__dropdown-link\" href=\"\">\n                                                <svg class=\"purchase__dropdown-ico\">\n                                                    <use x=\"-2\" xlink:href=\"/assets/images/sprite-icons/sprite/sprite-icons.svg#dropdown-return-ico\"\n                                                    ></use>\n                                                </svg>\n                                                \u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u0434\u0435\u043D\u0435\u0433 \u043E\u0442\n                                                \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\n                                            </a>\n                                        </li>\n                                        <li class=\"purchase__dropdown-item\">\n                                            <a class=\"purchase__dropdown-link\" href=\"\">\n                                                <svg class=\"purchase__dropdown-ico\">\n                                                    <use x=\"-2\"\n                                                        xlink:href=\"/assets/images/sprite-icons/sprite/sprite-icons.svg#dropdown-away-ico\"\n                                                    ></use>\n                                                </svg>\n                                                \u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430\n                                            </a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>");
    }).join(""), "\n            \n        </div>\n    </div>");
  });
  return dataHtml;
}

function templatePurchase(data) {
  var dataHtml = "";
  $.each(data, function (index, item) {
    dataHtml += "\n            <div class=\"purchase__acquisition\">\n                <p class=\"purchase__acquisition-name\">".concat(item.name, "</p>\n                <div class=\"purchase__acquisition-infoboard\">\n                    <div class=\"purchase__acquisition-part width-name\">\n                        <p class=\"purchase__acquisition-text\">\n                            \u041F\u043B\u043E\u0449\u0430\u0434\u043A\u0430: ").concat(item.platform, "\n                        </p>\n                        <p class=\"purchase__acquisition-text\">\n                            \u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0442\u043E\u0440: ").concat(item.organizer, "\n                        </p>\n                        <button class=\"purchase__acquisition-hover-btn\">\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u0438\u0435</button>\n                    </div>\n                    <div class=\"purchase__acquisition-part flex width-purse\">\n                        <div class=\"purchase__acquisition-purse\">\n                            <p class=\"purchase__acquisition-text align-right\">\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E</p>\n                            <p class=\"purchase__acquisition-text align-right\">\u041A \u043E\u043F\u043B\u0430\u0442\u0435</p>\n                        </div>\n                        <div class=\"purchase__acquisition-purse\">\n                            <p class=\"purchase__acquisition-text black\">").concat(item.paid, " \u20BD / ").concat(item.limit, " \u20BD</p>\n                            <p class=\"purchase__acquisition-text red\">").concat(item.topay, " \u20BD</p>\n                        </div>\n                    </div>\n                    <div class=\"purchase__acquisition-part flex width-purse\">\n                        <div class=\"purchase__acquisition-purse\">\n                            <p class=\"purchase__acquisition-text align-right\">\u0412\u044B\u0434\u0430\u043D\u043E</p>\n                            <p class=\"purchase__acquisition-text align-right\">\u0414\u043E\u043B\u0433 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0442\u043E\u0440\u0430</p>\n                        </div>\n                        <div class=\"purchase__acquisition-purse\">\n                            <p class=\"purchase__acquisition-text black\">").concat(item.issued, " \u20BD</p>\n                            <p class=\"purchase__acquisition-text black\">").concat(item.debt, " \u20BD</p>\n                        </div>\n                    </div>\n                    <div class=\"purchase__acquisition-part width-more\">\n                        <button class=\"btns__add-textual\">\n                            <svg class=\"btns__add-textual-ico\">\n                                <use xlink:href=\"/assets/images/sprite-icons/sprite/sprite-icons.svg#more-btn-ico\"></use>\n                            </svg>\n                        </button>\n                        <div class=\"purchase__dropdown\">\n                            <ul class=\"purchase__dropdown-list\">\n                                <li class=\"purchase__dropdown-item\">\n                                    <a class=\"purchase__dropdown-link\" href=\"\">\n                                        <svg class=\"purchase__dropdown-ico\">\n                                            <use xlink:href=\"/assets/images/sprite-icons/sprite/sprite-icons.svg#dropdown-payback-ico\"></use>\n                                        </svg>\n                                        \u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C\n                                    </a>\n                                </li>\n                                <li class=\"purchase__dropdown-item\">\n                                    <a class=\"purchase__dropdown-link\" href=\"\">\n                                        <svg class=\"purchase__dropdown-ico\">\n                                            <use x=\"-2\" xlink:href=\"/assets/images/sprite-icons/sprite/sprite-icons.svg#dropdown-away-ico\"></use>\n                                        </svg>\n                                        \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435\n                                    </a>\n                                </li>\n                                <li class=\"purchase__dropdown-item\">\n                                    <a class=\"purchase__dropdown-link\" href=\"\">\n                                        <svg class=\"purchase__dropdown-ico\">\n                                            <use x=\"1\" xlink:href=\"/assets/images/sprite-icons/sprite/sprite-icons.svg#dropdown-delete-ico\"></use>\n                                        </svg>\n                                        \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043A\u0443\u043F\u043A\u0443\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>");
  });
  return dataHtml;
}

function templateSuppliers(data) {
  var dataHtml = "";
  $.each(data, function (index, item) {
    dataHtml += "\n            <div class=\"suppliers__item\">\n\n                <div class=\"suppliers__item-header\">\n                    ".concat(item.name, "\n                    <div class=\"suppliers__item-purchases\">\n                        \u0417\u0430\u043A\u0443\u043F\u043E\u043A -").concat(item.purchases, "\n                    </div>\n                </div>\n                \n                <div class=\"suppliers__item-body\">\n                \n                    <div class=\"suppliers__item-textholder main-width\">\n                        <p class=\"suppliers__item-text\">\n                            ").concat(item.description, "\n                        </p>\n                    </div>\n                \n                    <div class=\"suppliers__item-textholder  additional-width\">\n                        <p class=\"suppliers__item-text\">\u0413\u043E\u0440\u043E\u0434: ").concat(item.city, "</p>\n                        <p class=\"suppliers__item-text\">\u0410\u0434\u0440\u0435\u0441: ").concat(item.address, "</p>\n                        <p class=\"suppliers__item-text\">\u0418\u041D\u041D: ").concat(item.inn, "</p>\n                        <p class=\"suppliers__item-text\">\u0421\u0430\u0439\u0442: ").concat(item.site, "</p>\n                    </div>\n                \n                    <div class=\"suppliers__item-textholder\">\n                        <button class=\"btns__blue suppliers__item-btn\">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043A\u0443\u043F\u043A\u0443</button>\n                    </div>\n                \n                </div>\n\n            </div>");
  });
  return dataHtml;
}

function templateAdminUsers(data) {
  var dataHtml = "";
  $.each(data, function (index, item) {
    dataHtml += "\n            <div class=\"admin__users-tableitem\">\n                <p class=\"number\">".concat(index + 1, "</p>\n                <p class=\"users\">").concat(item.name, "</p>\n                <p class=\"phone\">").concat(item.phone, "</p>\n                <p class=\"email\">").concat(item.email, "</p>\n                <p class=\"balance\">").concat(item.balance, " \u20BD</p>\n                <div class=\"auth\"><button><img src=\"/assets/images/icons/exit-ico.svg\" alt=\"\"></button></div>\n            </div>");
  });
  return dataHtml;
}

function templateAdminPurchase(data) {
  var dataHtml = "";
  $.each(data, function (index, item) {
    var paid = parseInt(String(item.paid).replace(/ /g, "")),
        topay = parseInt(String(item.topay).replace(/ /g, ""));
    dataHtml += "\n        <div class=\"purchase__company\">\n            <div class=\"purchase__company-part\">\n                <p class=\"purchase__company-name\">\n                    ".concat(item.name, "\n                </p>\n                <p class=\"purchase__company-trading\">\n                    \u041F\u043B\u043E\u0449\u0430\u0434\u043A\u0438: ").concat(item.platform, "\n                </p>\n                <p class=\"purchase__company-trading\">\n                    \u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0442\u043E\u0440: ").concat(item.organizer, "\n                </p>\n            </div>\n\n            <div class=\"purchase__company-part flex\">\n                <div class=\"purchase__company-progress ").concat(paid / topay >= 1 && "completed", "\">\n                    <span style=\"width: ").concat(paid / topay * 100, "%;\"></span>\n                </div>\n\n                <div class=\"purchase__company-purse\">\n                    <p class=\"purchase__company-price\">\n                        ").concat(item.paid, " \u20BD / ").concat(item.topay, " \u20BD\n                    </p>\n                    <p class=\"purchase__company-text\">\n                        \u0421\u043E\u0431\u0440\u0430\u043D\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430\n                    </p>\n                </div>\n\n                <div class=\"purchase__company-purse\">\n                    <p class=\"purchase__company-price\">\n                        ").concat(item.debt, " \u20BD\n                    </p>\n                    <p class=\"purchase__company-text\">\n                        \u0414\u043E\u043B\u0433 SPPAY\n                    </p>\n                </div>\n\n                <button\n                    class=\"btns__add-textual purchase__company-edit\"\n                >\n                    <svg class=\"btns__add-textual-ico\">\n                        <use\n                            xlink:href=\"/assets/images/sprite-icons/sprite/sprite-icons.svg#pencil-edit-ico\"\n                        ></use>\n                    </svg>\n                </button>\n            </div>\n        </div>");
  });
  return dataHtml;
}

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

        _this.switchTabs(e, target);

        _this.toggleDropDown(e, target);

        _this.expandItems(e, target);

        _this.modalWindowOpening({
          e: e,
          target: target
        });
      };
    }
  }, {
    key: "modalWindowOpening",
    value: function modalWindowOpening(data) {
      var consultBtn = data.target.hasAttribute("data-open-modal");
      var closeBtn = data.target.hasAttribute("data-close-modal");
      var modalId, modal;

      if (consultBtn) {
        modalId = data.target.getAttribute("data-open-modal");
      }

      if (modalId && consultBtn) {
        modal = document.querySelector(".modal__window[data-modal='".concat(modalId, "']"));
      }

      if (modal && consultBtn) {
        data.e.preventDefault();
        modal.classList.toggle("active");
      }

      if (closeBtn) {
        document.querySelector(".modal__window.active").classList.toggle("active");
      }
    }
  }, {
    key: "resendCode",
    value: function resendCode(e, target) {
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

        e.preventDefault();
        var timer,
            second = 60;
        btnElement.hidden = true;
        counterElement.hidden = false;
        countdown();
      }
    }
  }, {
    key: "switchTabs",
    value: function switchTabs(e, target) {
      var parent = target.closest("[data-tab-parent]");
      var switchers = document.querySelectorAll("[data-tab-switch]");

      if (parent && switchers) {
        e.preventDefault();
        switchers.forEach(function (item) {
          item.classList.remove("active");
        });
        parent.classList.toggle("active");
        var attrTab = parent.hasAttribute("data-tab-switch");

        if (attrTab) {
          document.querySelectorAll("div[data-tabname]").forEach(function (item) {
            item.style.display = "none";
          });
          document.querySelector("[data-tabname=".concat(parent.getAttribute("data-tab-switch"), "]")).style.display = "block";
        }
      }
    }
  }, {
    key: "toggleDropDown",
    value: function toggleDropDown(e, target) {
      var btn = target.closest(".btns__add-textual");
      var parent = btn && btn.closest(".purchase__acquisition-part");
      var dropDown = parent && parent.querySelector(".purchase__dropdown");
      var allDropDowns = document.querySelectorAll(".purchase__dropdown");

      if (target.closest(".purchase__dropdown") === null) {
        allDropDowns && allDropDowns.forEach(function (item) {
          item.classList.remove("active");
        });
      }

      if (btn && parent && dropDown) {
        dropDown.classList.toggle("active");
      }
    }
  }, {
    key: "expandItems",
    value: function expandItems(e, target) {
      var hasAttr = target.hasAttribute("data-expand-tab"),
          btnWrap = target.closest(".btns__add-textual");

      if (btnWrap) {
        btnWrap.classList.toggle("collapsed");
      }

      if (hasAttr) {
        var expandSection = target.closest("div[data-expand-section]"),
            expandModule;
        if (expandSection) expandModule = expandSection.querySelector("div[data-expand-block]");
        expandModule && expandModule.classList.toggle("active");
      }
    }
  }]);

  return Events;
}();

new Events();
$(function () {
  // Кастомные селекты
  if ($("select").length) {
    $("select").niceSelect();
  } // Пагинация


  if ($(".paginate__content").length && $(".paginate__pagination").length) {
    var type = $(".paginate__content").attr("data-type-pagination"),
        data,
        func,
        pageSize;
    templatePurchase();

    switch (type) {
      case "purchase":
        data = dataPurchase;
        func = templatePurchase;
        pageSize = 6;
        break;

      case "suppliers":
        data = dataSuppliers;
        func = templateSuppliers;
        pageSize = 6;
        break;

      case "admin-suppliers":
        data = dataAdminSuppliers;
        func = templateAdminSuppliers;
        pageSize = 6;
        break;

      case "admin-users":
        data = dataAdminUser;
        func = templateAdminUsers;
        pageSize = 9;
        break;

      case "admin-purchase":
        data = dataAdminPurchase;
        func = templateAdminPurchase;
        pageSize = 8;
        break;

      default:
        data = [];

        func = function func() {};

    }

    $(".paginate__pagination").pagination({
      dataSource: data,
      prevText: "<div class=\"pagination__arrow\">\n\t\t\t\t\t\t\t\t\t<svg class=\"btns__add-textual-ico\">\n\t\t\t\t\t\t\t\t\t\t<use y=\"2\" xlink:href=\"/assets/images/sprite-icons/sprite/sprite-icons.svg#pagination-arrow-ico\"></use>\n\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\u043D\u0430\u0437\u0430\u0434\n\t\t\t\t\t\t\t\t</div>",
      nextText: "<div class=\"pagination__arrow\">\n\t\t\t\t\t\t\t\t\t\u0434\u0430\u043B\u0435\u0435\n\t\t\t\t\t\t\t\t\t<svg class=\"btns__add-textual-ico\" style=\"transform:rotate(180deg)\">\n\t\t\t\t\t\t\t\t\t\t<use y=\"1\" xlink:href=\"/assets/images/sprite-icons/sprite/sprite-icons.svg#pagination-arrow-ico\"></use>\n\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t</div>",
      pageSize: pageSize,
      callback: function callback(data, pagination) {
        var dataHtml = func(data);
        $(".paginate__content").html(dataHtml);
      }
    });
  }
});
//# sourceMappingURL=main.js.map
