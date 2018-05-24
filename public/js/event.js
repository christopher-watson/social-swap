var momentYear = moment().year();
$('.moment-year').html(momentYear);

$(document).ready(function () {

  
  var url = window.location.search;
  var eventCode;
  var userId;
  
  $(document).on("click", "#homeButton", goHome);

  // display event code
  if (url.indexOf("?=") !== -1) {
    eventCode = url.split("=")[1];
    console.log(eventCode);
    $("#event-id-span").text(eventCode);
    grabUsers();
  } else if (url.indexOf("?=") == -1) {
    // displayEmpty();
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
    // start new card
    var newUserCard = $("<div>");
    newUserCard.addClass("card");
    // header
    var newUserCardHeading = $("<div>");
    newUserCardHeading.addClass("card-header bg-info");

    // card body 
    var newUserCardBody = $("<div>");
    var newUserHeaderDiv = $("<div>");
    var newUserHeaderInfo = $("<div>");
    var newUserPhotoDiv = $("<div>");
    var newUserPhoto = $("<img>")
    var newUserName = $("<h3>");
    var newUserEmail = $("<h5>");
    var newUserPhone = $("<p>");
    var newUserSocialDiv = $("<div>");
    var newUserTwitterDiv = $("<div>");
    var newUserTwitter = $("<a>");
    var newUserfbDiv = $("<div>");
    var newUserfb = $("<a>");
    var newUserLinkedInDiv = $("<div>");
    var newUserLinkedIn = $("<a>");
    var newUserGitHubDiv = $("<div>");
    var newUserGitHub = $("<a>");

    // add classes
    newUserCardBody.addClass("card-body");
    newUserHeaderDiv.addClass("header-div");
    newUserHeaderInfo.addClass("header-info");
    newUserPhotoDiv.addClass("user-photo-div")
    newUserSocialDiv.addClass("social-div");
    newUserTwitterDiv.addClass("social-inner twitter");
    newUserfbDiv.addClass("social-inner fb");
    newUserLinkedInDiv.addClass("social-inner linkedin");
    newUserGitHubDiv.addClass("social-inner github");

    // social media images
    var twitterImg = $("<div>");
    twitterImg.addClass("contact-image mr-2");
    twitterImg.html(`<i class="fab fa-twitter"></i>`);
    var fbImg = $("<div>");
    fbImg.addClass("contact-image mr-2");
    fbImg.html(`<i class="fab fa-facebook"></i>`);
    var linkedInImg = $("<div>");
    linkedInImg.addClass("contact-image mr-2");
    linkedInImg.html(`<i class="fab fa-linkedin"></i>`);
    var gitHubImg = $("<div>");
    gitHubImg.addClass("contact-image mr-2");
    gitHubImg.html(`<i class="fab fa-github"></i>`);

    // photo
    newUserPhoto.attr("src", "./../img/cw-round2.png");
    newUserPhoto.addClass("user-photo");
    newUserName.text(user.name);
    newUserEmail.text(user.email);
    newUserPhone.text(user.phone);
    newUserPhotoDiv.append(newUserPhoto);
    newUserHeaderInfo.append(newUserName);
    newUserHeaderInfo.append(newUserEmail);
    newUserHeaderInfo.append(newUserPhone);
    newUserHeaderDiv.append(newUserPhotoDiv);
    newUserHeaderDiv.append(newUserHeaderInfo);
    
    // rest of card body

    if (user.twitter.length > 0) {
      newUserTwitterDiv.append(twitterImg);
      newUserTwitter.text(`@${user.twitter}`);
    }
    newUserTwitter.attr("href", `http://www.twitter.com/${user.twitter}`);
    newUserTwitter.attr("target", "_blank");
    newUserTwitter.addClass("links");
    newUserTwitterDiv.append(newUserTwitter);

    if (user.fb.length > 0) {
      newUserfbDiv.append(fbImg);
    }
    newUserfb.text(user.fb);
    newUserfb.attr("href", `http://www.facebook.com/${user.fb}`);
    newUserfb.attr("target", "_blank");
    newUserfb.addClass("links");
    newUserfbDiv.append(newUserfb);

    if (user.linked_in.length > 0) {
      newUserLinkedInDiv.append(linkedInImg);
    }
    newUserLinkedIn.text(user.linked_in);
    newUserLinkedIn.attr("href", `http://www.linkedin.com/in/${user.linked_in}`);
    newUserLinkedIn.attr("target", "_blank");
    newUserLinkedIn.addClass("links");
    newUserLinkedInDiv.append(newUserLinkedIn);

    if (user.github.length > 0) {
      newUserGitHubDiv.append(gitHubImg);
    }
    newUserGitHub.text(user.github);
    newUserGitHub.attr("href", `http://www.github.com/${user.github}`);
    newUserGitHub.attr("target", "_blank");
    newUserGitHub.addClass("links");
    newUserGitHubDiv.append(newUserGitHub);

    // export button
    var exportButton = $("<button>");
    exportButton.addClass("btn btn-danger export-button");
    exportButton.html(`Export  <i class="fas fa-download"></i>`);

    // append everything
    newUserSocialDiv.append(newUserTwitterDiv);
    newUserSocialDiv.append(newUserfbDiv);
    newUserSocialDiv.append(newUserLinkedInDiv);
    newUserSocialDiv.append(newUserGitHubDiv);
    newUserSocialDiv.append(exportButton);
    newUserCardBody.append(newUserHeaderDiv);
    newUserCardBody.append(newUserSocialDiv);
    // newUserCardBody.append(exportButton);
    newUserCard.append(newUserCardHeading);
    newUserCard.append(newUserCardBody);
    $(".user-container").append(newUserCard);
  }

  function goHome(){
    window.location.href = "/"
  }

  // button links will eventually export user information to .vcf

});