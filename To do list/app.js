var submit = document.getElementById("btn1")
submit.onclick = function(){
  document.getElementById("box").style='border: 1px solid green'
  var demo1 = document.getElementById("demo1").value;
  var ptag = document.createElement("p");
  ptag.append(demo1)
  document.getElementById("box").append(ptag);
  
}
var submit = document.getElementById("btn1")
submit.onclick = function(){
  document.getElementById("box").style='border: 1px solid green'
  var demo2 = document.getElementById("demo2").value;
  var ptag = document.createElement("p");
  ptag.append(demo2)
  document.getElementById("box").append(ptag);
}
