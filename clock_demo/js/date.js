function showTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  const hour = date.getHours();
  const min = date.getMinutes();
  const second = date.getSeconds();
  const datetime = hour + ":" + min + ":" + second;
  const DateTime = document.getElementById('datetime');
  DateTime.innerHTML = datetime
}

function showDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  const dt = year + "年" + month + "月" + day + "日" 
  const DT = document.getElementById('date');
  DT.innerHTML = dt
}

setInterval("showTime()", 1000)
setInterval("showDate()", 1000)