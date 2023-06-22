const changeImgButton = document.querySelector("#changeImgButton");
document.querySelector(
  "body"
).style.backgroundImage = "url('./img/img0.jpg')";

changeImgButton.addEventListener("click", () => {
  let number = Math.floor(Math.random() * 11);
  let link = `./img/img${number}.jpg`;
  document.querySelector("body").style.backgroundImage = `url(${link})`;
});