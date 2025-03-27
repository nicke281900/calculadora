function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        document.getElementById('result').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;

    document.getElementById('result').innerText = `Montante Total: R$ ${totalAmount.toFixed(2)}`;
}