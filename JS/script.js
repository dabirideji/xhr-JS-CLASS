// // function deji() {
// //   console.log("deji cooking has started...");
// //   console.log("boiling water...");

// //   setTimeout(function () {
// //     console.log("water is boiled");
// //     console.log("about to put spicees and indomie inside my booiled water");
// //     // console.log("deji function has finished");
// //   }, 10000);
// // }

// // deji();
// // setTimeout(() => {
// //   console.log("still cutting indomie and indomie spices");
// // }, 2000);

// // let rand=(Math.ceil(Math.random()*8)*1000);
// // // console.log(rand)
// // let ini=prompt("input an amount");
// // let amount=`$${ini}`;
// // let account=prompt("input account number");

// // let dej=new Promise((boluKhaddie,others)=>{
// //   if(Number(ini)>10000){
// //     setTimeout(()=>{
// //       others(`daily amount exceeded \n you are not alloowed to transact with amounts this much`);
// //       // boluKhaddie(`transfer successful \n the transfer of ${amount} to ${account} was successfull`);
// //       console.error(dej);
// //     },rand);
// //   }
// //   else{
// //     setTimeout(()=>{
// //       boluKhaddie(`transfer successful \n the transfer of ${amount} to ${account} was successfull`);
// //       console.log(dej);
// //     },rand);
// //   }

// // });
// // console.log(dej);
// // console.log(`${amount} is being transferred to ${account}`)

// // dej.then((x)=>{console.log(x)})

// //  async function getData(inputLimit=prompt("how many data do you want to fetch?")||4){

// // fetch("https://jsonplaceholder.typicode.com/users?_limit="+inputLimit)
// // .then((x)=>{ return x.json()})
// // .then((x)=>{for (const y of x) {
// //     console.log(`the user name is ${y.name}\n
// //     and the user email is ${y.email}.
// //     `);
// // }});

// //  }

// // let names=["deji","tobi","dami","moyo"];

// // for (let x of names) {
// // // console.log(x);
// // }

// // let data=fetch("data.txt");
// // console.log(data);

// // function Deji(){

// // let a=4;
// // let b=4;

// // let out=a+b;
// // console.log(out);

// // }

// // Deji();
// function add() {
//   let num1 = Number(prompt());
//   let num2 = Number(prompt());

//   let out = num1 + num2;
//   alert(out);
// }

// function multiplyNumbers(){
//     console.log(Number(prompt("input num 1"))*Number(prompt("input num 2")));
// }
// function minusNumbers(){
//     console.log(Number(prompt("input num 1"))-Number(prompt("input num 2")));
// }
// function divideNumbers(){
//     console.log(Number(prompt("input num 1"))/Number(prompt("input num 2")));
// }
// divideNumbers();
























function dej(){
    console.log(this);
}



// console.log(typeof dej)
// console.log(this);
// dej()









function getData(){
    let xhr=new XMLHttpRequest();

    xhr.open("GET","../DATA/deji.txt",true);
console.log(xhr.readyState);
// console.log(xhr);
xhr.onload=()=>{
    let loadBtn=document.getElementById("dataBtn");
    loadBtn.innerHTML=`LOADING... <div class="loader hide" id="loading"></div>`;

}
xhr.onloadend=()=>{

    setTimeout(()=>{
    let loadBtn=document.getElementById("dataBtn");
    let loading=document.getElementById("loading");
        loadBtn.innerHTML="LOADING completed";


    },2000);
}







xhr.onreadystatechange=function(){

   
    console.log(this.readyState);
    console.log(xhr.status);
    if(xhr.status==200&&xhr.readyState==4){
        console.log(xhr.responseText);
        console.log("the request is done")
    }
}






    xhr.send()



}








