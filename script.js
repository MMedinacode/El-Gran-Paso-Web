/* ============================================================
   CAFÉ Y PANADERÍA EL GRAN PASO — datos y lógica
   ============================================================
   ⚠️ SIN PRECIOS. No publican carta con precios en ningún canal, y su ficha
   de Google ni siquiera está reclamada. Los productos listados salen de sus
   reseñas y de sus propias fotos. Ninguno inventado. Pedirle la
   carta al local para cargar los precios.
   ============================================================ */

/* LA CARTA SALE DE SU PROPIO UBER EATS, leída el 22-09-2026. Son precios
   publicados por ellos, no estimaciones.

   Se quitaron dos duplicados —las dos chorrillanas aparecen en Sándwiches
   y otra vez en Menú— y el Pie de limón, que figura AGOTADO. No se inventa
   ni un producto ni un precio.

   ⚠️ OJO: se llaman "Café y Panadería" y su Uber Eats NO TIENE NI UN CAFÉ
   NI UN PAN. Google, en cambio, les destaca "Buen café" y "Deliciosos
   postres". Lo que mejor les valoran es justo lo que no está publicado en
   ninguna parte. Pedirles la carta de cafetería es la excusa natural. */
const MENU = {
  sandwiches: {
    label: 'Sándwiches y panes',
    items: [
      { n:'Completo italiano',   p:3250, d:'Pan de fabricación propia con salchicha, palta y tomate' },
      { n:'Completo completo',   p:3250, d:'Con salchicha, chucrut, americana y las tres salsas' },
      { n:'Completo dinámico',   p:3250, d:'Salchicha, palta, tomate y chucrut' },
      { n:'Pizza individual',    p:3900, d:'Queso, salsa de tomate, aceitunas y orégano' },
      { n:'Perro caliente',      p:4000, d:'Salchicha, repollo con zanahoria, papas al hilo y queso' },
      { n:'As con queso',        p:5100, d:'Churrasco de res con queso derretido encima' },
      { n:'As solo',             p:5100 },
      { n:'As italiano',         p:5100, d:'Con palta y tomate' },
      { n:'As dinámico',         p:5100, d:'Con palta, tomate y chucrut' },
      { n:'Salchipapas',         p:5500, d:'Papas fritas recién hechas con salchichas picadas' },
      { n:'Lomo queso',          p:5980, d:'200 g de cerdo con queso derretido' },
      { n:'Churrasco chacarero', p:7150, d:'Porotos verdes, tomate, ají verde y mayonesa' },
      { n:'Churrasco Barros Luco', p:7150, d:'200 g de vacuno con queso derretido' },
      { n:'Sándwich de lengua',  p:7200, d:'250 g de lengua de res, en pan frica o marraqueta' },
      { n:'Hamburguesa italiana',p:7400, d:'200 g de vacuno con palta, tomate y mayonesa' },
      { n:'Hamburguesa queso',   p:7400 },
      { n:'Fajita',              p:7670, d:'Con pollo, res o ambas, papas al hilo y salsa de queso' },
      { n:'Churrasco italiano',  p:8000, d:'200 g de vacuno, tomate, palta hass y mayonesa de la casa' },
      { n:'Pepito mixto',        p:8500, d:'Res, pollo, tocino, jamón, queso y papas al hilo' },
      { n:'Hamburguesa venezolana', p:9750, d:'Con jamón, queso, papas al hilo, tocino, huevo frito y papas fritas' },
      { n:'Hamburguesa venezolana mixta', p:12500, d:'200 g de vacuno y 200 g de pollo' },
    ]
  },
  platos: {
    label: 'Platos',
    items: [
      { n:'Pollo asado con agregado',   p:8500,  d:'Cuarto de pollo al horno, con el agregado a elección' },
      { n:'Chuletas de cerdo (par)',    p:9750,  d:'Con agregado a elección' },
      { n:'Chorrillana personal',       p:10000, d:'400 g de vacuno, cebolla caramelizada, salchicha y huevo frito' },
      { n:'Costillar con agregado',     p:10270 },
      { n:'Palta reina',                p:10400, d:'A elegir en atún o en pollo' },
      { n:'Vegetariano o hipocalórico', p:10790, d:'Ensalada surtida con queso fresco, huevo duro y jamón' },
      { n:'Pechuga apanada con agregado', p:12500 },
      { n:'Pechuga a la plancha con agregado', p:12500 },
      { n:'Bife con agregado',          p:14250, d:'De 280 a 300 g de carne de res' },
      { n:'Lomo salteado',              p:17000, d:'250 g de lomo liso con cebolla morada, pimentón, arroz y papas' },
      { n:'Bife a lo pobre',            p:17550, d:'250 g de res, par de huevos fritos, cebolla y papas fritas' },
      { n:'Chorrillana familiar',       p:18500, d:'600 g de vacuno, 4 huevos fritos y papas fritas' },
    ]
  },
  postres: {
    label: 'Postres',
    items: [
      { n:'Berlín con crema pastelera', p:1700, d:'De fabricación propia, relleno de crema pastelera' },
      { n:'Arroz con leche',            p:2000, d:'Casero, de nuestra pastelera' },
      { n:'Jalea en vaso',              p:2000 },
      { n:'Mendocino',                  p:2600, d:'Galleta doble rellena de manjar y cubierta de chocolate' },
      { n:'Alfajor',                    p:2600, d:'De mantequilla, relleno de manjar y cubierto de chocolate' },
      { n:'Torta en vaso',              p:3250, d:'Bizcocho con crema y fruta o mermelada' },
      { n:'Torta de tres leches en vaso', p:3250 },
      { n:'Leche asada',                p:4500, d:'Casera, con salsa de caramelo' },
    ]
  },
  bebidas: {
    label: 'Bebidas',
    items: [
      { n:'Agua mineral Cachantún con o sin gas', p:2000, d:'600 ml' },
      { n:'Agua Cachantún sabor manzana',         p:2000, d:'600 ml, sin gas' },
      { n:'Agua Vital sin gas',                   p:2000, d:'600 ml' },
      { n:'Coca-Cola',                            p:2200, d:'Lata de 350 ml, normal o Zero' },
      { n:'Pepsi',                                p:2200, d:'Lata de 350 ml, normal o Zero' },
      { n:'Bilz',                                 p:2200 },
      { n:'Pap',                                  p:2200 },
      { n:'Kem',                                  p:2200 },
      { n:'Limón Soda',                           p:2200 },
      { n:'Crush',                                p:2200 },
      { n:'Canada Dry',                           p:2200 },
      { n:'Jugo néctar Watt\'s de durazno',       p:2500, d:'300 ml, botella de vidrio' },
      { n:'Red Bull',                             p:3500, d:'Lata de 250 ml' },
      { n:'Monster',                              p:4000, d:'Lata de 473 ml' },
    ]
  }
};

const money = n => '$' + n.toLocaleString('es-CL');

const tabsEl   = document.getElementById('menuTabs');
const panelsEl = document.getElementById('menuPanels');

Object.keys(MENU).forEach((key, i) => {
  const tab = document.createElement('button');
  tab.className = 'menu-tab' + (i === 0 ? ' active' : '');
  tab.type = 'button';
  tab.textContent = MENU[key].label;
  tab.dataset.key = key;
  tab.setAttribute('role', 'tab');
  tab.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
  tab.addEventListener('click', () => showTab(key));
  tabsEl.appendChild(tab);

  const panel = document.createElement('div');
  panel.className = 'menu-panel' + (i === 0 ? ' active' : '');
  panel.id = 'panel-' + key;

  const grid = document.createElement('div');
  grid.className = 'menu-grid';

  MENU[key].items.forEach(item => {
    const row = document.createElement('div');
    row.className = 'menu-item reveal';

    if (item.img) {
      // La clase cf-thumb la necesita el grid de .menu-item para ubicarla en
      // su columna; sin ella la miniatura caia fuera de las areas y abria
      // una fila extra.
      const cont = document.createElement('div');
      cont.className = 'cf-thumb';
      const im = document.createElement('img');
      im.src = 'fotos/' + item.img; im.alt = item.n; im.loading = 'lazy';
      im.style.cssText = 'width:58px;height:58px;object-fit:cover;border-radius:12px;';
      cont.appendChild(im);
      row.appendChild(cont);
    }

    const texto = document.createElement('div');
    texto.className = 'menu-item-text';
    const nombre = document.createElement('span');
    nombre.className = 'name';
    nombre.textContent = item.n;
    texto.appendChild(nombre);

    if (item.d) {
      const desc = document.createElement('div');
      desc.className = 'desc';
      desc.textContent = item.d;
      texto.appendChild(desc);
    }

    // Sin precio publicado: "Consultar", nunca un monto inventado.
    const precio = document.createElement('div');
    precio.className = 'price';
    precio.textContent = item.p ? money(item.p) : 'Consultar';

    row.appendChild(texto);
    row.appendChild(precio);
    grid.appendChild(row);
  });

  panel.appendChild(grid);
  panelsEl.appendChild(panel);
});

function showTab(key) {
  document.querySelectorAll('.menu-tab').forEach(t => {
    const activo = t.dataset.key === key;
    t.classList.toggle('active', activo);
    t.setAttribute('aria-selected', activo ? 'true' : 'false');
  });
  document.querySelectorAll('.menu-panel').forEach(p => {
    p.classList.toggle('active', p.id === 'panel-' + key);
  });
  initScrollReveal();
}

/* ---------- NAVEGACIÓN POR PESTAÑAS ---------- */
const navLinks = document.getElementById('navLinks');

function goToTab(tabId) {
  document.querySelectorAll('.tab-panel').forEach(p => {
    p.classList.toggle('active', p.dataset.tabPanel === tabId);
  });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.tab === tabId);
  });
  navLinks.classList.remove('open');
  document.getElementById('navToggle').setAttribute('aria-expanded', 'false');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  initScrollReveal();
}

document.querySelectorAll('[data-tab]').forEach(el => {
  el.addEventListener('click', e => { e.preventDefault(); goToTab(el.dataset.tab); });
});

document.getElementById('navToggle').addEventListener('click', function () {
  const abierto = navLinks.classList.toggle('open');
  this.setAttribute('aria-expanded', abierto ? 'true' : 'false');
});

/* ---------- INDICADOR ABIERTO / CERRADO ----------
   Google confirma 'Abierto las 24 horas'. Por eso el estado del local siempre aparece como abierto: es un dato real, no un adorno. */
function horarioDeHoy() {
  return [0, 24 * 60];
}

function actualizarEstado(dotId, textId) {
  const dot  = document.getElementById(dotId);
  const text = document.getElementById(textId);
  if (!dot || !text) return;
  const ahora   = new Date();
  const minutos = ahora.getHours() * 60 + ahora.getMinutes();
  const h       = horarioDeHoy();
  if (!h) {
    // Sin horario publicado: se esconde la pildora entera en vez de
    // afirmar que esta cerrado, cosa que no nos consta.
    const caja = text.closest('.pill, .status-line') || text.parentElement;
    if (caja) caja.hidden = true;
    return;
  }
  const abierto = minutos >= h[0] && minutos < h[1];
  text.textContent = abierto ? 'Abierto ahora' : 'Cerrado ahora';
  dot.classList.toggle('closed', !abierto);
}

actualizarEstado('statusDot', 'statusText');
actualizarEstado('statusDot2', 'statusText2');
actualizarEstado('statusDot3', 'statusText3');

/* ---------- SCROLL REVEAL (con red de seguridad) ---------- */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal:not(.in)');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach((el, i) => {
    el.style.transitionDelay = (Math.min(i % 6, 6) * 55) + 'ms';
    io.observe(el);
  });

  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'));
  }, 1200);
}
initScrollReveal();

window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('done'), 320);
});

// Marca en la lista de horario el día de hoy. La lista es estática en el
// HTML a propósito: si el JS falla, el horario igual se lee.
function marcarDiaDeHoy() {
  const hoy = new Date().getDay();
  document.querySelectorAll('.horario-semana li[data-dia]').forEach(function (li) {
    li.classList.toggle('hs-hoy', Number(li.dataset.dia) === hoy);
  });
}
marcarDiaDeHoy();
