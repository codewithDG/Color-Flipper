const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16).padStart(6, "0"); // Ensure 6-character hex
    document.body.style.backgroundColor = randomCode;
    document.getElementById("colorCode").textContent = randomCode; // Update color text
};

document.getElementById("btn").addEventListener("click", getColor);

// Set a random color when the page loads
getColor();
