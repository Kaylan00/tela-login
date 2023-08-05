const btnSignin = document.getElementById('signIn');
const btnSignup = document.getElementById('signup');

const body = document.querySelector("body");

//Function onclick
btnSignin.addEventListener('click', function signIn(){
    body.className ='sign-in-js';
    
})
btnSignup.addEventListener('click', function signup(){
    body.className = 'sign-up-js';
})
    










