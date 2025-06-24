// DOM elements
const numberInput = document.getElementById('numberInput');
const checkButton = document.getElementById('checkButton');
const resultSection = document.getElementById('result');
const resultIcon = document.getElementById('resultIcon');
const resultTitle = document.getElementById('resultTitle');
const resultMessage = document.getElementById('resultMessage');

// Palindrome checking function (same logic as Java implementation)
function isPalindrome(number) {
    if (number < 0) return false; // Negative numbers are not palindromes
    
    let original = number;
    let reversed = 0;
    
    // Reverse the number using arithmetic operations
    while (number > 0) {
        let remainder = number % 10;
        reversed = (reversed * 10) + remainder;
        number = Math.floor(number / 10);
    }
    
    return original === reversed;
}

// Function to display result
function displayResult(isPalindrome, number) {
    resultSection.classList.remove('hidden', 'palindrome', 'not-palindrome');
    
    if (isPalindrome) {
        resultSection.classList.add('palindrome');
        resultIcon.textContent = '✅';
        resultTitle.textContent = 'Palindrome!';
        resultMessage.textContent = `The number ${number} reads the same backward as forward.`;
    } else {
        resultSection.classList.add('not-palindrome');
        resultIcon.textContent = '❌';
        resultTitle.textContent = 'Not a Palindrome';
        resultMessage.textContent = `The number ${number} does not read the same backward as forward.`;
    }
}

// Function to validate input
function validateInput(value) {
    const number = parseInt(value);
    
    if (isNaN(number)) {
        return { valid: false, message: 'Please enter a valid number' };
    }
    
    if (number < 0) {
        return { valid: false, message: 'Please enter a positive number' };
    }
    
    if (number > Number.MAX_SAFE_INTEGER) {
        return { valid: false, message: 'Number is too large' };
    }
    
    return { valid: true, number: number };
}

// Function to handle check button click
function handleCheck() {
    const value = numberInput.value.trim();
    
    if (!value) {
        alert('Please enter a number');
        numberInput.focus();
        return;
    }
    
    const validation = validateInput(value);
    
    if (!validation.valid) {
        alert(validation.message);
        numberInput.focus();
        return;
    }
    
    const isPalindromeResult = isPalindrome(validation.number);
    displayResult(isPalindromeResult, validation.number);
    
    // Scroll to result if needed
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Function to handle Enter key press
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        handleCheck();
    }
}

// Function to clear result when input changes
function handleInputChange() {
    if (!resultSection.classList.contains('hidden')) {
        resultSection.classList.add('hidden');
    }
}

// Function to add loading state to button
function setButtonLoading(loading) {
    if (loading) {
        checkButton.disabled = true;
        checkButton.querySelector('.button-text').textContent = 'Checking...';
        checkButton.querySelector('.button-icon').textContent = '⏳';
    } else {
        checkButton.disabled = false;
        checkButton.querySelector('.button-text').textContent = 'Check Palindrome';
        checkButton.querySelector('.button-icon').textContent = '🔍';
    }
}

// Enhanced check function with loading state
function handleCheckWithLoading() {
    setButtonLoading(true);
    
    // Simulate a small delay for better UX
    setTimeout(() => {
        handleCheck();
        setButtonLoading(false);
    }, 300);
}

// Event listeners
checkButton.addEventListener('click', handleCheckWithLoading);
numberInput.addEventListener('keypress', handleKeyPress);
numberInput.addEventListener('input', handleInputChange);

// Focus input on page load
window.addEventListener('load', () => {
    numberInput.focus();
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers to example numbers
    const exampleNumbers = document.querySelectorAll('.example-number');
    
    exampleNumbers.forEach(example => {
        example.style.cursor = 'pointer';
        example.addEventListener('click', () => {
            numberInput.value = example.textContent;
            numberInput.focus();
            handleInputChange(); // Clear any previous result
        });
        
        // Add hover effect
        example.addEventListener('mouseenter', () => {
            example.style.color = '#667eea';
        });
        
        example.addEventListener('mouseleave', () => {
            example.style.color = '#374151';
        });
    });
    
    // Add some helpful tooltips
    exampleNumbers.forEach(example => {
        example.title = `Click to try ${example.textContent}`;
    });
});

// Add some nice animations for the card
const card = document.querySelector('.card');
if (card) {
    // Add entrance animation
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        card.style.transition = 'all 0.6s ease-out';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);
}

// Add some keyboard shortcuts
document.addEventListener('keydown', (event) => {
    // Ctrl/Cmd + Enter to check
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        event.preventDefault();
        handleCheckWithLoading();
    }
    
    // Escape to clear input
    if (event.key === 'Escape') {
        numberInput.value = '';
        numberInput.focus();
        handleInputChange();
    }
});

// Add some accessibility improvements
checkButton.setAttribute('aria-label', 'Check if the entered number is a palindrome');
numberInput.setAttribute('aria-describedby', 'input-help');

// Add helpful text for screen readers
const inputHelp = document.createElement('div');
inputHelp.id = 'input-help';
inputHelp.className = 'sr-only';
inputHelp.textContent = 'Enter a positive number to check if it is a palindrome';
document.querySelector('.input-section').appendChild(inputHelp);

// Add screen reader only class
const style = document.createElement('style');
style.textContent = `
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
`;
document.head.appendChild(style); 