import { home } from './home';
import { menu } from './menu';
import { about } from './about';

home.load()
console.log('Hello, World!');

const navHome = document.querySelector('#nav-home');
const navMenu = document.querySelector('#nav-menu');
const navAbout = document.querySelector('#nav-about');

navHome.addEventListener('click', home.load);
navMenu.addEventListener('click', menu.load);
navAbout.addEventListener('click', about.load);
