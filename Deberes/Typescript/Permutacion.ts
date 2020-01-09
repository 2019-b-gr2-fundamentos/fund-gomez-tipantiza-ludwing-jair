function Permutacion(numeroUno,numeroDos){
    let factorial=1
    let tomados=1
    for(let contador=1;contador<=numeroUno;contador++)
    {
        factorial=factorial*contador
    }
    for(let contador1=1;contador1<=(numeroUno-numeroDos);contador1++){
        tomados=tomados*contador1
    }
    const permutacion=(factorial/tomados);
    console.log(permutacion);
}
Permutacion(3,2);