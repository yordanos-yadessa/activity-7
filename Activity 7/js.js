//to check password length and confirmation checker on register page
function verifyPassword() {
  let pw = document.getElementById("password").value;

  //check empty password field
  if (pw == "") {
    document.getElementById("message").innerHTML = "Fill the password please!";
  }

  //minimum password length validation
  else if (pw.length < 8 && pw.length > 0) {
    document.getElementById("message").innerHTML =
      "Password length must be atleast 8 characters";
  }

  //maximum length of password validation
  else if (pw.length > 15) {
    document.getElementById("message").innerHTML =
      "Password length must not exceed 15 characters";
  } else {
    document.getElementById("message").innerHTML = "";
  }
}
function che() {
  let pw = document.getElementById("pswd").value;
  var confirem = document.querySelector("#confirem").value;

  if (pw === confirem) {
    document.getElementById("messages").innerHTML = "confrimed";
  } else {
    document.getElementById("messages").innerHTML = "Password not match";
  }
}

//To check Email format on signin page
function checkEmail() {
  let pw = document.getElementById("Username").value;
  var at = pw.split("");
  console.log(pw);
  var count = 0;

  for (var i = 0; i < at.length; i++) {
    if (at[i] === "@") {
      count++;
    }
  }
  if (count == 0) {
    document.getElementById("emessage").innerHTML = "Not on Email format";
  } else {
    document.getElementById("emessage").innerHTML = "";
  }
}



function smm() {
  const input = document.querySelector("input");
  const log = document.getElementById("values");

  input.addEventListener("input", updateValue);

  function updateValue(e) {
    log.textContent = e.target.value;
  }
}



