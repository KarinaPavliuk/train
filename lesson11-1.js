// //CRUD

// //R - GET
// // fetch("https://jsonplaceholder.typicode.com/posts/1")
// //   .then((response) => response.json())
// //   .then((json) => console.log("json", json));

// //C - POST
// const options = {
//   method: "POST",
//   body: JSON.stringify({
//     title: "Hello from JS!",
//     body: "Create post",
//     userId: 12,
//   }),
//   headers: { "Content-Type": "application/json" },
// };
// fetch("https://jsonplaceholder.typicode.com/posts/", options)
//   .then((resp) => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     return resp.json();
//   })
//   .then((data) => console.log("data", data))
//   .catch((err) => console.log(err));

const addPost = document.querySelector(".js-add");
const listPosts = document.querySelector(".js-posts");
const formWrapper = document.querySelector(".js-form");
const errMessage = document.querySelector(".js-err");

addPost.addEventListener("click", handlerAddPost);

function handlerAddPost() {
  formWrapper.innerHTML = `<form action="submit" class="js-form-add" style:"style="display: flex; flex-direction: column;"">
  <input type="text" name="title" />
  <textarea name="body" id="" cols="30" rows="10"></textarea>
  <button>Додати пост</button>
  </form>`;

  const form = document.querySelector(".js-form-add");
  form.addEventListener("submit", handlerFormSubmit);
}

function handlerFormSubmit(evt) {
  evt.preventDefault();

  const { title, body } = evt.currentTarget.elements;
  const data = {
    title: title.value,
    body: body.value,
  };

  addPostService(data)
    .then((obj) =>
      listPosts.insertAdjacentHTML("beforeend", createPostMarkup(obj))
    )
    .catch(() => (errMessage.innerHTML = "Не можливо додати пост"))
    .finally(() => {
      formWrapper.innerHTML = "";
      setTimeout(() => {
        errMessage.innerHTML = "";
      }, 2000);
    });
}

function createPostMarkup({ id, title, body }) {
  return `<li data-id="${id}">
  <h2>${title}</h2>
  <p>${body}</p>
  </li>`;
}

function addPostService(data) {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };
  return fetch("https://jsonplaceholder.typicode.com/posts/", options).then(
    (resp) => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    }
  );
}
