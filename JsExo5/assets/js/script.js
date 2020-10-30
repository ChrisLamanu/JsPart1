function calcul() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let cal = num1 + num2;
    window.alert("Le résultat est " + cal);
    console.log("nombre1: " + num1 + " + nombre2: " + num2 + " = " + cal);
}
