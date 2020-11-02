import '../styles/styles.scss';
import '../styles/header.scss';
import '../styles/modal.scss';
import '../styles/banner.scss';


import { Menu } from './header/menu'
import { Callback } from './callback/callback';

const header = document.querySelector('.header');
const callbackPanel = document.querySelector('.callback-panel');


// Перенос изображений в папку "dist"
require.context('../images', true, /\.(png|jpg|svg|gif)$/)


const menu = new Menu(header);
const callback = new Callback(callbackPanel);
