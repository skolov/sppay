var dataSuppliers = [
    {
        name: "РИФЕЙ",
        purchases: "12",
        description:
            "Универсальные моющие средства, профессиональные моющие средства для уборки помещений, моющие средства для пищевых предприятий, средства для стирки, жидкое мыло, кондиционеры для белья",
        city: "Екатеринбург",
        address: "улица Белинского, 35",
        inn: "6679041197",
        site: "www.esintez.ru, bioprotex.ru",
    },
];

var dataPurchase = [
    {
        name: "Яркие фотошторы, тюль, КПБ",
        platform: "ogromno.com, Екатринбург",
        organizer: "Liliya333",
        paid: "0",
        limit: "6 700",
        topay: "6 700",
        issued: "700",
        debt: "200",
    },
];

var dataAdminUser = [
    {
        name: "Шухевич Вадим",
        phone: "+7 922 22 67 885",
        email: "maloyat284@svpmail.com",
        balance: "3 600",
    },
];

var dataAdminSuppliers = [
    {
        name: "РИФЕЙ",
        purchases: "14",
        description:
            "Универсальные моющие средства, профессиональные моющие средства для уборки помещений, моющие средства для пищевых предприятий, средства для стирки, жидкое мыло, кондиционеры для белья",
        city: "Екатеринбург",
        address: "улица Белинского, 35",
        inn: "6679041197",
        site: "www.esintez.ru, bioprotex.ru",
        counterparties: [
            {
                name: "рифей2",
                inn: "122334455667",
                kpp: "344556677",
                bik: "546789564",
                checkingAccount: "5647484940948474635323456",
                balance: "3 600 ",
            },
            {
                name: "рифей1",
                inn: "122334455667",
                kpp: "344556677",
                bik: "546789564",
                checkingAccount: "5647484940948474635323456",
                balance: "3 600 ",
            },
            {
                name: "рифей1",
                inn: "122334455667",
                kpp: "344556677",
                bik: "546789564",
                checkingAccount: "5647484940948474635323456",
                balance: "3 600 ",
            },
        ],
    },
];

var dataAdminPurchase = [
    {
        name: 'Торговая марка "СКИФ ПРО"',
        platform: "ogromno.com, zakupis-ekb.ru",
        organizer: "Пестова Елена",
        paid: "12 000",
        topay: "30 000",
        debt: "12 000",
    },
    {
        name: 'Торговая марка "СКИФ ПРО"',
        platform: "ogromno.com, zakupis-ekb.ru",
        organizer: "Пестова Елена",
        paid: "12 000",
        topay: "30 000",
        debt: "12 000",
    },
    {
        name: 'Торговая марка "СКИФ ПРО"',
        platform: "ogromno.com, zakupis-ekb.ru",
        organizer: "Пестова Елена",
        paid: "12 000",
        topay: "30 000",
        debt: "12 000",
    },
    {
        name: 'Торговая марка "СКИФ ПРО"',
        platform: "ogromno.com, zakupis-ekb.ru",
        organizer: "Пестова Елена",
        paid: "12 000",
        topay: "30 000",
        debt: "12 000",
    },
    {
        name: 'Торговая марка "СКИФ ПРО"',
        platform: "ogromno.com, zakupis-ekb.ru",
        organizer: "Пестова Елена",
        paid: "12 000",
        topay: "30 000",
        debt: "12 000",
    },
];

// Шаблоны для пагинаций

function templateAdminSuppliers(data) {
    var dataHtml = "";
    $.each(data, function (index, item) {
        dataHtml += `<div class="adminSuppliers__item">
        <div class="adminSuppliers__head">
            <div class="adminSuppliers__head-name">
                ${item.name}
                <p class="adminSuppliers__head-counter">
                    Закупок - ${item.purchases}
                </p>
                <button class="adminSuppliers__head-edit">
                    <svg
                        class="adminSuppliers__head-editico"
                    >
                        <use
                            xlink:href="/assets/images/sprite-icons/sprite/sprite-icons.svg#pencil-edit-ico"
                        ></use>
                    </svg>
                </button>
            </div>
            <div class="adminSuppliers__head-text">
                <p class="adminSuppliers__head-description">
                    ${item.description}
                </p>
                <div
                    class="adminSuppliers__head-requisites"
                >
                    <p>Город: ${item.city}</p>
                    <p>Адрес: ${item.address}</p>
                    <p>ИНН: ${item.inn}</p>
                    <p>
                        Сайт: ${item.site}
                    </p>
                </div>
            </div>
        </div>
        <div class="adminSuppliers__body">
            <div class="adminSuppliers__tablehead">
                <p class="counterparties">Контрагенты</p>
                <p class="inn">ИНН/КПП</p>
                <p class="bik">БИК</p>
                <p class="checking-account">
                    Расчетный счет
                </p>
                <p class="balance">Баланс</p>
            </div>
                ${item.counterparties
                    .map((item) => {
                        return `
                    <div class="adminSuppliers__tableitem">
                        <p class="counterparties">${item.name}</p>
                        <p class="inn">${item.inn}/${item.kpp}</p>
                        <p class="bik">${item.bik}</p>
                        <p class="checking-account">
                            ${item.checkingAccount}
                        </p>
                        <p class="balance">${item.balance} ₽</p>
                        
                        <div class="menu-dropdown-holder">
                            <div class="purchase__acquisition-part">
                                <button class="btns__add-textual adminSuppliers__item-more">
                                    <svg class="btns__add-textual-ico">
                                        <use y="4" xlink:href="/assets/images/sprite-icons/sprite/sprite-icons.svg#more-btn-ico"></use>
                                    </svg>
                                </button>
                                <div class="purchase__dropdown">
                                    <ul class="purchase__dropdown-list">
                                        <li class="purchase__dropdown-item">
                                            <a class="purchase__dropdown-link" href="">
                                                <svg class="purchase__dropdown-ico">
                                                    <use xlink:href="/assets/images/sprite-icons/sprite/sprite-icons.svg#dropdown-payback-ico"></use>
                                                </svg>
                                                Оплатить контрагенту
                                            </a>
                                        </li>
                                        <li class="purchase__dropdown-item" >
                                            <a class="purchase__dropdown-link" href="">
                                                <svg class="purchase__dropdown-ico">
                                                    <use x="-2" xlink:href="/assets/images/sprite-icons/sprite/sprite-icons.svg#dropdown-return-ico"
                                                    ></use>
                                                </svg>
                                                Возврат денег от
                                                контрагента
                                            </a>
                                        </li>
                                        <li class="purchase__dropdown-item">
                                            <a class="purchase__dropdown-link" href="">
                                                <svg class="purchase__dropdown-ico">
                                                    <use x="-2"
                                                        xlink:href="/assets/images/sprite-icons/sprite/sprite-icons.svg#dropdown-away-ico"
                                                    ></use>
                                                </svg>
                                                Поступление товара
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>`;
                    })
                    .join("")}
            
        </div>
    </div>`;
    });
    return dataHtml;
}

function templatePurchase(data) {
    var dataHtml = "";
    $.each(data, function (index, item) {
        dataHtml += `
            <div class="purchase__acquisition">
                <p class="purchase__acquisition-name">${item.name}</p>
                <div class="purchase__acquisition-infoboard">
                    <div class="purchase__acquisition-part width-name">
                        <p class="purchase__acquisition-text">
                            Площадка: ${item.platform}
                        </p>
                        <p class="purchase__acquisition-text">
                            Организатор: ${item.organizer}
                        </p>
                        <button class="purchase__acquisition-hover-btn">Подтвердить участие</button>
                    </div>
                    <div class="purchase__acquisition-part flex width-purse">
                        <div class="purchase__acquisition-purse">
                            <p class="purchase__acquisition-text align-right">Оплачено</p>
                            <p class="purchase__acquisition-text align-right">К оплате</p>
                        </div>
                        <div class="purchase__acquisition-purse">
                            <p class="purchase__acquisition-text black">${item.paid} ₽ / ${item.limit} ₽</p>
                            <p class="purchase__acquisition-text red">${item.topay} ₽</p>
                        </div>
                    </div>
                    <div class="purchase__acquisition-part flex width-purse">
                        <div class="purchase__acquisition-purse">
                            <p class="purchase__acquisition-text align-right">Выдано</p>
                            <p class="purchase__acquisition-text align-right">Долг организатора</p>
                        </div>
                        <div class="purchase__acquisition-purse">
                            <p class="purchase__acquisition-text black">${item.issued} ₽</p>
                            <p class="purchase__acquisition-text black">${item.debt} ₽</p>
                        </div>
                    </div>
                    <div class="purchase__acquisition-part width-more">
                        <button class="btns__add-textual">
                            <svg class="btns__add-textual-ico">
                                <use xlink:href="/assets/images/sprite-icons/sprite/sprite-icons.svg#more-btn-ico"></use>
                            </svg>
                        </button>
                        <div class="purchase__dropdown">
                            <ul class="purchase__dropdown-list">
                                <li class="purchase__dropdown-item">
                                    <a class="purchase__dropdown-link" href="">
                                        <svg class="purchase__dropdown-ico">
                                            <use xlink:href="/assets/images/sprite-icons/sprite/sprite-icons.svg#dropdown-payback-ico"></use>
                                        </svg>
                                        Оплатить
                                    </a>
                                </li>
                                <li class="purchase__dropdown-item">
                                    <a class="purchase__dropdown-link" href="">
                                        <svg class="purchase__dropdown-ico">
                                            <use x="-2" xlink:href="/assets/images/sprite-icons/sprite/sprite-icons.svg#dropdown-away-ico"></use>
                                        </svg>
                                        подтвердить получение
                                    </a>
                                </li>
                                <li class="purchase__dropdown-item">
                                    <a class="purchase__dropdown-link" href="">
                                        <svg class="purchase__dropdown-ico">
                                            <use x="1" xlink:href="/assets/images/sprite-icons/sprite/sprite-icons.svg#dropdown-delete-ico"></use>
                                        </svg>
                                        удалить закупку
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`;
    });

    return dataHtml;
}

function templateSuppliers(data) {
    var dataHtml = "";
    $.each(data, function (index, item) {
        dataHtml += `
            <div class="suppliers__item">

                <div class="suppliers__item-header">
                    ${item.name}
                    <div class="suppliers__item-purchases">
                        Закупок -${item.purchases}
                    </div>
                </div>
                
                <div class="suppliers__item-body">
                
                    <div class="suppliers__item-textholder main-width">
                        <p class="suppliers__item-text">
                            ${item.description}
                        </p>
                    </div>
                
                    <div class="suppliers__item-textholder  additional-width">
                        <p class="suppliers__item-text">Город: ${item.city}</p>
                        <p class="suppliers__item-text">Адрес: ${item.address}</p>
                        <p class="suppliers__item-text">ИНН: ${item.inn}</p>
                        <p class="suppliers__item-text">Сайт: ${item.site}</p>
                    </div>
                
                    <div class="suppliers__item-textholder">
                        <button class="btns__blue suppliers__item-btn">Создать закупку</button>
                    </div>
                
                </div>

            </div>`;
    });

    return dataHtml;
}

function templateAdminUsers(data) {
    var dataHtml = "";
    $.each(data, function (index, item) {
        dataHtml += `
            <div class="admin__users-tableitem">
                <p class="number">${index + 1}</p>
                <p class="users">${item.name}</p>
                <p class="phone">${item.phone}</p>
                <p class="email">${item.email}</p>
                <p class="balance">${item.balance} ₽</p>
                <div class="auth"><button><img src="/assets/images/icons/exit-ico.svg" alt=""></button></div>
            </div>`;
    });

    return dataHtml;
}

function templateAdminPurchase(data) {
    var dataHtml = "";
    $.each(data, function (index, item) {
        let paid = parseInt(String(item.paid).replace(/ /g, "")),
            topay = parseInt(String(item.topay).replace(/ /g, ""));
        dataHtml += `
        <div class="purchase__company">
            <div class="purchase__company-part">
                <p class="purchase__company-name">
                    ${item.name}
                </p>
                <p class="purchase__company-trading">
                    Площадки: ${item.platform}
                </p>
                <p class="purchase__company-trading">
                    Организатор: ${item.organizer}
                </p>
            </div>

            <div class="purchase__company-part flex">
                <div class="purchase__company-progress ${
                    paid / topay >= 1 && "completed"
                }">
                    <span style="width: ${(paid / topay) * 100}%;"></span>
                </div>

                <div class="purchase__company-purse">
                    <p class="purchase__company-price">
                        ${item.paid} ₽ / ${item.topay} ₽
                    </p>
                    <p class="purchase__company-text">
                        Собранная сумма
                    </p>
                </div>

                <div class="purchase__company-purse">
                    <p class="purchase__company-price">
                        ${item.debt} ₽
                    </p>
                    <p class="purchase__company-text">
                        Долг SPPAY
                    </p>
                </div>

                <button
                    class="btns__add-textual purchase__company-edit"
                >
                    <svg class="btns__add-textual-ico">
                        <use
                            xlink:href="/assets/images/sprite-icons/sprite/sprite-icons.svg#pencil-edit-ico"
                        ></use>
                    </svg>
                </button>
            </div>
        </div>`;
    });

    return dataHtml;
}

class Events {
    constructor() {
        this.init();
    }

    init() {
        this.events();
    }

    events() {
        const body = document.querySelector("body");

        body.onclick = (e) => {
            const target = e.target;

            this.resendCode(e, target);
            this.switchTabs(e, target);
            this.toggleDropDown(e, target);
            this.expandItems(e, target);
            this.modalWindowOpening({ e, target });
        };
    }

    modalWindowOpening(data) {
        const consultBtn = data.target.hasAttribute("data-open-modal");
        const closeBtn = data.target.hasAttribute("data-close-modal");

        let modalId, modal;

        if (consultBtn) {
            modalId = data.target.getAttribute("data-open-modal");
        }

        if (modalId && consultBtn) {
            modal = document.querySelector(
                `.modal__window[data-modal='${modalId}']`
            );
        }

        if (modal && consultBtn) {
            data.e.preventDefault();
            modal.classList.toggle("active");
        }

        if (closeBtn) {
            document
                .querySelector(".modal__window.active")
                .classList.toggle("active");
        }
    }

    resendCode(e, target) {
        const targetElement = target.hasAttribute("data-send-code");
        const counterElement = document.querySelector("[data-send-counter]");
        const btnElement = target;

        if (targetElement && counterElement) {
            e.preventDefault();
            let timer,
                second = 60;

            btnElement.hidden = true;
            counterElement.hidden = false;
            countdown();

            function countdown() {
                second--;
                counterElement.innerHTML = `Повторная отправка кода через ${second}с`;

                if (second == 0) {
                    clearTimeout(timer);
                    btnElement.hidden = false;
                    // sendCodeFunction()
                    counterElement.hidden = true;
                } else {
                    timer = setTimeout(countdown, 1000);
                }
            }
        }
    }

    switchTabs(e, target) {
        const parent = target.closest("[data-tab-parent]");
        const switchers = document.querySelectorAll("[data-tab-switch]");

        if (parent && switchers) {
            e.preventDefault();
            switchers.forEach((item) => {
                item.classList.remove("active");
            });

            parent.classList.toggle("active");

            const attrTab = parent.hasAttribute("data-tab-switch");

            if (attrTab) {
                document
                    .querySelectorAll("div[data-tabname]")
                    .forEach((item) => {
                        item.style.display = "none";
                    });
                document.querySelector(
                    `[data-tabname=${parent.getAttribute("data-tab-switch")}]`
                ).style.display = "block";
            }
        }
    }

    toggleDropDown(e, target) {
        const btn = target.closest(".btns__add-textual");
        const parent = btn && btn.closest(".purchase__acquisition-part");
        const dropDown = parent && parent.querySelector(".purchase__dropdown");

        const allDropDowns = document.querySelectorAll(".purchase__dropdown");

        if (target.closest(".purchase__dropdown") === null) {
            allDropDowns &&
                allDropDowns.forEach((item) => {
                    item.classList.remove("active");
                });
        }

        if (btn && parent && dropDown) {
            dropDown.classList.toggle("active");
        }
    }

    expandItems(e, target) {
        const hasAttr = target.hasAttribute("data-expand-tab"),
            btnWrap = target.closest(".btns__add-textual");

        if (btnWrap) {
            btnWrap.classList.toggle("collapsed");
        }

        if (hasAttr) {
            let expandSection = target.closest("div[data-expand-section]"),
                expandModule;

            if (expandSection)
                expandModule = expandSection.querySelector(
                    "div[data-expand-block]"
                );

            expandModule && expandModule.classList.toggle("active");
        }
    }
}

new Events();

$(function () {
    // Кастомные селекты

    if ($("select").length) {
        $("select").niceSelect();
    }

    // Пагинация

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
                func = function () {};
        }

        $(".paginate__pagination").pagination({
            dataSource: data,
            prevText: `<div class="pagination__arrow">
									<svg class="btns__add-textual-ico">
										<use y="2" xlink:href="/assets/images/sprite-icons/sprite/sprite-icons.svg#pagination-arrow-ico"></use>
									</svg>
									назад
								</div>`,
            nextText: `<div class="pagination__arrow">
									далее
									<svg class="btns__add-textual-ico" style="transform:rotate(180deg)">
										<use y="1" xlink:href="/assets/images/sprite-icons/sprite/sprite-icons.svg#pagination-arrow-ico"></use>
									</svg>
								</div>`,
            pageSize: pageSize,
            callback: function (data, pagination) {
                var dataHtml = func(data);
                $(".paginate__content").html(dataHtml);
            },
        });
    }
});
