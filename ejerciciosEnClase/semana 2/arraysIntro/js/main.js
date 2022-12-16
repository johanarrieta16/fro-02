// ARRAYS
window.onload = init;
function init() {
    let gastoDiario1 = 230;
    let gastoDiario2 = 420;
    let gastoDiario3 = 530;
    let gastoDiario4 = 730;
    let gastoDiario5 = 180;
    let gastoDiario6 = 80;
    let gastoDiario7 = 30;

    let total = gastoDiario1 + gastoDiario2 + gastoDiario3 + gastoDiario4 + gastoDiario5 + gastoDiario6 + gastoDiario7;

    console.log('Total:',total);

    //Arrays
    // let gastosDiarios = [230,420,530,30,180,180,130];
    let gastosDiarios = [];
    gastosDiarios.push(30)
    gastosDiarios.push(50)
    gastosDiarios.push(70)
    gastosDiarios.push(100)
    gastosDiarios.push(130)
    gastosDiarios.splice(2,1,100)
    console.log(gastosDiarios)
}



// RULETA
window.addEventListener('load', init, false);
function init() {
    let girarBtn = document.getElementById('girarBtn');
    let estudianteLbl = document.getElementById('estudianteLbl');
    let estudiantes = [
        'Arrieta Rojas Johan',
        'Borbon Carvajal Adriana',
        'Cardoso Perez Armando',
        'Chang Huang Benjamin',
        'Cortes Cerdas Byron',
        'Guevara Jimenez Keylor',
        'Masis Martinez Leonardo',
        'Matamoros Godinez Natalia',
        'Mesen Arguedas Diego',
        'Rodriguez Hernandez Brayan',
        'Sanchez Valle Jose Andres',
        'Solano Alvarez Jose Fabian',
        'Sosa Sanchez Andres Jose',
        'Lin Shin Chien Ting'
    ]
    girarBtn.onclick = onGirarBtn;

    function onGirarBtn() {
        let index = randomIntFromInterval(0,estudiantes.length - 1);
        console.log(estudiantes[index]);
        estudianteLbl.innerHTML = estudiantes[index];
    }

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}





