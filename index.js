// let count =JSON.parse(localStorage.getItem("pro"))||0
let count=0

const red=()=>{
    number.classList.add("open-popup")
}
const white=()=>{
    number.classList.remove("open-popup")
}

document.getElementById("increment").addEventListener("click",(e)=>{
    count+=1
    document.getElementById("number").innerHTML=count
    let number=document.getElementById("number").value    
    if(count>"0"){
        white()
    }
    // localStorage.setItem("pro",JSON.stringify(count))
})
document.getElementById("decrement").addEventListener("click",()=>{
    count-=1
    document.getElementById("number").innerHTML=count
    let number=document.getElementById("number").value
    console.log(number);
    if(count<"0"){
        red()
    }
})