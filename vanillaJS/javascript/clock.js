const clock = document.querySelector(".clock");

const getTime = ()=>{
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const se = date.getSeconds();
  clock.innerHTML = `${hour} : ${minute}`;
}
getTime();
setInterval(getTime, 60000);