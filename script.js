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

const timer = ms => new Promise(res => setTimeout(res, ms))

window.addEventListener("DOMContentLoaded", function(){
    let arr = Array.from({length: 8}, () => Math.floor(Math.random() * 10));

    displayContainers(sorts,arr);

    const element = document.querySelectorAll("#bubble .element");
    const startBtn = document.querySelectorAll(".start");
    //animating right function
    startBtn.forEach(function(btn){
        btn.addEventListener("click",function(){
            let id = this.parentNode.getAttribute("id");
            
            console.log(btn.getAttribute("class"));
            anime({
                targets:"#"+id+" .start",
                rotate:{
                    value: "+=360",
                    duration:1000,
                },
                color:"#ab3dff",
            });
            anime({
                targets:"#"+id.replace("button",""),
                height:180,
                easing: 'linear',
                duration:500,
            });
            btn.disabled = true;
            if(id === "bubblebutton"){
                bubbleSort(element);
            }
        });
    })
});


//alogrithm to show bubble sort
let bubbleSort = async (element) => {
    let tab = Array.from(element);
    let len = tab.length;
    await timer(500);
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len-1-i; j++) {
                anime({
                    targets:tab[j],
                    translateY:100,
                });
                anime({
                    targets:tab[j+1],
                    translateY:100,
                });
                if (parseInt(tab[j].getElementsByTagName("p")[0].innerHTML)>parseInt(tab[j+1].getElementsByTagName("p")[0].innerHTML)) {
                    await timer(500);
                    anime({
                        targets:tab[j],
                        translateX: {
                            value:'+=79',
                        },
                    })
                    anime({
                        targets:tab[j+1],
                        translateX: {
                            value:'-=79',
                        },
                    })
                    let tmp = tab[j];
                    tab[j] = tab[j+1];
                    tab[j+1] = tmp;
                }
                await timer(500);
                anime({
                    targets:tab[j],
                    translateY:0,
                });
                anime({
                    targets:tab[j+1],
                    translateY:0,
                });
                await timer(500);
                console.log(len-i);
        }
        await timer(100);
        anime({
            targets:tab[len-i-1],
            borderColor:"#5cdb95",
        });
        await timer(500);
    }
    anime({
        targets:".sort-container",
        height: 160,
        easing: 'linear',
        duration:500,
    });
    anime({
        targets:"#bubblebutton .start",
        rotate:{
            value: "-=360",
            duration:1000,
        },
        color:"#000",
    });
    return tab;
};

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
                <a href="index.html" class="link">
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
            <div class="element">
                <p>${(tab[3]*item.id)%10+1}</p>
            </div>
            <div class="element">
                <p>${(tab[4]*item.id)%10+1}</p>
            </div>
            <div class="element">
                <p>${(tab[5]*item.id)%10+1}</p>
            </div>
        </div>
    </div>`
    });
    content.innerHTML = dis;
}

