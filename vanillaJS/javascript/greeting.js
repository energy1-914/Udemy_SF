const getName = () => {
  const name = document.querySelector(".name").value;
  const greeting = document.querySelector(".greeting");
  const hour = new Date().getHours();
  const text =
    hour < 11 && hour >= 5
      ? "Good morning!"
      :hour >= 11 && hour < 17
      ? "Good Afternoon!"
      : "Good evening!";
  greeting.innerHTML = `<h3>${text} ${name}</h3>`;
};
document.querySelector(".button").addEventListener("click", getName);
