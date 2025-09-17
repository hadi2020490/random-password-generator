var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

var passwordField = document.getElementById("password");
var generateBtn = document.getElementById("generateBtn");
var copyBtn = document.getElementById("copyBtn");

generateBtn.onclick = function() {

  var passwordLength = 12;

  var password = "";

  var i = 0;

  while (i < passwordLength) {
    var randomIndex = Math.floor(Math.random() * chars.length);

    password = password + chars[randomIndex];

    i = i + 1;
  }

  passwordField.value = password;
};

copyBtn.onclick = function() {

  passwordField.select();
  passwordField.setSelectionRange(0, 99999);

  document.execCommand("copy");

  alert("Password copied: " + passwordField.value);
};
