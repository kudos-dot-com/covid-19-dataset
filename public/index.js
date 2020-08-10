async function getData(url)
{
const data=await (await fetch(url)).json();
if(url==="https://api.rootnet.in/covid19-in/stats/latest"){
var body=document.querySelector('#tablebody');
const dataVal=data.data.regional.map((dataset) => dataset );  
dataVal.forEach((location,index)=> {
   var newhtml=`<tr><td>${index+1}</td><td>${location.loc}</td><td>${location.confirmedCasesForeign}</td><td>${location.discharged}</td><td>${location.deaths}</td><td>${location.totalConfirmed}</td></tr>`;
   body.insertAdjacentHTML('beforeend',newhtml); 
});

dataset(dataVal);
}
//console.log(data);
else
if(url==="https://api.covid19api.com/summary")
{   console.log(data);
    var body1=document.querySelector('#tablebody1');
    const dataVal1=data.Countries.map((dataset) => dataset );  
    dataVal1.forEach((location,index)=> {
       var newhtml1=`<tr><td>${index+1}</td><td>${location.Country}</td><td>${location.NewConfirmed}</td><td>${location.TotalRecovered}</td><td>${location.TotalDeaths}</td><td>${location.TotalConfirmed}</td></tr>`;
       body1.insertAdjacentHTML('beforeend',newhtml1); 
});
dataset1(dataVal1);
}
}
getData("https://api.covid19api.com/summary");

getData("https://api.rootnet.in/covid19-in/stats/latest");
/*end for states*/

const dataset_india=[];
function dataset(dataVal)
{ 
console.log(dataVal);
document.querySelector('#input input').addEventListener("keyup",()=>{
    var getch=document.querySelector('#input input');
   // var getch1=document.querySelector('#input1 input');
    var body=document.querySelector('#tablebody');
    let  table=body.querySelectorAll('tr');
 
        dataVal.forEach((pos,index)=>{
        if((getch.value.toLowerCase().trim()===pos.loc.substring(0,getch.value.length).toLowerCase().trim()))// || (getch1.value.toLowerCase().trim()===pos.Country.substring(0,getch.value.length).toLowerCase().trim()))
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

function dataset1(dataVal)
{ 
    console.log("red");
console.log(dataVal);
document.querySelector('#input1 input').addEventListener("keyup",()=>{
    //var getch=document.querySelector('#input input');
    var getch1=document.querySelector('#input1 input');
    var body=document.querySelector('#tablebody1');
    let  table=body.querySelectorAll('tr');
    console.log(1);
        dataVal.forEach((pos,index)=>{
        if((getch1.value.toLowerCase().trim()===pos.Country.substring(0,getch1.value.length).toLowerCase().trim()))
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