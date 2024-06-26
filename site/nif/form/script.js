let currentStep = 0;
const formSteps = document.querySelectorAll('.form-step');
const formNumbers = document.querySelectorAll('.circulo');

function showStep(step) {
    formSteps.forEach((stepElement, index) => {
        stepElement.style.display = index === step ? 'block' : 'none';
    });
    formNumbers.forEach((stepNumber, index) => {
        stepNumber.style.backgroundColor = index === step ? 'rgba(9,54,121,1)' : 'aliceblue';
        stepNumber.style.color = index === step ? 'aliceblue' : 'rgba(9,54,121,1)';
    });
}

function nextStep() {
    if (currentStep < formSteps.length - 1) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

function goStep(number){
    currentStep = number
    showStep(currentStep)
}

function handleNext(event) {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity()) {
        nextStep();
    } else {
        form.reportValidity();
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity()) {
        alert('Formulário enviado com sucesso!');
    } else {
        form.reportValidity();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showStep(currentStep);
});

showStep(currentStep);