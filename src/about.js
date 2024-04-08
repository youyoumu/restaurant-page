const about = {
    load: function () {
        const content = document.querySelector('#content');
        content.innerHTML = '';
        const introduction = document.createElement('p');
        introduction.textContent = 'About Page';
        content.appendChild(introduction);
    }
}

export { about }