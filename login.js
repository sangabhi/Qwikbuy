document.addEventListener("DOMContentLoaded", function() {
    // Function to save signup details to local storage
    function saveSignUpDetails() {
        let name = document.querySelector('#sign-up-name').value;
        let phone = document.querySelector('#sign-up-phone').value;
        let email = document.querySelector('#sign-up-email').value;
        let password = document.querySelector('#sign-up-password').value;

        let userDetails = {
            name: name,
            phone: phone,
            email: email,
            password: password
        };

        localStorage.setItem(email, JSON.stringify(userDetails));
        alert('Sign Up Successful!');
    }

    // Function to check login details from local storage
    function checkLoginDetails() {
        let email = document.querySelector('#login-email').value;
        let password = document.querySelector('#login-password').value;

        let storedUserDetails = localStorage.getItem(email);

        if (storedUserDetails) {
            let userDetails = JSON.parse(storedUserDetails);
            if (userDetails.password === password) {
                alert('Login Successful!');
                window.location.href = 'index.html';
            } else {
                alert('Incorrect Password');
            }
        } else {
            alert('No data found. Please sign up first.');
        }
    }

    // Event listeners for the buttons
    document.querySelector('#sign-up-btn').addEventListener('click', saveSignUpDetails);
    document.querySelector('#login-btn').addEventListener('click', checkLoginDetails);
});
