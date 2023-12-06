let inputName = document.getElementById("inputName");
let inputSurname = document.getElementById("inputSurname");
let inputEmail = document.getElementById("inputEmail");
let inputMessage = document.getElementById("inputMessage");

let btnSubmit = document.getElementById("btnSubmit");
let btnCancel = document.getElementById("btnCancel");

let alertValidacionesFields = document.getElementById("alertValidacionesFields");
let alertValidacionesSubmitSuccess = document.getElementById("alertValidacionesSubmitSuccess");

function ValidarEmail(){
    let regEx = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    return regEx.test(inputEmail.value);
}//ValidarEmail

function validarEnvio(){
    let isValid = true;

    if(inputName.value.length < 3){
        alertValidacionesFields.innerHTML = "The field <strong> Name </strong> is required </br>";
        alertValidacionesFields.style.display = "block";
        inputName.style.border = "solid thin red";
        
        isValid = false;
    }//ifinputName.value

    if(inputSurname.value.length < 3){
        alertValidacionesFields.innerHTML += "The field <strong> Surname</strong> is required </br>";
        alertValidacionesFields.style.display = "block";
        inputSurname.style.border = "solid thin red";
        isValid = false;
    }//ifinputSurname.value

    if(!ValidarEmail()){
        alertValidacionesFields.innerHTML += "The field <strong> Email </strong> is required </br>";
        alertValidacionesFields.style.display = "block";
        inputEmail.style.border = "solid thin red";
        isValid = false;
    }//if!ValidarEmail()

    if (inputMessage.value.length < 10) {
        alertValidacionesFields.innerHTML += "The field <strong> Message </strong> is required <br/>";
        alertValidacionesFields.style.display = "block";
        inputMessage.style.border = "solid thin red";
        isValid = false;
    }//inputMessage

    return isValid;

}//functionvalidarEnvio

btnSubmit.addEventListener("click", function(event){

    event.preventDefault();

    alertValidacionesFields.innerHTML = "";
    alertValidacionesFields.style.display = "none";
    inputName.style.border = "";
    inputSurname.style.border = "";
    inputEmail.style.border = "";
    inputMessage.style.border = "";

    if(validarEnvio()){

        Swal.fire({
            icon: 'success',
            title: 'Well done!',
            text: 'The message has been sent successfully'
        });

        inputName.value = "";
        inputSurname.value = "";
        inputEmail.value = "";
        inputMessage.value= "";

    }else{

        Swal.fire({
            icon: "error",
            title: "Oops... ",
            text: "The message could't be send, please fill the required fields",
        });

    }//ifElsevalidarEnvio

})//btnSubmit

btnCancel.addEventListener("click", function (event) {
    event.preventDefault();

    alertValidacionesFields.innerHTML = "";
    alertValidacionesFields.style.display = "none";
    inputName.style.border = "";
    inputSurname.style.border = "";
    inputEmail.style.border = "";
    inputMessage.style.border = "";

    inputName.value = "";
    inputSurname.value = "";
    inputEmail.value = "";
    inputMessage.value = "";
});//btnCancel

