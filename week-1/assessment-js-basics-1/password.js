let password = 'RT869lkdhhtYY';

let passLengthCheck = false;
if(password != null && password.length > 9 && password.length < 21){
   passLengthCheck = true;
}

let hasNumber = /\d/.test(password);
let hasLetter = /[a-zA-Z]/.test(password);
let lowerCaseCheck = /[a-z]/.test(password);
let upperCaseCheck = /[A-Z]/.test(password);
let specialCharCheck = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
let hasSpaces = /\s/.test(password);


if(passLengthCheck && hasNumber && hasLetter && lowerCaseCheck && upperCaseCheck && specialCharCheck && !hasSpaces) {
    console.log('Hooray!!! Your password meets the criteria');
} else {
    console.log('Ooops!!! Your password does not meet the criteria');