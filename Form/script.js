const form = document.getElementById("form");

const username = document.getElementById("username");

const password = document.getElementById("password");

const email = document.getElementById("email");

const password_confirmation = document.getElementById("password-confirmation");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
     const usernameValue = username.value;
     const emailValue = email.value;
     const passwordValue = password.value;
     const password_confirmationValue = password_confirmation.value;

     if(usernameValue == ''){
        setErrorFor(username,"O nome é obrigatório");
     }else{
        setSuccessFor(username);
     }
     if(emailValue == ''){
        setErrorFor(email,"O e-mail é obrigatório");
     }else if(!checkEmail(emailValue)){
        setErrorFor(email,"Insira um e-mail válido");
     }else{
        setSuccessFor(username);
     }
}

function setErrorFor(input, message){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector("small");
    small.innerText = message;

    formcontrol.className = "form-control error";
}

function setSuccessFor(input){
    const formcontrol = input.parentElement;

    formcontrol.className = "form-control success";
}


function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}