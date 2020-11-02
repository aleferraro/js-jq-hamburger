/*
Hamburger menu:
mostrare / nascondere il menu principale
(ricordate che per vedere l'hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
Partite come base del vostro esercizio scaricando questa repo:
https://bitbucket.org/booleancareers/ex-hamburger-menu-base/downloads
Ricordate di scrivere solo il codice JavaScript con jQuery e non modificare HTML e CSS
*/

//SHOW HIDE SOLUTION

// $('.header-right > a').click(function(){
//   $('.hamburger-menu').show();
// })
//
// $('.hamburger-menu > .close').click(function(){
//   $('.hamburger-menu').hide();
// })

// ADD-REMOVE CLASS SOLUTION

$('.header-right > a').click(function(){
  $('.hamburger-menu').addClass('active');
})

$('.hamburger-menu > .close').click(function(){
  $('.hamburger-menu').removeClass('active');
})
