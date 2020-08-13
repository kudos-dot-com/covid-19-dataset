
 

function getId(id,id1,count){
document.querySelector(id).style.display='none';
document.querySelector(`${id1} img:first-child`).style.display="none";


$(document).ready(function(){
    $(id1).click(function(){
      $(id).toggle();
      $(id1 + " "+"img:first-child").toggle();
      $(id1 + " "+"img:last-child").toggle();
    });
  });
}
getId('#state','#state-show');
getId('#world','#world-show');
getId('#compare','#compare-states');
cout=1;

    document.querySelector("#on").addEventListener('click',()=>{
    if(cout%2==0){
        document.querySelector("#nav2").style.left='-400px';
}
else
{
document.querySelector("#nav2").style.left='0px';
}cout++;
});
document.querySelector("#off").addEventListener('click',()=>{
document.querySelector("#nav2").style.left='-400px';
console.log(1);
cout++;
});

window.onload=function(){
    $(document).ready(function(){
        $('#covid').fadeIn(2000);
        $('#records').fadeIn(4000);

    });
}


window.addEventListener('scroll',()=>{
  if(window.pageYOffset >100)
  {
    document.querySelector('#nav1').style.background='#90cdf4';
    document.querySelector('#head').style. visibility='visible';
    //console.log(window.pageYOffset);
  }
  else
  {
    document.querySelector('#nav1').style.background='transparent';
   document.querySelector('#head').style.visibility='hidden';

  }  
});

document.querySelector('#nav2 ul li:nth-child(3)').addEventListener('click',()=>{
  console.log(1);
let element = document.querySelector('#state-show');
let position = element.getBoundingClientRect();
let y = position.top;
  window.scrollTo({top:y,behavior:"smooth"});
  
});
document.querySelector('#nav2 ul li:nth-child(1)').addEventListener('click',()=>{
  console.log(1);
  window.scrollTo({top:0,behavior:"smooth"});
  
});
document.querySelector('#nav2 ul li:nth-child(2)').addEventListener('click',()=>{
  console.log(1);
let element = document.querySelector('#prevention');
let position = element.getBoundingClientRect();
let y = position.top;
  window.scrollTo({top:y,behavior:"smooth"});
  
});

document.querySelector('#nav1 ul li:nth-child(2)').addEventListener('click',()=>{
  console.log(1);
  let element = document.querySelector('#state-show');
let position = element.getBoundingClientRect();
let y = position.top;
  window.scrollTo({top:y,behavior:"smooth"});
  
});
document.querySelector('#nav1 ul li:nth-child(3)').addEventListener('click',()=>{
  console.log(1);
  let element = document.querySelector('#prevention');
let position = element.getBoundingClientRect();
let y = position.top;
  window.scrollTo({top:y,behavior:"smooth"});
  
});
document.querySelector('#nav1 ul li:nth-child(4)').addEventListener('click',()=>{
  console.log(1);
  
  window.scrollTo({top:0,behavior:"smooth"});
  
});


var point=0;

function slide(){
   
   document.querySelector('#slider').style.transform=`translateX(${point*-300}px)`;
   point++;

   document.querySelector(`#current div:nth-child(${point})`).style.background="#dd6b20";
 // console.log(pos);
   if(point==1)
   {
    document.querySelector(`#current div:last-child`).style.background="transparent";
   }
   else{
    document.querySelector(`#current div:nth-child(${point-1})`).style.background="transparent";

   }
   if(point==6){
     point=0;
    }
 
}
setInterval(slide,3000);