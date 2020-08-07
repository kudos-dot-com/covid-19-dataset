
function getId(id,id1){
document.querySelector(id).style.display='none';
document.querySelector(`${id1} img:last-child`).style.visibility="hidden";


document.querySelector(id1).addEventListener('click',()=>{
    if(x%2==0)
    {
     document.querySelector(id).style.display='none';
     document.querySelector(`${id1} img:first-child`).style.visibility="visible";
    document.querySelector(`${id1} img:last-child`).style.visibility="hidden";
        x++;
}
    else
    {
    document.querySelector(id).style.display='block';

    document.querySelector(`${id1} img:first-child`).style.visibility="hidden";
    document.querySelector(`${id1} img:last-child`).style.visibility="visible";
    x++;
}
    
    console.log(x);
});
}
getId('#state','#state-show',x=1);
getId('#world','#world-show',x=1);
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