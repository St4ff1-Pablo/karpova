//плавующий хедер
let lastScroll = 0;
const defaultOffset = 100;
const nav = document.querySelector('nav');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => nav.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        nav.classList.add('hide');
// nav.style.backgroundColor = 'rgb(255, 255, 255, 0.5)'

    }
    if(lastScroll<defaultOffset){
        // nav.style.backgroundColor = 'white'
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        nav.classList.remove('hide');
    }

    lastScroll = scrollPosition();
})


//Поиск
document.getElementsByClassName('search-li')[0].addEventListener('click', () => {
    document.getElementsByClassName('search-section')[0].style.display = 'flex';
    document.querySelector('body').style.overflowY = 'hidden'
})
document.getElementsByClassName('exit-search')[0].addEventListener('click', () => {
    document.getElementsByClassName('search-section')[0].style.display = 'none';
    document.querySelector('body').style.overflowY = 'scroll'
})
//video in window

//currency 
let c = {'EUR':1,'UAH':40,'KWD':0.31,'QAR':3.64,'AED':3.67};
let currentCurrency = document.getElementById('currency');
//button messages
