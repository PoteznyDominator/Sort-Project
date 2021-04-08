const timer = ms => new Promise(res => setTimeout(res, ms));

export let mergeSort = async(element,btn,rnd,color) =>{
    //iterative
    let tab = Array.from(element)
    let len = tab.length;
    let half = len/2;
    let left = tab.splice(0,half+1);
    let rigth = tab;
    //console.log(left.length/2)
    // console.log(rigth);
    
    
    //first swaping
    for(let i = 0; i < len/2; i+=2){
        await timer(700);
        if(left[i].getElementsByTagName("p")[0].innerHTML>left[i+1].getElementsByTagName("p")[0].innerHTML){
            anime({
                targets:left[i],
                translateY:100,
                translateX:"+=79",
            });
            anime({
                targets:left[i+1],
                translateY:100,
                translateX:"-=79",
            });
            await timer(500);
            anime({
                targets:left[i+1],
                translateY:0,
            });
            anime({
                targets:left[i],
                translateY:0,
            });
            let tmp = left[i];
            left[i] = left[i+1];
            left[i+1] = tmp;
        }
        else{
            anime({
                targets:left[i+1],
                translateY:100,
            });
            anime({
                targets:left[i],
                translateY:100,
            });
            await timer(500);
            anime({
                targets:left[i+1],
                translateY:0,
            });
            anime({
                targets:left[i],
                translateY:0,
            });
        }
        //checking last element
        if(rigth[i+1]===undefined){
            await timer(500);
            anime({
                targets:rigth[i],
                translateY:100,
            });
            await timer(500);
            anime({
                targets:rigth[i],
                translateY:0,
            });
            break;
        }
        if(rigth[i].getElementsByTagName("p")[0].innerHTML>rigth[i+1].getElementsByTagName("p")[0].innerHTML){
            await timer(500);
            anime({
                targets:rigth[i],
                translateY:100,
                translateX:"+=79",
            });
            anime({
                targets:rigth[i+1],
                translateY:100,
                translateX:"-=79",
            });
            await timer(500);
            anime({
                targets:rigth[i+1],
                translateY:0,
            });
            anime({
                targets:rigth[i],
                translateY:0,
            });
            let tmp = rigth[i];
            rigth[i] = rigth[i+1];
            rigth[i+1] = tmp;
        }
        else{
            await timer(500);
            anime({
                targets:rigth[i+1],
                translateY:100,
            });
            anime({
                targets:rigth[i],
                translateY:100,
            });
            await timer(500);
            anime({
                targets:rigth[i+1],
                translateY:0,
            });
            anime({
                targets:rigth[i],
                translateY:0,
            });
        }
    }
    //second swaping
    await timer(700);
    let l = left.length/2;
    let r = 0;
        while(l<4&&r<2){
            if(left[r].getElementsByTagName("p")[0].innerHTML>left[l].getElementsByTagName("p")[0].innerHTML){
                await timer(500);
                anime({
                    targets:left[l],
                    translateY:100,
                    translateX:"-="+79*(l-r),
                });
                anime({
                    targets:left[r],
                    translateY:100,
                    translateX:"+="+79*(l-r),
                });
                await timer(500);
                anime({
                    targets:left[l],
                    translateY:0,
                });
                anime({
                    targets:left[r],
                    translateY:0,
                });
                let tmp = left[r];
                left[r] = left[l];
                left[l] = tmp;
                r++;
                l++;
            }
            else{
                await timer(500);
                anime({
                    targets:left[l],
                    translateY:100,
                });
                anime({
                    targets:left[r],
                    translateY:100,
                });
                await timer(500);
                anime({
                    targets:left[l],
                    translateY:0,
                });
                anime({
                    targets:left[r],
                    translateY:0,
                });
                r++;
                l = left.length/2;
            }
        }
        for(let i=0;i<3;i++){
            if(left[i].getElementsByTagName("p")[0].innerHTML>left[i+1].getElementsByTagName("p")[0].innerHTML){
                await timer(500);
                anime({
                    targets:left[i],
                    translateY:100,
                    translateX:"+=79",
                });
                anime({
                    targets:left[i+1],
                    translateY:100,
                    translateX:"-=79",
                });
                await timer(500);
                anime({
                    targets:left[i+1],
                    translateY:0,
                });
                anime({
                    targets:left[i],
                    translateY:0,
                });
                let tmp = left[i];
                left[i] = left[i+1];
                left[i+1] = tmp;
            }
        }

    for(let i = 0; i < 2; i++){
        if(rigth[i].getElementsByTagName("p")[0].innerHTML>rigth[rigth.length-1].getElementsByTagName("p")[0].innerHTML){
            await timer(500);
            anime({
                targets:rigth[i],
                translateY:100,
                translateX:"+="+79*(rigth.length-1-i),
            });
            anime({
                targets:rigth[rigth.length-1],
                translateY:100,
                translateX:"-="+79*(rigth.length-1-i),
            });
            await timer(500);
            anime({
                targets:rigth[rigth.length-1],
                translateY:0,
            });
            anime({
                targets:rigth[i],
                translateY:0,
            });
            let tmp = rigth[i];
            rigth[i] = rigth[rigth.length-1];
            rigth[rigth.length-1] = tmp;
        }
        else{
            await timer(500);
            anime({
                targets:rigth[rigth.length-1],
                translateY:100,
            });
            anime({
                targets:rigth[i],
                translateY:100,
            });
            await timer(500);
            anime({
                targets:rigth[rigth.length-1],
                translateY:0,
            });
            anime({
                targets:rigth[i],
                translateY:0,
            });
        }
    }    
    //third swaping

    let arr = left.concat(tab);
    l = 0;
    r = 4;
    while(l<=3){
         if(arr[l].getElementsByTagName("p")[0].innerHTML>arr[r].getElementsByTagName("p")[0].innerHTML){
            await timer(500);
            anime({
                targets:arr[l],
                translateY:100,
                translateX:"-="+79*(l-r),
            });
            anime({
                targets:arr[r],
                translateY:100,
                translateX:"+="+79*(l-r),
            });
            await timer(500);
            anime({
                targets:arr[l],
                translateY:0,
            });
            anime({
                targets:arr[r],
                translateY:0,
            });
            let tmp = arr[r];
            arr[r] = arr[l];
            arr[l] = tmp;
            r++;
            
        }
        else{
            await timer(500);
            anime({
                targets:arr[l],
                translateY:100,
            });
            anime({
                targets:arr[r],
                translateY:100,
            });
            await timer(500);
            anime({
                targets:arr[l],
                translateY:0,
            });
            anime({
                targets:arr[r],
                translateY:0,
            });
            l++;
            r = 4;
        }
        if(l==3){
            for(let i = 0; i < 6; i++){
                if(arr[i].getElementsByTagName("p")[0].innerHTML>arr[i+1].getElementsByTagName("p")[0].innerHTML){
                    await timer(500);
                    anime({
                        targets:arr[i],
                        translateY:100,
                        translateX:"+=79",
                    });
                    anime({
                        targets:arr[i+1],
                        translateY:100,
                        translateX:"-=79",
                    });
                    await timer(500);
                    anime({
                        targets:arr[i+1],
                        translateY:0,
                    });
                    anime({
                        targets:arr[i],
                        translateY:0,
                    });
                    let tmp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = tmp;
                }
            }    
        }
    }
    await timer(300);
    for(let i=0;i<arr.length;i++){
        anime({
            targets:arr[i],
            borderColor:color,
        });
        anime({
            targets:arr[i].getElementsByTagName("p")[0],
            color:color,
        });
    }
    anime({
        targets:"#merge",
        height: "-=100",
        easing: 'linear',
        duration:500,
    });
    anime({
        targets:"#mergebutton .start",
        rotate:{
            value: "-=360",
            duration:1000,
        },
    });
    element[3].closest(".sort-container").classList.remove("noHover");
    rnd.disabled = false;
    return true;
}