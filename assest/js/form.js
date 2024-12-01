document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('number').value.trim();
    const companyName = document.getElementById('company-name').value.trim();
    const message = document.querySelector('textarea').value.trim();

    // Simple validation
    if (!name || !email || !phoneNumber || !companyName || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // You can add more validation here if needed (e.g., email format, phone number format)

    // If everything is valid, you can send the form data to a server or display a success message
    alert('Thank you for your submission, ' + name + '! We will get back to you soon.');

    // Optionally, you can reset the form after submission
    document.getElementById('form').reset();
});
