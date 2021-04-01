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

    const date = document.querySelector(".date");
    date.innerHTML = new Date().getFullYear();

    displayContainers(sorts,arr);
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
                btn.disabled = true;
                rnd.disabled = true;
                check[0] = true;
                animations();
                bubbleSort(element,btn,rnd);
            }
            else if(id === "selectionbutton" && check[1] === false){}
            else{
                alert("You need to randomize array.");
            }
            
            
            function animations() {
                anime({
                    targets:"#"+id+" .start",
                    rotate:{
                        value: "+=360",
                        duration:1000,
                    },
                    color:"#FF8AFF",
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
            }
            for(let i=0;i<element.length;i++){
                arr[i].innerHTML = Math.floor(Math.random() * 10+1);
                anime({
                    targets:"#"+id.replace("button","")+ " .element",
                    translateX:0,
                    duration:1000,
                    easing:"easeOutCubic"
                });
            }
            anime({
                targets:"#"+id+" .random",
                rotate:{
                    value: [0,360],//work on that, prevent getting too much around!!!
                    duration:1000,
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
                    <i class="fas fa-info-circle"></i>
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
            <div class="element">
                <p>${(tab[3]*item.id)%10+1}</p>
            </div>
            <div class="element">
                <p>${(tab[4]*item.id)%10+1}</p>
            </div>
            <div class="element">
                <p>${(tab[5]*item.id)%10+1}</p>
            </div>
            <div class="element">
                <p>${(tab[6]*item.id)%10+1}</p>
            </div>
        </div>
    </div>`
    });
    dis = dis.join('');
    content.innerHTML = dis;
}
