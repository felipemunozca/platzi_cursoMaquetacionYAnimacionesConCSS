const buttonSpider = document.querySelector('#button-Spider');
const buttonRobin = document.querySelector('#button-Robin');
const buttonBatman = document.querySelector('#button-Batman');

const modalProduct = document.querySelector('#modal-product');
const iconClose = document.querySelector('#icon-close');
const cardsImage = document.querySelector('#cards-image');

buttonSpider.addEventListener('click', () => {
    /* console.log("Se presiona el botón de spider-man"); */
    modalProduct.classList.remove('hidden');
    modalProduct.classList.add('visible');
    cardsImage.innerHTML = `
        <label for="radio-1" id="card-1" class="card">
            <img src="./assets/img/spider-1.png" alt=""/>
        </label>
        <label for="radio-2" id="card-2" class="card">
            <img src="./assets/img/spider-2.png" alt=""/>
        </label>
        <label for="radio-3" id="card-3" class="card">
            <img src="./assets/img/spider-3.png" alt=""/>
        </label>
    `;
});

buttonRobin.addEventListener('click', () => {
    modalProduct.classList.remove('hidden');
    modalProduct.classList.add('visible');
    cardsImage.innerHTML = `
        <label for="radio-1" id="card-1" class="card">
            <img src="./assets/img/robin-1.png" alt=""/>
        </label>
        <label for="radio-2" id="card-2" class="card">
            <img src="./assets/img/robin-2.png" alt=""/>
        </label>
        <label for="radio-3" id="card-3" class="card">
            <img src="./assets/img/robin-3.png" alt=""/>
        </label>
    `;
});

buttonBatman.addEventListener('click', () => {
    modalProduct.classList.remove('hidden');
    modalProduct.classList.add('visible');
    cardsImage.innerHTML = `
        <label for="radio-1" id="card-1" class="card">
            <img src="./assets/img/batman-1.png" alt=""/>
        </label>
        <label for="radio-2" id="card-2" class="card">
            <img src="./assets/img/batman-2.png" alt=""/>
        </label>
        <label for="radio-3" id="card-3" class="card">
            <img src="./assets/img/batman-3.png" alt=""/>
        </label>
    `;
});

iconClose.addEventListener('click', () => {
    /* console.log('Se cierra el modal') */
    modalProduct.classList.add('hidden');
    modalProduct.classList.remove('visible');
});
