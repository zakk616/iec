// *********** Sweet Scroll **************
document.addEventListener(
  'DOMContentLoaded',
  () => {
    const scroller = new SweetScroll({
      /* some options */
    });
  },
  false,
);
// ***************************************

// *********** Profile Card **************

var messageBox = document.querySelector('.js-message');
var btn = document.querySelector('.js-message-btn');
var card = document.querySelector('.js-profile-card');
var closeBtn = document.querySelectorAll('.js-message-close');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  card.classList.add('active');
});

closeBtn.forEach(function (element, index) {
  console.log(element);
  element.addEventListener('click', function (e) {
    e.preventDefault();
    card.classList.remove('active');
  });
});

// *********** Download CV **************

var isModalShowing = false;
var dim = document.querySelector('#js-dim');
var modal = document.querySelector('.cv-role');
var cvClicked = document.querySelectorAll('.js-dismiss');
var btnDownload = document.querySelector('#js-download');

function toggleModal() {
  if (isModalShowing) {
    dim.classList.remove('blocker');
    modal.classList.remove('cv-active');
  } else {
    dim.classList.add('blocker');
    modal.classList.add('cv-active');
  }
  isModalShowing = !isModalShowing;
}

btnDownload.addEventListener('click', function (e) {
  toggleModal();
});

dim.addEventListener('click', function (e) {
  toggleModal();
});

var i;
for (i = 0; i < cvClicked.length; i++) {
  cvClicked[i].addEventListener('click', function (e) {
    toggleModal();
  });
}



