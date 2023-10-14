function CambioColor(){
    var x =document.createElement("STYLE");
    var t =document.createTextNode(".tablita1{color: green;}")
    x.appendChild(t);
    document.head.appendChild(x)
}
function AgregarTexto(){
    var elemento = document.getElementById("tablita2");
    var agregar =document.getElementById("entry").value;
    elemento.innerHTML = agregar;
}
function ConcatenarDosTextos(){
    var elemento = document.getElementById("tablita3");
    var texto1 =document.getElementById("texto1").value;
    var texto2=document.getElementById("texto2").value;
    elemento.innerHTML = texto1+" "+texto2;
}
function eliminarElemento() {
    var listaDesplegable = document.getElementById("miListaDesplegable");
    var valorAEliminar = listaDesplegable.selectedIndex;
    listaDesplegable.remove(valorAEliminar);
}
function verVideo(){
    location.href="https://www.youtube.com/watch?v=iVCy2Frm21I";
}
function mandarAlerta(){
    var texto1 =document.getElementById("texto1").value;
    var texto2=document.getElementById("texto2").value;
    alert(texto1+" "+texto2);
}
function mensajeEnConsola(){
    var texto1 =document.getElementById("texto1").value;
    var texto2=document.getElementById("texto2").value; 
    console.log(texto1+" "+texto2)
}
function verificarCheckbox(){
    elemento=document.getElementById("tablita4");
    estado=document.getElementById("checkbox1").checked;
    if(estado==false){
        elemento.innerHTML="No Seleccionado"
    }
    else{
        elemento.innerHTML="Seleccionado"
    }
    
}
function mostrarEstado() {
    var elemento = document.getElementById("tablita5");
    var opciones = document.getElementsByName("opciones");

    var estadoSeleccionado = "Ninguno seleccionado";

    for (var i = 0; i < opciones.length; i++) {
      if (opciones[i].checked) {
        estadoSeleccionado = opciones[i].value;
        break;
      }
    }
    elemento.innerHTML=estadoSeleccionado;
  }
  function validarTexto() {
    var campo = document.getElementById('campo').value;
    var patron = /^[A-Za-z\s]+$/;
    if (campo != "") {
        if (patron.test(campo)) {
            alert("Es Valido");
        } else {
            alert("Solo se aceptan teclas no numericas");
        }
    } else {
        alert("No se ingreso nada");
    }
}
function obtenerDatos(){
    fetch('https://api.openbrewerydb.org/v1/breweries').
    then(resultado => {
        resultado.json().then(json => {
            tiendas = json;
            console.log(tiendas);
        })
    });
}
let i=0;
function mapearTiendas(){
    let contenedor =document.getElementById('tablita')
    contenedor.innerHTML+=mapearPlantilla(tiendas[i]);
    i++;
}
function mapearPlantilla(tienda){
    return`<tr>
        <td>${tienda.name}</td>
        <td>${tienda.street}</td>
        <td>${tienda.state}</td>
    </tr>`
}

