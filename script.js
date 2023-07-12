
console.log("hello");

document.addEventListener('DOMContentLoaded', function () {
    const menuBars = document.getElementById('menu-bars');
    const navbar = document.querySelector('.navbar');
  
    menuBars.addEventListener('click', function () {
      navbar.classList.toggle('active');
    });
  });
  
  
  document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.getElementById('search-icon');
    const searchForm = document.getElementById('search-form');
    const searchBox = document.getElementById('search-box');
  
    searchIcon.addEventListener('click', function () {
      searchForm.classList.toggle('active');
      searchBox.focus();
    });
  
    const closeIcon = document.getElementById('close');
    closeIcon.addEventListener('click', function () {
      searchForm.classList.remove('active');
      searchBox.value = '';
    });
  });
  

 
