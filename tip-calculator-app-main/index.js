document.addEventListener('DOMContentLoaded', () => {
    const billInput = document.querySelector('.bill');
    const tipButtons = document.querySelectorAll('.main-info');
    const customTip = document.getElementById('custom-id');
    const peopleInput = document.querySelector('input[name="People"]'); 
    const tipAmountDisplay = document.querySelectorAll('.price')[0];
    const totalDisplay = document.querySelectorAll('.price')[1];
    const resetBtn = document.querySelector('.reset');

    // 2. State variables
    let billAmount = 0;
    let tipPercentage = 0;
    let numberOfPeople = 1;

    // 3. Calculation function
    function updateCalculations() {
        // Get values safely
        billAmount = parseFloat(billInput.value) || 0;
        numberOfPeople = parseFloat(peopleInput.value) || 1;

        // Error handling
        peopleInput.classList.toggle('error', numberOfPeople === 0);
        
        // Calculate only if valid
        if (numberOfPeople > 0) {
            const tipAmount = billAmount * tipPercentage;
            const totalAmount = billAmount + tipAmount;
            
            tipAmountDisplay.textContent = `$${(tipAmount / numberOfPeople).toFixed(2)}`;
            totalDisplay.textContent = `$${(totalAmount / numberOfPeople).toFixed(2)}`;
        }
    }

    // 4. Tip buttons
    tipButtons.forEach(button => {
        button.addEventListener('click', () => {
            tipButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            tipPercentage = parseFloat(button.textContent.replace('%', '')) / 100;
            customTip.value = ''; // Clear custom input
            updateCalculations();
        });
    });

    // 5. Custom tip input
    customTip.addEventListener('input', () => {
        tipButtons.forEach(btn => btn.classList.remove('active'));
        tipPercentage = parseFloat(customTip.value) / 100 || 0;
        updateCalculations();
    });

    // 6. Input handlers
    billInput.addEventListener('input', updateCalculations);
    peopleInput.addEventListener('input', updateCalculations);

    // 7. Reset button
    resetBtn.addEventListener('click', () => {
        // Reset all values
        billInput.value = '';
        peopleInput.value = '';
        customTip.value = '';
        tipPercentage = 0;
        
        // Reset UI
        tipButtons.forEach(btn => btn.classList.remove('active'));
        tipAmountDisplay.textContent = '$0.00';
        totalDisplay.textContent = '$0.00';
        peopleInput.classList.remove('error');
    });

    // Initial calculation
    updateCalculations();
});