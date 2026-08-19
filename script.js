const inputBox=document.getElementById("input-Box");
const listContainer=document.getElementById("list-container");

function addItem(){
    if(inputBox.value===''){
        alert("Enter something mawa........")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML=" &#10006";
        li.appendChild(span);
    }
    inputBox.value='';
         //saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
       //saveData();
    }
});

// function saveData(){
//     localStorage.setItem("Data",listContainer.innerHTML);
// }



// const inputBox=document.getElementById("input-Box");
// const listContainer=document.getElementById("list-container");

// function addItem(){
//     if(inputBox.value===''){
//         alert("Please enter Something.....");    
//     }else{
//         const li=document.createElement("li");
//         li.innerHTML=inputBox.value;
//         listContainer.appendChild(li);
//          let span=document.createElement("span");
//         span.innerHTML="&#10006";
//         li.appendChild(span);
//         localStorage.
//     }
//     inputBox.value='';
// }

// listContainer.addEventListener("click",function(e){
//     if(e.target.tagName==="SPAN"){
//         e.target.parentElement.remove();
//     }
// });


// // inputBox.addEventListener("change",function(){
// //     console.log(inputBox.value);
// //     localStorage.setItem("Name",inputBox.value);
// // });