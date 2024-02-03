let inputButton = document.getElementById("inputButton");

async function postMsg() {
  let name = document.getElementById('name').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: name,
    subject: subject,
    message: message,
  }),
  })
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error("Error: ", error));
}

inputButton.addEventListener("click", postMsg);