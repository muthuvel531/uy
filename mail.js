 const firebaseConfig = {
    apiKey: "AIzaSyCqFIyVhPXx1r5W4fJM4nOii09AIxi0vKQ",
    authDomain: "contactform-85948.firebaseapp.com",
    databaseURL: "https://contactform-85948-default-rtdb.firebaseio.com",
    projectId: "contactform-85948",
    storageBucket: "contactform-85948.firebasestorage.app",
    messagingSenderId: "901007557564",
    appId: "1:901007557564:web:25b92b3224f24d85be21b9"
  };
  

// // initialize firebase
//   firebase.initializeApp(firebaseConfig);
// // reference your database
// const contactformDB = firebase.database().ref('contactform');
// document.getElementById('contactfrom').addEventListener('submit', submitform);

// function submitform(e) {
//     e.preventDefault();
//     var name = getElementVal('name');
//     var emailid = getElementVal('emailid');
//     var msgcontent = getElementVal('msgcontent');
//    saveMessages(name, emailid, msgcontent);
// }
// const saveMessages = (name, emailid, msgcontent) => {
//     var newConactfrom = contactformDB.push();
//     newConactfrom.set({
//         name : name,
//         emailid : emailid,
//         msgcontent : msgcontent
//     });
// };



// const getElementVal = (id) => {
//     return document.getElementById(id).value;
// }

// const firebaseConfig = {
//   //   copy your firebase config informations
// };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");


  saveMessages(name, emailid, );

  //   enable alert
   result = window.location.href = "home.html";
  // document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
     result = window.location.href = "index.html";
    // document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,

  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

 