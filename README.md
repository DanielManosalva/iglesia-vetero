# Sitio web Iglesia Vetero

Sitio estático (HTML, CSS y JavaScript, sin base de datos) pensado para publicarse gratis y 24/7 en **GitHub Pages**. Funciona en celular y computador.

## Páginas

| Archivo | Página |
|---|---|
| `index.html` | Inicio |
| `que-hacemos.html` | Qué hacemos, principios y preguntas frecuentes |
| `integrantes.html` | Integrantes activos por prelatura (con filtro) |
| `organigrama.html` | Organigrama (se arma solo con los datos) |
| `contacto.html` | Dirección, teléfono, WhatsApp y mapa |

## Publicar en GitHub Pages (una sola vez)

1. Entra a GitHub y crea un repositorio nuevo, por ejemplo `iglesia-vetero` (público).
2. En el repositorio: **Add file → Upload files**. Arrastra **todo el contenido** de esta carpeta (no la carpeta en sí: `index.html` debe quedar en la raíz). Pulsa **Commit changes**.
3. Ve a **Settings → Pages**. En *Source* elige **Deploy from a branch**, rama **main**, carpeta **/ (root)**. Guarda.
4. Espera 1–2 minutos. La página queda en:
   `https://TU-USUARIO.github.io/iglesia-vetero/`

No necesita dominio, servidor ni pagos. GitHub la mantiene en línea 24/7. Si más adelante compran un dominio, se conecta en esa misma pantalla (*Custom domain*).

## Cómo modificar

Todo se puede editar desde la web de GitHub: abre el archivo, pulsa el lápiz ✏️, cambia y pulsa **Commit changes**. En 1–2 minutos se ve el cambio.

- **Agregar, quitar o cambiar integrantes** → `data/integrantes.js`
  Copia un bloque `{ ... },` y cambia nombre, orden, zona y foto.
- **Fotos** → súbelas a `img/integrantes/` (jpg, ideal 320×400 px, vertical) y pon la ruta en `foto:`. Si la cara sale cortada, agrega `encuadre: "center 80%"`.
- **Teléfono, dirección, WhatsApp, responsables de cada prelatura, quién encabeza el organigrama** → `data/config.js`
- **Textos** (bienvenida, qué hacemos, preguntas) → directamente en cada `.html`.
- **Colores y letras** → arriba de `css/estilos.css` (sección `:root`).

El organigrama y la página de integrantes se actualizan solos al cambiar `integrantes.js`.

## Ver en tu computador antes de publicar

Abre `index.html` con doble clic en el navegador. No necesita instalar nada.

## Privacidad

Por decisión del equipo, la página solo muestra **nombre, foto, orden y prelatura**. Cédula, RH, EPS, teléfonos personales y estado de cuentas **no** se publican (Ley 1581 de 2012 de protección de datos). No agregues esos datos a `integrantes.js`: todo lo que está en el repositorio es público.
