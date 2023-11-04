window.onload=function(){
    let capturaFormulario = document.getElementById('entradas');

    capturaFormulario.addEventListener('submit', function(e){
        e.preventDefault();

        let cantidad = parseInt(document.getElementById('cantidad').value);
        let descuento = parseInt(document.getElementById('descuento').value);
        let total = "";

        switch(descuento){
            case 1: total = (cantidad*200)*0.2;
            break;
            case 2: total = (cantidad*200)*0.5;
            break;
            case 3: total = (cantidad*200)*0.85;console.log(total);
            break;
        }
        document.getElementById("total").textContent = total;
    });
};