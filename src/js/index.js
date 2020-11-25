import '../styles/styles.scss';
import '../styles/header.scss';
import '../styles/modal.scss';
import '../styles/banner.scss';
import '../styles/hits.scss';
import '../styles/main-page-catalog.scss';
import '../styles/choose-us.scss';
import '../styles/how-to-choose.scss';
import '../styles/footer.scss';
import '../styles/about.scss';
import '../styles/delivery.scss';
import '../styles/price.scss';
import '../styles/guarantee.scss';
import '../styles/contacts.scss';
import '../styles/goods-catalog.scss';
import '../styles/product-card.scss';


import { Menu } from './header/menu'
import { Callback } from './callback/callback';

const header = document.querySelector('.header');
const callbackPanel = document.querySelector('.callback-panel');


// Перенос изображений и шрифтов в папку "dist"
require.context('../images', true, /\.(png|jpg|svg|gif)$/);


const menu = new Menu(header);
const callback = new Callback(callbackPanel);
