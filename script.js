
/* Задание 2.1: появление/исчезновение блока при нажатии на "Кнопку1"  */

const clickButton1 = document.querySelector('.button-first');
const moveBlock = document.querySelector('.block');

clickButton1.addEventListener('click', function () {
    if (moveBlock.classList.contains('visually-hidden')) {
        moveBlock.classList.remove('visually-hidden');
    }
    else {
        moveBlock.classList.add('visually-hidden');
    }

    /* второй вариант  */
    //   if (moveBlock.style.display == 'block') { 
    //     moveBlock.style.display = 'none';
    //   }
    //   else {
    //     moveBlock.style.display = 'block';
    //   }
});


/* Задание 2.2: замена местами первых двух блоков во среднем ряду при нажатии на "Кнопку1"  */
$(function () {
    jQuery.fn.swap = function (b) {
        b = jQuery(b)[0];
        const a = this[0],
            a2 = a.cloneNode(true),
            b2 = b.cloneNode(true),
            stack = this;

        a.parentNode.replaceChild(b2, a);
        b.parentNode.replaceChild(a2, b);

        stack[0] = a2;
        return this.pushStack(stack);
    };

    $('.button-second').on('click', function () {
        $('.central').swap('.left');
    });
});


/* Задание 2.3: появление модального окна (с надписью "Приве, мир") при открытии страницы */  

const modal = document.querySelector('.demo-modal');
const close = document.querySelector('.close');
const closeButton = document.querySelector('.close-button');
const returnSpan = document.getElementById('return-value');

closeButton.addEventListener('click', () => {
  modal.close('close-button');
});

close.addEventListener('click', () => {
  modal.close('cancelled');
})

modal.addEventListener('cancel', () => {
  modal.close('cancelled');
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close('cancelled');
  }
});

modal.addEventListener('.close', () => {
  returnSpan.innerHTML = modal.returnValue;
});
