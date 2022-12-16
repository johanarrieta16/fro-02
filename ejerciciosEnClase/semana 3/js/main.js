"use strict";
window.addEventListener('load', init, false);
function init() {
    let numsSlt = document.getElementById('numsSlt');
    let runBtn = document.getElementById('runBtn');
    runBtn.onclick = onRunBtn;
    
    let nums = [1, 1, 36, 47, 5, 64, 7, 8, 9, 20];
    let numSelected = 0;
    
    function onRunBtn() {
        let num = nums[numsSlt.value];
        console.log(num);

        if (num == numsSlt.value){
            console.log('Numeros son iguales');
        }


        let operationA = (num1 >= num2);
        let operationB = (num3 < num4);

        if (operationA || operationB) {
            console.log('Condición: true');
        } else {
            console.log('Condición: false');
        }
    }
    
}

//Functions


// "use strict";
// window.addEventListener('load', init, false);
// function init() {
//     console.log('App running');
// }


