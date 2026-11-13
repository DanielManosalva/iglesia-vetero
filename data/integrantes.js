/*
  ============================================================
  INTEGRANTES DE LA IGLESIA VETERO
  ============================================================
  Este es el único archivo que hay que tocar para agregar,
  quitar o cambiar a un integrante. Cada integrante es un
  bloque { ... } separado por coma.

  Campos:
    nombre  : nombre completo como se mostrará.
    orden   : "Obispo", "Monseñor", "Proto Presbítero",
              "Presbítero", "Diácono" o un cargo (ej. "Secretaria General").
    zona    : "Centro", "Norte", "Oriente", "Occidente"
              o null si no pertenece a una prelatura (ej. Secretaría).
    cargo   : (opcional) texto extra, ej. "Máximo representante".
    foto    : ruta a la foto dentro de img/integrantes/
              o null para mostrar las iniciales.

  Para agregar una foto: súbela a img/integrantes/ (ideal 320x400 px,
  formato .jpg) y escribe aquí su ruta.

  Para retirar a alguien: borra su bloque completo, desde { hasta },

  Datos sensibles (cédula, RH, EPS, teléfono, cuentas) NO van aquí:
  esta página es pública.
  ============================================================
*/

window.INTEGRANTES = [
  {
    nombre: "Jimy Bula Giammaria",
    orden: "Obispo",
    zona: "Centro",
    cargo: "Máximo representante",
    foto: "img/integrantes/jimy-bula-giamaria.jpg"
  },
  {
    nombre: "Elsy Stella Manosalva Martínez",
    orden: "Secretaria General",
    zona: null,
    foto: "img/integrantes/elsy-stella-manosalva.jpg"
  },

  /* ---------- Prelatura Centro ---------- */
  {
    nombre: "Leonardo Augusto Romero Ballén",
    orden: "Presbítero",
    zona: "Centro",
    foto: "img/integrantes/leonardo-augusto-romero.jpg"
  },
  {
    nombre: "Carlos Arturo Panchano",
    orden: "Presbítero",
    zona: "Centro",
    foto: "img/integrantes/carlos-arturo-panchano.jpg"
  },
  {
    nombre: "Carlos Julio Montenegro Cifuentes",
    orden: "Presbítero",
    zona: "Centro",
    foto: "img/integrantes/carlos-julio-montenegro.jpg"
  },
  {
    nombre: "Néstor Arturo Castellanos Carranza",
    orden: "Presbítero",
    zona: "Centro",
    foto: "img/integrantes/nestor-castellanos.jpg"
  },

  /* ---------- Prelatura Norte ---------- */
  {
    nombre: "Enrique Rubio Fernández",
    orden: "Obispo",
    zona: "Norte",
    foto: "img/integrantes/enrique-rubio-fernandez.jpg"
  },
  {
    nombre: "Aramis Junior Escobar Iguarán",
    orden: "Presbítero",
    zona: "Norte",
    foto: "img/integrantes/aramis-junior-escobar.jpg"
  },
  {
    nombre: "Renzo Jesús Sánchez Peñaranda",
    orden: "Presbítero",
    zona: "Norte",
    foto: "img/integrantes/renzo-jesus-sanchez.jpg"
  },

  /* ---------- Prelatura Oriente ---------- */
  {
    nombre: "Orlando Ortiz Guarín",
    orden: "Obispo",
    zona: "Oriente",
    foto: "img/integrantes/orlando-ortiz-guarin.jpg"
  },
  {
    nombre: "Jesús Gregorio Mora Díaz",
    orden: "Presbítero",
    zona: "Oriente",
    foto: "img/integrantes/jesus-gregorio-mora.jpg"
  },

  /* ---------- Prelatura Occidente ---------- */
  {
    nombre: "Rodrigo Montoya Bedoya",
    orden: "Obispo",
    zona: "Occidente",
    foto: "img/integrantes/rodrigo-montoya-bedoya.jpg",
    encuadre: "center 70%"
  },
  {
    nombre: "Luis Eduardo Valencia Agudelo",
    orden: "Presbítero",
    zona: "Occidente",
    foto: "img/integrantes/luis-eduardo-valencia.jpg"
  },
  {
    nombre: "Jaime Lozada Orozco",
    orden: "Presbítero",
    zona: "Occidente",
    foto: "img/integrantes/jaime-lozada-orozco.jpg"
  },
  {
    nombre: "Luis Antonio Pérez Bohada",
    orden: "Obispo",
    zona: "Occidente",
    foto: "img/integrantes/luis-antonio-perez.jpg"
  }
];
