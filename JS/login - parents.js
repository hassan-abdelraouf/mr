let UserEmail = document.getElementById("UserEmail");
let UserPassword = document.getElementById("UserPassword");
let okmassage = document.getElementById("okmassage");
let nomassage = document.getElementById("nomassage");
let btn = document.getElementById("btn");

btn.onclick = function () {
  if ((UserEmail.value === "s") & (UserPassword.value === "s")) {
    okmassage.style.top = "-10px";
    setTimeout(function () {
      okmassage.style.top = "-80px";
    }, 4000);
    window.localStorage.setItem("user_Is_perants", "true");
  } else if ((UserEmail.value === "e") & (UserPassword.value === "e")) {
    okmassage.style.top = "-10px";
    setTimeout(function () {
      okmassage.style.top = "-80px";
    }, 4000);
    window.localStorage.setItem("user_Is_perants", "true");
  } else {
    nomassage.style.top = "-10px";
    setTimeout(function () {
      nomassage.style.top = "-80px";
    }, 4000);
  }
};

if (localStorage.getItem("user_Is_perants") === "true") {
  window.location.replace("./index.html");
}

