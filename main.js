function generatedPIn() {
    const randomPin = Math.round(Math.random() * 1000);
    const stringRandomPin = '' + randomPin;
    if (stringRandomPin.length == 3) {
        document.getElementById('generated-pin').value = randomPin;
    }
    else {
       return generatedPIn();
    }
}

document.getElementById('keypad').addEventListener('click', function(e) {
    const number = e.target.innerText;
    const calc = document.getElementById('typed-number');
    const submitBtn = document.querySelector('.submit-btn');

    if(isNaN(number) == true) {
        if(number == 'C') {
            calc.value = '';
            submitBtn.setAttribute('disabled', true);
        }
    }
    else{
        const previousCalc = calc.value;
        let currentCalc = previousCalc + number;
        calc.value = currentCalc;
        
        if(currentCalc.length == 3) {
            submitBtn.removeAttribute('disabled');
        }
        else {
            submitBtn.setAttribute('disabled', true);
        }
    }
})

function verify() {
    const pin = document.getElementById('generated-pin').value;
    const typedNumber = document.getElementById('typed-number').value;

    const successMessage = document.getElementById('success-notify');
    const failedMessage = document.getElementById('failed-notify');
    const actionLeftMessage = 
    document.querySelector('.action-left');

    if( pin == typedNumber) {
        successMessage.style.display = 'block';
        failedMessage.style.display = 'none';
        actionLeftMessage.style.display = 'none';
        document.querySelector('.submit-btn').setAttribute('disabled', true);
    }
    else {
        successMessage.style.display = 'none';
        failedMessage.style.display = 'block';
        actionLeftMessage.style.display = 'block';
        let actionLeftCount = document.getElementById('action-left').innerText;
        actionLeftCount = parseInt(actionLeftCount) - 1;
        document.getElementById('action-left').innerText = actionLeftCount;
        
        if(actionLeftCount == 0) {
            actionLeftMessage.style.display = 'none';
            document.querySelector('.submit-btn').setAttribute('disabled', true);
        }
    }
        
}