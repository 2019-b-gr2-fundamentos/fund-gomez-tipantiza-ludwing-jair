function main1 (){

    const arregloEstudiantes:any = 
    [
        {id:1, nombre: 'Adrian', nota: 7},
        {id:2, nombre: 'Vicente', nota: 9},
        {id:3, nombre: 'Wendy', nota: 4},
        {id:4, nombre: 'Carolina', nota: 10},
        {id:5, nombre: 'Carlos', nota: 6.5},
    ]

// OPERADOR - FOREACH
//ENVIAMOS -> NADA
//RECIBIMOS -> NADA
const respuestaForeach = arregloEstudiantes
    .forEach(                       
        function(valorActual, indice, arreglo){
            console.log(valorActual.nota);
           
        }
);
        
console.log(respuestaForeach); // undefined 
    
    

    //Map -> Transformar el arreglo (Mutas el arreglo)
    //ENVIAMOS -> valorActual modificado
    //Recibir -> Nuevo arreglo con valores modificados
    
    const respuestaMap = arregloEstudiantes

    .map(
        function(valorActual, i, arreglo){
            const nuevoObjeto = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota20: valorActual.nota*2
            };
        return nuevoObjeto
        }
    );
console.log('Respuesta MAP', respuestaMap)
console.log('arreglo estudiantes', arregloEstudiantes);

//Filter -> filtra el arreglo
//ENVIAMOS -> CONDICION
//RECIBIR -> Nuevo arreglo con valores filtrados
const respuestaFilter = arregloEstudiantes
        .filter(
            function(valorActual, i , arreglo){
                const condicion7 = valorActual.nota >= 7;
                const condicion5 = valorActual.nota < 5 ;
                //condicion es un truty
                return condicion7 || condicion5;
            }
        )
        console.log('respuestaFilter,',respuestaFilter);
        console.log('arregloEstudiantes', arregloEstudiantes)
        /*AND --> EVERY (TODOS CUMPLAN) /OR-->SOME (UNO CUMPLE)

        SOME--> DEVUELVE VERDADERO O FALSO DEPENDE DE LA CONDICION
        SI ALGUNO CUMPLE DEVUELVE TRUE
        SI ninguno CUMPLE DECUELVE FALSE
        ENVIAMOS CONDICION
        RECIBIMOS BOOLEANO*/
        const respuestaSome=arregloEstudiantes
                            .some(
                                function(valorActual,i,arr){
                                    const condicion=valorActual>7;
                                    return condicion
                                }
                            );
    console.log('respuesta some ',respuestaSome);
    console.log('arreglo estudiantes',arregloEstudiantes);

    /*every 
    todos cumple verdadero
    ninguno cumple falso
    enviamos condicion
    recibir booleano
    */
   const respuestaEvery=arregloEstudiantes
   .every(
       function(valorActual,i,arr){
           const condicion=valorActual.nota>=7;
           return condicion;
       }
   );
   console.log('respuesta every',respuestaEvery)
   console.log('arreglo estudiantes',arregloEstudiantes);


   //reduce -->devuelve un valor con el cálculo aplicado
   //enviamos -->calculo
   //recibir--> valor 
   const respuestaReduce= arregloEstudiantes
   .reduce(
       function(acumulador,valorActual,i,arr){//fucnion
        const calculo=acumulador + valorActual.nota;
        return calculo;


       },
       0 //valor acumulador
   );
   console.log('respuestaReduce',respuestaReduce);
   console.log('promedio',respuestaReduce/arregloEstudiantes.length);
   console.log('arregloEstudiantes',arregloEstudiantes)
    } 
   
main1();

//reduce del principio al final 
//reduceright del final al principios