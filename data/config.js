/*
  ============================================================
  CONFIGURACIÓN GENERAL DEL SITIO
  ============================================================
  Aquí se cambian los datos de contacto, el menú y las
  prelaturas (zonas). Los textos largos de cada página están
  directamente en su archivo .html.
  ============================================================
*/

window.SITIO = {
  nombre: "Iglesia Vetero",
  lema: "Iglesia Vetero Católica en Colombia",

  // Logos (archivos dentro de img/). Para cambiarlos, sube el nuevo archivo con el mismo nombre.
  logos: {
    iglesia: "img/logo-iglesia.png",
    mision: "img/logo-mision.png",
    corporacion: "Corporación La Mi-Sión",
    corporacionUrl: ""              // si la corporación tiene página, pon aquí su enlace
  },

  // Persona que encabeza el organigrama (debe existir en integrantes.js)
  representante: "Jimy Bula Giammaria",

  // Persona de la Secretaría (aparece al lado del representante)
  secretaria: "Elsy Stella Manosalva Martínez",

  contacto: {
    capilla: "Capilla Señora del Camino",
    direccion: "Calle 130 D No. 85-54, piso 2",
    barrio: "Toberín, sector Rincón de Suba",
    ciudad: "Bogotá, Colombia",
    telefono: "+57 320 439 9784",
    whatsapp: "573204399784",          // solo números, con 57 adelante (+57 320 4399784)
    mensajeWhatsapp: "Hola, quisiera información sobre la Iglesia Vetero.",
    correo: "",                         // déjalo vacío si no hay
    mapa: "Calle 130D 85-54, Bogotá, Colombia"
  },

  // Prelaturas. "responsable" debe coincidir con un nombre de integrantes.js
  // "descripcion" es opcional: una frase corta que aparece bajo el nombre de la zona.
  zonas: [
    { nombre: "Centro",    responsable: "Jimy Bula Giammaria",
      descripcion: "" },
    { nombre: "Norte",     responsable: "Enrique Rubio Fernández",
      descripcion: "" },
    { nombre: "Oriente",   responsable: "Orlando Ortiz Guarín",
      descripcion: "" },
    { nombre: "Occidente", responsable: "Rodrigo Montoya Bedoya",
      descripcion: "" }
  ],

  // Orden jerárquico (de mayor a menor) para ordenar las listas
  ordenes: ["Obispo", "Monseñor", "Proto Presbítero", "Presbítero", "Diácono"],

  menu: [
    { texto: "Inicio",       url: "index.html" },
    { texto: "Qué hacemos",  url: "que-hacemos.html" },
    { texto: "Integrantes",  url: "integrantes.html" },
    { texto: "Organigrama",  url: "organigrama.html" },
    { texto: "Contacto",     url: "contacto.html" }
  ]
};
