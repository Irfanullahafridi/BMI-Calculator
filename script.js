// Function to calculate BMI and return the category
function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const resultDiv = document.getElementById("result");

    // Validate the inputs: Ensure weight and height are filled and positive numbers
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.textContent = "Please enter positive values for weight and height.";
        resultDiv.style.color = "red";
        return;
    }

    // BMI formula: weight / height^2
    const bmi = weight / (height * height);

    // Round the BMI to two decimal places
    const roundedBMI = bmi.toFixed(2);

    // Determine BMI category
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    // Display the result
    resultDiv.textContent = `Your BMI is ${roundedBMI}. Category: ${category}.`;
    resultDiv.style.color = "green";
}

// Add event listener to the button to calculate BMI when clicked
document.getElementById("btn").addEventListener("click", calculateBMI);
