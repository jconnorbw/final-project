// This js file implements the form submission for the Contact section as a
// console.log output to the user.

// Initialize form variable for submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get user input values
  let element = form.elements;
  let name = element.name.value;
  let username = element.username.value;
  let email = element.email.value;
  let password = element.password.value;
  let date = element.date.value;
  let pronouns = element.pronouns.value;
  let comment = element.comment.value;

  // If an input is not filled out let the user know and pause form submission
  if (
    !name ||
    !username ||
    !email ||
    !date ||
    !password ||
    !pronouns ||
    !comment
  ) {
    alert("Please fill out all fields and make sure a pronoun is checked");
    return;
  }

  // Output values to console log
  console.group("========= Form Submission =========");
  console.log(`Name: ${name}`);
  console.log(`Username: ${username}`);
  console.log(`Email: ${email}`);
  console.log(`Date of birth: ${date}`);
  console.log(`Pronouns: ${pronouns}`);
  console.log(`Comment: ${comment}`);
  console.groupEnd();
});
