console.log("This is my First Project of My Daily Routine")
showcontent(); 
let addbtn= document.getElementById("addbtn");
addbtn.addEventListener("click",function(e) {

    let mytext=document.getElementById("mytext");
    let mytitle=document.getElementById("mytitle");
    let outputbox=localStorage.getItem("outputbox");  

    if(outputbox == null){
        outputboxobj=[];          //outputboxobj is an array 
    }
    else{
        outputboxobj=JSON.parse(outputbox);
    }
    let myobj={
        title:mytitle.value,
        text:mytext.value
    }
    outputboxobj.push(myobj);
    localStorage.setItem("outputbox",JSON.stringify(outputboxobj));
    mytext.value="";
    mytitle.value="";
    console.log(outputboxobj);
    showcontent();  
})

function showcontent(){
    let outputbox=localStorage.getItem("outputbox");
    if(outputbox==null){
        outputboxobj=[];          //outputboxobj is an array 
    }
    else{
        outputboxobj=JSON.parse(outputbox);
    }
    let str="";
    outputboxobj.forEach(function(element,index) {

         str += ` 
    <div class="cardcontainer">
         <h4 class="notehead">${element.title}</h4>
         <p class="notecontent">${element.text}</p>
         <button id="${index}" onclick= "delnotes(this.id)"> Delete Note </button>
         </div>
        `
    });
    let outputboxelem=document.getElementById("outputbox");
    if(outputboxobj.length!=0){
        outputboxelem.innerHTML=str;
    }
    else{
        outputboxelem.innerHTML= "No Notes to show! Use Add note section to add note "
        outputboxelem.style.color='black';
    }
}
function delnotes(index) {
    console.log("This note is deleting",index);

    outputboxobj.splice(index,1);
    localStorage.setItem("outputbox",JSON.stringify(outputboxobj));
    showcontent();    
}

let wordsearch= document.getElementById("wordsearch");
wordsearch.addEventListener("input",function(){
    let inputval=wordsearch.value;
    console.log("Event has fired",inputval);
    let cardcontainer=document.getElementsByClassName("cardcontainer");
    Array.from(cardcontainer).forEach(function (element) {

        let tag=element.getElementsByTagName("p")[0].innerText;
        if(tag.includes(inputval))
        {
        element.style.display="block";
        }
        else{
        element.style.display="none";
        }
    })

    
})