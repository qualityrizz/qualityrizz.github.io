function sendSMS() {
  var message = document.getElementById("message").value;
  localStorage.setItem("message", message);
  window.location.href = "qr.html";
}
