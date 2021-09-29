const jsonHelper = require("./lecturaEscritura");

let arrayAutos = jsonHelper.leerJson("autos");

let carrera = {
  autos: arrayAutos,

  autosPorTanda: 6,

  autosHabilitados: () =>
    carrera.autos.filter((auto) => auto.sancionado === false),

  listarAutos: (arr) => {
    let estadoStr = (e) => (e.sancionado ? "sancionado" : "habilitado");
    arr.forEach((element) => {
      console.log(
        `Piloto: ${element.piloto}, patente:${element.patente}, velocidad: ${
          element.velocidad
        }, peso en kg: ${element.peso}, estado: ${estadoStr(element)}.` + "\n"
      );
    });
  },

  buscarPorPatente: (patente) =>
    carrera.autos.find((auto) => auto.patente === patente),

  ordenarPorVelocidad: () =>
    carrera.autos.sort((a, b) => a.velocidad - b.velocidad),

  habilitarVehiculo: (patente) => {
    let autoBuscado = carrera.buscarPorPatente(patente);
    if (autoBuscado) {
      autoBuscado.sancionado = false;
      jsonHelper.escribirJson("autos", carrera.autos);
      return autoBuscado;
    }
  },

  generarTanda: (cilindradaMax, pesoMax) => {
    let arrayPreTanda = carrera.autos.filter((auto) => {
      return (
        auto.sancionado === false &&
        auto.cilindrada <= cilindradaMax &&
        auto.peso <= pesoMax
      );
    });

    let arrayTanda = arrayPreTanda.slice(0, carrera.autosPorTanda);

    return arrayTanda;
  },

  pesoPromedio: (cilindradaMax, pesoMax) => {
    let nuevaTanda = carrera.generarTanda(cilindradaMax, pesoMax);
    let pesosNuevaTanda = nuevaTanda.map((auto) => auto.peso);
    let sumaPeso = pesosNuevaTanda.reduce((acum, peso) => acum + peso);
    return sumaPeso / nuevaTanda.length;
  },

  listarPodio: () => {
    let ordenarPorPuntaje = carrera.autos.sort((a, b) => b.puntaje - a.puntaje);

    let podio = ordenarPorPuntaje.slice(0, 3);

    console.log(
      `El ganador es: ${podio[0].piloto}, con un puntaje de ${podio[0].puntaje}. 
El segundo puesto es para ${podio[1].piloto}, con un puntaje de  ${podio[1].puntaje}. 
El tercer puesto es para ${podio[2].piloto}, con un puntaje de  ${podio[2].puntaje}.`
    );
  },
};
