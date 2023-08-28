
let displayOnInput = '';
let display;

const selectButton = () => {
    const buttonCollection = document.querySelectorAll('.num');
    buttonCollection.forEach(buttons => {
        buttons.addEventListener('click', buttonSelected);
    });
};
const checkOperations = (lastvalue) => {
    const operatorsCollection = document.querySelectorAll('.calc');
    operatorsCollection.forEach(operators => {
        operators.addEventListener('click', buttonSelected);
    });
    if(lastvalue === '+'){
        alert('hola')
    }
    if(lastvalue === '-'){
        
    }
    if(lastvalue === '/'){
        
    }
    if(lastvalue === '*'){
        
    }
    if(lastvalue === '%'){
        
    }
};

const buttonSelected = (event) =>{
    let buttonTarget = event.target.value;
    showOnDisplay(buttonTarget);
    checkOperations(buttonTarget);
}

const showOnDisplay = (value) => {
    displayOnInput += value;
    display.value = displayOnInput;
};

const clearDisplay = () => {
    display.value = '';
    displayOnInput = '';
}

window.addEventListener('load', (event) => {
    display = document.querySelector('.operaciones');
    selectButton();

    const clearButton = document.querySelector('.clear');
    clearButton.removeEventListener('click',buttonSelected);
    clearButton.addEventListener('click', clearDisplay)
});


