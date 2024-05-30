function submit2(){
    const a = document.getElementById("lado_a");
    const b = document.getElementById("lado_b");
    const c = document.getElementById("lado_c");
    if (a.value > c.value){
        const dif = a.value - c.value;
        const area_a = (dif * b.value)/2;
        const area_b = b.value * dif;
        const area_total = area_a + area_b;
       alert(`El area total es: ${area_total}`);
    } else {
        const dif = c.value - a.value;
        const area_a = (dif * b.value)/2;
        const area_b = b.value * dif;
        const area_total = area_a + area_b;
       alert(`El area total es: ${area_total}`);
    };
        
}