const timer = ms => new Promise(res => setTimeout(res, ms));
export let selectionSort = async (element,btn,rnd,color) => { 
    let tab = Array.from(element);
    let len = tab.length;
    await timer(250);
    for(let i = 0; i < len; i++) {
        // Finding the smallest number in the subarray
        await timer(500);
        let min = i;
        anime({
            targets:tab[min],
            translateY:100,
        });
        await timer(500);
        for(let j = i+1; j < len; j++){
            anime({
                targets:tab[j],
                translateY:20,
            });
            if(parseInt(tab[j].getElementsByTagName("p")[0].innerHTML)<parseInt(tab[min].getElementsByTagName("p")[0].innerHTML)) {
                min=j; 
            }
            await timer(250);
            anime({
                targets:tab[j],
                translateY:0,
            });
         }
         anime({
            targets:tab[min].getElementsByTagName("p")[0], 
            color:color,
        });
        anime({
            targets:tab[min],
            borderColor:color,
            translateY:100,
        });
         if (min != i) {
             // Swapping the elements
             let parent = element[0].parentElement.getBoundingClientRect().left;
             let minX = tab[min].getBoundingClientRect().left-parent;
             let iX = tab[i].getBoundingClientRect().left-parent;
             await timer(500);
             anime({
                targets:tab[i],
                translateX:{
                    value:'+='+(minX-iX+(min-i)*3),
                },
            });
            anime({
                targets:tab[min],
                translateX:{
                    value:'+='+(iX-minX-(min-i)*3),
                },
            });
             let tmp = tab[i]; 
             tab[i] = tab[min];
             tab[min] = tmp;      
        }
        await timer(500);
        anime({
            targets:tab[min],
            translateY:0,
        });
        anime({
            targets:tab[i],
            translateY:0,
        });
    }
    anime({
        targets:"#selection",
        height: "-=100",
        easing: 'linear',
        duration:500,
    });
    anime({
        targets:"#selectionbutton .start",
        rotate:{
            value: "-=360",
            duration:1000,
        },
    });
    element[1].closest(".sort-container").classList.remove("noHover");
    rnd.disabled = false;
    return true;
};