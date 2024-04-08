const home = {
    load: function () {
        const content = document.querySelector('#content');
        content.innerHTML = '';
        const introduction = document.createElement('p');
        introduction.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia consequuntur doloremque cupiditate, provident similique illo aperiam eligendi ut quod!';
        content.appendChild(introduction);
    }
}

export { home }