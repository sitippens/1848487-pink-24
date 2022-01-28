  var navMain = document.querySelector('.page-header__menu');
    var navToggle = document.querySelector('.page-header__toggle');

    navMain.classList.remove('page-header__menu--nojs');

    navToggle.addEventListener('click', function() {
      if (navMain.classList.contains('page-header__menu--closed')) {
        navMain.classList.remove('page-header__menu--closed');
        navMain.classList.add('page-header__menu--opened');
      } else {
        navMain.classList.add('page-header__menu--closed');
        navMain.classList.remove('page-header__menu--opened');
      }
    });
