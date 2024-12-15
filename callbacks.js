
    // function displayGreeting(displayName){
    //     console.log("Hello");
    //     displayName();
    //     console.log("Good Evening");
    // }
    // displayGreeting(function(){
    //     console.log("Naresh");
    // })


    // function displayGreeting1(displayName){
    //     console.log("Hello");
    //     displayName();
    //     console.log("Where are you From");
    // }

    // function displayNaresh()
    // {
    //     console.log("Naresh");
    // }
    // displayGreeting1(displayNaresh);

    // function displayGreeting2(displayName){
    //     console.log("Hello");
    //     displayName();
    //     console.log("Good Night");
    // }

    // let displayHanvik= function(){
    //     console.log("Hanvik");
    // }

    // displayGreeting2(displayHanvik);

//   let counter=0;
//     setInterval(function(){
//         console.log(counter);
//         counter=counter+1;
//     },1000);


let setInterval=document.getElementById("setIntervalId");
let clearInterval=document.getElementById("clearIntervalId");
let displayEle=document.getElementById("setid");
let uniqueId=null;
setInterval.onclick=function(){
    let counter=0;
    uniqueId=setInterval(function(){
        console.log(counter);
        counter=counter+1;
        displayEle.textContent=counter;
    },1000);
}
clearInterval.onclick=function(){
    clearInterval(uniqueId);
    console.log("Interval cleared");
};