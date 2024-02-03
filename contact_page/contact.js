const inputButton = document.getElementById("inputButton");
let name , subject , message;

name = document.getElementById('name').value;
subject = document.getElementById('subject').value;
message = document.getElementById('message').value;

async function postMsg(name, subject, message) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    name: name,
    subject: subject,
    message: message,
  }),
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
}

inputButton.addEventListener("click", postMsg(name, subject, message));