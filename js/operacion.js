function icm(){
    
    const nombre = document.getElementById("nombre").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("res");


    if (nombre!=="" && altura!=="" && peso!=="") {
        let clasificacion ="";
        let v_icm=0;
        v_icm=(peso/(altura*altura)).toFixed(1);
        if(v_icm<18.5) {
            clasificacion = "Debajo de peso";
        } else if(v_icm<25){
            clasificacion = "Peso Ideal";
        } else if(v_icm<30){
            clasificacion = "Obesidad I";
        }else if(v_icm<35){
            clasificacion = "Obesidad II";
        }else if(v_icm<40){
            clasificacion = "Obesidad III";
        }else{
            clasificacion = "Obesidad Severa...CUIDADO";
        }
        resultado.textContent = `El nombre es : ${nombre} su IMC es ${v_icm} y esta clasificado como: ${clasificacion}`;
        console.log(resultado.textContent = `El nombre es : ${nombre} su IMC es ${v_icm} y esta clasificado como: ${clasificacion}`);
    }else{
        resultado.textContent = "Llenar todos los campos";
    }
}