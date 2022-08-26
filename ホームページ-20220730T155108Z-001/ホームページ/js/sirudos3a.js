var save;
var rc = 0;

function sr(){
  var min = 1;
  var max = 36;
  var a = Math.floor( Math.random() * (max + 1 - min) ) + min;
  if(a==1){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/1.jpg">');
    rc++;
  }
  else if(a==2){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/2.jpg">');
    rc++;
  }
  else if(a==3){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/3.jpg">');
    rc++;
  }
  else if(a==4){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/4.jpg">');
    rc++;
  }
  else if(a==5){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/5.jpg">');
    rc++;
  }
  else if(a==6){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/6.jpg">');
    rc++;
  }
  else if(a==7){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/7.jpg">');
    rc++;
  }
  else if(a==8){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/8.jpg">');
    rc++;
  }
  else if(a==9){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/9.jpg">');
    rc++;
  }
  else if(a==10){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/10.jpg">');
    rc++;
  }
  else if(a==11){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/11.jpg">');
    rc++;
  }
  else if(a==12){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/12.jpg">');
    rc++;
  }
  else if(a==13){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/13.jpg">');
    rc++;
  }
  else if(a==14){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/14.jpg">');
    rc++;
  }
  else if(a==15){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/15.jpg">');
    rc++;
  }
  else if(a==16){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/16.jpg">');
    rc++;
  }
  else if(a==17){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/17.jpg">');
    rc++;
  }
  else if(a==18){
    document.getElementById('sr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/sr/18.jpg">');
    rc++;
  }
}

function vmax(){
  var min = 1;
  var max = 3;
  save = Math.floor( Math.random() * (max + 1 - min) ) + min;
  if(save==1){
    document.getElementById('vmax').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/vmax/1.jpg">');
    document.getElementById('v').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/v/1.jpg">');
    rc++;rc++;
  }
  else if(save==2){
    document.getElementById('vmax').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/vmax/2.jpg">');
    document.getElementById('v').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/v/2.jpg">');
    rc++;rc++;
  }
  else if(save==3){
    document.getElementById('vmax').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/vmax/3.jpg">');
    document.getElementById('v').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/v/3.jpg">');
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
    document.getElementById('v').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/v/1.jpg">');
    rc++;
  }
  else if(a==2){
    document.getElementById('v').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/v/2.jpg">');
    rc++;
  }
  else if(a==3){
    document.getElementById('v').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/v/3.jpg">');
    rc++;
  }
  else if(a==4){
    document.getElementById('v').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/v/4.jpg">');
    rc++;
  }
  else if(a==5){
    document.getElementById('v').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/v/5.jpg">');
    rc++;
  }
  else if(a==6){
    document.getElementById('v').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/v/6.jpg">');
    rc++;
  }
}
function ar(){
  var min = 1;
  var max = 12;
  var a = Math.floor( Math.random() * (max + 1 - min) ) + min;
  if(a==1){
    document.getElementById('ar').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/ar/1.jpg">');
    rc++;
  }
  else if(a==2){
    document.getElementById('ar').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/ar/2.jpg">');
    rc++;
  }
  else if(a==3){
    document.getElementById('ar').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/ar/3.jpg">');
    rc++;
  }
  else if(a==4){
    document.getElementById('ar').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/ar/4.jpg">');
    rc++;
  }
  else if(a==5){
    document.getElementById('ar').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/ar/5.jpg">');
    rc++;
  }
  else if(a==6){
    document.getElementById('ar').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/ar/6.jpg">');
    rc++;
  }
}
function r(){
  let n =[0,0,0,0,0,0,0,0,0,0];
  var maisu = 10 - rc;
  for(var i = 0; i < maisu; i++){
    var min = 1;
    var max = 12;
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
      document.getElementById('r').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/r/1.jpg">');
      rc++;
    }
    else if(n[i]==2){
      document.getElementById('r').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/r/2.jpg">');
      rc++;
    }
    else if(n[i]==3){
      document.getElementById('r').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/r/3.jpg">');
      rc++;
    }
    else if(n[i]==4){
      document.getElementById('r').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/r/4.jpg">');
      rc++;
    }
    else if(n[i]==5){
      document.getElementById('r').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/r/5.jpg">');
      rc++;
    }
    else if(n[i]==6){
      document.getElementById('r').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/r/6.jpg">');
      rc++;
    }
    else if(n[i]==7){
      document.getElementById('r').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/r/7.jpg">');
      rc++;
    }
    else if(n[i]==8){
      document.getElementById('r').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/r/8.jpg">');
      rc++;
    }
    else if(n[i]==9){
      document.getElementById('r').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/r/9.jpg">');
      rc++;
    }
    else if(n[i]==10){
      document.getElementById('r').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/r/10.jpg">');
      rc++;
    }
    else if(n[i]==11){
      document.getElementById('r').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/r/11.jpg">');
      rc++;
    }
    else if(n[i]==12){
      document.getElementById('r').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/r/12.jpg">');
      rc++;
    }
  }
}
function uc(){
  let m = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var total = 0;
  for(var i=0;i<16;i++){
    var min = 1;
    var max = 10;
    var a = Math.floor( Math.random() * (max + 1 - min) ) + min;
    if(a==5){
      m[i]=2;
      total++;total++;
    }
    else{
      m[i]=1;
      total++;
    }
  }
  while(total!=19){
    if(total<19){
      var min = 0;
      var max = 15;
      a = Math.floor( Math.random() * (max + 1 - min) ) + min;
      m[a]++;
      total++;
    }
    else if(total>19){
      var min = 0;
      var max = 15;
      a = Math.floor( Math.random() * (max + 1 - min) ) + min;
      m[a]--;
      total--;
    }
  }
  for(i=0;i<m[0];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/u/1.jpg">');
  }
  for(i=0;i<m[1];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/u/2.jpg">');
  }
  for(i=0;i<m[2];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/u/3.jpg">');
  }
  for(i=0;i<m[3];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/u/4.jpg">');
  }
  for(i=0;i<m[4];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/u/5.jpg">');
  }
  for(i=0;i<m[5];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/u/6.jpg">');
  }
  for(i=0;i<m[6];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/u/7.jpg">');
  }
  for(i=0;i<m[7];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/u/8.jpg">');
  }
  for(i=0;i<m[8];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/u/9.jpg">');
  }
  for(i=0;i<m[9];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/u/10.jpg">');
  }
  for(i=0;i<m[10];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/u/11.jpg">');
  }
  for(i=0;i<m[11];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/u/12.jpg">');
  }
  for(i=0;i<m[12];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/u/13.jpg">');
  }
  for(i=0;i<m[13];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/u/14.jpg">');
  }
  for(i=0;i<m[14];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/u/15.jpg">');
  }
  for(i=0;i<m[15];i++){
    document.getElementById('uc').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/u/16.jpg">');
  }
}
function c(){
  let m = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var total = 0;
  for(var i=0;i<20;i++){
    var min = 1;
    var max = 20;
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
  while(total!=30){
    if(total<30){
      var min = 0;
      var max = 19;
      a = Math.floor( Math.random() * (max + 1 - min) ) + min;
      m[a]++;
      total++;
    }
    else if(total>30){
      var min = 0;
      var max = 19;
      a = Math.floor( Math.random() * (max + 1 - min) ) + min;
      m[a]--;
      total--;
    }
  }
  for(i=0;i<m[0];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/c/1.jpg">');
  }
  for(i=0;i<m[1];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/c/2.jpg">');
  }
  for(i=0;i<m[2];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/c/3.jpg">');
  }
  for(i=0;i<m[3];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/c/4.jpg">');
  }
  for(i=0;i<m[4];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/c/5.jpg">');
  }
  for(i=0;i<m[5];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/c/6.jpg">');
  }
  for(i=0;i<m[6];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/c/7.jpg">');
  }
  for(i=0;i<m[7];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/c/8.jpg">');
  }
  for(i=0;i<m[8];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/c/9.jpg">');
  }
  for(i=0;i<m[9];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/c/10.jpg">');
  }
  for(i=0;i<m[10];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/c/11.jpg">');
  }
  for(i=0;i<m[11];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/c/12.jpg">');
  }
  for(i=0;i<m[12];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/c/13.jpg">');
  }
  for(i=0;i<m[13];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/c/14.jpg">');
  }
  for(i=0;i<m[14];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/c/15.jpg">');
  }
  for(i=0;i<m[15];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/c/16.jpg">');
  }
  for(i=0;i<m[16];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/c/17.jpg">');
  }
  for(i=0;i<m[17];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/c/18.jpg">');
  }
  for(i=0;i<m[18];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/c/19.jpg">');
  }
  for(i=0;i<m[19];i++){
    document.getElementById('c').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/c/20.jpg">');
  }
}
function tr(){
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
    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/tr/1.jpg">');
  }
  for(i=0;i<l[1];i++){
    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/tr/2.jpg">');
  }
  for(i=0;i<l[2];i++){
    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/tr/3.jpg">');
  }
  for(i=0;i<l[3];i++){
    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/tr/4.jpg">');
  }
  for(i=0;i<l[4];i++){
    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/tr/5.jpg">');
  }
  for(i=0;i<l[5];i++){
    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/tr/6.jpg">');
  }
  for(i=0;i<l[6];i++){
    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/tr/7.jpg">');
  }
  for(i=0;i<l[7];i++){
    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/tr/8.jpg">');
  }
  for(i=0;i<l[8];i++){
    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/tr/9.jpg">');
  }
  for(i=0;i<l[9];i++){
    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/tr/10.jpg">');
  }
  for(i=0;i<l[10];i++){
    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/tr/11.jpg">');
  }
  for(i=0;i<l[11];i++){
    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/tr/12.jpg">');
  }
  for(i=0;i<l[12];i++){
    document.getElementById('tr').insertAdjacentHTML('beforeEnd', '<img class="card" src="s3a/tr/13.jpg">');
  }
}


function sirudo(){
  sr();
  vmax();
  v();
  ar();
  r();
  uc();
  c();
  tr();
}

window.onload = sirudo();