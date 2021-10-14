// Object to store data from API
let person = {
  userName: null,
  name: null,
  bio: null,
  dateOfJoin: null,
  repos: null,
  followers: null,
  following: null,
  location: null,
  blogLink: null,
  twitterID: null,
  status: null,
};

// Variables of HTML elements
const inputField = document.querySelector(".input-field");
const submitBtn = document.querySelector(".btn-submit");

// Functions

// 1. Getting data from inputData
const getInputData = function () {
  return inputField.value;
};

// Event Listeners
submitBtn.addEventListener("click", () => {
  person.userName = getInputData();
  console.log(person.userName);
});
inputField.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    person.userName = getInputData();
    console.log(person.userName);
  }
});
