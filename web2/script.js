
const body = document.querySelector('body');

const userMessage = "Елизаве́та I, Елизаве́та Тюдо́р (англ. Elizabeth I; 7 сентября 1533, Гринвич — 24 марта 1603, Ричмонд)[~ 1] — королева Англии и Ирландии с 1558 года (коронована в 1559 году), последний монарх Британских островов из дома Тюдоров, 44-летнее царствование которой составило самостоятельный период в истории страны, известный под её именем.";

function showUserMessage() {
    alert(userMessage);
}

function setDarkBackground() {
    document.querySelector('.rock-that-body').style.backgroundColor = '#14161a';
}

function toggleTheme() {
    body.classList.toggle('page--dark');
    body.classList.toggle('page--light');
    console.log('Тема переключена');
}

const colaLabel = document.querySelector('.cola__label');
const colaImage = document.querySelector('.cola__image');

function showCola() {
    colaLabel.textContent = "coca cola";
    colaImage.classList.remove('is-bad', 'is-very-bad', 'is-top', 'is-hidden');
    colaImage.src = "67/image/cocacola.jpg";
    colaImage.classList.add('is-good');
}

function showChernogolovka() {
    colaLabel.textContent = "черноголовка cola";
    colaImage.src = "67/image/cernogolovka.jpg";
    colaImage.classList.add('is-bad');
}

function showFantolaBlue() {
    colaLabel.textContent = "fantola blue";
    colaImage.classList.remove('is-good', 'is-bad', 'is-top', 'is-hidden');
    colaImage.src = "67/image/fantolablue.jpg";
    colaImage.classList.add('is-very-bad');
}

function showSodaWater() {
    colaLabel.textContent = "soda water";
    colaImage.classList.remove('is-good', 'is-bad', 'is-very-bad', 'is-hidden');
    colaImage.src = "67/image/sodawater.jpg";
    colaImage.classList.add('is-top');
}

function resetCola() {
    colaLabel.textContent = "нулевой пациент";
    colaImage.classList.remove('is-good', 'is-bad', 'is-top', 'is-very-bad');
    colaImage.classList.add('is-hidden');
}


const swiper = new Swiper('.swiper', {
    loop: true,
    effect: "cube",
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const revealButton = document.querySelector('.osminog');
const revealImage = document.getElementById('dvesti');

function uno() {
    revealImage.setAttribute(
        "src",
        "https://st1.zoom.us/maintenance/12042025-0950/my-notes/dist/assets/zoommedia/google-meet.webp"
    );
    console.log(revealImage);
}
