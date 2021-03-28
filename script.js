const sorts = [
    {
        id:1,
        title:"bubble",
    },
    {
        id:2,
        title:"selection",
    },
    {
        id:3,
        title:"insertion",
    },
    {
        id:4,
        title:"heap",
    },
    {
        id:5,
        title:"merge",
    },
    {
        id:6,
        title:"quick",
    },

]
import {bubbleSort} from "./javascripts/bubble.js";//bubblesort algorithm

window.addEventListener("DOMContentLoaded", function(){
    let arr = Array.from({length: 8}, () => Math.floor(Math.random() * 10));

    displayContainers(sorts,arr);
    const startBtn = document.querySelectorAll(".start");
    const randomBtn = document.querySelectorAll(".random");
    //animating right function
    
    startBtn.forEach(function(btn){
        btn.addEventListener("click",function(){
            let id = this.parentNode.getAttribute("id");
            const element = document.querySelectorAll("#"+id.replace("button","")+ " .element");
            let check = checking(btn);
            if(check === false){
                anime({
                    targets:"#"+id+" .start",
                    rotate:{
                        value: "+=360",
                        duration:1000,
                    },
                    color:"#2ECC40",
                });
                anime({
                    targets:"#"+id.replace("button",""),
                    height:"+=100",
                    easing: 'linear',
                    duration:500,
                });
            }
            if(id === "bubblebutton"){
                btn.disabled = true;
                check = true;
                bubbleSort(element,btn);
            }
            else{
                alert("You need to randomize array.");
            }
            if(id === "selectionbutton"){}
            
        });
    });
    randomBtn.forEach(function(btn){
        btn.addEventListener("click",function(){
            checking(btn);
            let id = this.parentNode.getAttribute("id");
            let arr = document.querySelectorAll("#"+id.replace("button","")+" .element p");
            const element = document.querySelectorAll("#"+id.replace("button","")+ " .element");
            for(let i=0;i<element.length;i++){
                arr[i].innerHTML = Math.floor(Math.random() * 10+1);
                anime({
                    targets:"#"+id.replace("button","")+ " .element",
                    translateX:0,
                });
            }
            anime({
                targets:"#"+id+" .random",
                rotate:{
                    value: "+=360",//work on that, prevent getting too much around!!!
                    duration:1000,
                },
            });
            anime({
                targets:"#"+id.replace("button","")+ " .element",
                borderColor:{
                    value:"#000",
                    duration:5000,
                },
            });
        });
    });
});

function checking(btn){
    if(btn.getAttribute("class")==="start"){
        return false;
    }
    else if(btn.getAttribute("class")==="random"){
        return false;
    }
}
const content = document.querySelector(".content");
//Function to displaying array dynamically
function displayContainers(elements,tab) {
    let dis = elements.map(function(item){
        return `<div class="sort-container">
        <div class="top">
            <h1>${item.title} sort</h1>
            <div class="buttons" id=${item.title}button>
                <button class="start">
                    <i class="fas fa-play"></i>
                </button>
                <button class="random">
                    <i class="fas fa-random"></i>
                </button>
                <a href='#${item.title}'class="link">
                    <i class="fas fa-ellipsis-v"></i>
                </a>
            </div>
        </div>
        <div class="sort-array" id=${item.title}>
            <div class="element">
                <p>${(tab[0]*item.id)%10+1}</p>
            </div>
            <div class="element">
                <p>${(tab[1]*item.id)%10+1}</p>
            </div>
            <div class="element">
                <p>${(tab[2]*item.id)%10+1}</p>
            </div>
            
        </div>
    </div>`
    });
    content.innerHTML = dis;
}

