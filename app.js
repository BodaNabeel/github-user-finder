// Object to store data from API
let person = {};

// Variables of HTML elements
const inputField = document.querySelector(".input-field");
const submitBtn = document.querySelector(".btn-submit");

let user_name = document.querySelector(".person-name");
let user_dateOfJoin = document.querySelector(".person-dateOfJoin");
let user_userName = document.querySelector(".person-userName");
let user_bio = document.querySelector(".person-bio");
let user_reposNo = document.querySelector(".repos-no");
let user_followerNo = document.querySelector(".followers-no");
let user_followingNo = document.querySelector(".following-no");
let user_location = document.querySelector(".location");
let user_twitterHandle = document.querySelector(".twitter-handle");
let user_blogLink = document.querySelector(".blog-link");
let user_status = document.querySelector(".status");
let user_profilePicture = document.querySelector(".profile-picture");
// Functions:

// 1. Getting data from inputData
const getInputData = function () {
  return inputField.value;
};
// 2. Updating UI
const updateUI = function (data) {
  user_name.innerHTML = data.name;
  user_dateOfJoin.innerHTML = data.created_at;
  user_userName = data.login;
  user_bio.innerHTML = data.bio;
  user_reposNo.innerHTML = data.public_repos;
  user_followerNo.innerHTML = data.followers;
  user_followingNo.innerHTML = data.following;
  user_location.innerHTML = data.location;
  user_blogLink.innerHTML = data.blog;
  user_status.innerHTML = data.company;
  user_twitterHandle.innerHTML = data.twitter_username;
  user_profilePicture.src = data.avatar_url;
};
async function fetchResults(userName) {
  const res = await fetch(`https://api.github.com/users/${userName}`);
  const json = await res.json();
  console.log(json);
  updateUI(json);
}
// Event Listeners
submitBtn.addEventListener("click", () => {
  person.userName = getInputData();
  fetchResults(person.userName);
});
inputField.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    person.userName = getInputData();
    // fetchApi(person.userName);
    fetchResults(person.userName);
  }
});
