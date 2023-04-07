const email = document.getElementById('email-input');
const messageError = document.getElementById("message-error");
const iconError = document.getElementById("icon-error");


function submitEmail(){
    const emailValue = email.value
    if(!emailValue || !emailValue.includes('@') 
    || !emailValue.includes('.') || emailValue.length <= 4) {
        messageError.innerHTML = "Please provide valid email"
        messageError.style.color = 'red'
        iconError.style.display = 'block'
    } else {
        messageError.innerHTML = "Email successfully sent"
        messageError.style.color = 'green'
        emailValue.innerHTML= ""
        iconError.style.display = 'none'
    }
}
