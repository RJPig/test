window.onload = function() {
  // 获取存放时间和日期的div的id,以便后续innerHTML
  const time = document.getElementById("time");
  const DT = document.getElementById("date");
  // 获取开始按钮id
  const beginclock = document.getElementById("beginclock");

  // 获取输入框id
  const onhour = document.getElementById("hour");
  const onminute = document.getElementById("minute");
  const onsecond = document.getElementById("second");

  let h,m,s;
  // 每一秒刷新一次
  const timer = setInterval(() => {
    clock()
  }, 1000);
  function clock() {
    // 调用Date()函数获得当地日期,时间
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
  
    let hour = date.getHours();
    let minute = date.getMinutes()>9?date.getMinutes():"0"+date.getMinutes();
    let second = date.getSeconds()>9?date.getSeconds():"0"+date.getSeconds();
  
    // 获取当前时间
    let T = `${hour}:${minute}:${second}`; 
    // 获取当前年月日
    let D = `${year}年${month+1}月${day}日`;
  
    // 将获得的日期时间加到div中显示
    time.innerHTML = T;
    DT.innerHTML = D;
    
    beginclock.onclick = function() {
      // 获取输入框的值
      h = onhour.value;
      m = onminute.value;
      s = onsecond.value;
      document.getElementById("clockset").style.display = 'none';
      document.getElementById("clockbody").style.display = 'flex';
      console.log(h + ":" + m + ":" + s);
      alert("设置成功")
    }

    if((hour == h) && (minute == m) && (second == s)) {
      // document.getElementById("audio").;
      alert("叮叮叮")
    }
  }
  // 当页面加载完时调用上面的clock()函数
  clock()
}


// 当点击设置闹钟按钮时,display:none时间显示的界面,打开设置界面
function openset() {
  document.getElementById("clockset").style.display = 'flex';
  document.getElementById("clockbody").style.display = 'none';

}


// 获取上传文件地址
function onInputFilePath() {
  let file = document.getElementById("file").files[0];
  let url = URL.createObjectURL(file);
  document.getElementById("audio").src = url;
  // console.log(url);
}






