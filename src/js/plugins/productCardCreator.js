export function productCardCreator(product) {
  const html = `
  <h1 class="product-card__title">
  ${product.productCardTitle}
</h1>
<div class="product-card__detail-wrapper">
  <div class="product-card__left-bar">
    <div class="product-card__product-img">
      <img class="product-card__img" src="${product.image}" alt="img">
    </div>
    <div class="product-card__advantages-wrapper">
      <div class="product-card__advantages-item">
        <div class="product-card__advantages-img">
          <img class="product-card__image" src="./images/product-card/watch.png" alt="img">
        </div>
        <p class="product-card__advantages-text">
          Изготовление дверей от 2-х дней
        </p>
      </div>
      <div class="product-card__advantages-item">
        <div class="product-card__advantages-img">
          <img class="product-card__image" src="./images/product-card/key.png" alt="img">
        </div>
        <p class="product-card__advantages-text">
          Бесплатная доставка и монтаж
        </p>
      </div>
      <div class="product-card__advantages-item">
        <div class="product-card__advantages-img">
          <img class="product-card__image" src="./images/product-card/finger.png" alt="img">
        </div>
        <p class="product-card__advantages-text">
          Гарантия на дверь до 10 лет
        </p>
      </div>
    </div>
  </div>
  <div class="product-card__right-bar">
    <div class="product-card__price-container">
      <div class="product-card__price-item">
        <p class="product-card__price-title">
          Цена:
          <span class="product-card__price">
            ${product.price.toLocaleString()} руб.
          </span>
        </p>
      </div>
      <div class="product-card__price-item">
        <button class="product-card__button" data-id="order">
          Заказать дверь
        </button>
        <a class="product-card__link-btn" href="#" data-id="catalog">
          Вернуться в каталог
        </a>
      </div>
    </div>
    <div class="product-card__locks-container">
      <h3 class="product-card__lock-title">
        Запирающая система (2 класс взломостойкости):
      </h3>
      <div class="product-card__lock-wrapper">
        <div class="product-card__lock-item">
          <div class="product-card__lock-img">
            <img class="product-card__lock-image" src="./images/locks/lock1.jpg" alt="img">
          </div>
          <div class="product-card__lock-description">
            <p class="product-card__lock-item-title">
              Верхний замок:
            </p>
            <p class="product-card__lock-name">
              Гардиан
            </p>
            <p class="product-card__lock-detail">
              Тип замка:
              <span class="product-card__lock-span">Сувальдный</span>
            </p>
            <p class="product-card__lock-detail">
              Ригелей:
              <span class="product-card__lock-span">3</span>
            </p>
            <p class="product-card__lock-detail">
              Страна:
              <span class="product-card__lock-span">Россия</span>
            </p>
          </div>
        </div>
        <div class="product-card__lock-item">
          <div class="product-card__lock-img">
            <img class="product-card__lock-image" src="./images/locks/lock2.jpg" alt="img">
          </div>
          <div class="product-card__lock-description">
            <p class="product-card__lock-item-title">
              Нижний замок:
            </p>
            <p class="product-card__lock-name">
              Бордер
            </p>
            <p class="product-card__lock-detail">
              Тип замка:
              <span class="product-card__lock-span">Цидиндровый</span>
            </p>
            <p class="product-card__lock-detail">
              Ригелей:
              <span class="product-card__lock-span">3</span>
            </p>
            <p class="product-card__lock-detail">
              Страна:
              <span class="product-card__lock-span">Россия</span>
            </p>
          </div>
        </div>
      </div>
      <div class="product-card__property-wrapper">
        <div class="product-card__property-item">
          <table class="product-card__property-table">
            <tr class="product-card__table-row">
              <td class="product-card__table-cell">
                <p class="product-card__bold-text">
                  Отделка снаружи:
                  <span class="product-card__normal-text">
                    ${product.outside}
                  </span>
                </p>
              </td>
            </tr>
            <tr class="product-card__table-row">
              <td class="product-card__table-cell">
                <p class="product-card__bold-text">
                  Отделка внутри:
                  <span class="product-card__normal-text">
                    ${product.inside}
                  </span>
                </p>
              </td>
            </tr>
            <tr class="product-card__table-row">
              <td class="product-card__table-cell">
                <p class="product-card__bold-text">
                  Толщина стали:
                  <span class="product-card__normal-text">
                    2 мм.
                  </span>
                </p>
              </td>
            </tr>
            <tr class="product-card__table-row">
              <td class="product-card__table-cell">
                <p class="product-card__bold-text">
                  Размер двери:
                  <span class="product-card__normal-text">
                    Любой
                  </span>
                </p>
              </td>
            </tr>
            <tr class="product-card__table-row">
              <td class="product-card__table-cell">
                <p class="product-card__bold-text">
                  Открывания:
                  <span class="product-card__normal-text">
                    Левое/правое
                  </span>
                </p>
              </td>
            </tr>
          </table>
          <a href="#" class="product-card__link" data-id="property">
            Смотреть все характеристики
          </a>
        </div>
        <div class="product-card__property-item">
          <div class="product-card__colors">
            <h4 class="product-card__colors-title">
              Цвета внешней отделки:
            </h4>
            <div class="product-card__colors-container">
              <div class="product-card__colors-item">
                <img class="product-card__item-bg-color" src="./images/colors/color1.jpg" alt="img">
              </div>
              <div class="product-card__colors-item">
                <img class="product-card__item-bg-color" src="./images/colors/color2.jpg" alt="img">
              </div>
              <div class="product-card__colors-item">
                <img class="product-card__item-bg-color" src="./images/colors/color3.jpg" alt="img">
              </div>
              <div class="product-card__colors-item">
                <img class="product-card__item-bg-color" src="./images/colors/color4.jpg" alt="img">
              </div>
              <div class="product-card__colors-item">
                <img class="product-card__item-bg-color" src="./images/colors/color5.jpg" alt="img">
              </div>
            </div>
          </div>
          <div class="product-card__colors">
            <h4 class="product-card__colors-title">
              Цвета внутренней отделки:
            </h4>
            <div class="product-card__colors-container">
              <div class="product-card__colors-item">
                <img class="product-card__item-bg-color" src="./images/colors/color6.jpg" alt="img">
              </div>
              <div class="product-card__colors-item">
                <img class="product-card__item-bg-color" src="./images/colors/color7.jpg" alt="img">
              </div>
              <div class="product-card__colors-item">
                <img class="product-card__item-bg-color" src="./images/colors/color8.jpg" alt="img">
              </div>
              <div class="product-card__colors-item">
                <img class="product-card__item-bg-color" src="./images/colors/color9.jpg" alt="img">
              </div>
              <div class="product-card__colors-item">
                <img class="product-card__item-bg-color" src="./images/colors/color10.jpg" alt="img">
              </div>
            </div>
          </div>
          <a href="#" class="product-card__link" data-id="colors">
            Смотреть все цвета отделки
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="product-card__navigation-container">
  <div class="product-card__navigation-item active" data-id="property">
    <p class="product-card__navigation-title" data-id="property">
      характеристики
    </p>
  </div>
  <div class="product-card__navigation-item" data-id="colors">
    <p class="product-card__navigation-title" data-id="colors">
      варианты отделки
    </p>
  </div>
  <div class="product-card__navigation-item" data-id="service">
    <p class="product-card__navigation-title" data-id="service">
      дополнительные услуги
    </p>
  </div>
</div>
<div class="product-card__tab " data-id="property">
  <table class="product-card__tab-table">
    <tr class="product-card__tab-table-row">
      <th class="product-card__tab-table-title">
        Отделка двери
      </th>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Отделка снаружи:
      </td>
      <td class="product-card__tab-table-cell">
        ${product.outside}
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Отделка внутри:
      </td>
      <td class="product-card__tab-table-cell">
        ${product.inside}
      </td>
    </tr>
  </table>
  <table class="product-card__tab-table">
    <tr class="product-card__tab-table-row">
      <th class="product-card__tab-table-title">
        Стандартная конструкция
      </th>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Размер двери
      </td>
      <td class="product-card__tab-table-cell">
        Изготавливается любой (цена при размере 2000x800 мм.)
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Коробка (каркас двери)
      </td>
      <td class="product-card__tab-table-cell">
        Профильная труба 50 х 25 мм.
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Полотно
      </td>
      <td class="product-card__tab-table-cell">
        Профильная труба 40 х 25 мм.
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Лист металла
      </td>
      <td class="product-card__tab-table-cell">
        Холоднокатанная сталь толщиной 2 мм.
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Ребра жёсткости
      </td>
      <td class="product-card__tab-table-cell">
        Профильные трубы 40х25мм (2 шт.)
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Контуры уплотнения
      </td>
      <td class="product-card__tab-table-cell">
        2 контура
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Угол открывания двери
      </td>
      <td class="product-card__tab-table-cell">
        180 градусов
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Направление открывания
      </td>
      <td class="product-card__tab-table-cell">
        Левое или правое (на выбор)
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Тип открывания
      </td>
      <td class="product-card__tab-table-cell">
        Наружный или внутренний
      </td>
    </tr>
  </table>
  <table class="product-card__tab-table">
    <tr class="product-card__tab-table-row">
      <th class="product-card__tab-table-title">
        Комплектация двери
      </th>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Верхний замок:
      </td>
      <td class="product-card__tab-table-cell">
        «Гардиан»
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Нижний замок:
      </td>
      <td class="product-card__tab-table-cell">
        «Бордер»
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Блокираторы
      </td>
      <td class="product-card__tab-table-cell">
        Противосъёмные диаметром 10 мм.
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Петли
      </td>
      <td class="product-card__tab-table-cell">
        2шт. диаметром 20 мм.
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Уплотнение
      </td>
      <td class="product-card__tab-table-cell">
        резиновый уплотнитель E+D
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Шумотеплоизоляция
      </td>
      <td class="product-card__tab-table-cell">
        нет (доп. опция - плита минваты или пенопласт)
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Глазок
      </td>
      <td class="product-card__tab-table-cell">
        180 градусов
      </td>
    </tr>
  </table>
</div>
<div class="product-card__tab hide" data-id="colors">
  <div class="product-card__tab-color-item">
    <h3 class="product-card__tab-color-title">
      Внешняя отделка:
    </h3>
    <div class="product-card__tab-color-container">
      <div class="product-card__color-item">
        <img class="product-card__tab-color-color" src="./images/colors/color1.jpg" alt="img">
      </div>
      <div class="product-card__color-item">
        <img class="product-card__tab-color-color" src="./images/colors/color2.jpg" alt="img">
      </div>
      <div class="product-card__color-item">
        <img class="product-card__tab-color-color" src="./images/colors/color3.jpg" alt="img">
      </div>
      <div class="product-card__color-item">
        <img class="product-card__tab-color-color" src="./images/colors/color4.jpg" alt="img">
      </div>
      <div class="product-card__color-item">
        <img class="product-card__tab-color-color" src="./images/colors/color5.jpg" alt="img">
      </div>
      <div class="product-card__color-item">
        <img class="product-card__tab-color-color" src="./images/colors/color6.jpg" alt="img">
      </div>
      <div class="product-card__color-item">
        <img class="product-card__tab-color-color" src="./images/colors/color7.jpg" alt="img">
      </div>
      <div class="product-card__color-item">
        <img class="product-card__tab-color-color" src="./images/colors/color8.jpg" alt="img">
      </div>
      <div class="product-card__color-item">
        <img class="product-card__tab-color-color" src="./images/colors/color9.jpg" alt="img">
      </div>
      <div class="product-card__color-item">
        <img class="product-card__tab-color-color" src="./images/colors/color10.jpg" alt="img">
      </div>
    </div>
  </div>
  <div class="product-card__tab-color-item">
    <h3 class="product-card__tab-color-title">
      Внутренняя отделка:
    </h3>
    <div class="product-card__tab-color-container">
      <div class="product-card__color-item">
        <img class="product-card__tab-color-color" src="./images/colors/color1.jpg" alt="img">
      </div>
      <div class="product-card__color-item">
        <img class="product-card__tab-color-color" src="./images/colors/color2.jpg" alt="img">
      </div>
      <div class="product-card__color-item">
        <img class="product-card__tab-color-color" src="./images/colors/color3.jpg" alt="img">
      </div>
      <div class="product-card__color-item">
        <img class="product-card__tab-color-color" src="./images/colors/color4.jpg" alt="img">
      </div>
      <div class="product-card__color-item">
        <img class="product-card__tab-color-color" src="./images/colors/color5.jpg" alt="img">
      </div>
      <div class="product-card__color-item">
        <img class="product-card__tab-color-color" src="./images/colors/color6.jpg" alt="img">
      </div>
      <div class="product-card__color-item">
        <img class="product-card__tab-color-color" src="./images/colors/color7.jpg" alt="img">
      </div>
      <div class="product-card__color-item">
        <img class="product-card__tab-color-color" src="./images/colors/color8.jpg" alt="img">
      </div>
      <div class="product-card__color-item">
        <img class="product-card__tab-color-color" src="./images/colors/color9.jpg" alt="img">
      </div>
      <div class="product-card__color-item">
        <img class="product-card__tab-color-color" src="./images/colors/color10.jpg" alt="img">
      </div>
    </div>
  </div>
</div>
<div class="product-card__tab hide" data-id="service">
  <table class="product-card__tab-table">
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Установка двери:
      </td>
      <td class="product-card__tab-table-cell">
        БЕСПЛАТНО
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Демонтаж деревянной двери:
      </td>
      <td class="product-card__tab-table-cell">
        БЕСПЛАТНО
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Доставка в пределах 20км от МКАД
      </td>
      <td class="product-card__tab-table-cell">
        БЕСПЛАТНО
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Демонтаж старой металлической двери:
      </td>
      <td class="product-card__tab-table-cell">
        от 500 руб.
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Подъём на этаж (без грузового лифта):
      </td>
      <td class="product-card__tab-table-cell">
        от 100 руб.
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Заделка швов монтажной пеной:
      </td>
      <td class="product-card__tab-table-cell">
        от 200 руб.
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Доставка за МКАД:
      </td>
      <td class="product-card__tab-table-cell">
        15руб./1км.
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Расширение дверного проёма:
      </td>
      <td class="product-card__tab-table-cell">
        от 2500 руб.
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Заделка откосов:
      </td>
      <td class="product-card__tab-table-cell">
        от 4500 руб.
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Вывоз мусора:
      </td>
      <td class="product-card__tab-table-cell">
        по договорённости с мастером
      </td>
    </tr>
    <tr class="product-card__tab-table-row">
      <td class="product-card__tab-table-cell">
        Глазок
      </td>
      <td class="product-card__tab-table-cell">
        по договорённости с мастером
      </td>
    </tr>
  </table>
</div>
`

  return html;
};