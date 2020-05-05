// 获取时分秒
function showTime() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes()>9?date.getMinutes():"0"+date.getMinutes();
  const second = date.getSeconds()>9?date.getSeconds():"0"+date.getSeconds();
  const datetime = `${hour}:${min}:${second}`;
  const DateTime = document.getElementById('datetime');
  DateTime.innerHTML = datetime
}

// 获取年月日
function showDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const dt = `${year}年${month+1}月${day}日`;
  const DT = document.getElementById('date');
  DT.innerHTML = dt;
  
}
// 每隔一秒刷新一次
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

// 获取上传文件地址
// function show() {
//   const file = document.getElementById("file");
//   const audio = document.getElementById("audio");
//   // audio.src = file.value;
//   console.log(file.value);
// }

function select_value() {
  const hourset = document.getElementById("hour").value;
  const minuteset = document.getElementById("minute").value
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes()>9?date.getMinutes():"0"+date.getMinutes();
  const d1 = hour >= hourset && min >= minuteset;
  const d2 = hour >= hourset;
  
  console.log(d1&&d2);
  
  // if (d1&&d2) {
  //   alert("叮叮叮")
  // }
}
setInterval(select_value,1000)




