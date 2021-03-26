const element = document.querySelectorAll("#bubble .element")
const container = document.querySelector(".sort-container");
const startBtn = document.querySelector(".start");

const timer = ms => new Promise(res => setTimeout(res, ms))

startBtn.addEventListener("click",function(){
    container.style.height = "270px";
    bubbleSort();
});

let bubbleSort = async () => {
    let tab = Array.from(element);
    let len = tab.length;
    await timer(500);
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len-1-i; j++) {
                anime({
                    targets:tab[j],
                    translateY:100,
                })
                anime({
                    targets:tab[j+1],
                    translateY:100,
                })
                if (parseInt(tab[j].getElementsByTagName("p")[0].innerHTML)>parseInt(tab[j+1].getElementsByTagName("p")[0].innerHTML)) {
                    await timer(1000);
                    anime({
                        targets:tab[j],
                        translateX: {
                            value:'+=76',
                        },
                    })
                    anime({
                        targets:tab[j+1],
                        translateX: {
                            value:'-=76',
                        },
                    })
                    let tmp = tab[j];
                    tab[j] = tab[j+1];
                    tab[j+1] = tmp;
                }
                await timer(1000);
                anime({
                    targets:tab[j],
                    translateY:0,
                })
                anime({
                    targets:tab[j+1],
                    translateY:0,
                })
                await timer(1000);
        }
    }
    return tab;
};
