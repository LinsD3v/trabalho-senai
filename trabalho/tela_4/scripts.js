const display = document.getElementById('display');
let currentInput = '';

function updateDisplay() {
    display.value = currentInput;
}

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        if (this.id === 'clear') {
            currentInput = '';
            updateDisplay();
        } else if (this.id === 'equals') {
            try {
                // Evaluate the expression safely
                currentInput = eval(currentInput.replace(/[^-+*/.\d]/g, '')) + '';
            } catch {
                currentInput = 'Error';
            }
            updateDisplay();
        } else {
            if (currentInput === 'Error') currentInput = '';
            currentInput += value;
            updateDisplay();
        }
    });
});

// Initialize display
updateDisplay();
