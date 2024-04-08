const menu = {
    load: function () {
        const content = document.querySelector('#content');
        content.innerHTML = '';
        const introduction = document.createElement('p');
        introduction.textContent = 'Menu Page';
        content.appendChild(introduction);
    }
}

export { menu }