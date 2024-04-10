import { home } from './home';
import { menu } from './menu';
import { about } from './about';
import './output.css';

console.log('Hello, World!');

const navHome = document.querySelector('#nav-home');
const navMenu = document.querySelector('#nav-menu');
const navAbout = document.querySelector('#nav-about');
const nav = [navHome, navMenu, navAbout];

home.load(navHome, nav);

navHome.addEventListener('click', () => home.load(navHome, nav));
navMenu.addEventListener('click', () => menu.load(navMenu, nav));
navAbout.addEventListener('click', () => about.load(navAbout, nav));
