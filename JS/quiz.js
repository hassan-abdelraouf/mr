let settingsBox = document.getElementById("settingsBox");
let FullClose = document.getElementById("FullClose");
let logoffbtn = document.getElementById("logoffbtn");
let mainname = document.getElementById("mainname");
let nameInput = document.getElementById("nameInput");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let FullMassage = document.getElementById("FullMassage");
let Username = localStorage.getItem("Username") || "";
nameInput.value = Username;
if (localStorage.getItem("examsubmitted_4") === "true") {
  window.location.replace("../index.html");
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
let questions = Array.from(document.querySelectorAll(".question"));
shuffleArray(questions);
let container = questions[0].parentElement;
questions.forEach((q) => container.appendChild(q));
let current = 0;
questions.forEach((q) => (q.style.display = "none"));
questions[current].style.display = "block";
function updateQuestionNumber() {
  let num = questions[current].querySelector(".question-num");
  if (num) {
    num.innerText = `السؤال: ${current + 1} من ${questions.length}`;
  }
}
updateQuestionNumber();
function updateButtons() {
  prevBtn.style.opacity = current === 0 ? "0.4" : "1";
  prevBtn.style.pointerEvents = current === 0 ? "none" : "auto";
  nextBtn.style.opacity = current === questions.length - 1 ? "0.4" : "1";
  nextBtn.style.pointerEvents =
    current === questions.length - 1 ? "none" : "auto";
}
updateButtons();
function next() {
  if (current < questions.length - 1) {
    questions[current].style.display = "none";
    current++;
    questions[current].style.display = "block";
    updateButtons();
    updateQuestionNumber();
  }
}
function prev() {
  if (current > 0) {
    questions[current].style.display = "none";
    current--;
    questions[current].style.display = "block";
    updateButtons();
    updateQuestionNumber();
  }
}
let timeValue = 30;
let time = timeValue * 60;
let timer = setInterval(() => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  document.getElementById("timer").innerText = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
  time--;
  if (time < 0) {
    clearInterval(timer);
    autoSubmit("انتهى الوقت");
  }
}, 1000);
const bar = document.getElementById("progress");
const duration = timeValue * 60;
let startTime = Date.now();
function updateBar() {
  let elapsed = (Date.now() - startTime) / 1000;
  let percent = Math.max(100 - (elapsed / duration) * 100, 0);
  bar.style.width = percent + "%";
  if (percent > 0) requestAnimationFrame(updateBar);
}
updateBar();
function showConfirm() {
  document.getElementById("confirmBox").style.display = "block";
}
function hideConfirm() {
  document.getElementById("confirmBox").style.display = "none";
}
let autoSubmitted = false;
function submitExam(reason = "تسليم يدوي") {
  if (autoSubmitted) return;
  autoSubmitted = true;
  FullMassage.style.display = "flex";
  let score = 0;
  for (let i = 1; i <= questions.length; i++) {
    let q = document.querySelector(`input[name="q${i}"]:checked`);
    if (q) score += Number(q.value);
  }
  let elapsed = Math.floor((Date.now() - startTime) / 1000);
  let minutes = Math.floor(elapsed / 60);
  let seconds = elapsed % 60;
  let elapsedTimeText = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  localStorage.setItem("examsubmitted_4", "true");
  localStorage.setItem("Lastscore", score);
  const token = "8506814802:AAFtVRAB3jd6s4it2bkL0hxBz_obZ8A44fw";
  const chat_id = "-5252684975";
  const message = `📋 نتيجة اختبار
👤 الاسم: ${Username}
📅 التاريخ: ${new Date().toLocaleString("ar-EG")}
💯 الدرجة: ${score}
⌚ الوقت المستغرق: ${elapsedTimeText}
🟢 طريقة التسليم: ${reason}
`;
  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id, text: message }),
  }).finally(() => {
    window.location.replace("../index.html");
  });
}
function autoSubmit(reason) {
  submitExam(reason);
}
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    autoSubmit("الخروج من الصفحة");
  }
});
window.addEventListener("beforeunload", () => {
  autoSubmit("إغلاق الصفحة");
});
let btn = document.getElementById("fullscreenBtn");
btn.addEventListener("click", function () {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});
