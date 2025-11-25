document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;

    // Simple validation (you can expand this)
    if (name && email && comment) {
        // Simulate successful form submission
        document.getElementById('formMessage').innerText = 'Thank you for your message, ' + name + '!';
        document.getElementById('formMessage').classList.remove('hidden');

        // Clear the form fields
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formMessage').innerText = 'Please fill out all fields.';
        document.getElementById('formMessage').classList.remove('hidden');
    }
});
