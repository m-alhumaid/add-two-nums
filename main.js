// Function to calculate the sum of two numbers and display the result
function calculateSum() {
  // Get values from input fields
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  // Check if both inputs are valid numbers
  if (!isNaN(num1) && !isNaN(num2)) {
    const sum = num1 + num2; // Calculate the sum
    // Display the result in the result_sum element
    document.getElementById("result_sum").textContent = "Result: " + sum;
  } else {
    // Display a message if the user inputs invalid numbers
    document.getElementById("result_sum").textContent =
      "Please enter valid numbers.";
  }
}
