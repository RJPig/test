window.onload = function() {
  // 获取存放时间和日期的div的id,以便后续innerHTML
  const time = document.getElementById("time");
  const DT = document.getElementById("date");
  // 获取开始按钮id
  const beginclock = document.getElementById("beginclock");

  // 获取输入框id
  const onhour = document.getElementById("hour");
  const onminute = document.getElementById("minute");
  let h,m;
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
    // 当分钟和秒小于10时自动改为: 0 => 00
    let minute = date.getMinutes()>9?date.getMinutes():"0"+date.getMinutes();
    let second = date.getSeconds()>9?date.getSeconds():"0"+date.getSeconds();
  
    // 获取当前时间
    let T = `${hour}:${minute}:${second}`; 
    // 获取当前年月日
    let D = `${year}年${month+1}月${day}日`;
  
    // 将获得的日期时间加到div中显示
    time.innerHTML = T;
    DT.innerHTML = D;
    
    // 点击开始按钮,弹出设置成功提示窗,并回到时间显示界面
    beginclock.onclick = function() {
      // 获取输入框的值
      h = onhour.value;
      m = onminute.value;
      // 当点击开始按钮时,弹出设置成功按钮,并关闭设置界面,返回时间显示界面
      
      // console.log(h + ":" + m);
      if(h != "" && m != "") {
        alert("设置成功");
        document.getElementById("clockset").style.display = 'none';
        document.getElementById("clockbody").style.display = 'flex';
      }else{
        alert("请设置时间")
      }
    }

    if((hour == h) && (minute == m)) {
      const audio = document.getElementById("audio");
      audio.play();
      // alert("闹钟响了")
    }else{
      audio.pause();
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
// 当点击设置页面的取消按钮时,返回时间显示界面
function closeset() {
  document.getElementById("clockset").style.display = 'none';
  document.getElementById("clockbody").style.display = 'flex';
}

// 获取上传文件地址
function onInputFilePath() {
  let file = document.getElementById("file").files[0];
  let url = URL.createObjectURL(file);
  // 将上传的文件真实路径传给audio的src属性
  document.getElementById("audio").src = url;
  // console.log(url);
}






