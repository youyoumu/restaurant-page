const menu = {
    load: function (navMenu, nav) {
        nav.forEach((element) => {
            element.classList.remove('tab-active');
        })
        navMenu.classList.add('tab-active');
        const content = document.querySelector('#content');
        content.innerHTML = '';
        const introduction = document.createElement('p');
        introduction.textContent = 'Menu Page';
        content.appendChild(introduction);
    }
}

export { menu }