const countdown = () => {
  // Set new Date("December 25, 2022 00:00:00").
  const countDate = new Date("December 25, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const remainingTime = countDate - now;


  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(remainingTime / day);
  const textHour = Math.floor((remainingTime % day) / hour);
  const textMinute = Math.floor((remainingTime % hour) / minute);
  const textSecond = Math.floor((remainingTime % minute) / second);
  const textMillisecond = Math.floor((remainingTime % second));

  document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
  document.querySelector(".hour").innerText = textHour > 0 ? textHour : 0;
  document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
  document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;
  document.querySelector(".milliseconds").innerText = textMillisecond > 0 ? textMillisecond : 0;
};

// 500 or 1000...
setInterval(countdown, 500);
