  var navMain = document.querySelectorAll('.list-site__element--closed');
  var navToggle = document.querySelector('.main-nav__toggle');
  var popupWeekOrder = document.querySelector('.product-week__buy');
  var popupBasketOrder = document.querySelector('.product-card__basket');
  var popupShow = document.querySelector('.modal-basket');
  var popupOverlay = document.querySelector('.modal-basket__overlay');

navMain.forEach(function (nojs) {
  if (nojs.classList.contains('list-site__element--nojs')) {
    nojs.classList.remove('list-site__element--nojs');
  }
});

navToggle.addEventListener('click', function() {
  navMain.forEach(function (items) {
    if (items.classList.contains('list-site__element--closed')) {
      items.classList.remove('list-site__element--closed');
      items.classList.add('list-site__element--opened');
    } else {
      items.classList.add('list-site__element--closed');
      items.classList.remove('list-site__element--opened');
    }
  });

  if (navToggle.classList.contains('main-nav__toggle--opened')) {
    navToggle.classList.remove('main-nav__toggle--opened');
  }
  else {
    navToggle.classList.add('main-nav__toggle--opened');
  }
});

if (null !== popupWeekOrder) {
  popupWeekOrder.addEventListener('click', function(evt) {
    evt.preventDefault();
    popupShow.classList.add('modal-basket--opened');
    popupOverlay.classList.add('modal-basket__overlay--show');
  });
}

if (null !== popupBasketOrder) {
  popupBasketOrder.addEventListener('click', function(evt) {
    evt.preventDefault();
    popupShow.classList.add('modal-basket--opened');
    popupOverlay.classList.add('modal-basket__overlay--show');
  });
}

popupOverlay.addEventListener('click', function() {
  popupShow.classList.remove('modal-basket--opened');
  popupOverlay.classList.remove('modal-basket__overlay--show');
});
