// Get the password and confirm password fields
let passwordField = document.getElementById("password");
let confirmPasswordField = document.querySelector("#confirmPassword");
let errorMessage = document.querySelector(".error");
let password= passwordField.value;

passwordField.addEventListener("input", ()=>{ password=passwordField.value;});
confirmPasswordField.addEventListener("input", ()=>{if(confirmPasswordField.value!==password){
    errorMessage.style.display="block";}
    else{
        errorMessage.style.display="none";
    }
});
