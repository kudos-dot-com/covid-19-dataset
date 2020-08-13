document.querySelector('#button-state').addEventListener('click',()=>{
    var state1=document.querySelector('#rank1').value;
   var state2=document.querySelector('#rank2').value;
   
   var arr=[],arr1=[];
   if(state1==='' || state2==='')
   {
       document.querySelector('#compare-content').textContent='please fill up the following parameters';
    }
    else{
        function getstate(find,arr=[]){
        statex=document.querySelectorAll("#tablebody  tr");
        statex.forEach((ele,index)=>{
            if((statex[index].querySelector('td:nth-child(2)').innerText).toLowerCase()===find.toLowerCase())
            {
                arr.push(statex[index].querySelector('td:nth-child(3)'.innerText));
                arr.push(statex[index].querySelector('td:nth-child(4)').innerText);
                arr.push(statex[index].querySelector('td:nth-child(5)').innerText);
                arr.push(statex[index].querySelector('td:nth-child(6)').innerText);

            }
        
        });
    }
    getstate(state1,arr);
    getstate(state2,arr1);
    console.log(arr);
    console.log(arr1);

    }
    chart(arr,arr1,state1,state2);
    add(state1,arr);
    add(state2,arr1);
    document.querySelector('#chart').style.display="block";
    document.querySelector('#chart1').style.display="block";
});
function add(state,arr)
{
    var  added=`<div class="mt-4 py-4 bg-white text-center md:px-40"><h1 class="text-lg capitalize underline my-2">${state}</h1> <h2 class="text-lg capitalize text-green-400 my-2">recovered:${arr[1]}</h2><h2 class="text-lg capitalize text-red-400 my-2">total-death:${arr[2]}</h2><h2 class="text-lg capitalize text-yellow-400 my-2">total cases:${arr[1]}</h2></div>`;
    document.querySelector('#section').insertAdjacentHTML('beforeend',added);
}
function chart(arr,arr1,state1,state2){
var ctx = document.getElementById('myChart1').getContext('2d');
var myChart = new Chart(ctx, 
{
    type: 'line',
    data: {
        labels: ['foreign cases', 'recovered', 'death', 'total cases'],
        datasets: [{
            
                label:state2,
                backgroundColor:"#74b9ff",
                borderColor:'#74b9ff',
                borderWidth:2,
                lineTension:0.1,
                fill:1,
                data:arr
        
                },
                {
                    label:state1,
                backgroundColor:"#fd79a8",
                borderColor:'#fd79a8',
                borderWidth:2,
                lineTension:0.1,
                fill:true,
                
                data:arr1
                }
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        responsive: true,
            maintainAspectRatio: false,
    }

}
);

var ctx1 = document.getElementById('myChart').getContext('2d');
var myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['foreign cases', 'recovered', 'death', 'total cases'],
        datasets: [{
            
                label:state1,
                backgroundColor:"#74b9ff",
                borderColor:"#74b9ff",
                borderWidth:2,
                lineTension:0.1,
                fill:true,
                data:arr
        
                },
                {
                    label:state2,
                backgroundColor:"#fd79a8",
                borderColor:'#fd79a8',
                borderWidth:2,
                lineTension:0.1,
                fill:true,
                data:arr1
                }
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        responsive: true,
            maintainAspectRatio: false,
    }
});}