// Function to check whether a number is prime
function ePrimo(n) {
    // Numbers less than or equal to 1 are not prime
    if (n <= 2) return false;

    // 2 and 3 are prime numbers
    if (n <= 3) return true;

    // Eliminate multiples of 2 and 3 early
    if (n % 2 === 0) return false;

    // Check for factors starting from 5 up to the square root of n
    // Only check numbers of the form 6k ± 1 for efficiency
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    // If no factors found, n is prime
    return true;
}

// Function to count from 1 to the entered number and mark primes
function countToNumber() {
    // Get the number input from the user
    let num = document.getElementById("number").valueAsNumber;

    // Get the element where the result will be shown
    let resultado = document.getElementById("resultado");

    // Initialize the output string
    let output = " ";

    // Loop from 1 to the entered number
    for (let i = 1; i <= num; i++) {
        // If the number is prime, add "(nº primo)" next to it
        if (ePrimo(i)) {
            output += i + " (nº primo)<br>";
        } else {
            output += i + " <br>";
        }
    }

    // Display the result in the HTML element
    resultado.innerHTML = output;
}