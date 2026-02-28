let cssbuttons = document.getElementById("cssbuttons");
let okmassage = document.getElementById("okmassage");
let nomassage = document.getElementById("nomassage");
let UserName = document.getElementById("UserName");
let UserEmail = document.getElementById("UserEmail");
let UserNumber = document.getElementById("UserNumber");
let UserPassword = document.getElementById("UserPassword");
let logoButton = document.getElementById("logoButton");
let profileButton = document.getElementById("profileButton");
let settingsBox = document.getElementById("settingsBox");
let FullClose = document.getElementById("FullClose");
let mainbtncontent = document.getElementById("mainbtncontent");
let logoffbtn = document.getElementById("logoffbtn");
let mainname = document.getElementById("mainname");
let coursesBox = document.getElementById("coursesBox");
let why_we = document.getElementById("why_we");
let socialfooter = document.getElementById("socialfooter");
let loginMenu = document.getElementById("loginMenu");
if (window.localStorage.getItem("Userlogined") === "true") {
  logoButton.style.display = "none";
  why_we.style.display = "none";
  coursesBox.style.display = "block";
  socialfooter.style.display = "block";
  profileButton.style.display = "flex";
  mainbtncontent.innerText = "المزيد من المعلومات";
  cssbuttons.onclick = function () {
    window.location.href = "index.html#idBTN";
  };
} else {
  socialfooter.style.display = "none";
  coursesBox.style.display = "none";
  why_we.style.display = "block";
  logoButton.style.display = "flex";
  profileButton.style.display = "none";
  mainbtncontent.innerText = "إشترك معنا الأن";
  cssbuttons.onclick = function () {
    if (loginMenu.style.display === "none") {
      loginMenu.style.display = "block";
      FullClose.style.display = "flex";
      FullClose.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
      document.body.style.overflowY = "hidden";
    } else {
      loginMenu.style.display = "none";
      FullClose.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  };
}

// window.localStorage.clear();
// localStorage.setItem("user_Is_perants", "true");
// window.localStorage.setItem("Userlogined", "true")
// window.localStorage.setItem("examsubmitted", "true")
// window.localStorage.setItem("Userpassword", "div123")
// window.localStorage.removeItem("examsubmitted_4")
// window.localStorage.setItem("Username", "حازم محمد حسن")
// window.localStorage.setItem("Useremail", "moasdmasdjkfsa2@gmail.com")

profileButton.onclick = function () {
  if (settingsBox.style.left === "-250px") {
    settingsBox.style.left = "0px";
    document.body.style.overflowY = "hidden";
    FullClose.style.display = "flex";
  } else {
    settingsBox.style.left = "-250px";
    document.body.style.overflowY = "auto";
    FullClose.style.display = "none";
  }
};
FullClose.onclick = function () {
  FullClose.style.display = "none";
  loginMenu.style.display = "none";
  settingsBox.style.left = "-250px";
  document.body.style.overflowY = "auto";
};
logoffbtn.onclick = function () {
  window.localStorage.removeItem("Userlogined");
  window.localStorage.removeItem("Username");
  window.localStorage.removeItem("Useremail");
  window.localStorage.removeItem("Usernumber");
  window.localStorage.removeItem("Userpassword");
  window.location.href = "index.html";
};
mainname.innerText = window.localStorage.getItem("Username");
logoButton.onclick = function () {
  if (loginMenu.style.display === "none") {
    loginMenu.style.display = "block";
    FullClose.style.display = "flex";
    FullClose.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    document.body.style.overflowY = "hidden";
  } else {
    loginMenu.style.display = "none";
    FullClose.style.display = "none";
    document.body.style.overflowY = "auto";
  }
};
let perantsBOX = document.getElementById("perantsBOX");
if (window.localStorage.getItem("user_Is_perants") === "true") {
  perantsBOX.style.display = "flex";
} else {
  perantsBOX.style.display = "none";
}
let chatBTN = document.getElementById("chatBTN");
let ChatingBox = document.getElementById("ChatingBox");
let closechating = document.getElementById("closechating");
chatBTN.onclick = function () {
  ChatingBox.style.display = "block";
};
closechating.onclick = function () {
  ChatingBox.style.display = "none";
};
if (window.localStorage.getItem("Userpassword") === "div123") {
  chatBTN.style.display = "flex";
} else {
  chatBTN.style.display = "none";
}
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
btn1.onclick = function () {
  window.localStorage.removeItem("examsubmitted_4");
  window.location.reload();
};
btn2.onclick = function () {
  window.localStorage.clear();
  window.location.replace("./index.html");
};
