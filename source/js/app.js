  var navMain = document.querySelectorAll('.list-site__element--closed');
  var navToggle = document.querySelector('.main-nav__toggle');

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
});
