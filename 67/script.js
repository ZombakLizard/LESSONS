// let hello ="world" 

// const year ="2026"

// let data ="5 september"

// // alert('67')

// prompt('Являетесь ли вы нелегальным мигрантом?')

// data="9 september"

// console.log(data)

// let tegh2 = document.querySelector(".g4")


// // tegh2.style.backgroundColor="red";

// let cat = document.querySelector('h1');

// cat.style.color = 'blue';

// tegh2.style.backgroundColor='red';

// tegh2.style.marginTop = '50px';

// let jspush = document.querySelector('.steam')

// console.log(jspush) 

// function ShowMessage() {
//     alert('42')
// }

let body = document.querySelector('body')

let message ="Елизаве́та I, Елизаве́та Тюдо́р (англ. Elizabeth I; 7 сентября 1533, Гринвич — 24 марта 1603, Ричмонд)[~ 1] — королева Англии и Ирландии с 1558 года (коронована в 1559 году), последний монарх Британских островов из дома Тюдоров, 44-летнее царствование которой составило самостоятельный период в истории страны, известный под её именем."

function imposter() {
    alert(message)
}

function chorni() {
    document.querySelector('.rockthatbody').style.backgroundColor = '#14161a'
} 

function ChangeColor() {
    body.classList.toggle('blackk')
    body.classList.toogle('whitee')
    console.log('eto rabotaet')
}

let fanta = document.querySelector('.fanta')

let yota = document.querySelector('.yota')

function ChangeText() {
    fanta.textContent = "coca cola"
    yota.classList.remove('bad', 'verybad', 'top1', 'zero')
    yota.src = "image/cocacola.jpg"
    yota.classList.add('good')
}

function ChangeText2() {
    fanta.textContent = "черноголовка cola"
    yota.src = "image/cernogolovka.jpg"
    yota.classList.add('bad')
}

function ChangeText3() {
    fanta.textContent = "fantola blue"
    yota.classList.remove('good', 'bad', 'top1', 'zero')
    yota.src = "image/fantolablue.jpg"
    yota.classList.add('verybad')
}

function ChangeText4() {
    fanta.textContent = "soda water"
    yota.classList.remove('good', 'bad', 'verybad', 'zero')
    yota.src = "image/sodawater.jpg"
    yota.classList.add('top1')
}

function ChangeText5() {
    fanta.textContent = "нулевой пациент"
    yota.classList.remove('good', 'bad', 'top1', 'verybad')
    yota.classList.add('zero')
}

let cat = document.querySelector('.koshka')

cat.innerHTML = `<p> Так как вам уже ${prompt('Введите свой возраст')} то вам стоит посетить Травматологический пункт (медгородок) для взрослых в Набережных Челнах находится в составе Больницы скорой медицинской помощи (БСМП):
• Адрес: Набережночелнинский проспект, 18 (подьезд 5, 1-й этаж).
• Режим работы: Круглосуточно.
• Телефон справочной службы: +7 (8552) 30-48-56
• Телефон травмпункта (Центр амбулаторной травмы): +7 (8552) 30-49-11
• Официальный сайт: bsmp.tatarstan.ru</p>`

// cat.innerHTML = "<p> bluetooth </p>"

// const name = 'сергей'

// alert(`меня зовут ${name}`)

// alert('меня зовут ${name}')

// alert('меня зовут' + name )

const str = " Задолженость: 2.5 рубля. "

// console.log('я из т банка. вам нужно срочно погасить долги за последние две (2) недели.' + str + ' немдленно погасите ее или вам выдернут все ногти ')

console.log(`я из т банка. вам нужно срочно погасить долги за последние две (2) недели. ${str} немдленно погасите ее или вам выдернут все ногти `)