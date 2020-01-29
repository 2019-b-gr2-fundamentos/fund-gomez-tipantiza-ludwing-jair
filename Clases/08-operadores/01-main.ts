function main (){
    const arregloEstudiantes:any=[
        {id:1,nombre:'Jair',nota:7},
        {id:2,nombre:'Lizet',nota:10},
        {id:3,nombre:'Mishel',nota:7},
        {id:4,nombre:'Genesis',nota:7},
        {id:5,nombre:'Bryan',nota:4},
        {id:6,nombre:'Steven',nota: 2}
    ]


//operador - foreach
// enviamos --> nada
// recibimos --->nada
const respuestaForEach=arregloEstudiantes.forEach(
    function(valorActual, indice, arreglo)
    console.log
)
console.log(respuestaForEach)//-->undefined

//Map-->trasnformar el arreglo(mutar el arreglo)
//ENvia,os -->valor actual modificficado
// recibir -->nuevo arreglo con valores modificados
const respuestaMap=arregloEstudiantes.map(
    function(valorActual,i,arreglo){
        const nuevoObjeto={id:valorActual.id,
        nombre:valorActual.nombre,
        nota:valorActual.nota
        nota20:valorActual.nota*2};

        return nuevoObjeto;
            

        }
    )
}

//filter --> filtra el arreglo
//enviamos -->condicion




//recibimir-->nuevo arreglo con valores filtrado 

main();
// lo mejor es que una variable sea inmutableeee 