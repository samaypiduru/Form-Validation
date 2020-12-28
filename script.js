function validateData() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const passwordConfirm = document.getElementById('passwordConfirm').value.trim();

    if(username == '') inputInvalid('username', 'usernameErrInfo', "Username cannot be blank");
    else inputGood('username', 'usernameErrInfo');

    if(email.length == '') inputInvalid('email', 'emailErrInfo', "Email cannot be blank");
    else if(!validateEmail(email)) inputInvalid('email', 'emailErrInfo', "Email is invalid");
    else inputGood('email', 'emailErrInfo');

    if(password.length == '') inputInvalid('password', 'passwordErrInfo', 'Password cannot be blank');
    else inputGood('password', 'passwordErrInfo');

    if(passwordConfirm.length == '') inputInvalid('passwordConfirm', 'passwordConfirmErrInfo', "Confirm the password");
    else if(passwordConfirm !== password) inputInvalid('passwordConfirm', 'passwordConfirmErrInfo', "Passwords do not match");
    else inputGood('passwordConfirm', 'passwordConfirmErrInfo');
}

function validateEmail(emailAddress) {
    let exp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return exp.test(emailAddress);
}

function inputInvalid(inputElementTag, errElementTag, errorMessage) {
    document.getElementById(inputElementTag).style['border-color'] = '#ff0000';
    document.getElementById(errElementTag).innerHTML = errorMessage;
}

function inputGood(inputElementTag, errElementTag) {
    document.getElementById(inputElementTag).style['border-color'] = '#00cc00';
    document.getElementById(errElementTag).innerHTML = "";
}