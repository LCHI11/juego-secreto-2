let numeroSecreto = 0; //varible necesita ser declarada ,aqui esta declarada
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10
console.log(numeroSecreto);
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return
}

function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez': 'veces' }`)
        document.getElementById('reiniciar').removeAttribute('disabled');
        }else{if(numeroDeUsuario>numeroSecreto){
        asignarTextoElemento('p','El numero secreto es menor')
    }else{(numeroDeUsuario<numeroSecreto)
        asignarTextoElemento('p','El numero es mayor');
    }
    intentos++;
    limpiarCaja();
}
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    //length recorre toda la lista hasta el parametro que indiquemos
    //este caso hasta el maximo
    //Si la lista de los numeros sorteados es = al numero maximo,colocamos 
    //un mensaje en la pantalla,sino seguimos jugando
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posible');

    }else{ if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else{
        listaNumerosSorteados.push(numeroGenerado);
        
    return numeroGenerado;
    }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();

