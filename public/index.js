
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

}

else
if(url==="https://api.covid19api.com/summary")
{   console.log(data);
    var body1=document.querySelector('#tablebody1');
    const dataVal1=data.Countries.map((dataset) => dataset );  
    dataVal1.forEach((location,index)=> {
       var newhtml1=`<tr><td>${index+1}</td><td>${location.Country}</td><td>+ ${location.NewConfirmed}</td><td>${location.TotalRecovered}</td><td>${location.TotalDeaths}</td><td>${location.TotalConfirmed}</td></tr>`;
       body1.insertAdjacentHTML('beforeend',newhtml1); 
});

document.querySelector('#rate1').innerText=data.Global.TotalConfirmed;
document.querySelector('#rate2').innerText=data.Global.TotalRecovered;
document.querySelector('#rate3').innerText=data.Global.NewConfirmed;
document.querySelector('#rate4').innerText=data.Global.TotalDeaths;
document.querySelector('#rate5').innerText=data.Global.NewRecovered;
document.querySelector('#rate6').innerText=data.Global.NewDeaths;

}

}
getData("https://api.covid19api.com/summary");
getData("https://api.rootnet.in/covid19-in/stats/latest");
/*end for states*/

const dataset_india=[];
function dataset()
{ 
document.querySelector('#input input').addEventListener("keyup",()=>{
    var getch=document.querySelector('#input input');
    var body=document.querySelector('#tablebody');
    var  table=body.querySelectorAll('tr');
 
        table.forEach((pos,index)=>{
        if((getch.value.toLowerCase().trim()===table[index].querySelectorAll('td')[1].innerText.substring(0,getch.value.length).toLowerCase().trim()))
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
dataset();
function dataset1()
{ 
document.querySelector('#input1 input').addEventListener("keyup",()=>{
    var getch1=document.querySelector('#input1 input');
    var body=document.querySelector('#tablebody1');
    let  table=body.querySelectorAll('tr');
    console.log(1);
        table.forEach((pos,index)=>{
        if((getch1.value.toLowerCase().trim()===table[index].querySelectorAll('td')[1].innerText.substring(0,getch1.value.length).toLowerCase().trim()))
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
dataset1();