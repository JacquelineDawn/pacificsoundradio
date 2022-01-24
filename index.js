const body = document.querySelector('body');
body.onload = () => {
    body.classList.toggle('bodyOpacityBefore');
    body.classList.add('bodyOpacityAfter');
}

const one = document.querySelector('#one');
const two = document.querySelector('#two');

const scrollFunk = () => {

    console.log(window.scrollY);

    if (document.documentElement.scrollTop >= 50) {
        one.classList.toggle('opacityBefore');
        one.classList.add('opacityAfter');
    }
    if (document.documentElement.scrollTop >= 654) {
        two.classList.toggle('opacityBefore');
        two.classList.add('opacityAfter');
    }

}

window.addEventListener('scroll', scrollFunk);