$(document).ready(function () {

  var url = window.location.search;
  var eventCode;
  var userId;

  // display event code
  if (url.indexOf("?=") !== -1) {
    eventCode = url.split("=")[1];
    console.log(eventCode);
    $("#event-id-span").text(eventCode);
    // displayUsers();
    grabUsers();
  } else if (url.indexOf("?=") == -1) {
    // displayEmpty();
  }

  function displayUsers() {

  }

  // get all users from db
  function grabUsers() {
    $.get("/api/users", function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        if (data[i].code == eventCode) {
          createNewUser(data[i]);
        }
      }
    })
  }

  function createNewUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.fb);
    console.log(user.github);
    console.log("-----------");
    var newUserCard = $("<div>");
    newUserCard.addClass("card");
    var newUserCardHeading = $("<div>");
    newUserCardHeading.addClass("card-header");
    // var deleteBtn = $("<button>");
    // deleteBtn.text("x");
    // deleteBtn.addClass("delete btn btn-danger");
    // var editBtn = $("<button>");
    // editBtn.text("EDIT");
    // editBtn.addClass("edit btn btn-info");
    var newUserCardBody = $("<div>");
    newUserCardBody.addClass("card-body");
    var newUserName = $("<h2>");
    newUserName.text(user.name);
    var newUserEmail = $("<h4>");
    newUserEmail.text(user.email);
    var newUserTwitter = $("<p>");
    newUserTwitter.text(`@${user.github}`);
    newUserCardBody.append(newUserName);
    newUserCardBody.append(newUserEmail);
    newUserCardBody.append(newUserTwitter);
    // var newUserDate = $("<small>");
    // newUserName.css({
    //   float: "right",
    //   color: "blue",
    //   "margin-top": "-10px"
    // });
    // newUserEmail.append(newUserDate);
    // newUserCardHeading.append(deleteBtn);
    // newUserCardHeading.append(editBtn);
    // newUserCardHeading.append(newUserTitle);
    // newUserCardHeading.append(newUserAuthor);
    // newUserCardBody.append(newUserBody);
    newUserCard.append(newUserCardHeading);
    newUserCard.append(newUserCardBody);
    $(".user-container").append(newUserCard);
    // return newUserCard;
  }

  // button links will eventually export user information to .vcf

});