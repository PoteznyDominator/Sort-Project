const element = document.querySelectorAll("#bubble .element")
const container = document.querySelector(".sort-container");

let tab = [];



let i = 0;
function myLoop(){
    setTimeout(function(){
        if(i<element.length){
            tab[i] = parseInt(element[i].getElementsByTagName("p")[0].innerHTML);
            console.log(tab)
            myLoop();
            let animation = anime({
                targets:element[i],
                translateY:100,
            });
        }
        else{
            let animation = anime({
            targets:element,
            translateY:0,
            });
            i = -1;
            myLoop();
        }
        i++;
    },1000);
}
myLoop();


let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};
bubbleSort(tab);
console.log(tab);