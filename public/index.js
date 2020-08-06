async function getData()
{
const data=await (await fetch("https://api.rootnet.in/covid19-in/stats/latest")).json();
var body=document.querySelector('#tablebody');
const dataVal=data.data.regional.map((dataset) => dataset );  
dataset(dataVal);
dataVal.forEach((location,index)=> {
   var newhtml=`<tr><td>${index+1}</td><td>${location.loc}</td><td>${location.confirmedCasesForeign}</td><td>${location.discharged}</td><td>${location.deaths}</td><td>${location.totalConfirmed}</td></tr>`;
   body.insertAdjacentHTML('beforeend',newhtml); 
});
console.log(dataVal);
}
getData();

//let dataset=[];
function dataset(dataVal)
{
console.log(dataVal);
}


/*document.querySelector('#input input').addEventListener("keyup",()=>{
    console.log(document.querySelector('#input input').value);
    const data=await (await fetch("https://api.rootnet.in/covid19-in/stats/latest")).json();

    dataVal=data.data.regional.map((dataset) => dataset );  

});*/