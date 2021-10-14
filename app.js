// Object to store data from API
let person = {};

// Variables of HTML elements
const inputField = document.querySelector(".input-field");
const submitBtn = document.querySelector(".btn-submit");
const 
// Functions

// 1. Getting data from inputData
const getInputData = function () {
  return inputField.value;
};
// 2. Updating UI 
const updateUI = function(data) {

}
async function fetchResults(userName) {
    const res = await fetch(`https://api.github.com/users/bodanabeel`)
    const json = await res.json()
    console.log(json)
}
// Event Listeners
submitBtn.addEventListener("click", () => {
  person.userName = getInputData();
  fetchResults(person.userName)

});
inputField.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    person.userName = getInputData();
    // fetchApi(person.userName);
    fetchResults(person.userName)
  }
});
