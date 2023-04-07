const email = document.getElementById('email-input');
const errorMessage = document.getElementById("error-message");
const iconError = document.getElementById("icon-error");


function submitEmail(){
    const emailValue = email.value
    if(!emailValue || !emailValue.includes('@') 
    || !emailValue.includes('.') || emailValue.length <= 4) {
        errorMessage.innerHTML = "Please provide valid email"
        errorMessage.style.color = 'red'
        iconError.style.display = 'block'
    } else {
        errorMessage.innerHTML = "Email successfully sent"
        errorMessage.style.color = 'green'
        email.value = "" 
        iconError.style.display = 'none'
    }
}
