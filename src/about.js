const about = {
    load: function (navAbout, nav) {
        nav.forEach((element) => {
            element.classList.remove('tab-active');
        })
        navAbout.classList.add('tab-active');
        const content = document.querySelector('#content');
        content.innerHTML = '';

        const title = document.createElement('h1');
        title.textContent = 'About Page';
        title.classList.add('text-center', 'text-3xl', 'mb-4');

        const introduction = document.createElement('p');
        introduction.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia consequuntur doloremque cupiditate, provident similique illo aperiam eligendi ut quod!';

        content.appendChild(title);
        content.appendChild(introduction);
    }
}

export { about }