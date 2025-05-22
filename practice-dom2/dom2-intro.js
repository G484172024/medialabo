let b = document.querySelector('button#henkou');
b.addEventListener('click', changeDom);

function changeDom() {
    let l = document.createElement('li');
    l.textContent = 'ヨット';

    let ul = document.querySelector('#kazoeuta');
    ul.insertAdjacentElement('beforeend', l);

    let i = document.querySelector('img#bluemoon');
    i.setAttribute('src', 'bluemoon.jpg');

    let a = document.createElement('a');
    a.textContent = '拓殖大学HP';
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp');
    let p = document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend', a);

    l = document.querySelector('li#mochi');
    l.remove();

    u = document.querySelector('ul#kassen');
    u.remove();

    u = document.createElement('ul');
    l = document.createElement('li');
    l.textContent = '赤';
    u.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = '緑';
    u.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent = '青';
    u.insertAdjacentElement('beforeend', l);
    p = document.querySelector('p#primary');
    p.insertAdjacentElement('afterend', u);
}



