// Object to store data from API
let person = {};

// Variables of HTML elements
const inputField = document.querySelector(".input-field");
const submitBtn = document.querySelector(".btn-submit");

const containerMain = document.querySelector(".container");
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
  user_dateOfJoin.innerHTML = `Joined: ${data.created_at}`;
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
// 3. Fetch API
async function fetchResults(userName) {
  const res = await fetch(`https://api.github.com/users/${userName}`);
  if(res.status >= 200 && res.status <= 299) {
    const json = await res.json()
    updateUI(json)
  } else {
    console.log(res.statusText)
    alert("not working")
  }
}

// 4. Things for addClicks
const addEvent = function () {
  person.userName = getInputData();
  fetchResults(person.userName);
  containerMain.style.display = "block";
};
// Event Listeners
submitBtn.addEventListener("click", () => addEvent());
inputField.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    addEvent();
  }
});
