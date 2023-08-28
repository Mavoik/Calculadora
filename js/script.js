
let displayOnInput = '';
let display;

selectButton = () => {
    const buttonCollection = document.querySelectorAll('button');

    buttonCollection.forEach(buttons => {
        buttons.addEventListener('click', (event) => {
            let buttonSelected = event.target.value;

                showOnDisplay(buttonSelected);
        });
    });
};


showOnDisplay = (value) => {
    display.value += value;
};

clearDisplay = () => {
    
    display.innerHTML = displayOnInput;
}

checkOperations = (value) => {
    if (display.value === "=") {

    };
};

window.addEventListener('load', (event) => {
    display = document.querySelector('.operaciones');
    selectButton();
});


