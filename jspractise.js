// let myArray=[5,true,false,"does"];
// console.log(myArray);

// myArray[2]="do";
// console.log(myArray);

// myArray.push(10,20,30);
// myArray.pop();
// console.log(myArray);


// let headEle=document.getElementById("headingele");
// let buttonEle=document.getElementById("buttonele");
// function gotobtech(){
//     if(buttonEle.textContent==="Go to Btech Course")
//     {
//         buttonEle.textContent="Go to nalanda";
//         buttonEle.classList.add("button");
//         headEle.innerHTML=("G.Pulla Reddy Engineering Course");
//     }
//     else{
//         buttonEle.textContent="Go to Btech Course";
//         buttonEle.classList.add("button");
//         headEle.innerHTML="Nalanda Junior College";
//     }
// }


//Objects
// let student={
//     name:"Naresh",
//     Rollno:29,
//     Course:"CSD",
//     run:function(){
//         console.log("Running");
//     },
//     skills:["Java","Python","JavaScript"],
//     Address:{
//         DoorNo:27,
//         Village:"Obulapuram",
//         Mandal:"Muddanur",
//         District:"Kadapa",
//         State:"Andhra Pradesh"
//     }
// }
// console.log(student.name,student.Rollno);

/*Adding and Manipulating
student.Address.City="Visakhapatnam";
student.Address.District="Cuddapah";
console.log(student);*/

//Object Destructuring Methods
// let{name,Rollno}=student;
// console.log(name+Rollno);

//run Function()
// student.run();

// //Array
// console.log(student.skills[0]);


let inputElement = document.createElement("input");
inputElement.type="checkbox";
inputElement.id="myCheckbox";
document.body.appendChild(inputElement);

let labelElement=document.createElement("label");
labelElement.htmlFor="myCheckbox";
labelElement.textContent="Graduated";
document.body.appendChild(labelElement);