
function getId(id,id1,count){
document.querySelector(id).style.display='none';
document.querySelector(`${id1} img:last-child`).style.display="none";


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