function submit2() {
    const p = document.getElementById("peso");
    const h = document.getElementById("estatura");   
    const imc = p.value/(Math.pow(h.value,2));   
    alert(`Su indice de masa corporal es: ${imc}`);
}