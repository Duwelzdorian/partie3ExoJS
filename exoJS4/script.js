function validate() {

  var a = document.getElementById("password").value;
  var b = document.getElementById("confirmPassword").value;

  // ou (a==b)
  if (a != b) {
    document.getElementById("password").style.border = '1px solid red';
    document.getElementById("confirmPassword").style.border = '1px solid red';
  } else {
    document.getElementById("password").style.border = '1px solid green';
    document.getElementById("confirmPassword").style.border = '1px solid green';
  }
}


// function validation(f) {
//   if (f.password.value == '' || f.confirmPassword.value == '') {
//     alert('Tous les champs ne sont pas remplis');
//     f.password.focus();
//     return false;
//     }
//   else if (f.password.value != f.confirmPassword
// .value) {
//     alert('Ce ne sont pas les mêmes mots de passe!');
//     f.password.focus();
//     return false;
//     }
//   else if (f.password.value == f.confirmPassword
// .value) {
//     return true;
//     }
//   else {
//     f.password.focus();
//     return false;
//     }
//   }
