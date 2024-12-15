// let options ={
//     method:"GET"
// };


// // let url="https://www.amazon.com/";
// // fetch(url,options)
// // .then(function(response){

// //     return response.statusText;
// // })
// // .then(function(statusText){
// //     console.log("Status Code: ",statusText);
// // })


// let url="https://www.amazon.com/";
// fetch(url,options)
// .then(function(response){

//     return response.url;
// })
// .then(function(url){
//     console.log("Status Code: ",url);
// })



// let url1="https://www.flipkart.com";
// fetch(url1,options)
// .then(function(response){

//     return response.headers;
// })
// .then(function(headers){
//     console.log("Status Code: ",headers);
// })


let data={
    name:"Naresh Kumar Reddy",
    // email: `naresh${Date.now()}@gmail.com`, 
    // // email:"naresh180820051109@gmail.com",
    // gender:"Male",
    // contact:90,
    // status:"Active"
    // rollno:29,
    // course:"CSD",
    // skills:["Java","Python","JavaScript"],
};


let options={
    method:"PUT",
    headers:{
        "Content-Type":"application/json",
        Accept: "application/json",
        // Authorization: "Bearer f6d9b109f7ecaee3c4a6743898699e266d7c1db72b086c3129811567fd86704a",
        Authorization:"Bearer f6d9b109f7ecaee3c4a6743898699e266d7c1db72b086c3129811567fd86704a",
    },
    body:JSON.stringify(data)
}
url="https://gorest.co.in/public-api/users/7558196";
fetch(url,options)
.then(function(response){
    return response.json();
})
.then(function(jsonData)
{
    console.log(jsonData)
});



// let data = {
//     name: "Naresh",
//     email: "naresh@.com
//     gender: "Male",
//     status: "Active"
// };

// let options = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: "Bearer f6d9b109f7ecaee3c4a6743898699e266d7c1db72b086c3129811567fd86704a",
//     },
//     body: JSON.stringify(data)
// };

// let url = "https://gorest.co.in/public-api/users";

// fetch(url, options)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (jsonData) {
//         console.log(jsonData);
//     })
//     .catch(function (error) {
//         console.error("Error:", error);
//     });
