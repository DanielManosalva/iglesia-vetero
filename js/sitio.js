/* ============================================================
   Iglesia Vetero — lógica del sitio
   Arma el menú, el pie de página, la lista de integrantes
   y el organigrama a partir de data/config.js e integrantes.js.
   Normalmente NO hace falta editar este archivo.
   ============================================================ */
(function () {
  const S = window.SITIO;
  const I = window.INTEGRANTES || [];
  const $ = (sel) => document.querySelector(sel);
  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const clave = (t) => String(t).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();


  /* ---------- Encabezado ---------- */
  const pagina = location.pathname.split("/").pop() || "index.html";
  const cab = $("#cabecera");
  if (cab) {
    cab.innerHTML = `
      <a class="saltar" href="#contenido">Ir al contenido</a>
      <header class="cabecera">
        <div class="contenedor">
          <a class="marca" href="index.html"><img src="${S.logos.iglesia}" alt="Logo ${esc(S.nombre)}"><strong>${esc(S.nombre)}</strong></a>
          <a class="marca-aliada" href="${S.logos.corporacionUrl || "index.html"}" title="${esc(S.logos.corporacion)}"><img src="${S.logos.mision}" alt="Logo ${esc(S.logos.corporacion)}"></a>
          <button class="menu-boton" aria-expanded="false" aria-controls="nav">Menú</button>
          <nav class="nav" id="nav" aria-label="Principal">
            <ul>${S.menu.map((m) => `<li><a href="${m.url}"${m.url === pagina ? ' aria-current="page"' : ""}>${esc(m.texto)}</a></li>`).join("")}</ul>
          </nav>
        </div>
      </header>`;
    const btn = cab.querySelector(".menu-boton");
    const nav = cab.querySelector(".nav");
    btn.addEventListener("click", () => {
      const abierto = nav.classList.toggle("abierto");
      btn.setAttribute("aria-expanded", abierto);
      btn.textContent = abierto ? "Cerrar" : "Menú";
    });
  }

  /* ---------- Pie de página ---------- */
  const c = S.contacto;
  const wa = "https://wa.me/" + c.whatsapp + (c.mensajeWhatsapp ? "?text=" + encodeURIComponent(c.mensajeWhatsapp) : "");
  const pie = $("#pie");
  if (pie) {
    pie.innerHTML = `
      <footer class="pie">
        <div class="contenedor">
          <div>
            <div class="pie-logos"><img src="${S.logos.iglesia}" alt="Logo ${esc(S.nombre)}"><img src="${S.logos.mision}" alt="Logo ${esc(S.logos.corporacion)}"></div>
            <h3>${esc(S.nombre)}</h3>
            <p>${esc(S.lema)}<br>Con ${esc(S.logos.corporacion)}</p>
          </div>
          <div>
            <h3>${esc(c.capilla)}</h3>
            <p>${esc(c.direccion)}<br>${esc(c.barrio)}<br>${esc(c.ciudad)}<br>
            <a href="tel:${c.telefono.replace(/\s/g, "")}">${esc(c.telefono)}</a></p>
          </div>
          <div>
            <h3>Páginas</h3>
            <ul>${S.menu.map((m) => `<li><a href="${m.url}">${esc(m.texto)}</a></li>`).join("")}</ul>
          </div>
          <p class="derechos">© ${new Date().getFullYear()} ${esc(S.nombre)}</p>
        </div>
      </footer>
      ${c.whatsapp ? `<a class="boton-whatsapp" href="${wa}" target="_blank" rel="noopener" aria-label="Escribir por WhatsApp"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 2 1.1 1 2 1.3 2.3 1.4.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.2Z"/></svg></a>` : ""}`;
  }

  /* ---------- Utilidades de integrantes ---------- */
  const rango = (p) => { const i = S.ordenes.findIndex((o) => clave(o) === clave(p.orden)); return i < 0 ? 99 : i; };
  const ordenar = (lista) => [...lista].sort((a, b) => rango(a) - rango(b) || a.nombre.localeCompare(b.nombre, "es"));
  const buscar = (nombre) => I.find((p) => clave(p.nombre) === clave(nombre));
  const iniciales = (n) => n.split(/\s+/).filter(Boolean).slice(0, 2).map((x) => x[0]).join("").toUpperCase();
  const foto = (p) => p.foto
    ? `<img src="${esc(p.foto)}" alt="Foto de ${esc(p.nombre)}" loading="lazy"${p.encuadre ? ` style="object-position:${esc(p.encuadre)}"` : ""}>`
    : `<div class="iniciales" aria-hidden="true">${esc(iniciales(p.nombre))}</div>`;
  const tipo = (p) => clave(p.orden) === "obispo" ? "obispo" : clave(p.orden) === "monsenor" ? "monsenor" : "";

  /* ---------- Página Integrantes ---------- */
  const lista = $("#lista-integrantes");
  if (lista) {
    const filtros = $("#filtros");
    const zonas = S.zonas.map((z) => z.nombre);
    const sinZona = I.filter((p) => !p.zona);
    const opciones = ["Todas", ...zonas];
    filtros.innerHTML = opciones.map((o) => `<button class="filtro" aria-pressed="${o === "Todas"}" data-zona="${o}">${o === "Todas" ? "Todas las prelaturas" : o}</button>`).join("");

    const tarjeta = (p) => `
      <article class="persona ${tipo(p)}">
        <div class="foto">${foto(p)}</div>
        <div class="datos"><h3>${esc(p.nombre)}</h3><div class="orden">${esc(p.orden)}${p.cargo ? ` · ${esc(p.cargo)}` : ""}</div></div>
      </article>`;

    const pintar = (sel) => {
      let html = "";
      if (sel === "Todas" && sinZona.length) {
        html += `<section class="zona"><div class="zona-titulo"><h2>Representación y Secretaría</h2></div>
          <div class="rejilla">${ordenar(sinZona).map(tarjeta).join("")}</div></section>`;
      }
      S.zonas.filter((z) => sel === "Todas" || z.nombre === sel).forEach((z) => {
        const miembros = ordenar(I.filter((p) => p.zona && clave(p.zona) === clave(z.nombre)));
        html += `<section class="zona" id="${clave(z.nombre)}">
          <div class="zona-titulo"><h2>Prelatura ${esc(z.nombre)}</h2><span>${miembros.length} ${miembros.length === 1 ? "integrante" : "integrantes"}</span></div>
          ${z.descripcion ? `<p>${esc(z.descripcion)}</p>` : ""}
          <div class="rejilla">${miembros.map(tarjeta).join("") || "<p>Aún no hay integrantes en esta prelatura.</p>"}</div></section>`;
      });
      lista.innerHTML = html;
    };

    filtros.addEventListener("click", (e) => {
      const b = e.target.closest(".filtro"); if (!b) return;
      filtros.querySelectorAll(".filtro").forEach((x) => x.setAttribute("aria-pressed", x === b));
      pintar(b.dataset.zona);
    });
    const total = $("#total-integrantes");
    if (total) total.textContent = I.length;
    pintar("Todas");
  }

  /* ---------- Página Organigrama ---------- */
  const org = $("#organigrama");
  if (org) {
    const cabeza = buscar(S.representante);
    const secre = S.secretaria ? buscar(S.secretaria) : null;
    const nodo = (p, extra = "", sub = "") => p ? `
      <div class="nodo ${extra}"><div class="avatar">${foto(p)}</div>
      <strong>${esc(p.nombre)}</strong><span>${esc(sub || p.orden)}</span></div>` : "";

    const ramas = S.zonas.map((z) => {
      const resp = buscar(z.responsable);
      const esCabeza = resp && cabeza && resp === cabeza;
      const miembros = ordenar(I.filter((p) => p.zona && clave(p.zona) === clave(z.nombre) && p !== resp));
      return `<div class="rama">
        <div class="rama-zona">Prelatura ${esc(z.nombre)}<small>${esCabeza ? "A cargo del máximo representante" : "Responsable"}</small></div>
        ${esCabeza ? "" : nodo(resp)}
        <ul class="sub">${miembros.map((p) => `<li><span class="mini">${foto(p)}</span><div>${esc(p.nombre)}<br><small>${esc(p.orden)}</small></div></li>`).join("")}</ul>
      </div>`;
    }).join("");

    org.innerHTML = `
      <div class="nivel-1">
        ${nodo(cabeza, "cabeza", (cabeza?.orden || "") + " · Máximo representante")}
        ${secre ? `<div class="lateral">${nodo(secre)}</div>` : ""}
      </div>
      <div class="tronco"></div>
      <div class="ramas">${ramas}</div>`;
  }

  /* ---------- Página Contacto ---------- */
  const ficha = $("#ficha-contacto");
  if (ficha) {
    ficha.innerHTML = `
      <dt>Lugar</dt><dd>${esc(c.capilla)}</dd>
      <dt>Dirección</dt><dd>${esc(c.direccion)}<br>${esc(c.barrio)}<br>${esc(c.ciudad)}</dd>
      <dt>Teléfono</dt><dd><a href="tel:${c.telefono.replace(/\s/g, "")}">${esc(c.telefono)}</a></dd>
      ${c.whatsapp ? `<dt>WhatsApp</dt><dd><a href="${wa}" target="_blank" rel="noopener">Escríbenos por WhatsApp</a></dd>` : ""}
      ${c.correo ? `<dt>Correo</dt><dd><a href="mailto:${esc(c.correo)}">${esc(c.correo)}</a></dd>` : ""}`;
    const mapa = $("#mapa");
    if (mapa) mapa.src = "https://maps.google.com/maps?q=" + encodeURIComponent(c.mapa) + "&z=16&output=embed";
  }
})();
