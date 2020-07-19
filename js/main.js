class Events {
	
  constructor() {
    this.init();
  }

  init() {
		this.events()
  }

  events() {
    const body = document.querySelector("body");

		body.onclick = e => {
			const target = e.target;

			this.resendCode(e, target)
		}


  }

	resendCode(e, target) {
		e.preventDefault();
		const targetElement = target.hasAttribute("data-send-code");
		const counterElement = document.querySelector("[data-send-counter]");
		const btnElement = target;

		if(targetElement && counterElement) {
			let timer, 
					second = 60;

			btnElement.hidden = true;
			counterElement.hidden = false;
			countdown();

			function countdown(){
				second--;
				counterElement.innerHTML = `Повторная отправка кода через ${second}с`;

				if (second == 0){
					clearTimeout(timer);
					btnElement.hidden = false;
					// sendCodeFunction()
					counterElement.hidden = true;
				}	else {
					timer = setTimeout(countdown, 1000);
				}
			}
		}
	}

}

new Events;










$(function(){

    // Кастомные селекты

	if($('select').length) {
		$('select').niceSelect();
	}


    // Пагинация на странице Закупки

    var dataPurchase = [{
        name: "Яркие фотошторы, тюль, КПБ",
		platform: "ogromno.com, Екатринбург",
		organizer: "Liliya333",
		paid: "0",
		limit: "6 700",
		topay: "6 700",
		issued: "700",
		debt: "200"
    }]

    var dataSuppliers = [{
        name: "Яркие фотошторы, тюль, КПБ",
        platform: "ogromno.com, Екатринбург",
        organizer: "Liliya333",
        paid: "0",
        limit: "6 700",
        topay: "6 700",
        issued: "700",
        debt: "200"
    }]

	if($('.paginate__content').length && $('.paginate__pagination').length) {

        var type = $('.paginate__content').attr("data-type-pagination");

    
		$('.paginate__pagination').pagination({
			dataSource: type === 'purchase' ? dataPurchase : dataSuppliers,
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
			pageSize: 6,
			callback: function(data, pagination) {
					var dataHtml = type  === 'purchase' ? templatePurchase(data) : templateSuppliers(data);
					$('.paginate__content').html(dataHtml);
			}
		})
    }


});








function templatePurchase(data) {
    var dataHtml = '';
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

    return dataHtml
}


function templateSuppliers(data) {
    var dataHtml = '';
    $.each(data, function (index, item) {
        dataHtml += `
            <div class="suppliers__item">

                <div class="suppliers__item-header">
                    РИФЕЙ
                    <div class="suppliers__item-purchases">
                        Закупок -12
                    </div>
                </div>
                
                <div class="suppliers__item-body">
                
                    <div class="suppliers__item-textholder main-width">
                        <p class="suppliers__item-text">
                            Универсальные моющие средства, профессиональные моющие средства для уборки помещений, моющие средства для пищевых предприятий, средства для стирки, жидкое мыло, кондиционеры для белья
                        </p>
                    </div>
                
                    <div class="suppliers__item-textholder  additional-width">
                        <p class="suppliers__item-text">Город: Екатеринбург</p>
                        <p class="suppliers__item-text">Адрес: улица Белинского, 35</p>
                        <p class="suppliers__item-text">ИНН: 6679041197</p>
                        <p class="suppliers__item-text">Сайт: www.esintez.ru, bioprotex.ru</p>
                    </div>
                
                    <div class="suppliers__item-textholder">
                        <button class="btns__blue suppliers__item-btn">Создать закупку</button>
                    </div>
                
                </div>

            </div>`;
    });

    return dataHtml
}