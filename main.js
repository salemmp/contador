let numero = 0;
document.querySelector(".boton").addEventListener("click",()=>{
    numero +=  1;
    document.querySelector(".cuenta").innerHTML = `<h2>${numero}</h2>`})