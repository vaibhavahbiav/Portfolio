const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');


let isValid = false;
let passwordsMatch = false;

function validateForm(){
    // using constraint API
    isValid = form.checkValidity();
    // style main message for an error
    if(!isValid){
        message.textContent = 'Please fill out all fields.';
        message.style.color = '#e23333';
        messageContainer.style.borderColor = '#e23333';
        return;
    }
    // check to see if passwords match
    if(password1El.value === password2El.value){
        passwordsMatch = true;
        password1El.style.borderColor = '#2dda2d';
        password2El.style.borderColor = '#2dda2d';
    }else{
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = '#e23333';
        messageContainer.style.borderColor = '#e23333';
        password1El.style.borderColor = '#e23333';
        password2El.style.borderColor = '#e23333';
        return;
    }
    // if form is valid & passwords match
    if(isValid && passwordsMatch){
        message.textContent = 'Successfully Registered!';
        message.style.color = '#2dda2d';
        messageContainer.style.borderColor = '#2dda2d';
    }
}

// store form data
function storeFormData(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    // do something with user data
    console.log(user);
}

function processFormData(e){
    e.preventDefault();
    // validate form
    validateForm();
    // submit data if valid
    if(isValid && passwordsMatch){
        storeFormData();
    }
}

// event listener
form.addEventListener('submit', processFormData);