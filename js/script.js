selectButton = () => {
    const buttonCollection = document.querySelectorAll('button');

    buttonCollection.forEach(buttons =>{
        buttons.addEventListener('click', (event) =>{
            let buttonSelected = event.target.value;
            console.log(buttonSelected)
            if (buttonSelected === 'clear') {
                clearDisplay();
            }else
            checkOperations(buttonSelected);
            showOnDisplay(buttonSelected);
        });
    });
};

showOnDisplay = (value) => {
    const display = document.querySelector('.operaciones');
    display.value += value;
};

clearDisplay = () => {
    const display = document.querySelector('.operaciones');
    display.value = '';
}

checkOperations = (value) => {
    const display = document.querySelector('.operaciones');
    if (display.value === "="){
        
    };
};

window.addEventListener('load', (event) => {
    selectButton();
});


