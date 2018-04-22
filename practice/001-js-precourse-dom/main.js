(function() {
  let btn = document.querySelector("#login");
  let userName = document.querySelector("[name = userName]");
  let userPassword = document.querySelector("[name = userPassword]");
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    if (userName.value != 123 || userPassword.value != 123) {
        alert('your user password or your name was wrong!')
    }else{
        alert('login success!')
    }
  });
})();
