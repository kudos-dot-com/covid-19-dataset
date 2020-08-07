async function getData()
{
const data=await (await fetch("https://api.rootnet.in/covid19-in/stats/latest")).json();
var body=document.querySelector('#tablebody');
const dataVal=data.data.regional.map((dataset) => dataset );  
dataVal.forEach((location,index)=> {
   var newhtml=`<tr><td>${index+1}</td><td>${location.loc}</td><td>${location.confirmedCasesForeign}</td><td>${location.discharged}</td><td>${location.deaths}</td><td>${location.totalConfirmed}</td></tr>`;
   body.insertAdjacentHTML('beforeend',newhtml); 
});
//console.log(dataVal);
dataset(dataVal);
}
getData();

const dataset_india=[];
function dataset(dataVal)
{ 

document.querySelector('#input input').addEventListener("keyup",()=>{
    var getch=document.querySelector('#input input');
    var body=document.querySelector('#tablebody');
    let  table=body.querySelectorAll('tr');
 
        dataVal.forEach((pos,index)=>{
        if((getch.value.toLowerCase().trim()===pos.loc.toLowerCase().substring(0,getch.value.length).trim()))
        {
           table[index].style.display='';
        }
        else
        { 
            table[index].style.display='none';
            
        }
    });
});
}

