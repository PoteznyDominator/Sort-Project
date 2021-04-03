const timer = ms => new Promise(res => setTimeout(res, ms));

export let insertionSort = async(element,btn,rnd,color) =>{
    let tab = Array.from(element)
    let len = tab.length;
        for (let i = 1; i < len; i++) {
            // Choosing the first element in our unsorted subarray
            let current = tab[i];
            if(i == 1){
                await timer(500);
                anime({
                    targets:tab[0],
                    borderColor:color,
                });
                anime({
                    targets:tab[0].getElementsByTagName("p")[0],
                    color:color,
                });
            }
            // The last element of our sorted subarray
            let j = i-1; 
            while (j > -1) {
                if(current.getElementsByTagName("p")[0].innerHTML < tab[j].getElementsByTagName("p")[0].innerHTML){
                    await timer(500);
                    anime({
                        targets:tab[j],
                        translateY:100,
                    }); 
                    anime({
                        targets:tab[j+1],
                        translateY:100,
                    });
                    await timer(500);
                    anime({
                        targets:tab[j],
                        translateX:{
                            value:'+=79',
                        },
                    }); 
                    anime({
                        targets:tab[j+1],
                        translateX:{
                            value:'-=79',
                        },
                    });
                    await timer(500);
                    anime({
                        targets:tab[j],
                        translateY:0,
                    }); 
                    anime({
                        targets:tab[j+1],
                        translateY:0,
                    });
                    let tmp = tab[j];
                    tab[j] = tab[j+1];
                    tab[j+1] = tmp;
                    j--;
                }
                else{
                    await timer(500);
                    anime({
                        targets:tab[j],
                        translateY:100,
                    }); 
                    anime({
                        targets:tab[j+1],
                        translateY:100,
                    });
                    await timer(500);
                    anime({
                        targets:tab[j],
                        translateY:0,
                    }); 
                    anime({
                        targets:tab[j+1],
                        translateY:0,
                    });
                    break;
                }
            }
            await timer(500);
            anime({
                targets:tab[j+1],
                borderColor:color,
            });
            anime({
                targets:tab[j+1].getElementsByTagName("p")[0],
                color:color,
            });
           tab[j+1] = current;
        }
    anime({
        targets:"#insertion",
        height: "-=100",
        easing: 'linear',
        duration:500,
    });
    anime({
        targets:"#insertionbutton .start",
        rotate:{
            value: "-=360",
            duration:1000,
        },
    });
    element[2].closest(".sort-container").classList.remove("noHover");
    rnd.disabled = false;
    return true;
};