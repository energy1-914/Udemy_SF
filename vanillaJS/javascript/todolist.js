const todo = document.querySelector(".todo");
const ul = document.querySelector("ul");
const addList = () => {
  const div = document.createElement("div");
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.className = "delete";
  button.innerText = "X";
  li.innerHTML = todo.value;
  div.append(li, button);
  ul.appendChild(div);
};

todo.addEventListener("keydown", event => {
  if (event.keyCode === 13) {
    event.preventDefault();
    addList();
    deleteList();
  }
});

const deleteList = () => {
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach(button => {
    button.addEventListener("click", event => {
      event.target.parentElement.remove();
    });
  });
};
