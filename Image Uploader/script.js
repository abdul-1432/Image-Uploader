function showPasswordPrompt() {
    var password = prompt("Please enter the password:");

    // Check if the entered password is correct (0000)
    if (password === "0000") {
        // If password is correct, show the new button
        document.getElementById("newButton").style.display = "block";
    } else {
        // If password is incorrect, show an alert
        alert("Incorrect password. Please try again.");
    }
}

function newButtonClicked() {
    // Create an input element of type file
    var input = document.createElement("input");
    input.type = "file";

    // Trigger the click event on the input element
    input.click();

    // Listen for the change event on the input element
    input.addEventListener("change", function() {
        // Handle the selected file
        var selectedFile = input.files[0];
        if (selectedFile) {
            // Create a new card element
            var card = document.createElement("div");
            card.className = "card";

            // Create a new image element
            var image = document.createElement("img");
            image.src = URL.createObjectURL(selectedFile);

            // Create a date popup element
            var datePopup = document.createElement("div");
            datePopup.className = "datePopup";
            datePopup.innerText = getFormattedDate();

            // Append elements to the card
            card.appendChild(image);
            card.appendChild(datePopup);

            // Add the card to the container
            var container = document.getElementById("imageContainer");
            container.insertBefore(card, container.firstChild); // LIFO pattern

            // You can add additional logic to handle the selected file
        }
    });
}

function getFormattedDate() {
    var now = new Date();
    return now.toLocaleString();
}