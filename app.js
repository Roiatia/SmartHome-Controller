const STORAGE_KEY = "homecontrol-wall-panel-template-v3";
const PANEL_WIDTH = 1194;
const PANEL_HEIGHT = 834;

const icon = {
  home: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 11 12 4l8 7"/><path d="M6.5 9.5V20h11V9.5"/><path d="M10.5 20v-5h3v5"/></svg>',
  dashboard: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="2"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2"/></svg>',
  rooms: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 11 12 4l8 7v9H4z"/><path d="M12 11v9"/><path d="M4 15h8"/></svg>',
  scenes: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 7h14M5 12h14M5 17h14"/><circle cx="9" cy="7" r="2.2" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="2.2" fill="currentColor" stroke="none"/><circle cx="8" cy="17" r="2.2" fill="currentColor" stroke="none"/></svg>',
  climate: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0z"/><path d="M12 11v5.5"/></svg>',
  settings: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8"/></svg>',
  lock: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/></svg>',
  plus: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>',
  sliders: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 7h14M5 17h14"/><circle cx="10" cy="7" r="2.4"/><circle cx="15" cy="17" r="2.4"/></svg>',
  close: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  warning: '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M12 4 2.5 20h19z"/><path d="M12 10v4.5M12 17.5h.01"/></svg>',
  quiet: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h4l3-5v10l-3-5H5z"/><path d="M16 9a4 4 0 0 1 0 6"/></svg>',
  night: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>',
  away: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 4h4v16h-4"/><path d="M10 12H3M7 9l3 3-3 3"/></svg>',
  morning: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v3M5.6 5.6l2.1 2.1M2 12h3M19 12h3M16.3 7.7l2.1-2.1"/><path d="M6 18a6 6 0 0 1 12 0"/></svg>',
  movie: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="6" width="18" height="12" rx="3"/><path d="M8 6v12M16 6v12M3 10h5M16 10h5M3 14h5M16 14h5"/></svg>',
  alloff: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v8"/><path d="M7.1 6.4a8 8 0 1 0 9.8 0"/></svg>',
  guests: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M14.5 18.5a4.5 4.5 0 0 1 6 1.5"/></svg>',
  light: '<svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 18h6M10 21h4"/><path d="M8.3 14.5A6 6 0 1 1 15.7 14.5c-.8.6-1.2 1.5-1.2 2.5h-5c0-1-.4-1.9-1.2-2.5z"/></svg>',
  plug: '<svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 7v5a5 5 0 0 0 10 0V7"/><path d="M9 3v4M15 3v4M12 17v4"/></svg>',
  sensor: '<svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 12h.01"/><path d="M16.2 7.8a6 6 0 0 1 0 8.4M7.8 16.2a6 6 0 0 1 0-8.4"/><path d="M19 5a10 10 0 0 1 0 14M5 19A10 10 0 0 1 5 5"/></svg>',
  switch: '<svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="7" width="16" height="10" rx="5"/><circle cx="9" cy="12" r="2"/></svg>',
  arrowRight: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>',
  up: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V6M6 12l6-6 6 6"/></svg>',
  down: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v13M6 12l6 6 6-6"/></svg>'
};

const baseState = {
  screen: "dash",
  mode: "בבית",
  scene: "בוקר",
  selectedScene: "סרט",
  room: "living",
  tab: "הכל",
  panel: null,
  addStep: 1,
  customTab: "אריחים",
  editingRoom: null,
  roomDraft: "",
  theme: "light",
  accent: "#2f6b44",
  kiosk: false,
  offlineWarn: true,
  showAllOff: true,
  autoReturn: true,
  nightDim: true,
  alert: false,
  addName: "",
  addType: "אור",
  addRoom: "kitchen",
  source: "ידני עכשיו",
  roomNames: {
    living: "סלון",
    kitchen: "מטבח",
    bedroom: "חדר שינה",
    office: "חדר עבודה"
  },
  widgets: [
    { key: "rooms", name: "חדרים", meta: "ממתין לרשימה", on: true },
    { key: "scenes", name: "סצנות", meta: "תבניות מוכנות", on: true },
    { key: "climate", name: "אקלים", meta: "לא הוגדר עדיין", on: true },
    { key: "security", name: "חיבור ואבטחה", meta: "מקומי", on: true }
  ],
  devices: {
    living: [],
    kitchen: [],
    bedroom: [],
    office: []
  }
};

const rooms = [
  { key: "living", name: "סלון" },
  { key: "kitchen", name: "מטבח" },
  { key: "bedroom", name: "חדר שינה" },
  { key: "office", name: "חדר עבודה" }
];

const nav = [
  { key: "dash", label: "לוח שליטה", icon: icon.dashboard },
  { key: "rooms", label: "חדרים", icon: icon.rooms },
  { key: "scenes", label: "סצנות", icon: icon.scenes },
  { key: "climate", label: "אקלים", icon: icon.climate },
  { key: "settings", label: "הגדרות", icon: icon.settings }
];

const modes = [
  { name: "בבית", hint: "מוכן לחיבור מכשירים אמיתיים.", icon: icon.home },
  { name: "שקט", hint: "תבנית מצב רגוע להגדרה בהמשך.", icon: icon.quiet },
  { name: "לילה", hint: "תבנית לילה ללא פעולות מחוברות.", icon: icon.night },
  { name: "יציאה", hint: "תבנית יציאה לפני חיבור מכשירים.", icon: icon.away }
];

const scenes = [
  { name: "בוקר", icon: icon.morning, meta: "תבנית", desc: "מקום לסצנת בוקר אחרי שנדע אילו מכשירים קיימים.", actions: [] },
  { name: "סרט", icon: icon.movie, meta: "תבנית", desc: "מקום לסצנת צפייה, בלי פעולות מחוברות כרגע.", actions: [] },
  { name: "לילה", icon: icon.night, meta: "תבנית", desc: "מקום לסצנת לילה שתוגדר מול המכשירים האמיתיים.", actions: [] },
  { name: "יציאה", icon: icon.away, meta: "תבנית", desc: "מקום למצב יציאה מהבית אחרי חיבור Home Assistant.", actions: [] },
  { name: "אירוח", icon: icon.guests, meta: "תבנית", desc: "מקום לסצנת אירוח אם נחליט שהיא נחוצה.", actions: [] },
  { name: "כיבוי הכל", icon: icon.alloff, meta: "תבנית", desc: "פעולה חשובה שתישאר זמינה, אבל כרגע אינה מחוברת למכשירים.", actions: [] }
];

const categories = [
  { label: "הכל", types: null },
  { label: "תאורה", types: ["light"] },
  { label: "אקלים", types: ["ac"] },
  { label: "מתגים", types: ["switch", "plug"] },
  { label: "חיישנים", types: ["sensor"] }
];

const deviceTypes = [
  { name: "אור", type: "light", icon: icon.light },
  { name: "מפסק", type: "switch", icon: icon.switch },
  { name: "מזגן", type: "ac", icon: icon.climate },
  { name: "חיישן", type: "sensor", icon: icon.sensor },
  { name: "שקע", type: "plug", icon: icon.plug }
];

const sources = [
  { name: "ידני עכשיו", note: "בקרה מקומית שנשמרת על ה-iPad", badge: "זמין" },
  { name: "Home Assistant", note: "חיבור API מקומי למופע שלכם", badge: "בהמשך" },
  { name: "Matter", note: "שיוך דרך הרשת המקומית", badge: "בהמשך" },
  { name: "Zigbee", note: "דורש רכזת משויכת", badge: "בהמשך" },
  { name: "Wi-Fi", note: "ענן היצרן או שליטה מקומית", badge: "בהמשך" }
];

const swatches = ["#2f6b44", "#d99b3e", "#2f6478", "#8a5b4a", "#54608a"];
let state = loadState();

function cloneBase() {
  return JSON.parse(JSON.stringify(baseState));
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return cloneBase();
  try {
    return { ...cloneBase(), ...JSON.parse(saved) };
  } catch {
    return cloneBase();
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setState(patch) {
  state = { ...state, ...patch };
  persist();
  render();
}

function allDevices() {
  return Object.values(state.devices).flat();
}

function getRoomName(key) {
  return state.roomNames?.[key] || rooms.find((room) => room.key === key)?.name || rooms[0].name;
}

function getRoomKey(name) {
  return rooms.find((room) => getRoomName(room.key) === name)?.key || rooms[0].key;
}

function currentMode() {
  return modes.find((mode) => mode.name === state.mode) || modes[0];
}

function countLightsOn() {
  return allDevices().filter((device) => device.type === "light" && device.on).length;
}

function countActiveDevices() {
  return allDevices().filter((device) => device.on).length;
}

function climateDevices() {
  const list = [];
  Object.entries(state.devices).forEach(([roomKey, devices]) => {
    devices.filter((device) => device.type === "ac").forEach((device) => list.push({ roomKey, room: getRoomName(roomKey), device }));
  });
  return list;
}

function deviceIcon(type) {
  if (type === "light") return icon.light;
  if (type === "ac") return icon.climate;
  if (type === "plug") return icon.plug;
  if (type === "sensor") return icon.sensor;
  return icon.switch;
}

function patchDevice(id, patch) {
  const next = {};
  Object.entries(state.devices).forEach(([roomKey, devices]) => {
    next[roomKey] = devices.map((device) => (device.id === id ? { ...device, ...patch } : device));
  });
  state.devices = next;
  persist();
  render();
}

function moveWidget(key, direction) {
  const widgets = state.widgets.slice();
  const index = widgets.findIndex((widget) => widget.key === key);
  const target = index + direction;
  if (index < 0 || target < 0 || target >= widgets.length) return;
  [widgets[index], widgets[target]] = [widgets[target], widgets[index]];
  setState({ widgets });
}

function resizePanel() {
  const scale = Math.min((window.innerWidth - 32) / PANEL_WIDTH, (window.innerHeight - 32) / PANEL_HEIGHT, 1);
  document.documentElement.style.setProperty("--panel-scale", Math.max(0.45, scale).toString());
}

function formatClock() {
  const now = new Date();
  return {
    time: now.toLocaleTimeString("he-IL", { hour: "2-digit", minute: "2-digit" }),
    date: now.toLocaleDateString("he-IL", { weekday: "long", day: "numeric", month: "long" })
  };
}

function render() {
  document.documentElement.dataset.theme = state.theme;
  document.documentElement.style.setProperty("--accent", state.accent);
  document.documentElement.style.setProperty("--accent-soft", makeSoftColor(state.accent, state.theme));

  document.getElementById("app").innerHTML = `
    <div class="app-frame">
      ${renderNav()}
      <section class="main-area">
        ${renderTopbar()}
        ${renderDashboard()}
        ${renderRooms()}
        ${renderScenes()}
        ${renderClimate()}
        ${renderSettings()}
      </section>
      ${state.panel ? '<button class="drawer-backdrop" data-action="close-panel" aria-label="סגירת פאנל"></button>' : ""}
      ${state.panel === "add" ? renderAddDrawer() : ""}
      ${state.panel === "custom" ? renderCustomizeDrawer() : ""}
    </div>
  `;

  if (state.editingRoom) {
    const input = document.querySelector("[data-action='room-name-input']");
    input?.focus();
    input?.select();
  }
}

function makeSoftColor(hex, theme) {
  const rgb = hex.match(/[a-f0-9]{2}/gi)?.map((value) => parseInt(value, 16)) || [47, 107, 68];
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${theme === "dark" ? 0.18 : 0.13})`;
}

function renderNav() {
  return `
    <aside class="nav-rail" aria-label="ניווט ראשי">
      <button class="brand-button" data-action="go" data-screen="dash" aria-label="HomeControl">${icon.home}</button>
      <nav class="rail-actions">
        ${nav
          .map(
            (item) => `
              <button class="nav-button ${state.screen === item.key ? "is-active" : ""}" data-action="go" data-screen="${item.key}">
                ${item.icon}
                <span>${item.label}</span>
              </button>
            `
          )
          .join("")}
      </nav>
      <div class="nav-spacer"></div>
      <div class="local-lock">${icon.lock}<span>LOCAL</span></div>
    </aside>
  `;
}

function renderTopbar() {
  const clock = formatClock();
  return `
    <header class="topbar">
      <div class="clock"><strong>${clock.time}</strong><span>${clock.date}</span></div>
      <div class="status-pill"><span class="dot"></span><span>מקומי בלבד · מאובטח</span></div>
      <div class="top-meta">Home Assistant לא מחובר עדיין</div>
      <div class="top-spacer"></div>
      <button class="button" data-action="open-custom">${icon.sliders}<span>התאמה אישית</span></button>
      <button class="button primary" data-action="open-add">${icon.plus}<span>הוספת מכשיר</span></button>
    </header>
  `;
}

function renderDashboard() {
  const mode = currentMode();
  const showAlert = state.offlineWarn && state.alert;
  const visibleScenes = scenes.filter((scene) => scene.name !== "אירוח").filter((scene) => scene.name !== "כיבוי הכל" || state.showAllOff);
  const widgets = state.widgets.filter((widget) => widget.on).slice(0, 3);

  return `
    <section class="screen dashboard-screen ${state.screen === "dash" ? "is-active" : ""} ${showAlert ? "" : "no-alert"}">
      ${
        showAlert
          ? `<div class="alert-strip">
              ${icon.warning}
              <strong>אזור התראות מוכן להפעלה אחרי חיבור מכשירים</strong>
              <span class="top-spacer"></span>
              <button class="button" data-action="retry-alert">בדיקה</button>
              <button class="button soft" data-action="dismiss-alert">הסתר</button>
            </div>`
          : ""
      }
      <div class="dashboard-hero">
        <article class="house-hero">
          <div class="house-hero__top">
            <span class="kicker">מצב בית</span>
            <span class="status-pill"><span class="dot"></span>מוכן להגדרה</span>
          </div>
          <h1>${mode.name}</h1>
          <p>${mode.hint}</p>
          <div class="hero-metrics">
            <div class="hero-metric"><strong>מכשירים</strong><span>בהמשך</span></div>
            <div class="hero-metric"><strong>חדרים</strong><span>לעריכה</span></div>
            <div class="hero-metric"><strong>סצנות</strong><span>למיפוי</span></div>
          </div>
        </article>
        <div class="section-card">
          <div class="section-title"><h2>בחירת מצב</h2><span>לחיצה אחת לשינוי הבית</span></div>
          <div class="mode-grid">
            ${modes
              .map(
                (item) => `
                  <button class="mode-tile ${state.mode === item.name ? "is-active" : ""}" data-action="mode" data-mode="${item.name}">
                    ${item.icon}
                    <strong>${item.name}</strong>
                    <small>תבנית</small>
                  </button>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
      <div class="scene-climate-row">
        <article class="section-card">
          <div class="section-title"><h2>סצנות מהירות</h2><span>ממתינות למכשירים</span></div>
          <div class="scene-grid">
            ${visibleScenes
              .map(
                (scene) => `
                  <button class="scene-tile ${state.scene === scene.name ? "is-active" : ""}" data-action="scene" data-scene="${scene.name}">
                    ${scene.icon}
                    <strong>${scene.name}</strong>
                    <small>${scene.meta}</small>
                  </button>
                `
              )
              .join("")}
          </div>
        </article>
        <article class="section-card">
          <div class="section-title"><h2>אקלים</h2><span>לא הוגדר עדיין</span></div>
          <div class="climate-now">
            <div>
              <div class="template-title">מוכן לחיבור</div>
              <div class="meta-lines">כאן יופיעו מזגנים וחיישני אקלים אחרי שנזין את הרשימה.</div>
            </div>
            <button class="button" data-action="go" data-screen="climate">פתח</button>
          </div>
        </article>
      </div>
      <div class="dashboard-widgets">
        ${widgets.length ? widgets.map(renderWidget).join("") : renderEmptyWidget()}
      </div>
    </section>
  `;
}

function renderWidget(widget) {
  if (widget.key === "rooms") return renderRoomsWidget(widget);
  if (widget.key === "scenes") {
    return `
      <article class="widget-card">
        <div class="section-title"><h2>${widget.name}</h2><span>${widget.meta}</span></div>
        <div class="widget-body template-list">
          ${scenes.slice(0, 3).map((scene) => `<button class="room-row" data-action="select-scene" data-scene="${scene.name}"><span class="dot"></span><strong>${scene.name}</strong><span class="top-spacer"></span><small>מוכן לעריכה</small>${icon.arrowRight}</button>`).join("")}
        </div>
      </article>
    `;
  }
  if (widget.key === "climate") {
    return `
      <article class="widget-card">
        <div class="section-title"><h2>${widget.name}</h2><span>${widget.meta}</span></div>
        <div class="widget-body">
          <div class="template-title">אין יחידות אקלים</div>
          <div class="meta-lines">אחרי חיבור המכשירים נציג כאן מזגנים, חיישנים ומצבי פעולה.</div>
        </div>
      </article>
    `;
  }
  if (widget.key === "security") {
    return `
      <article class="widget-card">
        <div class="section-title"><h2>${widget.name}</h2><span>${widget.meta}</span></div>
        <div class="widget-body">
          <div class="room-row">${icon.lock}<strong>רשת מקומית בלבד</strong><span class="top-spacer"></span><small>מוכן</small></div>
          <div class="room-row"><span class="dot"></span><strong>Home Assistant</strong><span class="top-spacer"></span><small>לא מחובר עדיין</small></div>
          <div class="room-row"><span class="dot"></span><strong>התראת ניתוק</strong><span class="top-spacer"></span><small>${state.offlineWarn ? "מופעלת" : "כבויה"}</small></div>
        </div>
      </article>
    `;
  }
  return `
    <article class="widget-card">
      <div class="section-title"><h2>${widget.name}</h2><span>${widget.meta}</span></div>
      <div class="widget-body">
        <div class="template-title">מוכן למילוי</div>
        <div class="meta-lines">הווידג׳ט יתחיל להציג מידע רק אחרי שנחבר נתונים אמיתיים.</div>
      </div>
    </article>
  `;
}

function renderRoomsWidget(widget) {
  const rows = rooms.slice(0, 3).map((room) => {
    return `
      <button class="room-row" data-action="room" data-room="${room.key}">
        <span class="dot"></span>
        <strong>${getRoomName(room.key)}</strong>
        <span class="top-spacer"></span>
        <small>מוכן למכשירים</small>
        ${icon.arrowRight}
      </button>
    `;
  });

  return `
    <article class="widget-card">
      <div class="section-title"><h2>${widget.name}</h2><span>${widget.meta}</span></div>
      <div class="widget-body">${rows.join("")}</div>
    </article>
  `;
}

function renderEmptyWidget() {
  return `
    <article class="empty-card">
      <span class="empty-icon">${icon.plus}</span>
      <strong>אין ווידג׳טים פעילים</strong>
      <span>פתח התאמה אישית כדי להחזיר אותם ללוח.</span>
    </article>
  `;
}

function renderRooms() {
  const devices = state.devices[state.room] || [];
  const category = categories.find((item) => item.label === state.tab) || categories[0];
  const filtered = category.types ? devices.filter((device) => category.types.includes(device.type)) : devices;
  const visible = [];
  let cells = 0;
  filtered.forEach((device) => {
    const span = device.span || 1;
    if (cells + span <= 6) {
      visible.push(device);
      cells += span;
    }
  });

  return `
    <section class="screen rooms-screen ${state.screen === "rooms" ? "is-active" : ""}">
      <aside class="room-sidebar">
        <div class="room-sidebar-title"><span class="kicker">חדרים</span></div>
        ${rooms.map(renderRoomButton).join("")}
        <button class="button soft" data-action="open-add">${icon.plus}<span>חדר חדש בהמשך</span></button>
      </aside>
      <div class="room-main">
        ${renderRoomHeader(devices)}
        <div class="tabs">${categories.map((item) => `<button class="tab-button ${state.tab === item.label ? "is-active" : ""}" data-action="tab" data-tab="${item.label}">${item.label}</button>`).join("")}</div>
        <div class="device-grid">
          ${visible.length ? visible.map(renderDeviceCard).join("") : renderEmptyRoom()}
        </div>
      </div>
    </section>
  `;
}

function renderRoomHeader(devices) {
  const isEditing = state.editingRoom === state.room;
  if (isEditing) {
    return `
      <div class="screen-title room-editbar">
        <label class="room-name-field">
          <span>שם החדר</span>
          <input value="${escapeHtml(state.roomDraft)}" data-action="room-name-input" maxlength="24" autofocus>
        </label>
        <span class="top-spacer"></span>
        <button class="button soft" data-action="cancel-room-edit">ביטול</button>
        <button class="button primary" data-action="save-room-name">שמור</button>
      </div>
    `;
  }

  return `
    <div class="screen-title">
      <h1>${getRoomName(state.room)}</h1>
      <button class="button soft compact" data-action="start-room-edit">עריכת שם</button>
      <p>${devices.length ? "מכשירים שהוספת יופיעו כאן" : "מוכן לשיוך מכשירים בהמשך"}</p>
      <span class="top-spacer"></span>
      <button class="button" data-action="all-room-off">כיבוי חדר</button>
      <button class="button primary" data-action="open-add">${icon.plus}<span>הוספה לחדר</span></button>
    </div>
  `;
}

function renderRoomButton(room) {
  return `
    <button class="room-button ${state.room === room.key ? "is-active" : ""}" data-action="room" data-room="${room.key}">
      <span><strong>${getRoomName(room.key)}</strong><small>מוכן לשיוך</small></span>
      <span class="dot"></span>
    </button>
  `;
}

function renderDeviceCard(device) {
  const classes = `device-card ${device.span ? "span-2" : ""}`;
  const status = deviceStatus(device);
  const body = deviceBody(device);

  return `
    <article class="${classes}">
      <div class="device-head">
        <span class="device-icon">${deviceIcon(device.type)}</span>
        <div class="device-copy"><h3>${device.name}</h3><p>${status}</p></div>
        <button class="toggle ${device.on ? "is-on" : ""}" data-action="toggle-device" data-id="${device.id}" aria-label="החלפת מצב ${device.name}"><span></span></button>
      </div>
      <div class="device-fill"></div>
      ${body}
    </article>
  `;
}

function deviceStatus(device) {
  if (!device.connected) return "נוסף לממשק · לא מחובר עדיין";
  if (device.offline) return "מנותק";
  if (device.loading) return "מתחבר";
  if (device.type === "light") return device.on ? `פעיל · ${device.brightness}%` : `כבוי · ${device.brightness}% מוכן`;
  if (device.type === "ac") return device.on ? `${device.acMode} · מפוח ${device.fan}` : "כבוי";
  if (device.type === "plug") return device.on ? "פעיל" : "כבוי";
  if (device.type === "sensor") return `${device.reading} · ${device.readingLabel}`;
  return device.on ? "פעיל" : "כבוי";
}

function deviceBody(device) {
  if (!device.connected) {
    return `
      <div class="widget-body">
        <div class="template-title">ממתין לחיבור</div>
        <div class="meta-lines">הכרטיס נשמר בממשק, אבל לא מציג נתונים עד שנחבר מקור אמיתי.</div>
      </div>
    `;
  }

  if (device.type === "light") {
    return `
      <div class="range">
        <label><span>עוצמה</span><strong>${device.brightness}%</strong></label>
        <input type="range" min="0" max="100" value="${device.brightness}" data-action="brightness" data-id="${device.id}">
      </div>
    `;
  }

  if (device.type === "ac") {
    return `
      <div class="temp-control">
        <button class="stepper-button" data-action="temp-down" data-id="${device.id}">−</button>
        <div class="device-temp">${device.temp}°</div>
        <button class="stepper-button" data-action="temp-up" data-id="${device.id}">+</button>
        <div class="top-spacer"></div>
        <div class="meta-lines">מצב יחידה<br>מפוח ${device.fan}</div>
      </div>
      <div class="chip-row">
        ${["קירור", "מפוח", "ייבוש"].map((mode) => `<button class="chip ${device.acMode === mode ? "active" : ""}" data-action="ac-mode" data-id="${device.id}" data-mode="${mode}">${mode}</button>`).join("")}
      </div>
    `;
  }

  if (device.type === "sensor") {
    return `
      <div class="widget-body">
        <div class="temp-big">${device.reading}</div>
        <div class="meta-lines">${device.readingLabel}</div>
      </div>
    `;
  }

  return `
    <div class="widget-body">
      <div class="meter"><span style="--value:${device.on ? 64 : 12}%"></span></div>
      <div class="meta-lines">${device.type === "plug" ? "מדידה תוצג אחרי חיבור מקור אמיתי" : "מתג זמין לשליטה"}</div>
    </div>
  `;
}

function renderEmptyRoom() {
  return `
    <article class="empty-card">
      <span class="empty-icon">${icon.plus}</span>
      <strong>עדיין אין מכשירים</strong>
      <span>נשאיר כאן מקום נקי לרשימת המכשירים האמיתית שלך.</span>
      <button class="button primary" data-action="open-add">הוספת מכשיר</button>
    </article>
  `;
}

function renderScenes() {
  const selected = scenes.find((scene) => scene.name === state.selectedScene) || scenes[0];
  return `
    <section class="screen scenes-screen ${state.screen === "scenes" ? "is-active" : ""}">
      <div class="scene-list-grid">
        ${scenes
          .map(
            (scene) => `
              <button class="scene-card ${state.selectedScene === scene.name ? "is-active" : ""}" data-action="select-scene" data-scene="${scene.name}">
                <div class="scene-card-head"><span class="tile-icon">${scene.icon}</span><span class="chip">${scene.meta}</span></div>
                <h3>${scene.name}</h3>
                <p>${scene.desc}</p>
                <span class="top-spacer"></span>
                <small>מוכן להגדרה</small>
              </button>
            `
          )
          .join("")}
      </div>
      <aside class="scene-detail section-card">
        <span class="kicker">סצנה נבחרת</span>
        <h2>${selected.name}</h2>
        <p class="meta-lines">${selected.desc}</p>
        <div class="scene-actions">
          ${renderScenePlaceholders()}
        </div>
        <span class="top-spacer"></span>
        <button class="button primary" data-action="run-selected-scene">${icon.alloff}<span>סמן כסצנה פעילה</span></button>
        <button class="button" data-action="open-custom">${icon.sliders}<span>עריכת סצנות בהמשך</span></button>
      </aside>
    </section>
  `;
}

function renderScenePlaceholders() {
  return ["מכשירים מושפעים", "חדרים מושפעים", "תנאי הפעלה", "פעולה ראשית"]
    .map((label) => `<div class="scene-action"><span class="dot"></span><span>${label}</span><small>יוגדר בהמשך</small></div>`)
    .join("");
}

function renderClimate() {
  const units = climateDevices();
  return `
    <section class="screen climate-screen ${state.screen === "climate" ? "is-active" : ""}">
      <article class="climate-hero">
        <div>
          <span class="kicker">אקלים מרכזי</span>
          <h1>אקלים</h1>
          <p>ממתין למזגנים וחיישנים מהרשימה האמיתית.</p>
        </div>
        <div class="climate-stats">
          <div class="climate-stat">יחידות <strong>להגדרה</strong></div>
          <div class="climate-stat">מצבים <strong>מוכנים</strong></div>
          <div class="climate-stat">חיישנים <strong>בהמשך</strong></div>
          <div class="climate-stat">Home Assistant <strong>לא מחובר</strong></div>
        </div>
      </article>
      <div class="climate-grid">
        ${units.map((unit) => renderClimateUnit(unit)).join("")}
        <article class="empty-card">
          <span class="empty-icon">${icon.plus}</span>
          <strong>אין יחידות אקלים</strong>
          <span>כאן יופיעו מזגנים וחיישני טמפרטורה אחרי שנגדיר אותם.</span>
          <button class="button" data-action="open-add">הוספת מכשיר</button>
        </article>
      </div>
    </section>
  `;
}

function renderClimateUnit(unit) {
  const device = unit.device;
  return `
    <article class="device-card">
      <div class="device-head">
        <div class="device-copy"><h3>${unit.room}</h3><p>${deviceStatus(device)}</p></div>
        <button class="toggle ${device.on ? "is-on" : ""}" data-action="toggle-device" data-id="${device.id}"><span></span></button>
      </div>
      <div class="device-fill"></div>
      ${deviceBody(device)}
    </article>
  `;
}

function renderSettings() {
  return `
    <section class="screen settings-screen ${state.screen === "settings" ? "is-active" : ""}">
      <div class="screen-title"><h1>הגדרות</h1><p>הלוח פועל מקומית · גרסה 0.4</p></div>
      <div class="settings-grid">
        <article class="setting-card">
          <div class="section-title"><h2>חיבור ואבטחה</h2><span>מקומי</span></div>
          ${settingsRow("מקומי בלבד", "בלי ענן, בלי גישה מרחוק", "פעיל")}
          ${settingsRow("Home Assistant", "חיבור API מקומי · בגרסה עתידית", "בהמשך")}
          ${settingsToggle("אזהרת התנתקות", "באנר כשרכזת מפסיקה להגיב", "offlineWarn")}
        </article>
        <article class="setting-card">
          <div class="section-title"><h2>תצוגת iPad</h2><span>${state.kiosk ? "נקייה" : "רגילה"}</span></div>
          ${settingsToggle("מצב קיוסק", "כפתורי ניהול פחות דומיננטיים", "kiosk")}
          ${settingsToggle("עמעום לילה", "מוריד בהירות בשעות מאוחרות", "nightDim")}
          ${settingsToggle("חזרה אוטומטית", "אחרי 60 שניות ללא נגיעה", "autoReturn")}
        </article>
        <article class="setting-card">
          <div class="section-title"><h2>מראה</h2><span>${state.theme === "dark" ? "גרפיט כהה" : "שנהב בהיר"}</span></div>
          <div class="swatch-list">${swatches.map((color) => `<button class="swatch ${state.accent === color ? "is-active" : ""}" style="--swatch:${color}" data-action="accent" data-accent="${color}"></button>`).join("")}</div>
          <div class="chip-row" style="margin-top:20px">
            <button class="tab-button ${state.theme === "light" ? "is-active" : ""}" data-action="theme" data-theme="light">בהיר</button>
            <button class="tab-button ${state.theme === "dark" ? "is-active" : ""}" data-action="theme" data-theme="dark">כהה</button>
          </div>
        </article>
        <article class="setting-card">
          <div class="section-title"><h2>שפה ומכשירים</h2><span>עברית RTL</span></div>
          ${settingsRow("שפת הממשק", "עברית · כתיבה מימין לשמאל", "פעיל")}
          ${settingsRow("רשימת מכשירים", "תגיע בהמשך ותמופה ל-Home Assistant", "פתוח")}
          <button class="button primary" data-action="open-add">${icon.plus}<span>הוספת מכשיר</span></button>
        </article>
      </div>
    </section>
  `;
}

function settingsRow(title, subtitle, badge) {
  return `<div class="settings-row"><div><strong>${title}</strong><small>${subtitle}</small></div><span class="chip active">${badge}</span></div>`;
}

function settingsToggle(title, subtitle, key) {
  return `
    <div class="settings-row">
      <div><strong>${title}</strong><small>${subtitle}</small></div>
      <button class="toggle ${state[key] ? "is-on" : ""}" data-action="toggle-setting" data-key="${key}"><span></span></button>
    </div>
  `;
}

function renderAddDrawer() {
  const selectedType = deviceTypes.find((type) => type.name === state.addType) || deviceTypes[0];
  const addRoomName = getRoomName(state.addRoom);
  const deviceLabel = state.addName || `${state.addType} ב${addRoomName}`;
  const summary = `${deviceLabel} · ${addRoomName} · ${state.source}`;

  return `
    <aside class="drawer" aria-label="הוספת מכשיר">
      <header class="drawer-head">
        <div><h2>הוספת מכשיר</h2><p>שלב ${state.addStep} מתוך 2 · ${state.addStep === 1 ? "סוג וחדר" : "שם וחיבור"}</p></div>
        <div class="top-spacer"></div>
        <div class="step-dots"><span class="active"></span><span class="${state.addStep === 2 ? "active" : ""}"></span></div>
        <button class="icon-button" data-action="close-panel" aria-label="סגור">${icon.close}</button>
      </header>
      <div class="drawer-body">
        ${
          state.addStep === 1
            ? `
              <div>
                <div class="section-title"><h2>סוג מכשיר</h2><span>שלד להגדרה</span></div>
                <div class="choice-grid">${deviceTypes.map((type) => `<button class="choice-tile ${state.addType === type.name ? "is-active" : ""}" data-action="add-type" data-type="${type.name}">${type.icon}<span>${type.name}</span></button>`).join("")}</div>
              </div>
              <div>
                <div class="section-title"><h2>חדר</h2><span>אפשר לשנות בהמשך</span></div>
                <div class="choice-grid rooms">${rooms.map((room) => `<button class="choice-tile ${state.addRoom === room.key ? "is-active" : ""}" data-action="add-room" data-room-key="${room.key}">${getRoomName(room.key)}</button>`).join("")}</div>
              </div>
            `
            : `
              <label class="field">
                <span>שם מכשיר</span>
                <input value="${escapeHtml(state.addName)}" placeholder="${state.addType} ב${addRoomName}" data-action="add-name">
              </label>
              <article class="drawer-card" style="padding:15px 17px">
                <div class="device-head">
                  <span class="device-icon">${selectedType.icon}</span>
                  <div class="device-copy"><h3>${deviceLabel}</h3><p>${summary}</p></div>
                </div>
              </article>
              <div class="source-list">
                ${sources
                  .map(
                    (source) => `
                      <button class="source-row ${state.source === source.name ? "is-active" : ""} ${source.badge === "בהמשך" ? "is-future" : ""}" data-action="source" data-source="${source.name}">
                        <span><strong>${source.name}</strong><small>${source.note}</small></span>
                        <span class="chip">${source.badge}</span>
                      </button>
                    `
                  )
                  .join("")}
              </div>
            `
        }
      </div>
      <footer class="drawer-footer">
        <button class="button" data-action="${state.addStep === 1 ? "close-panel" : "add-back"}">${state.addStep === 1 ? "ביטול" : "חזרה"}</button>
        <button class="button primary" data-action="${state.addStep === 1 ? "add-next" : "submit-add"}">${state.addStep === 1 ? "המשך" : "הוסף לממשק"}</button>
      </footer>
    </aside>
  `;
}

function renderCustomizeDrawer() {
  return `
    <aside class="drawer" aria-label="התאמה אישית">
      <header class="drawer-head">
        <div><h2>התאמה אישית</h2><p>השינויים חלים על הלוח מיד</p></div>
        <div class="top-spacer"></div>
        <button class="icon-button" data-action="close-panel" aria-label="סגור">${icon.close}</button>
      </header>
      <div class="drawer-body">
        <div class="drawer-tabs">
          ${["אריחים", "מראה", "לוח"].map((tab) => `<button class="tab-button ${state.customTab === tab ? "is-active" : ""}" data-action="custom-tab" data-tab="${tab}">${tab}</button>`).join("")}
        </div>
        ${state.customTab === "אריחים" ? renderWidgetControls() : ""}
        ${state.customTab === "מראה" ? renderAppearanceControls() : ""}
        ${state.customTab === "לוח" ? renderPanelControls() : ""}
      </div>
      <footer class="drawer-footer">
        <button class="button" data-action="reset-layout">איפוס</button>
        <button class="button primary" data-action="close-panel">סיום</button>
      </footer>
    </aside>
  `;
}

function renderWidgetControls() {
  return `
    <div class="source-list">
      ${state.widgets
        .map(
          (widget) => `
            <div class="source-row">
              <span><strong>${widget.name}</strong><small>${widget.meta}</small></span>
              <button class="button soft" data-action="widget-up" data-key="${widget.key}">${icon.up}</button>
              <button class="button soft" data-action="widget-down" data-key="${widget.key}">${icon.down}</button>
              <button class="toggle ${widget.on ? "is-on" : ""}" data-action="toggle-widget" data-key="${widget.key}"><span></span></button>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderAppearanceControls() {
  return `
    <div>
      <div class="section-title"><h2>צבע מוביל</h2><span>Accent</span></div>
      <div class="swatch-list">${swatches.map((color) => `<button class="swatch ${state.accent === color ? "is-active" : ""}" style="--swatch:${color}" data-action="accent" data-accent="${color}"></button>`).join("")}</div>
    </div>
    <div>
      <div class="section-title"><h2>מצב תצוגה</h2><span>${state.theme === "dark" ? "גרפיט כהה" : "שנהב בהיר"}</span></div>
      <div class="chip-row">
        <button class="tab-button ${state.theme === "light" ? "is-active" : ""}" data-action="theme" data-theme="light">בהיר</button>
        <button class="tab-button ${state.theme === "dark" ? "is-active" : ""}" data-action="theme" data-theme="dark">כהה</button>
      </div>
    </div>
  `;
}

function renderPanelControls() {
  return `
    <div class="source-list">
      ${drawerToggle("מצב קיוסק", "מצב נקי יותר לשימוש יומיומי", "kiosk")}
      ${drawerToggle("אזהרת התנתקות", "מציגה פס אזהרה כשהרכזת לא זמינה", "offlineWarn")}
      ${drawerToggle("כיבוי הכל", "מציג פעולה מהירה בסצנות", "showAllOff")}
      ${drawerToggle("חזרה אוטומטית", "חוזר ללוח שליטה אחרי 60 שניות", "autoReturn")}
      ${drawerToggle("עמעום לילה", "מכין מצב כהה לשעות מאוחרות", "nightDim")}
    </div>
  `;
}

function drawerToggle(title, subtitle, key) {
  return `
    <div class="source-row">
      <span><strong>${title}</strong><small>${subtitle}</small></span>
      <button class="toggle ${state[key] ? "is-on" : ""}" data-action="toggle-setting" data-key="${key}"><span></span></button>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
}

function handleClick(event) {
  const control = event.target.closest("[data-action]");
  if (!control) return;
  const action = control.dataset.action;

  if (action === "go") setState({ screen: control.dataset.screen });
  if (action === "mode") setState({ mode: control.dataset.mode });
  if (action === "scene") setState({ scene: control.dataset.scene });
  if (action === "room") setState({ screen: "rooms", room: control.dataset.room, tab: "הכל", editingRoom: null });
  if (action === "tab") setState({ tab: control.dataset.tab });
  if (action === "select-scene") setState({ selectedScene: control.dataset.scene });
  if (action === "run-selected-scene") setState({ scene: state.selectedScene, screen: "dash" });
  if (action === "open-add") setState({ panel: "add", addStep: 1, addRoom: state.room });
  if (action === "open-custom") setState({ panel: "custom" });
  if (action === "close-panel") setState({ panel: null, addStep: 1 });
  if (action === "add-next") setState({ addStep: 2 });
  if (action === "add-back") setState({ addStep: 1 });
  if (action === "add-type") setState({ addType: control.dataset.type });
  if (action === "add-room") setState({ addRoom: control.dataset.roomKey });
  if (action === "source") setState({ source: control.dataset.source });
  if (action === "custom-tab") setState({ customTab: control.dataset.tab });
  if (action === "start-room-edit") setState({ editingRoom: state.room, roomDraft: getRoomName(state.room) });
  if (action === "cancel-room-edit") setState({ editingRoom: null, roomDraft: "" });
  if (action === "save-room-name") saveRoomName();
  if (action === "theme") setState({ theme: control.dataset.theme, accent: control.dataset.theme === "dark" && state.accent === "#2f6b44" ? "#d99b3e" : state.accent });
  if (action === "accent") setState({ accent: control.dataset.accent });
  if (action === "dismiss-alert") setState({ alert: false });
  if (action === "retry-alert") setState({ alert: true });
  if (action === "all-room-off") turnRoomOff();
  if (action === "reset-layout") setState({ widgets: cloneBase().widgets, theme: "light", accent: "#2f6b44", customTab: "אריחים" });
  if (action === "submit-add") addDevice();
  if (action === "toggle-device") toggleDevice(Number(control.dataset.id));
  if (action === "temp-up") changeDeviceTemp(Number(control.dataset.id), 1);
  if (action === "temp-down") changeDeviceTemp(Number(control.dataset.id), -1);
  if (action === "ac-mode") patchDevice(Number(control.dataset.id), { acMode: control.dataset.mode });
  if (action === "toggle-setting") toggleSetting(control.dataset.key);
  if (action === "toggle-widget") toggleWidget(control.dataset.key);
  if (action === "widget-up") moveWidget(control.dataset.key, -1);
  if (action === "widget-down") moveWidget(control.dataset.key, 1);
}

function handleInput(event) {
  const control = event.target.closest("[data-action]");
  if (!control) return;
  if (control.dataset.action === "brightness") {
    patchDevice(Number(control.dataset.id), { brightness: Number(control.value), on: Number(control.value) > 0 });
  }
  if (control.dataset.action === "add-name") {
    state.addName = control.value;
    persist();
  }
  if (control.dataset.action === "room-name-input") {
    state.roomDraft = control.value;
    persist();
  }
}

function saveRoomName() {
  if (!state.editingRoom) return;
  const defaultName = rooms.find((room) => room.key === state.editingRoom)?.name || "חדר";
  const nextName = state.roomDraft.trim() || defaultName;
  setState({
    roomNames: { ...state.roomNames, [state.editingRoom]: nextName },
    editingRoom: null,
    roomDraft: ""
  });
}

function toggleDevice(id) {
  const device = allDevices().find((item) => item.id === id);
  if (device) patchDevice(id, { on: !device.on });
}

function changeDeviceTemp(id, delta) {
  const device = allDevices().find((item) => item.id === id);
  if (device) patchDevice(id, { temp: Math.min(30, Math.max(16, device.temp + delta)), on: true });
}

function toggleSetting(key) {
  if (!Object.prototype.hasOwnProperty.call(state, key)) return;
  setState({ [key]: !state[key] });
}

function toggleWidget(key) {
  const widgets = state.widgets.map((widget) => (widget.key === key ? { ...widget, on: !widget.on } : widget));
  setState({ widgets });
}

function turnRoomOff() {
  const next = { ...state.devices };
  next[state.room] = (next[state.room] || []).map((device) => ({ ...device, on: false }));
  setState({ devices: next });
}

function addDevice() {
  const selectedType = deviceTypes.find((type) => type.name === state.addType) || deviceTypes[0];
  const roomKey = state.addRoom;
  const roomName = getRoomName(roomKey);
  const next = { ...state.devices };
  const newDevice = {
    id: Date.now(),
    name: state.addName || `${state.addType} ב${roomName}`,
    type: selectedType.type,
    connected: false,
    on: false,
    brightness: 50,
    temp: 24,
    acMode: "קירור",
    fan: "אוטו",
    watts: 0,
    reading: "—",
    readingLabel: "אין נתונים",
    span: selectedType.type === "ac" ? 2 : 1
  };
  next[roomKey] = (next[roomKey] || []).concat(newDevice);
  setState({ devices: next, panel: null, addStep: 1, screen: "rooms", room: roomKey, tab: "הכל", addName: "" });
}

window.addEventListener("resize", resizePanel);
document.addEventListener("click", handleClick);
document.addEventListener("input", handleInput);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.panel) setState({ panel: null, addStep: 1 });
  if (event.key === "Escape" && state.editingRoom) setState({ editingRoom: null, roomDraft: "" });
  if (event.key === "Enter" && state.editingRoom && event.target?.dataset?.action === "room-name-input") saveRoomName();
});

resizePanel();
render();
setInterval(render, 30000);
