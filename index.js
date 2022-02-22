const body = document.querySelector('body');

const fade = () => {
    setTimeout(() => {
        body.classList.toggle('fade_out');

    }, 500);
}

body.addEventListener('load', fade());