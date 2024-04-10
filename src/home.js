import img0 from './img/Gokana2.jpg';

const home = {
    load: function (navHome, nav) {
        nav.forEach((element) => {
            element.classList.remove('tab-active');
        })
        navHome.classList.add('tab-active');
        const content = document.querySelector('#content');
        content.innerHTML = '';

        const title = document.createElement('h1');
        title.textContent = 'Home Page';
        title.classList.add('text-center', 'text-3xl', 'mb-4');
        content.appendChild(title);

        const div = document.createElement('div');
        div.classList.add('flex', 'gap-4');

        const image = document.createElement('img');
        image.src = img0;
        image.alt = 'Gokana';
        image.classList.add('mb-4', 'max-w-sm', 'h-fit');
        div.appendChild(image);

        const introduction = document.createElement('p');
        introduction.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia consequuntur doloremque cupiditate, provident similique illo aperiam eligendi ut quod!';
        div.appendChild(introduction);

        content.appendChild(div);
    }
}

export { home }