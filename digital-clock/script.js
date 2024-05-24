const hour = document.querySelector('.hour');
const min = document.querySelector('.min');

const setClock = () => {
    let day = new Date();
    let hh = day.getHours() < 10 ? "0" + day.getHours().toString(): day.getHours().toString();
    let mm = day.getMinutes().toString();

    hour.textContent = hh;
    min.textContent = mm;
};

setClock();
setInterval(setClock, 1000);

function light() {
    document.documentElement.setAttribute('clock-data-theme', 'light');
}

function dark() {
    document.documentElement.setAttribute('clock-data-theme', 'dark');
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    dark();
} else {
    light();
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (event.matches) {
        dark();
    } else {
        light();
    }
});