import img0 from './img/BEEF-RAMEN-scaled-e1677832847366.jpg'
import img1 from './img/BENTO-scaled-e1677832450503.jpg'
import img2 from './img/Chicken-Collagen-Ramen-GOKANA_-36-scaled-e1677832666208.jpg'
import img3 from './img/GOKANA-DRINKS-scaled-e1677832599464.jpeg'

const menu = {
    load: function (navMenu, nav) {
        nav.forEach((element) => {
            element.classList.remove('tab-active');
        })
        navMenu.classList.add('tab-active');
        const content = document.querySelector('#content');
        content.innerHTML = '';

        const menuContainer = document.createElement('div');
        menuContainer.classList.add('mx-auto');

        const menu0 = document.createElement('div');
        menu0.classList.add('mb-4', 'flex', 'gap-4', 'justify-start');
        const menu0Img = document.createElement('img');
        menu0Img.classList.add('max-w-sm', 'h-fit');
        menu0Img.src = img0;
        menu0Img.alt = 'Beef Ramen';
        const menu0Div = document.createElement('div');
        menu0Div.classList.add('text-end');
        const menu0Title = document.createElement('h1');
        menu0Title.textContent = 'Beef Ramen';
        menu0Title.classList.add('text-3xl', 'mb-4');
        const menu0P = document.createElement('p');
        menu0P.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia consequuntur doloremque cupiditate, provident similique illo aperiam eligendi ut quod!';
        menu0Div.appendChild(menu0Title);
        menu0Div.appendChild(menu0P);
        menu0.appendChild(menu0Img);
        menu0.appendChild(menu0Div);

        const menu1 = document.createElement('div');
        menu1.classList.add('mb-4', 'flex', 'gap-4', 'justify-end');
        const menu1Img = document.createElement('img');
        menu1Img.classList.add('max-w-sm', 'h-fit');
        menu1Img.src = img1;
        menu1Img.alt = 'Bento';
        const menu1Div = document.createElement('div');
        menu1Div.classList.add('text-start');
        const menu1Title = document.createElement('h1');
        menu1Title.textContent = 'Bento';
        menu1Title.classList.add('text-3xl', 'mb-4');
        const menu1P = document.createElement('p');
        menu1P.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia consequuntur doloremque cupiditate, provident similique illo aperiam eligendi ut quod!';
        menu1Div.appendChild(menu1Title);
        menu1Div.appendChild(menu1P);
        menu1.appendChild(menu1Div);
        menu1.appendChild(menu1Img);

        const menu2 = document.createElement('div');
        menu2.classList.add('mb-4', 'flex', 'gap-4', 'justify-start');
        const menu2Img = document.createElement('img');
        menu2Img.classList.add('max-w-sm', 'h-fit');
        menu2Img.src = img2;
        menu2Img.alt = 'Gokana';
        const menu2Div = document.createElement('div');
        menu2Div.classList.add('text-end');
        const menu2Title = document.createElement('h1');
        menu2Title.textContent = 'Gokana';
        menu2Title.classList.add('text-3xl', 'mb-4');
        const menu2P = document.createElement('p');
        menu2P.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia consequuntur doloremque cupiditate, provident similique illo aperiam eligendi ut quod!';
        menu2Div.appendChild(menu2Title);
        menu2Div.appendChild(menu2P);
        menu2.appendChild(menu2Img);
        menu2.appendChild(menu2Div);

        const menu3 = document.createElement('div');
        menu3.classList.add('mb-4', 'flex', 'gap-4', 'justify-end');
        const menu3Img = document.createElement('img');
        menu3Img.classList.add('max-w-sm', 'h-fit');
        menu3Img.src = img3;
        menu3Img.alt = 'Drinks';
        const menu3Div = document.createElement('div');
        menu3Div.classList.add('text-start');
        const menu3Title = document.createElement('h1');
        menu3Title.textContent = 'Drinks';
        menu3Title.classList.add('text-3xl', 'mb-4');
        const menu3P = document.createElement('p');
        menu3P.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia consequuntur doloremque cupiditate, provident similique illo aperiam eligendi ut quod!';
        menu3Div.appendChild(menu3Title);
        menu3Div.appendChild(menu3P);
        menu3.appendChild(menu3Div);
        menu3.appendChild(menu3Img);

        menuContainer.appendChild(menu0);
        menuContainer.appendChild(menu1);
        menuContainer.appendChild(menu2);
        menuContainer.appendChild(menu3);

        content.appendChild(menuContainer);
    }
}

export { menu }