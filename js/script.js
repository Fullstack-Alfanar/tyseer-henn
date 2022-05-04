let email = document.getElementById("email");
let password = document.getElementById("password");
let subm = document.getElementById("sub")

subm.addEventListener("click", () => {
    let emailBox = document.querySelector('.emailBox');
    let emailText = document.querySelector('.emailText');
    let emailPattern = /^[a-zA-Z0-9" ".!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.value.match(emailPattern)) {
        emailBox.classList.add('valid');
        emailBox.classList.remove('invalid');
        emailBox.style.color = 'green';
        emailText.innerHTML = "Your Email Address in Valid";

    }
    else {
        emailBox.classList.add('invalid');
        emailBox.classList.remove('valid');
        emailBox.style.color = 'red';
        emailText.innerHTML = "Your Email Address is Invalid";
    }

    let passBox = document.querySelector('.passBox');
    let passText = document.querySelector('.passText');
    let passPattern = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    let passSmall = ("^(?=.*[a-z])");
    let passBig = ("^(?=.*[A-Z])");
    let passnum = ("^(?=.*[0-9])");
    let passlength = ("^(?=.{8,})");
    let specChar = ("^(?=.*[!@#\$%\^&\*])");
    let passEng = /[^\x00-\x7F]+/;
    let passpat = /^(?!.*(012|123|234|345|456|567|678|789{3,})).*$/;

    if (password.value.match(passPattern)) {
        passBox.classList.add('valid');
        passBox.classList.remove('invalid');
        passText.style.color = 'green';
        passText.innerHTML = "Your Password is valid";
    }
    
   
    //------------------------------------------------------------

    else if (!password.value.match(passnum)) {
        passBox.classList.add('invalid');
        passBox.classList.remove('valid');
        passText.style.color = 'red';

        passText.innerHTML = "Your password doesn't has a numbers";
    }
    //------------------------------------------------------------


    else if (!password.value.match(passlength)) {
        passBox.classList.add('invalid');
        passBox.classList.remove('valid');
        passText.style.color = 'red';

        passText.innerHTML = "Your password has to be minimum 8 charcters";
    }
    //-------------------------------------------------------------

    else if (!password.value.match(specChar)) {
        passBox.classList.add('invalid');
        passBox.classList.remove('valid');
        passText.style.color = 'red';

        passText.innerHTML = "please add special charcters";
    }
    //-------------------------------------------------------------

    


    if (!password.value.match(passpat)) {
        passBox.classList.add('invalid');
        passBox.classList.remove('valid');
        passText.style.color = 'red';
        passText.innerHTML = "your password has 3 consecutive numbers.";


    }

    if (!password.value.match(passSmall)) {
        passBox.classList.add('invalid');
        passBox.classList.remove('valid');
        passText.style.color = 'red';

        passText.innerHTML = "Your password doesn't has a lowercase letter"; 
    }
    //-----------------------------------------------------


    else if (!password.value.match(passBig)) {
        passBox.classList.add('invalid');
        passBox.classList.remove('valid');
        passText.style.color = 'red';

        passText.innerHTML = "Your password doesn't has a big letter";
    }

    else if (password.value.match(passEng)){
        passBox.classList.add('invalid');
        passBox.classList.remove('valid');
        passText.style.color = 'red';

        passText.innerHTML = "only english please";
    }

    
    
     
});

