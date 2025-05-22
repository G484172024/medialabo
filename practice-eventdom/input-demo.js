function greeting() {
    let i = document.querySelector('input[name="shimei"]');
    shimei = i.ariaValueMax;
    sisatsu = 'こんにちは, ' + shimei + 'さん';
    let p = document.querySelector('p#message');
    p.textConect = aisatsu;
}

let b = document.querySelector('button#print');
b.addEventListener('click', greeting);