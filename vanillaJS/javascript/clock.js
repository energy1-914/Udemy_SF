const clock = document.querySelector(".clock");

const getTime = ()=>{
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  clock.innerHTML = `${hour}시 ${minute}분`;
}
getTime();
setInterval(getTime, 60000);