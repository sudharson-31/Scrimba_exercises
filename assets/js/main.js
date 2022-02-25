/* Sets variables */
let inputElement = document.getElementById("input1");
let inputCAll = document.getElementsByClassName("inputCAll");
let screenSize = screen.availWidth;
let piper = document.getElementsByClassName("pipe");
let outVals = document.getElementsByClassName('Out');
inputElement.value = 20;

/* convert on keypress enter */
inputElement.addEventListener("keyup", (event) => {
    if (event.key === 'Enter')
        changeValues();
});



/* piping based on screen size */
if (screenSize > 500) {
    for (i = 0; i < piper.length; i++)
        piper[i].append('|');
}
function decrement() {
    inputElement.stepDown();
}
function increment() {
    inputElement.stepUp();
}

function changeValues() {
    for (i = 0; i < inputCAll.length; i++)
        inputCAll[i].textContent = inputElement.value + ' ';

    for (i = 0; i < outVals.length; i++) {

        switch (i) {
            case 0:
                outVals[i].textContent = (inputElement.value * 3.281).toPrecision(3) + ' ' + 'feet';
                break;
            case 1:
                outVals[i].textContent = (inputElement.value * 0.304).toPrecision(3) + ' ' + 'meters';
                break;
            case 2:
                outVals[i].textContent = (inputElement.value * 0.264).toPrecision(3) + ' ' + 'gallons';
                break;
            case 3:
                outVals[i].textContent = (inputElement.value * 3.785).toPrecision(3) + ' ' + 'litres';
                break;
            case 4:
                outVals[i].textContent = (inputElement.value * 2.204).toPrecision(3) + ' ' + 'pounds';
                break;
            case 3:
                outVals[i].textContent = (inputElement.value * 0.453).toPrecision(3) + ' ' + 'kilos';
                break;
        }
    }
}