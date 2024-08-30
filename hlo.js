const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');
const form = document.getElementById('form');

const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const number_error = document.getElementById('number_error');
const password_error = document.getElementById('password_error');
const confirm_password_error = document.getElementById('confirm_password_error');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission by default

    const email_check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const number_check = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const password_check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

    let isValid = true;

    // Validate Name
    if (name.value.trim().length < 6) {
        name_error.innerHTML = 'At least 6 characters are required';
        isValid = false;
    } else {
        name_error.innerHTML = '';
    }

    // Validate Email
    if (!email_check.test(email.value.trim())) {
        email_error.innerHTML = 'Valid email is required';
        isValid = false;
    } else {
        email_error.innerHTML = '';
    }

    // Validate Phone Number
    if (!number_check.test(number.value.trim())) {
        number_error.innerHTML = 'Valid phone number is required';
        isValid = false;
    } else {
        number_error.innerHTML = '';
    }

    // Validate Password
    if (password.value.length < 8) {
        password_error.innerHTML = 'At least 8 characters should be included';
        isValid = false;
    } else if (!password_check.test(password.value)) {
        password_error.innerHTML = 'Password must include uppercase, lowercase, number, and special character';
        isValid = false;
    } else {
        password_error.innerHTML = '';
    }

    // Validate Confirm Password
    if (confirm_password.value !== password.value) {
        confirm_password_error.innerHTML = 'Passwords do not match';
        isValid = false;
    } else {
        confirm_password_error.innerHTML = '';
    }

    // If all validations pass, allow form submission
    if (isValid) {
        form.submit();
    }
});
