const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateData() {
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let passwordConfirm = document.getElementById('passwordConfirm').value.trim();

    if(username == '') inputInvalid('username', 'usernameErrInfo', "Username cannot be blank");
    else inputGood('username', 'usernameErrInfo');

    if(email == '') inputInvalid('email', 'emailErrInfo', "Email cannot be blank");
    else if(!regExp.test(email)) inputInvalid('email', 'emailErrInfo', "Email is invalid");
    else inputGood('email', 'emailErrInfo');

    if(password == '') inputInvalid('password', 'passwordErrInfo', 'Password cannot be blank');
    else inputGood('password', 'passwordErrInfo');

    if(passwordConfirm == '') inputInvalid('passwordConfirm', 'passwordConfirmErrInfo', "Confirm the password");
    else if(passwordConfirm !== password) inputInvalid('passwordConfirm', 'passwordConfirmErrInfo', "Passwords do not match");
    else inputGood('passwordConfirm', 'passwordConfirmErrInfo');
}

function inputInvalid(inputElementTag, errElementTag, errorMessage) {
    document.getElementById(inputElementTag).style['border-color'] = '#ff0000';
    document.getElementById(errElementTag).innerHTML = errorMessage;
}

function inputGood(inputElementTag, errElementTag) {
    document.getElementById(inputElementTag).style['border-color'] = '#00cc00';
    document.getElementById(errElementTag).innerHTML = "";
}
