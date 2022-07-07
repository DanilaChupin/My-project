/*const forms = document.forms.form1;



const registrationBtn = document.querySelector('#btn');
const error6 = document.querySelector('#error6');
const error5 = document.querySelector('#error5');

const inputsEmail = forms.elements.email;
const inputsVisitors = forms.elements.visitors;

const makeValidation = () => {

    if (inputsEmail.value === '') {
        error6.style.display = 'inline-block'
        inputsEmail.style.cssText = 'border: solid 1px red';
    } else {
        error6.style.display = 'none'
        inputsEmail.style.cssText = 'border: solid 2px green';
    }
    if (inputsVisitors.value <= 0 || inputsVisitors.value === '') {
        error5.style.display = 'inline-block'
        inputsVisitors.style.cssText = 'border: solid 1px red';
    } else {
        error5.style.display = 'none'
        inputsVisitors.style.cssText = 'border: solid 2px green';
    }

    inputsEmail.addEventListener('blur', (e) => makeValidation(e))
}

registrationBtn.addEventListener('click', (e) => makeValidation(e))

*/