//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg = [
  "url(/img/1.jpg)",
  "url(/img/2.jpg)",
  "url(/img/3.jpg)",
  "url(/img/4.jpg)",
  "url(/img/5.jpg)",
  "url(/img/6.jpg)",
];
//获取背景图片总数，生成随机数
var bgindex = Math.ceil(Math.random() * (backimg.length - 1));
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
