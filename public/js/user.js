// var cloudinary = require("cloudinary").v2;
// var Event = require('./main');

$(document).ready(function () {

  var url = window.location.search;
  var eventCode;
  var nameInput = $("#nameInput");
  var userPhoto = $("#userPhoto");
  var emailInput = $("#emailInput");
  var phoneInput = $("#phoneInput");
  var twitterInput = $("#twitterInput");
  var facebookInput = $("#facebookInput");
  var linkedInput = $("#linkedInput");
  var githubInput = $("#githubInput");

  $(document).on("click", "#contactInfoSubmit", handleUserSubmit);

  if (url.indexOf("?event=") !== -1) {
    eventCode = url.split("=")[1];
  }

  function handleUserSubmit(event) {
    event.preventDefault();

    if (!nameInput.val().trim()) {
      return;
    }

    // console.log(eventCode.val());
    console.log(nameInput.val());
    console.log(userPhoto.val());
    console.log(emailInput.val());
    console.log(phoneInput.val());
    console.log(twitterInput.val());
    console.log(facebookInput.val());
    console.log(linkedInput.val());
    console.log(githubInput.val());

    // uploadPhoto(userPhoto);

    newUser({
      code: eventCode,
      name: nameInput.val().trim(),
      photo: userPhoto.val().trim(),
      email: emailInput.val().trim(),
      twitter: twitterInput.val().trim(),
      fb: facebookInput.val().trim(),
      linked_in: linkedInput.val().trim(),
      github: githubInput.val().trim(),
    });

    $.confirm({
      title: 'Done?',
      content: 'Would you like to continue?',
      theme: 'modern',
      buttons: {
        confirm: {
          text: 'Yes',
          btnClass: 'btn-blue',
          keys: ['enter'],
          action: function () {
            window.location.href = `/event/?=${eventCode.toUpperCase()}`;
          }
        },
        cancel: {
          text: 'Cancel',
          btnClass: 'btn-red'
        }
      }
    });
  }

  function newUser(userData) {
    $.post("/api/users", userData);
  }

  // function uploadPhoto(img) {
  //   cloudinary.v2.uploader.upload(img, {tags: nameInput}, function(err,image){
  //     console.log();
  //     console.log("** File Upload");
  //     if (err){ console.warn(err);}
  //     console.log("* public_id for the uploaded image is generated by Cloudinary's service.");
  //     console.log("* "+image.public_id);
  //     console.log("* "+image.url);
  //     waitForAllUploads("",err,image);
  //   });
  // }

});