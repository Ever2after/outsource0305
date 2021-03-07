function myFunc(){
  
  //Javascript
  var inputdrop1 = document.getElementById('inputdrop1');
  var inputdrop2 = document.getElementById('inputdrop2');
  var dropdown1 = document.getElementById('dropdown1');
  var dropdown2 = document.getElementById('dropdown2');
  inputdrop1.addEventListener('focus', function(){
    dropdown1.style.display = "block";
  });
  inputdrop1.addEventListener('blur', function(){
    setTimeout(()=>{dropdown1.style.display = "none";}, 100);
  });

  inputdrop2.addEventListener('focus', function(){
    dropdown2.style.display = "block";
  });
  inputdrop2.addEventListener('blur', function(){
    setTimeout(()=>{dropdown2.style.display = "none";}, 100);
  });
}

function func1(){
  var style = document.getElementById('popup1').style.display;
  if(style==="none") document.getElementById('popup1').style.display="block";
  else document.getElementById('popup1').style.display="none";
}
function func2(){
  var style = document.getElementById('popup2').style.display;
  if(style==="none") document.getElementById('popup2').style.display="block";
  else document.getElementById('popup2').style.display="none";
}
function func3(){ document.getElementById('popup1_1').style.display = "block";}
function func4(){ document.getElementById('popup1_1').style.display = "none";}
function func5(){ document.getElementById('popup1_2').style.display = "block";}
function func6(){ document.getElementById('popup1_2').style.display = "none";}
function changeType(type){
  var els = document.getElementsByClassName('typeButton');
  for(var el of els){
    if(el.innerText===type) {
      el.classList.add('select');
      document.getElementById(el.innerText).style.display = 'flex';
    }
    else {
      el.classList.remove('select');
      document.getElementById(el.innerText).style.display = 'none';
    }
  }
}
function onChange1(e){}
function onChange2(e){
    if(e.value==="기본형"){
    var els = document.getElementsByClassName('system');
    for(var el of els) el.style.display = "none";
    els = document.getElementsByClassName('system1');
    for(var el of els) el.style.display = "block";
  }
  else{
    var els = document.getElementsByClassName('system');
    for(var el of els) el.style.display = "none";
    els = document.getElementsByClassName('system2');
    for(var el of els) el.style.display = "block";
  }
}
function onClick1(){
  var els = document.getElementsByClassName('choice');
  for(var el of els) el.style.display = "none";
  els = document.getElementsByClassName('choice1');
  for(var el of els) el.style.display = "block";
  els = document.getElementsByClassName('system');
  for(var el of els) el.style.display = "none";
  els = document.getElementsByClassName('system1');
  for(var el of els) el.style.display = "block";
}
function onClick2(e){
  var target = document.getElementById('inputdrop1');
  target.value = e.innerText;
  var loginBox = document.getElementById('outBox1');
  loginBox.classList.add('existence');
  onClick1();
}
function onClick3(e){
  var target = document.getElementById('inputdrop2');
  target.value = e.innerText;
}
