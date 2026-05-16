
const costInput = document.getElementById('costPerLiter');
const litersInput = document.getElementById('litersPurchased');
const calculateBtn = document.getElementById('calculateBtn');
const resultText = document.getElementById('totalCostResult');


function calculateTotalCost() {
    const price = parseFloat(costInput.value);
    const liters = parseFloat(litersInput.value);

    if (isNaN(price) || isNaN(liters)) {
        resultText.textContent = ' Please enter valid numbers.';
        resultText.style.color = '#e74c3c';
        return;
    }

    if (price < 0 || liters < 0) {
        resultText.textContent = ' Values cannot be negative.';
        resultText.style.color = '#e74c3c';
        return;
    }
    const total = price * liters;
    
    
    resultText.textContent = ' Total Cost: £' + total.toFixed(2);
    resultText.style.color = '#667eea';
}

calculateBtn.addEventListener('click', calculateTotalCost);

costInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculateTotalCost();
    }
});

litersInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculateTotalCost();
    }
});