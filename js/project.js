// slide show javascript
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// animating cards with jQuery
$( '.effect img' ).hover(function() {
  $( this ).fadeOut( 400 );
  $( this ).fadeIn( 50 );
});

// Submit confirmation variables
var signUp = document.getElementById('signUp');

var inputFirstName = document.getElementById('inputFirstName');
var inputLastName = document.getElementById('inputLastName');
var inputAddress = document.getElementById('inputAddress');
var inputAddress2 = document.getElementById('inputAddress2');
var inputCity = document.getElementById('inputCity');
var inputState = document.getElementById('inputState');
var inputZip = document.getElementById('inputZip');
var inputPhone = document.getElementById('inputPhone');
var inputEmail = document.getElementById('inputEmail');

var firstNameId = document.getElementById('firstNameId');
var lastNameId = document.getElementById('lastNameId');
var addressId = document.getElementById('addressId');
var address2Id = document.getElementById('address2Id');
var cityId = document.getElementById('cityId');
var stateId = document.getElementById('stateId');
var zipId = document.getElementById('zipId');
var phoneId = document.getElementById('phoneId');
var emailId = document.getElementById('emailId');

var submitButton = document.getElementById('submitButton');
var closeButton = document.getElementById('closeButton');

var showPage = document.getElementsByClassName('modal-backdrop.show');

submitButton.addEventListener('click',() => {
event.preventDefault();

signUp.style.display = "none";

inputFirstName.value;
inputLastName.value;
inputAddress.value;
inputAddress2.value;
inputCity.value;
inputState.value;
inputZip.value;
inputPhone.value;
inputEmail.value;


firstNameId.innerHTML = inputFirstName.value;
lastNameId.innerHTML = inputLastName.value;
addressId.innerHTML = inputAddress.value;
address2Id.innerHTML = inputAddress2.value;
cityId.innerHTML = inputCity.value;
stateId.innerHTML = inputState.value;
zipId.innerHTML = inputZip.value;
phoneId.innerHTML = inputPhone.value;
emailId.innerHTML = inputEmail.value;
});

closeButton.addEventListener('click',() => {
  showPage.style.diplay = "none";
});

// if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
