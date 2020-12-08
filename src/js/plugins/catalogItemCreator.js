export function catalogItemCtreator(options) {
  const html = `
  <div class="goods-catalog__item">
    <img class="goods-catalog__img" src="${options.image}" alt="img">
    <h3 class="goods-catalog__item-title" data-id = "${options.id}">
      ${options.title}
    </h3>
    <span class="goods-catalog__price">
      от ${options.price.toLocaleString()} руб.
    </span>
    <p class="goods-catalog__description">
      ${options.description}
    </p>
  </div>
  `
  return html;
}