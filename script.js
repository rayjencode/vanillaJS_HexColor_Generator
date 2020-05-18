const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const hexBtn = document.querySelector('.hexBtn');
const hexValue = document.querySelector('.hex');
const bodyColor = document.querySelector('body');

hexBtn.addEventListener('click', function () {
    hexVal = `#`;
    for (i = 0; i < 6; i++) {
        let hexIndexRandom = Math.floor(Math.random() * hexNumbers.length);
        hexVal += hexNumbers[hexIndexRandom];
    }

    bodyColor.style.background = hexVal;
    hexValue.textContent = hexVal;
});
