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
            <input class="goods-catalog__checkbox-item purpose" type="checkbox" id="flat" data-id="flat">
            <label class="goods-catalog__checkbox-label" for="flat">Квартира</label>
          </div>
          <div class="goods-catalog__checkbox">
            <input class="goods-catalog__checkbox-item purpose" type="checkbox" id="cottage" data-id="cottage">
            <label class="goods-catalog__checkbox-label" for="cottage">Коттедж</label>
          </div>
          <div class="goods-catalog__checkbox">
            <input class="goods-catalog__checkbox-item purpose" type="checkbox" id="office" data-id="office">
            <label class="goods-catalog__checkbox-label" for="office">Офис</label>
          </div>
          <div class="goods-catalog__checkbox">
            <input class="goods-catalog__checkbox-item purpose" type="checkbox" id="house" data-id="house">
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
            <input class="goods-catalog__checkbox-item outside" type="checkbox" id="laminate" data-id="Ламинат">
            <label class="goods-catalog__checkbox-label" for="laminate">Ламинат</label>
          </div>
          <div class="goods-catalog__checkbox">
            <input class="goods-catalog__checkbox-item outside" type="checkbox" id="mdf" data-id="МДФ">
            <label class="goods-catalog__checkbox-label" for="mdf">МДФ</label>
          </div>
          <div class="goods-catalog__checkbox">
            <input class="goods-catalog__checkbox-item outside" type="checkbox" id="dust" data-id="Порошковое напыление">
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
            <input class="goods-catalog__checkbox-item inside" type="checkbox" id="vinil" data-id="Винилискожа">
            <label class="goods-catalog__checkbox-label" for="vinil">Винилискожа</label>
          </div>
          <div class="goods-catalog__checkbox">
            <input class="goods-catalog__checkbox-item inside" type="checkbox" id="lam" data-id="Ламинат">
            <label class="goods-catalog__checkbox-label" for="lam">Ламинат</label>
          </div>
          <div class="goods-catalog__checkbox">
            <input class="goods-catalog__checkbox-item inside" type="checkbox" id="mdff" data-id="МДФ">
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
      </div>
    </div>
  </div>
 `

  return html
}