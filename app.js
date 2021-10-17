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


const markupError = `
<div class="container-error"> 
<img class="error-img" src="https://fabmovielibrary.netlify.app/static/media/empty.c8301e2a.svg" alt="" class="error-img">
<p class="error-msg"> ERROR! <br> User Not Found </p>
</div>
`;

// Functions:

// 1. Getting data from inputData
const getInputData = function () {
  return inputField.value;
};
// 2. Updating UI
const updateUI = function (data) {
  const markUp = `
<div class="container-header">
          <img
            src="${data.avatar_url}"
            alt="Profile picture of user"
            class="container-header__left person-photo profile-picture"
          />
          <div class="container-header__right">
            <h2 class="person-name">${data.name}</h2>
            <p class="person-dateOfJoin">Joined: ${data.created_at}</p>
            <p class="person-userName">${data.login}</p>
            <p class="person-bio">${data.bio}</p>
          </div>
        </div>

        <div class="container-detail">
          <div class="detail">
            <p class="detail-title">Repos</p>
            <p class="detail-count repos-no">${data.public_repos}</p>
          </div>
          <div class="detail">
            <p class="detail-title">Followers</p>
            <p class="detail-count followers-no">${data.followers}</p>
          </div>
          <div class="detail">
            <p class="detail-title">Following</p>
            <p class="detail-count following-no">${data.following}</p>
          </div>
        </div>

        <div class="container-info">
          <div class="container-info__location container-info__flex">
            <span class="material-icons-outlined icon"> room </span>
            <p class="container-info__text location">${data.location}</p>
          </div>
          <div class="container-info__location container-info__flex">
            <i class="fab fa-twitter icon icon-twitter"></i>
            <p class="container-info__text twitter-handle">${data.twitter_username}</p>
          </div>
          <div class="container-info__location container-info__flex">
            <span class="material-icons-outlined icon"> link </span>
            <p class="container-info__text blog-link">${data.blog}</p>
          </div>
          <div class="container-info__location container-info__flex">
            <span class="material-icons-outlined icon"> location_city </span>
            <p class="container-info__text status">${data.company}</p>
          </div>
        </div>
`;
  containerMain.innerHTML = markUp
};
// 3. Showing Error in UI
const UpdateUIErr = function () {
  containerMain.innerHTML = markupError;
};
// 3. Fetch API
async function fetchResults(userName) {
  const res = await fetch(`https://api.github.com/users/${userName}`);
  if (res.status >= 200 && res.status <= 299) {
    const json = await res.json();
    updateUI(json);
  } else {
    console.log(res.status, res.statusText);
    UpdateUIErr();
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
