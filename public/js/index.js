function doCopywrite() {
  const date = new Date();

  let footerCopywrite = document.querySelector('#footerCopywrite');
  footerCopywrite.textContent += date.getFullYear();
}

doCopywrite();

function mediaScreen(x) {
  let ft1 = document.querySelector('#footerText1')
  let ft2 = document.querySelector('#footerText2')

  if (x.matches) {
    ft1.innerHTML = 'Desarrollado por Luciano Della Savia'

    ft2.style.display = 'block'
  } else {
    ft1.innerHTML = 'Desarrollado por Luciano Della Savia en apoyo de Tomás Cáceres'

    ft2.style.display = 'none'
  }
}

var x = window.matchMedia("(max-width: 628px)")
mediaScreen(x)
x.addListener(mediaScreen)

const carouselList = document.querySelector('#carouselList')
const carouselBtnLeft = document.querySelector('#carouselBtnLeft')
const carouselBtnRight = document.querySelector('#carouselBtnRight')
let carouselIndex = 0;

carouselBtnLeft.addEventListener('click', () => {
  if (carouselIndex == 0) {

    // carouselList.style.right = '0';
    carouselList.style.left = '-100%';
    carouselIndex = 1;
  } else {
    // carouselList.style.right = '0';
    carouselList.style.left = 0;
    carouselIndex = 0
  }
})
carouselBtnRight.addEventListener('click', () => {
  if (carouselIndex == 1) {
    carouselList.style.left = 0;
    // carouselList.style.right = '0';
    carouselIndex = 0
  } else {
    carouselList.style.left = '-100%';
    // carouselList.style.right = '0';
    carouselIndex = 1
  }
})