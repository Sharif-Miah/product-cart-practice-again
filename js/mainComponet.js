
function getInputElelment(inputId, numberIdField) {
    const getInputText = document.getElementById(numberIdField);
    const getInput = parseInt(getInputText.value);
    let getValue;
    if (inputId === true) {
        getValue = getInput + 1;
    } else {
        getValue = getInput - 1;
    }
    return getValue;
}

function textField(textId, numberOfPhones) {
    const quenTityPrice = numberOfPhones * 1219;
    const totalMoney = document.getElementById(textId);
    totalMoney.innerText = quenTityPrice;
}
function textFieldCase(textId, numberOfPhones) {
    const quenTityPrice = numberOfPhones * 59;
    const totalMoney = document.getElementById(textId);
    totalMoney.innerText = quenTityPrice;
}


function getParse(fieldValue, getIdValu) {
    const inputField = document.getElementById(fieldValue);
    inputField.value = getIdValu;
}
