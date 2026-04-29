/*
   PETROL CALCULATOR - JAVASCRIPT
   This file contains all the functionality for the petrol calculator
   Handles calculation logic, user input validation, and result display
*/

/*
   Event listener for DOM content loaded:
   - Waits for the HTML document to be fully parsed before running JavaScript
   - Prevents errors from trying to access elements that don't exist yet
*/
document.addEventListener('DOMContentLoaded', function() {
    // Call the initialization function to set up event listeners
    initializeCalculator();
});

/*
   Initialize Calculator Function:
   - Sets up all event listeners for the application
   - Connects user interactions to their respective handlers
*/
function initializeCalculator() {
    // Get reference to the calculate button from the HTML
    const calculateBtn = document.getElementById('calculateBtn');
    
    // Add click event listener to the button
    // When clicked, the calculateTotalCost function is called
    calculateBtn.addEventListener('click', calculateTotalCost);
    
    // Get reference to the cost per liter input field
    const costPerLiterInput = document.getElementById('costPerLiter');
    
    // Get reference to the liters purchased input field
    const litersPurchasedInput = document.getElementById('litersPurchased');
    
    // Add event listeners for Enter key press on input fields
    // This allows users to press Enter instead of clicking the button
    costPerLiterInput.addEventListener('keypress', function(event) {
        // Check if the Enter key was pressed (key code 13)
        if (event.key === 'Enter') {
            calculateTotalCost();
        }
    });
    
    // Add the same Enter key listener to the liters input field
    litersPurchasedInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            calculateTotalCost();
        }
    });
}

/*
   Calculate Total Cost Function:
   - Retrieves user input from the form fields
   - Validates the input values
   - Performs calculation
   - Displays the result
*/
function calculateTotalCost() {
    // Get the cost per liter value from the input field and convert to number
    const costPerLiter = parseFloat(document.getElementById('costPerLiter').value);
    
    // Get the liters purchased value from the input field and convert to number
    const litersPurchased = parseFloat(document.getElementById('litersPurchased').value);
    
    // Get reference to the result display element
    const resultElement = document.getElementById('totalCostResult');
    
    /*
       Input Validation:
       - Check if either input is empty or not a valid number
       - Check if values are negative (not allowed for prices or quantities)
    */
    if (isNaN(costPerLiter) || isNaN(litersPurchased)) {
        // Display error message if inputs are not valid numbers
        resultElement.textContent = '❌ Please enter valid numbers in both fields.';
        resultElement.style.color = '#e74c3c';
        return; // Exit function early to prevent calculation
    }
    
    if (costPerLiter < 0 || litersPurchased < 0) {
        // Display error message if either value is negative
        resultElement.textContent = '❌ Cost and liters must be positive values.';
        resultElement.style.color = '#e74c3c';
        return; // Exit function early to prevent calculation
    }
    
    /*
       Calculation:
       - Multiply the cost per liter by the number of liters purchased
       - This gives the total cost of the petrol
    */
    const totalCost = costPerLiter * litersPurchased;
    
    /*
       Display Result:
       - Format the result to 2 decimal places (standard currency format)
       - Use toFixed(2) to ensure exactly 2 decimal places
       - Display in a user-friendly format with currency symbol
    */
    const formattedCost = totalCost.toFixed(2);
    
    // Update the result element with the calculated value
    resultElement.textContent = `💷 Total Cost: £${formattedCost}`;
    
    // Change text color back to primary color for success state
    resultElement.style.color = '#667eea';
}

/*
   Additional Notes:
   - The calculator uses parseFloat() to handle decimal numbers (e.g., 1.72)
   - The toFixed(2) method ensures currency is always displayed with 2 decimal places
   - Input validation prevents errors from invalid or negative values
   - Event listeners on input fields allow Enter key to trigger calculation
   - Comments throughout help with code readability and maintenance
*/
