const increaseBtnEl = document.querySelector('.counter__button--increase');
const decreaseBtnEl = document.querySelector('.counter__button--decrease');
const resetBtnEl = document.querySelector('.counter__reset-button');

increaseBtnEl.addEventListener('click', () => {
    const counterEl = document.querySelector('.counter__value');
    const currentCounterValue = parseInt(counterEl.textContent, 10);
    counterEl.textContent = currentCounterValue + 1;
});
decreaseBtnEl.addEventListener('click', () => {
    const counterEl = document.querySelector('.counter__value');
    const currentCounterValue = parseInt(counterEl.textContent, 10);
    counterEl.textContent = currentCounterValue - 1;
});
resetBtnEl.addEventListener('click', () => {
    const counterEl = document.querySelector('.counter__value');
    counterEl.textContent = 0;
});