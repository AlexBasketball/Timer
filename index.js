document.addEventListener('DOMContentLoaded', function(){
  let input = document.querySelector('.input');
  let button = document.querySelector('.btn');
  let div = document.querySelector('.div');
  let timer;
  let timerText;
  
  
  function changeDiv() {
    timer = clearInterval(timer);
    timerText = parseInt(input.value);
    timer = setInterval(newTimer, 1000);
  };
  
  function newTimer() {
    timerText -= 1;
    if(timerText < 0) {
      timer = clearInterval(timer);
      timerText = 0;
    } else { 
      let hours = Math.floor(timerText / 60 / 60);
      hours = hours <= 10 ? '0' + hours : hours;
      let minutes = Math.floor(timerText / 60) - hours * 60;
      minutes = minutes <= 10 ? '0' + minutes : minutes;
      let seconds = Math.floor(timerText % 60);
      seconds = seconds <= 10 ? '0' + seconds : seconds;
      div.textContent = `${hours}:${minutes}:${seconds}`;
    }
  };
  
  button.addEventListener('click', changeDiv);
});

