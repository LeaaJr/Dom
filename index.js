const ingredientes = [{
    "ID":0,
    "nombre":"mozza",
    "ingredientes":"'salsa,oregano,mozzarella,aceitunas'",
    "precio": '$600'
    
},{
    "ID":1,
    "nombre":"tomate",
    "ingredientes":"'salsa,oregano,mozzarella,aceitunas,tomate'",
    "precio": '$640'

},{
    "ID":2,
    "nombre":"morron",
    "ingredientes":"'salsa,oregano,mozzarella,aceitunas,morron'",
    "precio": '$670'
},{
    "ID":3,
    "nombre":"napolitana",
    "ingredientes":"'salsa,oregano,mozzarella,aceitunas,jamon,tomate'",
    "precio": "$710"
},{
    "ID":4,
    "nombre":"jamon y panceta",
    "ingredientes":"'salsa,oregano,mozzarella,aceitunas,jamon,panceta'",
    "precio": '$770'
},{
    "ID":5,
    "nombre":"4 quesos",
    "ingredientes":"'salsa,oregano,aceitunas,mozzarella, queso azul, parmesano, provolone'",
    "precio": '$770'
}]

console.log(ingredientes)

const captura = () =>{
    let input = document.getElementById("click").value
    /* console.log(input) */
    
    let seleccionado = null
    ingredientes.forEach(function(ingrediente){
        /* console.log(ingrediente) */
        if (ingrediente.ID == input){
            seleccionado = ingrediente
        }
        
    }) 

    if (seleccionado){
        console.log(seleccionado)
    }else{
        console.log("ese id no existe")
    }

    /* console.log(seleccionado.nombre)
    console.log(seleccionado.precio) */

    const resultado = document.getElementById('resultado')
    
    const mostrarnombre = document.createElement('h2')
        mostrarnombre.textContent = seleccionado.nombre

    /* console.log(mostrarnombre) */

    const mostrarprecio = document.createElement('h4')
        mostrarprecio.textContent = seleccionado.precio

    /* console.log(mostrarprecio) */

    resultado.appendChild(mostrarnombre)

    resultado.appendChild(mostrarprecio)

    
}

/* function mostrar () {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''

    for (const seleccionado of selecionados ) {
        let seleccionado = document.createElementNS('h2');
        
        selecionadoh2.innerHTML = seleccionado

        resultado.appendChild(selecionadoh2);
    }
} */

 
/* var nombre = ingredientes.nombre

 var precio = ingredientes.precio

 document.write("el nombre es:" + nombre);

 document.write("el precio es:" + precio);
 */

/* const mostrarnombre = document.createElement('h2')
    mostrarnombre.textContent = ingredientes.nombre

    console.log(mostrarnombre) */