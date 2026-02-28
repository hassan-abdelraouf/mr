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
let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let comment = document.getElementById("comment");
nameInput.value = window.localStorage.getItem("Username");
emailInput.value = window.localStorage.getItem("Useremail");
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const token = "8506814802:AAFtVRAB3jd6s4it2bkL0hxBz_obZ8A44fw";
  const chat_id = "-5252684975";
  const message = `📖 رسالة شكوى جديدة:
الاسم: ${window.localStorage.getItem("Username")}
البريد: ${window.localStorage.getItem("Useremail")}
الرسالة: ${comment.value}`;
  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id, text: message }),
  })
    .then(() => {
      if (typeof okmassage !== "undefined") {
        okmassage.style.top = "-10px";
        setTimeout(function () {
          okmassage.style.top = "-80px";
        }, 3000);
      }
      setTimeout(function () {
        window.location.href = "index.html";
      }, 3000);
    })
    .catch((error) => {
      nomassage.style.top = "-10px";
      setTimeout(function () {
        nomassage.style.top = "-80px";
      }, 3000);
      console.error(error);
    });
});
