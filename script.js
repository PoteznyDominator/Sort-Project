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
        title:"merge",
    },
    {
        id:5,
        title:"quick",
    },
    {
        id:6,
        title:"heap",
    },

]
//importing sorts alghoritms
import {bubbleSort} from "./javascripts/bubble.js";
import {selectionSort} from "./javascripts/selection.js";
import {insertionSort} from "./javascripts/insertion.js";
import {mergeSort} from "./javascripts/merge.js";
window.addEventListener("DOMContentLoaded", function(){
    let color = "#FF8AFF"
    const date = document.querySelector(".date");
    date.innerHTML = new Date().getFullYear();

    displayContainers(sorts);
    const startBtn = document.querySelectorAll(".start");
    const randomBtn = document.querySelectorAll(".random");

    //animating right function
    let check = new Array(sorts.length)
    check.fill(false);
    startBtn.forEach(function(btn){
        btn.addEventListener("click",function(){
            let id = this.parentNode.getAttribute("id");
            const element = document.querySelectorAll("#"+id.replace("button","")+ " .element");
            const rnd = document.querySelector("#"+id + " .random");
            
            if(id === "bubblebutton" && check[0] === false){
                allThings(0);
                bubbleSort(element,btn,rnd,color);
            }
            else if(id === "selectionbutton" && check[1] === false){
                allThings(1);
                selectionSort(element,btn,rnd,color);
            }
            else if(id === "insertionbutton" && check[2] === false){
                allThings(2);
                insertionSort(element,btn,rnd,color);
            }
            else if(id === "mergebutton" && check[3] === false){
                allThings(3);
                mergeSort(element,btn,rnd,color);
            }
            else{
                alert("You need to randomize array.");
            }
            
            function allThings(n) {
                rnd.disabled = true;
                let container = document.querySelectorAll(".sort-container");
                container[n].classList.toggle("noHover");
                check[n] = true;
                anime({
                    targets:"#"+id+" .start",
                    rotate:{
                        value: "+=360",
                        duration:900,
                    },
                });
                anime({
                    targets:"#"+id.replace("button",""),
                    height:"+=100",
                    easing: 'linear',
                    duration:500,
                });
            }
        });
    });
    randomBtn.forEach(function(btn){
        btn.addEventListener("click",function(){
            let id = this.parentNode.getAttribute("id");
            let arr = document.querySelectorAll("#"+id.replace("button","")+" .element p");
            const element = document.querySelectorAll("#"+id.replace("button","")+ " .element");
            switch(id){
                case "bubblebutton":
                    check[0] = false;
                case "selectionbutton":
                    check[1] = false;
                case "insertionbutton":
                    check[2] = false;
                case "mergebutton":
                    check[3] = false;
            }
            for(let i=0;i<element.length;i++){
                arr[i].innerHTML = Math.floor(Math.random() * 9+1);
                anime({
                    targets:"#"+id.replace("button","")+ " .element",
                    translateX:0,
                    duration:900,
                    easing:"easeOutCubic"
                });
            }
            anime({
                targets:"#"+id+" .random",
                rotate:{
                    value: [0,360],//work on that, prevent getting too much around!!!
                    duration:900,
                },
                
            });
            anime({
                targets:element,
                borderColor:{
                    value:"#e4e6eb",
                },
            });
            anime({
                targets:arr,
                color:"#e4e6eb",
            });
        });
    });
});


//to create a great fade IN&OUT button
const navbar = document.querySelector(".nav-container");
const topBtn = document.querySelector(".topLink");
window.addEventListener("scroll",function(){
    const navHeight = navbar.getBoundingClientRect().height;
    topBtn.classList.toggle("active",window.scrollY>navHeight);
});

function shuffle() {
    let rnd = Math.floor(Math.random()*9+1);
    return rnd;
}

const content = document.querySelector(".content");
//Function to displaying array dynamically
function displayContainers(elements) {
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
                    <i class="fas fa-info-circle"></i>
                </a>
            </div>
        </div>
        <div class="sort-array" id=${item.title}>
            <div class="element">
                <p>${shuffle()}</p>
            </div>
            <div class="element">
                <p>${shuffle()}</p>
            </div>
            <div class="element">
                <p>${shuffle()}</p>
            </div>
            <div class="element">
                <p>${shuffle()}</p>
            </div>
            <div class="element">
                <p>${shuffle()}</p>
            </div>
            <div class="element">
                <p>${shuffle()}</p>
            </div>
            <div class="element">
                <p>${shuffle()}</p>
            </div>
            
        </div>
    </div>`
    });
    dis = dis.join('');
    content.innerHTML = dis;
}
