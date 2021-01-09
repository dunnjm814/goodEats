window.addEventListener('DOMContentLoaded', (event) => {
  const formHolder = document.getElementById('forms');
  const signUpForm = document.getElementById('signup__form');
  const logInForm = document.getElementById('login__form');
  const demoUserForm = document.getElementById('demoUser__form');
  const header = document.getElementById('header__1');

  const logInButton = document.getElementById('logInButton');
  const signUpButton = document.getElementById('signUpButton');
  const demoUserButton = document.getElementById('demoButton');

  const loginErrorAlert = document.querySelector('.loginErrors');
  const signUpErrorAlert = document.querySelector('.signUpErrors');

  const fadeIn = [logInButton, signUpButton, demoUserButton, header];

  if (!loginErrorAlert && !signUpErrorAlert) {
    fadeIn.forEach((element) => element.classList.add('fade-in'));
  } else if (loginErrorAlert) {
    logInButton.classList.add('hidden');
    formHolder.classList.remove('hidden');
    logInForm.classList.remove('hidden');
  } else {
    signUpForm.classList.remove('hidden');
    formHolder.classList.remove('hidden');
    signUpButton.classList.add('hidden');
  }

  logInButton.addEventListener('click', (event) => {
    logInButton.classList.add('hidden');
    signUpButton.classList.remove('hidden');
    demoUserButton.classList.remove('hidden');

    if(signUpErrorAlert) {
    signUpErrorAlert.classList.add('hidden');
    }

    if (logInForm.classList.contains('hidden')) {
      formHolder.classList.remove('hidden');
      logInForm.classList.remove('hidden');
      demoUserForm.classList.add('hidden');
      signUpForm.classList.add('hidden');
    } else {
      logInForm.classList.add('hidden');
    }
  });

  signUpButton.addEventListener('click', (event) => {
    signUpButton.classList.add('hidden');
    logInButton.classList.remove('hidden');
    demoUserButton.classList.remove('hidden');

    if(loginErrorAlert) {
    loginErrorAlert.classList.add('hidden');
    }

    if (signUpForm.classList.contains('hidden')) {
      formHolder.classList.remove('hidden');
      signUpForm.classList.remove('hidden');
      logInForm.classList.add('hidden');
      demoUserForm.classList.add('hidden');
    } else {
      signUpForm.classList.add('hidden');
    }
  });

  demoUserButton.addEventListener('click', (event) => {
    logInButton.classList.remove('hidden');
    signUpButton.classList.remove('hidden');
    demoUserButton.classList.add('hidden');

   if(loginErrorAlert) {
    loginErrorAlert.classList.add('hidden');
   }

   if(signUpErrorAlert) {
    signUpErrorAlert.classList.add('hidden');
   }
    if (demoUserForm.classList.contains('hidden')) {
      formHolder.classList.remove('hidden');
      demoUserForm.classList.remove('hidden');
      logInForm.classList.add('hidden');
      signUpForm.classList.add('hidden');
    } else {
      demoUserForm.classList.add('hidden');
    }
  });




});
