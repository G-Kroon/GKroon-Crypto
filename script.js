document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for form submission
    const signupForm = document.querySelector('#signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            validateSignupForm();
        });
    }

    const loginForm = document.querySelector('#loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            validateLoginForm();
        });
    }
});

function validateSignupForm() {
    const name = document.querySelector('#name').value;
    const whatsapp = document.querySelector('#whatsapp').value;
    const email = document.querySelector('#email').value;
    const country = document.querySelector('#country').value;

    if (name && whatsapp && email && country) {
        sendEmail('signup', email);
        alert('Registration successful!');
    } else {
        alert('Please fill in all fields.');
    }
}

function validateLoginForm() {
    const email = document.querySelector('#loginEmail').value;
    const password = document.querySelector('#loginPassword').value;

    if (email && password) {
        sendEmail('login', email);
        alert('Login successful!');
    } else {
        alert('Please fill in all fields.');
    }
}

function sendEmail(type, email) {
    emailjs.send('service_id', 'template_id', {
        user_email: email,
        message: `You have successfully ${type === 'signup' ? 'registered' : 'logged in'}.`
    }).then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
        console.log('FAILED...', error);
    });
}

function redirectToPayment() {
    window.location.href = 'payment.html';
}