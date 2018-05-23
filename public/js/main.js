var eventCode;
// var searchedEvent;

$(document).ready(function () {
  $(document).on("click", "#newEventButton", handleNewEventSubmit);
  $(document).on("click", "#joinEventButton", handleJoinEventSubmit);

  // grab user input
  var eventInput = $("#eventInput");

  // randomly generate 4 char event code
  function codeGenerator() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    eventCode = '';
    for (var i = 0; i < 4; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      eventCode += chars.substring(rnum, rnum + 1);
    }
  }

  // modal that displays newly created event code and sends user to event page
  function handleNewEventSubmit(event) {
    event.preventDefault();

    codeGenerator();

    newEvent({
      code: eventCode
    });

    $("#newEventCode").text(eventCode);

    $.confirm({
      title: 'Event ID:',
      content: eventCode,
      theme: 'modern',
      buttons: {
        confirm: {
          text: 'View Event',
          btnClass: 'btn-blue',
          keys: ['enter'],
          action: function () {
            window.location.href = `/events/?=${eventCode}`;
          }
        },
        cancel: {
          text: 'Cancel',
          btnClass: 'btn-red'
        }
      }
    });
    console.log(eventCode);
  }

  //takes user event code input and sends user to event page
  function handleJoinEventSubmit(event) {
    event.preventDefault();

    if (!eventInput.val().trim()) {
      return;
    }

    searchEvent(eventInput);
  }

  function newEvent(eventData) {
    $.post("/api/events", eventData);
  }

  function successConfirm() {
    $.confirm({
      title: 'Great!',
      content: `You\'ve joined event ${eventInput.val().trim().toUpperCase()}`,
      theme: 'modern',
      buttons: {
        confirm: {
          text: 'Go',
          btnClass: 'btn-blue',
          keys: ['enter'],
          action: function () {
            window.location.href = `/users/?events=${eventInput.val().trim().toUpperCase()}`;
          }
        },
        cancel: {
          text: 'Cancel',
          btnClass: 'btn-red'
        }
      }
    });
  }

  function errorConfirm() {
    $.confirm({
      title: 'Error',
      content: 'This Event does not exist',
      theme: 'modern',
      buttons: {
        confirm: {
          text: 'Ok',
          btnClass: 'btn-blue',
          keys: ['enter']
        },
        cancel: {
          text: 'Cancel',
          btnClass: 'btn-red'
        }
      }
    });
  }

  function searchEvent(eventParam) {
    // eventParam = eventParam.replace(/\s+/g, "").toUpperCase();
    $.get("/api/events/" + eventParam.val(), function (data) {
      console.log(data);
      if (data.length < 1) {
        errorConfirm();
      } else if (data[0].code == eventParam.val().toUpperCase()) {
        successConfirm();
      }
    })
  }


});