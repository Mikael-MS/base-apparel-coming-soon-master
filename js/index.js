
let email = document.querySelector(".email");
let erro = document.querySelector(".error");
let menssage = document.querySelector("#menssage-error");
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function showError(email){ 
    email = document.querySelector(".email").value;
    if(email === "" || !validatorEmail(email)){
    menssage.innerHTML= "Please provide a valid email";
    menssage.style.color = 'red';
    erro.style.display= 'block';

    } 
    else {
        erro.style.display= 'none';
        menssage.innerHTML = "Email successfully sent";
        email = document.querySelector(".email").value = "";
        menssage.style.color = 'green';
    }
}


function validatorEmail(email){
    let emailPattern = emailRegex;
    return emailPattern.test(email);
}






