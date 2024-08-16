// const signup_form = document.getElementById('signup-form');
// const full_name_input = document.getElementById('full-name-input');
// const email_input = document.getElementById('email-input');
// const phone_number_input = document.getElementById('phone-number-input');
// const password_input = document.getElementById('password-input');
// const error_message = document.getElementById('error-message');


// signup_form.addEventListener('submit', (e) => {


//     let errors = []

//     if (full_name_input) {

//         errors.getSignupFormErrors(full_name_input.value, email_input.value, phone_number_input.value, password_input.value)
//     }
//     else {


//         errors.getLoginFormErrors(email_input.value, password_input.value)
//     }
//     if (errors.length > 0) {
//         e.preventDefault();
//         error_message.innerText = errors.join('. ');
//     }
// });

// function getSignupFormErrors(fullname, email, phonenumber, password) {
//     let errors = []

//     if (fullname === '' || fullname == null) {
//         errors.push('Full name is required');
//     }
//     if (email === '' || email == null) {
//         errors.push('Full name is required');
//     }
//     if (phonenumber === '' || phonenumber == null) {
//         errors.push('Full name is required');
//     }
//     if (password === '' || password == null) {
//         errors.push('Full name is required');
//     }

//     return errors;
// }

function postYourAdd () {
    var iframe = $("#forPostyouradd");
    iframe.attr("src", iframe.data("src")); 
}

function closeIFrame(){
    $('#forPostyouradd').remove();
}