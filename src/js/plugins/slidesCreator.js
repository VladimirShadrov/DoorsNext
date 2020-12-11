export function createSlide(options) {
  const slide = `
  <div class="hits__item">
    <div class="hits__item-img">
      <img class="hits__item-image" src="${options.image}" alt="Door" >
    </div>
    <div class="hits__description-title">
      ${options.title}
    </div>
    <div class="hits__description-price">
      от ${options.price.toLocaleString()} руб.
    </div>
    <div class="hits__description-material">
      ${options.description}
    </div>
    <button class="hits__description-button">
      подробнее о модели
    </button>
  </div>
  `
  return slide;
} 