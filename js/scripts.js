$(document).ready(function() {
  $("#phone-input").inputmask({"mask": "(999) 999-9999"});


  $('#phone-form').submit(function(event) {
        event.preventDefault();
        var phoneNumber = $("#phone-input").val();
	    localStorage.setItem("phoneNumber", phoneNumber);
	    window.location.href = 'compose.html';

	    loadCompose()
    });

});

function sendMessage() {
    var message = $('#message').val();
	localStorage.setItem("message", message);
	var phoneNumber = localStorage.getItem("phoneNumber");
    window.location.href = 'qr.html';

    createQr(message, phoneNumber);
}

function loadQr() {
	var phoneNumber = localStorage.getItem("phoneNumber");
	var message = localStorage.getItem("message");
	new QRCode("qrcode", "sms://" + phoneNumber + "&body=" + message);
}