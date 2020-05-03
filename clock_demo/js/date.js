function showTime() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes()>9?date.getMinutes():"0"+date.getMinutes();
  const second = date.getSeconds()>9?date.getSeconds():"0"+date.getSeconds();
  const datetime = `${hour}:${min}:${second}`;
  const DateTime = document.getElementById('datetime');
  DateTime.innerHTML = datetime
}

function showDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const dt = `${year}年${month+1}月${day}日`;
  const DT = document.getElementById('date');
  DT.innerHTML = dt;
  
}

setInterval("showTime()", 1000)
setInterval("showDate()", 1000)

function btnClick() {
  document.getElementById("clockset").style.display = 'flex'
  document.getElementById("clockbody").style.display = 'none'

}

function closeset() {
  document.getElementById("clockset").style.display = 'none'
  document.getElementById("clockbody").style.display = 'flex'
}