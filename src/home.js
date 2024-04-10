const home = {
    load: function (navHome, nav) {
        nav.forEach((element) => {
            element.classList.remove('tab-active');
        })
        navHome.classList.add('tab-active');
        const content = document.querySelector('#content');
        content.innerHTML = '';
        const introduction = document.createElement('p');
        introduction.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia consequuntur doloremque cupiditate, provident similique illo aperiam eligendi ut quod!';
        content.appendChild(introduction);
    }
}

export { home }