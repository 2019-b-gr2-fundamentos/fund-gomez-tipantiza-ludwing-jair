module.exports = function(numeroDos){
    let factorial=1
    for(let contador=1;contador<=numeroDos;contador++)
    {
        factorial=factorial*contador
    }
    console.log(factorial);
}