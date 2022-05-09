let btnEnv = document.getElementById("boton");

btnEnv?.addEventListener("click", () => {
  let sueldoMensual: number = Number(sueldo.value);
  let salidaText: string = document.getElementById("salida").innerHTML;

  if (sueldoMensual <= 15000) {
    document.getElementById("salida").innerHTML =
      "Corresponde un aumento del 20%. Llegara a cobrar " + sueldoMensual * 1.2;
    console.log(
      "Corresponde un aumento del 20%. Llegara a cobrar " + sueldoMensual * 1.2
    );
  } else if (sueldoMensual > 15000 && sueldoMensual <= 20000) {
    document.getElementById("salida").innerHTML =
      "Corresponde un aumento del 10%. Llegara a cobrar " + sueldoMensual * 1.1;
    console.log(
      "Corresponde un aumento del 10%. Llegara a cobrar " + sueldoMensual * 1.1
    );
  } else if (sueldoMensual > 20000 && sueldoMensual <= 25000) {
    document.getElementById("salida").innerHTML =
      "Corresponde un aumento del 5%. Llegara a cobrar " + sueldoMensual * 1.05;
    console.log(
      "Corresponde un aumento del 5%. Llegara a cobrar " + sueldoMensual * 1.05
    );
  } else {
    document.getElementById("salida").innerHTML = "No corresponde un aumento";
    console.log("No corresponde un aumento");
  }
});
