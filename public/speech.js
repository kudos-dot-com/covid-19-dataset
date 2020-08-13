var button=document.querySelector('#speech');
var content=document.querySelector('#content');
const speechRec=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognise=new speechRec();

recognise.onstart=function(){
    console.log("speech is on");
    content.textContent='Listening..';

}
recognise.onresult=function res(e){
//console.log("running");

const value=e.results[e.resultIndex][0].transcript;
console.log(value);
var val=value.toLowerCase();
var state=document.querySelectorAll("#tablebody tr ");
var country=document.querySelectorAll("#tablebody1 tr ");

//console.log(sta);
f=0;
state.forEach((element,index) => {
state2=(state[index].querySelector('td:nth-child(2)').innerText).toLowerCase();
if(val.localeCompare(state2)==0)
{
content.textContent='......';
//console.log();
talk(`${state2}`);
talk(`foreign cases reported till now is  ${state[index].querySelector('td:nth-child(3)').innerText} `);
talk(`{recovered patients are ${state[index].querySelector('td:nth-child(4)').innerText} `);
talk(`total deceased are ${state[index].querySelector('td:nth-child(5)').innerText}`)    
talk(`total cases reported till now is : ${state[index].querySelector('td:nth-child(6)').innerText}`);
f=1;
}
});
country.forEach((element,index) => {
    country2=(country[index].querySelector('td:nth-child(2)').innerText).toLowerCase();
 if(val.localeCompare(country2)==0)
 {
 content.textContent='......';
 talk(`${country2}`);
 talk(`new cases confirmed in last 24 hours is ${country[index].querySelector('td:nth-child(3)').innerText.substring(1)}`);
 talk(`recovered patients are ${country[index].querySelector('td:nth-child(4)').innerText}`);
 talk(`total deceased ${country[index].querySelector('td:nth-child(5)').innerText}`);
 talk(`total cases reported till now is : ${country[index].querySelector('td:nth-child(6)').innerText}`);
 f=1;
 }
});
if(f==0)
{
    talk(`do you mean ${value} , if not , press the button and try again`);
    content.textContent='try again..';
     
}
else
{
    content.textContent='.....';
    talk("press the button again to continue");
}   

}



content.textContent='...';
button.addEventListener('click',()=>{
recognise.start();
});

function talk(m){
    const speak=new SpeechSynthesisUtterance();
    speak.volume=1;
    speak.pitch=1;
    speak.rate=0.5;
    speak.text=m;
    window.speechSynthesis.speak(speak);
   

}


