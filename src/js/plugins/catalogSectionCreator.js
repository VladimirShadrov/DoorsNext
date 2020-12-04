export function catalogSectionCreator() {
  const html = `
  <h1 class="goods-catalog__title">
  каталог металлических дверей
  </h1>
  <div class="goods-catalog__wrapper">
    <div class="goods-catalog__filter">
      <div class="goods-catalog__filter-item">
        <span class="goods-catalog__filter-title active">
          Назначение
        </span>
        <div class="goods-catalog__form">
          <div class="goods-catalog__checkbox">
            <input class="goods-catalog__checkbox-item" type="checkbox" id="flat" data-id="flat">
            <label class="goods-catalog__checkbox-label" for="flat">Квартира</label>
          </div>
          <div class="goods-catalog__checkbox">
            <input class="goods-catalog__checkbox-item" type="checkbox" id="cottage" data-id="cottage">
            <label class="goods-catalog__checkbox-label" for="cottage">Коттедж</label>
          </div>
          <div class="goods-catalog__checkbox">
            <input class="goods-catalog__checkbox-item" type="checkbox" id="office" data-id="office">
            <label class="goods-catalog__checkbox-label" for="office">Офис</label>
          </div>
          <div class="goods-catalog__checkbox">
            <input class="goods-catalog__checkbox-item" type="checkbox" id="house" data-id="house">
            <label class="goods-catalog__checkbox-label" for="house">Частный дом</label>
          </div>
        </div>
      </div>
      <div class="goods-catalog__filter-item">
        <span class="goods-catalog__filter-title active">
          Внешняя отделка
        </span>
        <div class="goods-catalog__form">
          <div class="goods-catalog__checkbox">
            <input class="goods-catalog__checkbox-item" type="checkbox" id="laminate" data-id="laminate">
            <label class="goods-catalog__checkbox-label" for="laminate">Ламинат</label>
          </div>
          <div class="goods-catalog__checkbox">
            <input class="goods-catalog__checkbox-item" type="checkbox" id="mdf" data-id="mdf">
            <label class="goods-catalog__checkbox-label" for="mdf">МДФ</label>
          </div>
          <div class="goods-catalog__checkbox">
            <input class="goods-catalog__checkbox-item" type="checkbox" id="dust" data-id="dust">
            <label class="goods-catalog__checkbox-label" for="dust">Порошковое напыление</label>
          </div>
        </div>
      </div>
      <div class="goods-catalog__filter-item">
        <span class="goods-catalog__filter-title active">
          Внутренняя отделка
        </span>
        <div class="goods-catalog__form">
          <div class="goods-catalog__checkbox">
            <input class="goods-catalog__checkbox-item" type="checkbox" id="vinil" data-id="vinil">
            <label class="goods-catalog__checkbox-label" for="vinil">Винилискожа</label>
          </div>
          <div class="goods-catalog__checkbox">
            <input class="goods-catalog__checkbox-item" type="checkbox" id="lam" data-id="laminate">
            <label class="goods-catalog__checkbox-label" for="lam">Ламинат</label>
          </div>
          <div class="goods-catalog__checkbox">
            <input class="goods-catalog__checkbox-item" type="checkbox" id="mdff" data-id="mdf">
            <label class="goods-catalog__checkbox-label" for="mdff">МДФ</label>
          </div>
        </div>
      </div>
      <div class="goods-catalog__buttons">
        <button class="goods-catalog__choose">Показать</button>
        <button class="goods-catalog__reset">Сбросить</button>
      </div>
    </div>
    <div class="goods-catalog__catalog">
      <div class="goods-catalog__catalog-container">
        <div class="goods-catalog__item">
          <img class="goods-catalog__img" src="./images/doors/dust-laminat1.jpg" alt="img">
          <h3 class="goods-catalog__item-title">
            Порошок - Ламинат №1
          </h3>
          <span class="goods-catalog__price">
            от 7 500 руб.
          </span>
          <p class="goods-catalog__description">
            Порошковое напыление + Ламинат
          </p>
        </div>
      </div>
    </div>
  </div>
 `

  return html
}