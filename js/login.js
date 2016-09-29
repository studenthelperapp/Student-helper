/*FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    console.log(response.authResponse.accessToken);
  }
});

FB.api('/me', function(response) {
    console.log(JSON.stringify(response));
});

FB.logout(function(response) {
   console.log("You are now logged out!");
});

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}*/

var sinBut = document.getElementById("signin");
var supBut = document.getElementById("signup");
var nameInput = document.getElementById("name");
var pwdInput = document.getElementById("password");
var logBut = document.getElementById("log");
var getpwdLink = document.getElementById("getpwd");
var emailInput = document.getElementById("email");

sinBut.onclick = function(){
    sinBut.style.display = "none";
    supBut.style.display = "none";
    nameInput.style.display = "inline";
    pwdInput.style.display = "inline";
    pwdInput.style.marginTop = "10%";
    logBut.style.marginTop = "10%";
    getpwdLink.style.display = "inline";
}

supBut.onclick = function(){
    sinBut.style.display = "none";
    supBut.style.display = "none";
    nameInput.style.display = "inline";
    pwdInput.style.display = "inline";
    logBut.innerHTML = "Register";
    logBut.style.marginTop = "10%";
    pwdInput.style.marginTop = "10%";
    logBut.style.marginTop = "10%";
    emailInput.style.marginTop = "10%";
    emailInput.style.display = "inline";
}

function checkNamepassword(input) {
          if(input.validity.valueMissing) {
              input.setCustomValidity("You must enter a name!");
               logBut.style.display = "none";
          } else{
              input.setCustomValidity(""); 
         }
        }

function checkEmail(input){
           if(input.validity.valueMissing) {
              input.setCustomValidity("Email has to be filled in!");
              logBut.disabled = true;

          } else {
              input.setCustomValidity("");
              logBut.disabled = false;
          }    
        }

function checkPassword(input){
           if(input.validity.valueMissing) {
              input.setCustomValidity("Password has to be filled in!");
              logBut.style.display = "none";

          } else {
              input.setCustomValidity("");
              logBut.style.display = "inline";
          }    
        }
