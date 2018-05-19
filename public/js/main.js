$(document).ready(function () {
  $(document).on("click", "#newEventButton", createEvent);
  var eventCode;

  function createEvent(event) {
    event.preventDefault();
    codeGenerator();
    $("#newEventCode").text(eventCode);
    console.log(eventCode);
  }

  function codeGenerator() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    eventCode = '';
    for (var i = 0; i < 4; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      eventCode += chars.substring(rnum,rnum+1);
    }
  }



});