const keylogger = document.getElementById("keylogger");

window.addEventListener('keypress', function (event) {
   keylogger.value += event.key;
})