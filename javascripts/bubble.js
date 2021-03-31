const timer = ms => new Promise(res => setTimeout(res, ms));

export let bubbleSort = async (element,btn,rnd) => {
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
        }
        await timer(100);
        anime({
            targets:tab[len-i-1],
            borderColor:"#C154C1",
        });
        anime({
            targets:tab[len-i-1].getElementsByTagName("p")[0],
            color:"#C154C1",
        });
        await timer(500);
    }
    anime({
        targets:"#bubble",
        height: "-=100",
        easing: 'linear',
        duration:500,
    });
    anime({
        targets:"#bubblebutton .start",
        rotate:{
            value: "-=360",
            duration:1000,
        },
        color:"#e4e6eb",
    });
    btn.disabled = false;
    rnd.disabled = false;
    return true;
};