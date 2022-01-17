const burgerBtn = document.querySelector('.burger');
const listItems = document.querySelector('.list-items');

burgerBtn.addEventListener('click', ()=>{
   listItems.classList.toggle('show');
})