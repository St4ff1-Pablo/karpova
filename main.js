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
    // document.getElementsByClassName('search-section')[0].style.display = 'flex';
    document.getElementsByClassName('search-section')[0].style.top = '0';
    document.querySelector('body').style.overflowY = 'hidden'
})
document.getElementsByClassName('exit-search')[0].addEventListener('click', () => {
    // document.getElementsByClassName('search-section')[0].style.display = 'none';
    document.getElementsByClassName('search-section')[0].style.top = '-120%';
    document.querySelector('body').style.overflowY = 'scroll'
})
//video in window





//currency 
let c = {'EUR':1,'UAH':40,'KWD':0.31,'QAR':3.64,'AED':3.67};
let currentCurrency = document.getElementById('currency');






//cart
var cart = document.getElementById('cart-holder');
cart.addEventListener('click', () => {
 cart.classList.toggle('active-cart');

  document.getElementsByClassName('selected-products-holder')[0].style.left='0'
  document.getElementsByClassName('exit-selected-products')[0].style.zIndex='999'
  document.getElementsByClassName('exit-selected-products')[0].style.backgroundColor='rgba(0, 0, 0, 0.6)'
  document.querySelector('body').style.overflowY = 'hidden'

})
document.getElementsByClassName('exit-selected-products')[0].onclick = ()=>{
  document.getElementsByClassName('selected-products-holder')[0].style.left='-100%'
  document.getElementsByClassName('exit-selected-products')[0].style.zIndex='-1'
  document.getElementsByClassName('exit-selected-products')[0].style.backgroundColor='rgba(0, 0, 0, 0)'
  document.querySelector('body').style.overflowY = 'scroll'
}
document.getElementsByClassName('close-btn-selected-products')[0].onclick = ()=>{
    document.getElementsByClassName('selected-products-holder')[0].style.left='-100%'
    document.getElementsByClassName('exit-selected-products')[0].style.zIndex='-1'
    document.getElementsByClassName('exit-selected-products')[0].style.backgroundColor='rgba(0, 0, 0, 0)'
    document.querySelector('body').style.overflowY = 'scroll'
  }
