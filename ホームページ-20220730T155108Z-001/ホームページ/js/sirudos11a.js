var save;
var rc = 0;
var srcount = 0;//SRと輝くを被らせないため→SRが出たら＋１

function sr(){ 
  var min = 1;
  var max = 36;
  var a = Math.floor( Math.random() * (max + 1 - min) ) + min;
  if(a==1){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/1.jpg">');
    rc++;
    srcount++;
  }
  else if(a==2){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/2.jpg">');
    rc++;
    srcount++;
  }
  else if(a==3){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/3.jpg">');
    rc++;
    srcount++;
  }
  else if(a==4){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/4.jpg">');
    rc++;
    srcount++;
  }
  else if(a==5){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/5.jpg">');
    rc++;
    srcount++;
  }
  else if(a==6){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/6.jpg">');
    rc++;
    srcount++;
  }
  else if(a==7){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/7.jpg">');
    rc++;
    srcount++;
  }
  else if(a==8){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/8.jpg">');
    rc++;
    srcount++;
  }
  else if(a==9){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/9.jpg">');
    rc++;
    srcount++;
  }
  else if(a==10){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/10.jpg">');
    rc++;
    srcount++;
  }
  else if(a==11){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/11.jpg">');
    rc++;
    srcount++;
  }
  else if(a==12){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/12.jpg">');
    rc++;
    srcount++;
  }
  else if(a==13){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/13.jpg">');
    rc++;
    srcount++;
  }
  else if(a==14){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/14.jpg">');
    rc++;
    srcount++;
  }
  else if(a==15){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/15.jpg">');
    rc++;
    srcount++;
  }
  else if(a==16){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/16.jpg">');
    rc++;
    srcount++;
  }
  else if(a==17){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/17.jpg">');
    rc++;
    srcount++;
  }
  else if(a==18){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/18.jpg">');
    rc++;
    srcount++;
  }
}

function vstar(){
  var min = 1;
  var max = 3;
  save = Math.floor( Math.random() * (max + 1 - min) ) + min;
  if(save==1){
    document.getElementById('vstar').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/vstar/1.jpeg">');
    document.getElementById('v').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/v/1.jpeg">');
    rc++;rc++;
  }
  else if(save==2){
    document.getElementById('vstar').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/vstar/2.jpeg">');
    document.getElementById('v').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/v/2.jpeg">');
    rc++;rc++;
  }
  else if(save==3){
    document.getElementById('vstar').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/vstar/3.jpeg">');
    document.getElementById('v').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/v/3.jpeg">');
    rc++;rc++;
  }
}

function v(){
  var min = 1;
  var max = 6;
  var a = Math.floor( Math.random() * (max + 1 - min) ) + min;
  while(a==save){
    var a = Math.floor( Math.random() * (max + 1 - min) ) + min;
  }
  if(a==1){
    document.getElementById('v').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/v/1.jpeg">');
    rc++;
  }
  else if(a==2){
    document.getElementById('v').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/v/2.jpeg">');
    rc++;
  }
  else if(a==3){
    document.getElementById('v').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/v/3.jpeg">');
    rc++;
  }
  else if(a==4){
    document.getElementById('v').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/v/4.jpeg">');
    rc++;
  }
  else if(a==5){
    document.getElementById('v').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/v/5.jpeg">');
    rc++;
  }
  else if(a==6){
    document.getElementById('v').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/v/6.jpeg">');
    rc++;
  }
}
function k(){
  var min = 1;
  var max = 3;
  var a = Math.floor( Math.random() * (max + 1 - min) ) + min;

  if(srcount==1){
    a = a + 4;
  }

  if(a==1){
    document.getElementById('k').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/k/1.jpeg">');
    rc++;
  }
  else if(a==2){
    document.getElementById('k').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/k/2.jpeg">');
    rc++;
  }
  else if(a==3){
    document.getElementById('k').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/k/3.jpeg">');
    rc++;
  }
}
function r(){
  let n =[0,0,0,0,0,0,0];
  var maisu = 10 - rc;
  for(var i = 0; i < maisu; i++){
    var min = 1;
    var max = 10;
    n[i] = Math.floor( Math.random() * (max + 1 - min) ) + min;
    for(var j=0; j<i;j++){
      while(n[i]==n[j]){
        n[i] = Math.floor( Math.random() * (max + 1 - min) ) + min;
        j=0;
      }
    }
  }
  for(i = 0;i < maisu-1; i++){
    for(j = i+1; j < maisu; j++){
      if(n[i]>n[j]){
        var tmp = n[i];
        n[i] = n[j];
        n[j] = tmp;
      }
    }
  }
  for(var i = 0; i < maisu; i++){
    if(n[i]==1){
      document.getElementById('r').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/r/1.jpeg">');
      rc++;
    }
    else if(n[i]==2){
      document.getElementById('r').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/r/2.jpeg">');
      rc++;
    }
    else if(n[i]==3){
      document.getElementById('r').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/r/3.jpeg">');
      rc++;
    }
    else if(n[i]==4){
      document.getElementById('r').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/r/4.jpeg">');
      rc++;
    }
    else if(n[i]==5){
      document.getElementById('r').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/r/5.jpeg">');
      rc++;
    }
    else if(n[i]==6){
      document.getElementById('r').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/r/6.jpeg">');
      rc++;
    }
    else if(n[i]==7){
      document.getElementById('r').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/r/7.jpeg">');
      rc++;
    }
    else if(n[i]==8){
      document.getElementById('r').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/r/8.jpeg">');
      rc++;
    }
    else if(n[i]==9){
      document.getElementById('r').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/r/9.jpeg">');
      rc++;
    }
    else if(n[i]==10){
      document.getElementById('r').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/r/10.jpeg">');
      rc++;
    }
  }
}
function uc(){
  let l=[1,1,1,1,1,1,1,1,1,1,1,1,1];
  var num=[0,0,0];
  for(var i=0;i<3;i++){
    var min = 0;
    var max = 12;
    num[i] = Math.floor( Math.random() * (max + 1 - min) ) + min;
    for(var j=0;j<i;j++){
      while(num[j]==num[i]){
        var min = 0;
        var max = 12;
        num[i] = Math.floor( Math.random() * (max + 1 - min) ) + min;
      }
    }
    l[num[i]] = 0;
  }
  for(i=0;i<l[0];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/u/1.jpeg">');
  }
  for(i=0;i<l[1];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/u/2.jpeg">');
  }
  for(i=0;i<l[2];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/u/3.jpeg">');
  }
  for(i=0;i<l[3];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/u/4.jpeg">');
  }
  for(i=0;i<l[4];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/u/5.jpeg">');
  }
  for(i=0;i<l[5];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/u/6.jpeg">');
  }
  for(i=0;i<l[6];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/u/7.jpeg">');
  }
  for(i=0;i<l[7];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/u/8.jpeg">');
  }
  for(i=0;i<l[8];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/u/9.jpeg">');
  }
  for(i=0;i<l[9];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/u/10.jpeg">');
  }
  for(i=0;i<l[10];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/u/11.jpeg">');
  }
  for(i=0;i<l[11];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/u/12.jpeg">');
  }
  for(i=0;i<l[12];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/u/13.jpeg">');
  }
}
function c(){
  let m = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var total = 0;
  for(var i=0;i<20;i++){
    var min = 1;
    var max = 24;
    var a = Math.floor( Math.random() * (max + 1 - min) ) + min;
    if(0<a && a<11){
      m[i]=1;
      total++;
    }
    else{
      m[i]=2;
      total++;total++;
    }
  }
  while(total!=20){
    if(total<20){
      var min = 0;
      var max = 19;
      a = Math.floor( Math.random() * (max + 1 - min) ) + min;
      m[a]++;
      total++;
    }
    else if(total>20){
      var min = 0;
      var max = 19;
      a = Math.floor( Math.random() * (max + 1 - min) ) + min;
      m[a]--;
      total--;
    }
  }
  for(i=0;i<m[0];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/1.jpeg">');
  }
  for(i=0;i<m[1];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/2.jpeg">');
  }
  for(i=0;i<m[2];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/3.jpeg">');
  }
  for(i=0;i<m[3];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/4.jpeg">');
  }
  for(i=0;i<m[4];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/5.jpeg">');
  }
  for(i=0;i<m[5];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/6.jpeg">');
  }
  for(i=0;i<m[6];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/7.jpeg">');
  }
  for(i=0;i<m[7];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/8.jpeg">');
  }
  for(i=0;i<m[8];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/9.jpeg">');
  }
  for(i=0;i<m[9];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/10.jpeg">');
  }
  for(i=0;i<m[10];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/11.jpeg">');
  }
  for(i=0;i<m[11];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/12.jpeg">');
  }
  for(i=0;i<m[12];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/13.jpeg">');
  }
  for(i=0;i<m[13];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/14.jpeg">');
  }
  for(i=0;i<m[14];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/15.jpeg">');
  }
  for(i=0;i<m[15];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/16.jpeg">');
  }
  for(i=0;i<m[16];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/17.jpeg">');
  }
  for(i=0;i<m[17];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/18.jpeg">');
  }
  for(i=0;i<m[18];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/19.jpeg">');
  }
  for(i=0;i<m[19];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/20.jpeg">');
  }
  for(i=0;i<m[20];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/21.jpeg">');
  }
  for(i=0;i<m[21];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/22.jpeg">');
  }
  for(i=0;i<m[22];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/23.jpeg">');
  }
  for(i=0;i<m[23];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/c/24.jpeg">');
  }
}
function tr(){
  
    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/tr/1.jpeg">');

    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/tr/2.jpeg">');
  
    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/tr/3.jpeg">');
  
    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/tr/4.jpeg">');
  
    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/tr/5.jpeg">');
  
    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/tr/6.jpeg">');
  
    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/tr/7.jpeg">');
  
    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/tr/8.jpeg">');
  
    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/tr/9.jpeg">');
  
    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/tr/10.jpeg">');
}
function horo(){
  let l=[0,0,0,0,0,0,0,0,0,0];
  for(var i=0;i<10;i++){
    var min = 1;
    var max = 46;
    l[i] = Math.floor( Math.random() * (max + 1 - min) ) + min;
    for(var j=0;j<i;j++){
      while(l[j]==l[i]){
        var min = 1;
        var max = 46;
        num[i] = Math.floor( Math.random() * (max + 1 - min) ) + min;
      }
    }
  }
  for(i=0;i<9;i++){
    if(l[i]==1){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/1.jpeg">');
    }
    if(l[i]==2){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/2.jpeg">');
    }
    if(l[i]==3){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/3.jpeg">');
    }
    if(l[i]==4){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/4.jpeg">');
    }
    if(l[i]==5){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/5.jpeg">');
    }
    if(l[i]==6){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/6.jpeg">');
    }
    if(l[i]==7){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/7.jpeg">');
    }
    if(l[i]==8){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/8.jpeg">');
    }
    if(l[i]==9){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/9.jpeg">');
    }
    if(l[i]==10){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/10.jpeg">');
    }
    if(l[i]==11){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/11.jpeg">');
    }
    if(l[i]==12){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/12.jpeg">');
    }
    if(l[i]==13){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/13.jpeg">');
    }
    if(l[i]==14){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/14.jpeg">');
    }
    if(l[i]==15){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/15.jpeg">');
    }
    if(l[i]==16){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/16.jpeg">');
    }
    if(l[i]==17){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/17.jpeg">');
    }
    if(l[i]==18){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/18.jpeg">');
    }
    if(l[i]==19){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/19.jpeg">');
    }
    if(l[i]==20){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/20.jpeg">');
    }
    if(l[i]==21){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/21.jpeg">');
    }
    if(l[i]==22){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/22.jpeg">');
    }
    if(l[i]==23){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/23.jpeg">');
    }
    if(l[i]==24){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/24.jpeg">');
    }
    if(l[i]==25){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/25.jpeg">');
    }
    if(l[i]==26){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/26.jpeg">');
    }
    if(l[i]==27){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/27.jpeg">');
    }
    if(l[i]==28){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/28.jpeg">');
    }
    if(l[i]==29){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/29.jpeg">');
    }
    if(l[i]==30){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/30.jpeg">');
    }
    if(l[i]==31){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/31.jpeg">');
    }
    if(l[i]==32){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/32.jpeg">');
    }
    if(l[i]==33){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/33.jpeg">');
    }
    if(l[i]==34){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/34.jpeg">');
    }
    if(l[i]==35){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/35.jpeg">');
    }
    if(l[i]==36){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/36.jpeg">');
    }
    if(l[i]==37){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/37.jpeg">');
    }
    if(l[i]==38){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/38.jpeg">');
    }
    if(l[i]==39){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/39.jpeg">');
    }
    if(l[i]==40){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/40.jpeg">');
    }
    if(l[i]==41){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/41.jpeg">');
    }
    if(l[i]==42){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/42.jpeg">');
    }
    if(l[i]==43){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/43.jpeg">');
    }
    if(l[i]==44){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/44.jpeg">');
    }
    if(l[i]==45){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/45.jpeg">');
    }
    if(l[i]==46){
      document.getElementById('horo').insertAdjacentHTML('beforeEnd', '<img class="card" src="s11a/horo/46.jpeg">');
    }


  }
}


function sirudo(){
  
  vstar();
  v();
  k();
  r();
  uc();
  c();
  tr();
  horo();
}

window.onload = sirudo();