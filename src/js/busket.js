window.addEventListener ('DOMContentLoaded', () => {



    const minus = document.querySelector('.button__minus'),
          plus = document.querySelector('.button__plus'),
          number = document.querySelector('.button__counter-number');

    let counter = 1;

    
    function plusNumber() {
        if (counter < 15) {
            counter += 1
        }
    }

    function minusNumber() {
        if (counter == 1) {
            counter = 1;
        } else {
            counter -= 1;
        }
    }

    minus.addEventListener('click', () => {
        minusNumber();
        number.innerHTML = counter;
    });

    plus.addEventListener('click', () => {
        plusNumber();
        number.innerHTML = counter;
    })




});