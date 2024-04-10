const about = {
    load: function (navAbout, nav) {
        nav.forEach((element) => {
            element.classList.remove('tab-active');
        })
        navAbout.classList.add('tab-active');
        const content = document.querySelector('#content');
        content.innerHTML = '';
        const introduction = document.createElement('p');
        introduction.textContent = 'About Page';
        content.appendChild(introduction);
    }
}

export { about }