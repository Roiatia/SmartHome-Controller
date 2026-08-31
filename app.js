const STORAGE_KEY = "homecontrol-ui-state-v1";

const icons = {
  dashboard: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="8" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="15" width="7" height="6" rx="1.5"/></svg>',
  rooms: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 10.5 12 4l8 6.5"/><path d="M6 9.5V20h12V9.5"/><path d="M10 20v-6h4v6"/></svg>',
  scenes: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 6h14"/><path d="M5 12h14"/><path d="M5 18h14"/><circle cx="8" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="10" cy="18" r="2"/></svg>',
  climate: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v18"/><path d="m5 7 14 10"/><path d="m19 7-14 10"/><circle cx="12" cy="12" r="2.5"/></svg>',
  settings: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16"/><path d="M4 17h16"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="17" r="2"/></svg>',
  moon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 15.5A8.3 8.3 0 0 1 8.5 4 8.6 8.6 0 1 0 20 15.5Z"/></svg>',
  sun: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
  sliders: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h10"/><path d="M18 6h2"/><path d="M4 12h3"/><path d="M11 12h9"/><path d="M4 18h12"/><path d="M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="18" cy="18" r="2"/></svg>',
  plus: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',
  minus: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M5 12h14"/></svg>',
  warning: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 4 3 20h18L12 4Z"/><path d="M12 9v5"/><path d="M12 17h.01"/></svg>',
  edit: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"/></svg>',
  temperature: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 14.76V5a4 4 0 0 0-8 0v9.76A5 5 0 1 0 14 14.76Z"/><path d="M10 7v8"/></svg>',
  light: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M8.3 14.5A6 6 0 1 1 15.7 14.5c-.8.6-1.2 1.5-1.2 2.5h-5c0-1-.4-1.9-1.2-2.5Z"/></svg>',
  power: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v8"/><path d="M7.1 6.4a8 8 0 1 0 9.8 0"/></svg>',
  shield: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
  close: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  plug: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 7v5a5 5 0 0 0 10 0V7"/><path d="M9 3v4"/><path d="M15 3v4"/><path d="M12 17v4"/></svg>',
  sensor: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 12h.01"/><path d="M16.2 7.8a6 6 0 0 1 0 8.4"/><path d="M7.8 16.2a6 6 0 0 1 0-8.4"/><path d="M19 5a10 10 0 0 1 0 14"/><path d="M5 19A10 10 0 0 1 5 5"/></svg>'
};

const defaultState = {
  view: "overview",
  theme: "light",
  accent: "#567d68",
  houseMode: "home",
  selectedRoom: "living",
  targetTemp: 23,
  climateMode: "cool",
  offline: false,
  widgets: [
    { id: "favorite", title: "מועדפים", type: "favorites", enabled: true },
    { id: "energy", title: "צריכה היום", type: "energy", enabled: true },
    { id: "climate", title: "אקלים", type: "climate", enabled: true },
    { id: "security", title: "אבטחה", type: "security", enabled: true },
    { id: "activity", title: "פעילות אחרונה", type: "activity", enabled: true }
  ],
  rooms: [
    { id: "living", name: "סלון" },
    { id: "kitchen", name: "מטבח" },
    { id: "bedroom", name: "חדר שינה" },
    { id: "office", name: "עבודה" }
  ],
  devices: [
    { id: "d1", name: "תאורת סלון מרכזית", room: "living", type: "light", on: true, level: 72, source: "demo" },
    { id: "d2", name: "מזגן סלון", room: "living", type: "climate", on: true, level: 23, source: "demo" },
    { id: "d3", name: "שקע טלוויזיה", room: "living", type: "plug", on: false, level: 0, source: "demo" },
    { id: "d4", name: "פס לד אי מטבח", room: "kitchen", type: "light", on: true, level: 48, source: "demo" },
    { id: "d5", name: "מזגן חדר שינה", room: "bedroom", type: "climate", on: false, level: 24, source: "demo" },
    { id: "d6", name: "חיישן תנועה עבודה", room: "office", type: "sensor", on: true, level: 1, source: "demo" }
  ],
  scenes: [
    { id: "morning", name: "בוקר", detail: "אור חם, מזגן עדין", devices: ["סלון", "מטבח"] },
    { id: "movie", name: "סרט", detail: "עמעום תאורה, שקע טלוויזיה", devices: ["סלון"] },
    { id: "night", name: "לילה", detail: "כיבוי כללי, מזגן חדר שינה", devices: ["בית", "חדר שינה"] },
    { id: "away", name: "יציאה", detail: "כיבוי וסטטוס אבטחה", devices: ["כל הבית"] },
    { id: "alloff", name: "הכל כבוי", detail: "כיבוי כל המכשירים", devices: ["כל הבית"] }
  ]
};

const modeLabels = {
  home: "בית פעיל",
  quiet: "שקט",
  away: "מחוץ לבית",
  night: "לילה"
};

const climateModes = [
  ["cool", "קירור"],
  ["heat", "חימום"],
  ["fan", "אוורור"],
  ["off", "כבוי"]
];

const accentOptions = ["#567d68", "#7d6a43", "#3f6e76", "#815b59", "#6c7355"];

const viewCopy = {
  overview: ["לוח שליטה", "תצוגת הבית הראשית, מוכנה לחיבור מכשירים אמיתיים בהמשך."],
  rooms: ["חדרים ומכשירים", "שליטה ישירה בכל מכשיר לפי חדר, כולל עוצמה ומצב."],
  scenes: ["סצנות", "תרחישים קבועים להפעלה מהירה של כמה מכשירים יחד."],
  climate: ["אקלים", "שליטה מרוכזת במזגנים ובטמפרטורת היעד."],
  settings: ["הגדרות", "התאמת צבעים, מצב iPad והתראות ממשק."]
};

let state = loadState();
let draggedWidgetId = null;

function cloneDefaultState() {
  return JSON.parse(JSON.stringify(defaultState));
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return cloneDefaultState();
  try {
    return { ...cloneDefaultState(), ...JSON.parse(saved) };
  } catch {
    return cloneDefaultState();
  }
}

function createId() {
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return `device-${Date.now()}-${Math.round(Math.random() * 100000)}`;
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setState(patch) {
  state = { ...state, ...patch };
  persist();
  render();
}

function deviceIcon(type) {
  if (type === "light") return icons.light;
  if (type === "climate") return icons.climate;
  if (type === "sensor") return icons.sensor;
  if (type === "plug") return icons.plug;
  return icons.power;
}

function renderIcons(scope = document) {
  scope.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = icons[node.dataset.icon] || "";
  });
}

function updateClock() {
  const now = new Date();
  document.getElementById("clockTime").textContent = now.toLocaleTimeString("he-IL", {
    hour: "2-digit",
    minute: "2-digit"
  });
  document.getElementById("clockDate").textContent = now.toLocaleDateString("he-IL", {
    weekday: "short",
    day: "numeric",
    month: "short"
  });
}

function renderNavigation() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === state.view);
  });

  document.querySelectorAll("[data-panel]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.panel === state.view);
  });

  const copy = viewCopy[state.view];
  document.getElementById("viewTitle").textContent = copy[0];
  document.getElementById("viewSubtitle").textContent = copy[1];
}

function renderShell() {
  document.documentElement.dataset.theme = state.theme;
  document.documentElement.style.setProperty("--accent", state.accent);
  document.getElementById("themeToggle").innerHTML = state.theme === "dark" ? icons.sun : icons.moon;
  document.getElementById("offlineAlert").hidden = !state.offline;
}

function renderModes() {
  const host = document.getElementById("houseModes");
  host.innerHTML = Object.entries(modeLabels)
    .map(([id, label]) => `<button class="${state.houseMode === id ? "is-active" : ""}" data-mode="${id}">${label}</button>`)
    .join("");
  document.getElementById("houseModeLabel").textContent = modeLabels[state.houseMode];
}

function renderMetrics() {
  const lightsOn = state.devices.filter((device) => device.type === "light" && device.on).length;
  const activeDevices = state.devices.filter((device) => device.on).length;
  const climateDevices = state.devices.filter((device) => device.type === "climate");
  const averageTemp =
    climateDevices.length > 0
      ? (climateDevices.reduce((sum, device) => sum + Number(device.level || state.targetTemp), 0) / climateDevices.length).toFixed(1)
      : state.targetTemp.toFixed(1);

  document.getElementById("lightsOn").textContent = lightsOn;
  document.getElementById("activeDevices").textContent = activeDevices;
  document.getElementById("avgTemp").textContent = averageTemp;
}

function renderScenes() {
  const quickScenes = document.getElementById("quickScenes");
  quickScenes.innerHTML = state.scenes
    .map(
      (scene) => `
        <button class="scene-card" data-scene="${scene.id}">
          <span>${scene.detail}</span>
          <strong>${scene.name}</strong>
        </button>
      `
    )
    .join("");

  const manager = document.getElementById("sceneManager");
  manager.innerHTML = state.scenes
    .map(
      (scene) => `
        <article class="scene-manager-card">
          <div>
            <p class="section-label">סצנה</p>
            <h3>${scene.name}</h3>
            <p>${scene.detail}</p>
          </div>
          <div class="scene-devices">
            ${scene.devices.map((item) => `<span class="state-chip">${item}</span>`).join("")}
          </div>
          <button class="icon-text-button" data-scene="${scene.id}">
            <span data-icon="power"></span>
            <span>הפעל</span>
          </button>
        </article>
      `
    )
    .join("");
}

function renderWidgets() {
  const grid = document.getElementById("widgetGrid");
  const enabled = state.widgets.filter((widget) => widget.enabled);

  if (!enabled.length) {
    grid.innerHTML = '<div class="empty-state">אין ווידג׳טים פעילים. פתח התאמה אישית כדי להחזיר אותם למסך.</div>';
    return;
  }

  grid.innerHTML = enabled.map(renderWidget).join("");
}

function renderWidget(widget) {
  const active = state.devices.filter((device) => device.on).length;
  const lights = state.devices.filter((device) => device.type === "light");
  const lightAverage = lights.length ? Math.round(lights.reduce((sum, device) => sum + device.level, 0) / lights.length) : 0;
  const currentClimate = climateModes.find(([id]) => id === state.climateMode);
  const climateLabel = currentClimate ? currentClimate[1] : "קירור";

  const templates = {
    favorites: `
      <article class="widget-card widget-card--wide" draggable="true" data-widget-id="${widget.id}">
        <div><p class="section-label">מועדפים</p><h3>פעולות שימושיות</h3><p>סלון, מטבח וחדר שינה זמינים לשליטה מהירה.</p></div>
        <div class="scene-devices">
          <button class="state-chip is-on" data-room-shortcut="living">סלון</button>
          <button class="state-chip" data-room-shortcut="kitchen">מטבח</button>
          <button class="state-chip" data-room-shortcut="bedroom">חדר שינה</button>
        </div>
      </article>
    `,
    energy: `
      <article class="widget-card" draggable="true" data-widget-id="${widget.id}">
        <div><p class="section-label">אנרגיה</p><h3>צריכה מוערכת</h3></div>
        <strong class="widget-value">3.7 kWh</strong>
        <div class="progress-track"><span style="--value: 47%"></span></div>
      </article>
    `,
    climate: `
      <article class="widget-card" draggable="true" data-widget-id="${widget.id}">
        <div><p class="section-label">אקלים</p><h3>${state.targetTemp} מעלות יעד</h3><p>${climateLabel}</p></div>
        <strong class="widget-value">${state.targetTemp}.0</strong>
      </article>
    `,
    security: `
      <article class="widget-card" draggable="true" data-widget-id="${widget.id}">
        <div><p class="section-label">אבטחה</p><h3>רשת מקומית</h3><p>אין חשיפה חיצונית מתוכננת בשלב זה.</p></div>
        <span class="state-chip is-on">מאובטח</span>
      </article>
    `,
    activity: `
      <article class="widget-card widget-card--wide" draggable="true" data-widget-id="${widget.id}">
        <div><p class="section-label">פעילות</p><h3>${active} מכשירים פעילים</h3><p>עוצמת תאורה ממוצעת ${lightAverage}% בחדרים הפעילים.</p></div>
        <div class="progress-track"><span style="--value: ${lightAverage}%"></span></div>
      </article>
    `
  };

  return templates[widget.type] || "";
}

function renderRooms() {
  const roomList = document.getElementById("roomList");
  roomList.innerHTML = state.rooms
    .map((room) => {
      const roomDevices = state.devices.filter((device) => device.room === room.id);
      return `
        <button class="room-button ${state.selectedRoom === room.id ? "is-active" : ""}" data-room="${room.id}">
          <span>${room.name}</span>
          <small>${roomDevices.length} מכשירים</small>
        </button>
      `;
    })
    .join("");

  const selected = state.rooms.find((room) => room.id === state.selectedRoom) || state.rooms[0];
  const devices = state.devices.filter((device) => device.room === selected.id);
  document.getElementById("roomTitle").textContent = selected.name;
  document.getElementById("roomMeta").textContent = `${devices.length} מכשירים בממשק, ${devices.filter((device) => device.on).length} פעילים כרגע.`;

  document.getElementById("roomSelect").innerHTML = state.rooms
    .map((room) => `<option value="${room.id}">${room.name}</option>`)
    .join("");

  const grid = document.getElementById("deviceGrid");
  grid.innerHTML = devices.length
    ? devices.map(renderDeviceCard).join("")
    : '<div class="empty-state">אין עדיין מכשירים בחדר הזה. אפשר להוסיף אחד דרך כפתור מכשיר חדש.</div>';
}

function renderDeviceCard(device) {
  const canDim = device.type === "light" || device.type === "climate";
  const levelLabel = device.type === "climate" ? `${device.level} מעלות` : `${device.level}%`;

  return `
    <article class="device-card">
      <div class="device-card__top">
        <span class="device-icon">${deviceIcon(device.type)}</span>
        <span class="state-chip ${device.on ? "is-on" : ""}">${device.on ? "פעיל" : "כבוי"}</span>
      </div>
      <div>
        <h3>${device.name}</h3>
        <p>${device.source === "demo" ? "נתוני דמו, מיועד לחיבור עתידי" : "נוסף מהממשק"}</p>
      </div>
      ${
        canDim
          ? `<label class="range-control">
              <span>${levelLabel}</span>
              <input type="range" min="${device.type === "climate" ? 16 : 0}" max="${device.type === "climate" ? 30 : 100}" value="${device.level}" data-level="${device.id}" />
            </label>`
          : `<p>סטטוס: ${device.type === "sensor" ? "זוהתה תנועה אחרונה לפני 8 דקות" : "שקע מוכן להפעלה"}</p>`
      }
      <div class="device-card__actions">
        <label class="switch">
          <input type="checkbox" ${device.on ? "checked" : ""} data-device-toggle="${device.id}" />
          <span></span>
        </label>
        <button class="subtle-button" data-device-edit="${device.id}">
          <span data-icon="sliders"></span>
          <span>כוונון</span>
        </button>
      </div>
    </article>
  `;
}

function renderClimate() {
  document.getElementById("targetTemp").textContent = state.targetTemp;
  const modeHost = document.getElementById("climateModes");
  modeHost.innerHTML = climateModes
    .map(([id, label]) => `<button class="${state.climateMode === id ? "is-active" : ""}" data-climate-mode="${id}">${label}</button>`)
    .join("");

  const climates = state.devices.filter((device) => device.type === "climate");
  document.getElementById("climateDevices").innerHTML =
    '<p class="section-label">מזגנים</p>' +
    climates
      .map(
        (device) => `
          <div class="climate-device-row">
            <div>
              <strong>${device.name}</strong>
              <p>${device.on ? "פעיל" : "כבוי"} · ${device.level} מעלות</p>
            </div>
            <label class="switch">
              <input type="checkbox" ${device.on ? "checked" : ""} data-device-toggle="${device.id}" />
              <span></span>
            </label>
          </div>
        `
      )
      .join("");
}

function renderSettings() {
  renderSwatches(document.getElementById("accentSwatches"));
  renderSwatches(document.getElementById("panelSwatches"));
  document.getElementById("offlineToggle").checked = state.offline;
}

function renderSwatches(host) {
  host.innerHTML = accentOptions
    .map(
      (accent) => `
        <button class="swatch ${state.accent === accent ? "is-active" : ""}" style="--swatch: ${accent}" data-accent="${accent}" aria-label="בחירת צבע"></button>
      `
    )
    .join("");
}

function renderWidgetToggles() {
  document.getElementById("widgetToggles").innerHTML = state.widgets
    .map(
      (widget) => `
        <div class="toggle-item">
          <span>${widget.title}</span>
          <label class="switch">
            <input type="checkbox" ${widget.enabled ? "checked" : ""} data-widget-toggle="${widget.id}" />
            <span></span>
          </label>
        </div>
      `
    )
    .join("");
}

function render() {
  renderShell();
  renderNavigation();
  renderModes();
  renderMetrics();
  renderScenes();
  renderWidgets();
  renderRooms();
  renderClimate();
  renderSettings();
  renderWidgetToggles();
  renderIcons();
}

function openModal() {
  document.getElementById("modalBackdrop").hidden = false;
  document.getElementById("deviceModal").hidden = false;
  document.querySelector("#deviceForm input[name='name']").focus();
}

function closeModal() {
  document.getElementById("modalBackdrop").hidden = true;
  document.getElementById("deviceModal").hidden = true;
  document.getElementById("deviceForm").reset();
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const viewButton = event.target.closest("[data-view]");
    if (viewButton) setState({ view: viewButton.dataset.view });

    const modeButton = event.target.closest("[data-mode]");
    if (modeButton) setState({ houseMode: modeButton.dataset.mode });

    const roomButton = event.target.closest("[data-room]");
    if (roomButton) setState({ selectedRoom: roomButton.dataset.room, view: "rooms" });

    const sceneButton = event.target.closest("[data-scene]");
    if (sceneButton) {
      sceneButton.classList.add("is-running");
      setTimeout(() => sceneButton.classList.remove("is-running"), 1500);
    }

    const accentButton = event.target.closest("[data-accent]");
    if (accentButton) setState({ accent: accentButton.dataset.accent });

    const shortcut = event.target.closest("[data-room-shortcut]");
    if (shortcut) setState({ selectedRoom: shortcut.dataset.roomShortcut, view: "rooms" });

    const climateButton = event.target.closest("[data-climate-mode]");
    if (climateButton) setState({ climateMode: climateButton.dataset.climateMode });
  });

  document.addEventListener("change", (event) => {
    const deviceToggle = event.target.closest("[data-device-toggle]");
    if (deviceToggle) {
      state.devices = state.devices.map((device) =>
        device.id === deviceToggle.dataset.deviceToggle ? { ...device, on: deviceToggle.checked } : device
      );
      persist();
      render();
    }

    const widgetToggle = event.target.closest("[data-widget-toggle]");
    if (widgetToggle) {
      state.widgets = state.widgets.map((widget) =>
        widget.id === widgetToggle.dataset.widgetToggle ? { ...widget, enabled: widgetToggle.checked } : widget
      );
      persist();
      render();
    }

    if (event.target.id === "offlineToggle") setState({ offline: event.target.checked });
  });

  document.addEventListener("input", (event) => {
    const levelInput = event.target.closest("[data-level]");
    if (levelInput) {
      state.devices = state.devices.map((device) =>
        device.id === levelInput.dataset.level ? { ...device, level: Number(levelInput.value) } : device
      );
      persist();
      renderMetrics();
      renderWidgets();
    }
  });

  document.addEventListener("dragstart", (event) => {
    const card = event.target.closest("[data-widget-id]");
    if (!card) return;
    draggedWidgetId = card.dataset.widgetId;
    card.classList.add("is-dragging");
  });

  document.addEventListener("dragend", (event) => {
    const card = event.target.closest("[data-widget-id]");
    if (card) card.classList.remove("is-dragging");
    draggedWidgetId = null;
  });

  document.addEventListener("dragover", (event) => {
    const card = event.target.closest("[data-widget-id]");
    if (!card || !draggedWidgetId || card.dataset.widgetId === draggedWidgetId) return;
    event.preventDefault();
  });

  document.addEventListener("drop", (event) => {
    const card = event.target.closest("[data-widget-id]");
    if (!card || !draggedWidgetId || card.dataset.widgetId === draggedWidgetId) return;

    const from = state.widgets.findIndex((widget) => widget.id === draggedWidgetId);
    const to = state.widgets.findIndex((widget) => widget.id === card.dataset.widgetId);
    const next = [...state.widgets];
    const moved = next.splice(from, 1)[0];
    next.splice(to, 0, moved);
    state.widgets = next;
    persist();
    render();
  });

  document.getElementById("themeToggle").addEventListener("click", () => {
    setState({ theme: state.theme === "dark" ? "light" : "dark" });
  });

  document.getElementById("openCustomize").addEventListener("click", () => {
    document.getElementById("customizerPanel").classList.add("is-open");
    document.getElementById("customizerPanel").setAttribute("aria-hidden", "false");
  });

  document.getElementById("closeCustomize").addEventListener("click", () => {
    document.getElementById("customizerPanel").classList.remove("is-open");
    document.getElementById("customizerPanel").setAttribute("aria-hidden", "true");
  });

  document.getElementById("openAddDevice").addEventListener("click", openModal);
  document.getElementById("addRoomDevice").addEventListener("click", openModal);
  document.getElementById("closeDeviceModal").addEventListener("click", closeModal);
  document.getElementById("cancelDevice").addEventListener("click", closeModal);
  document.getElementById("modalBackdrop").addEventListener("click", closeModal);

  document.getElementById("tempDown").addEventListener("click", () => {
    setState({ targetTemp: Math.max(16, state.targetTemp - 1) });
  });

  document.getElementById("tempUp").addEventListener("click", () => {
    setState({ targetTemp: Math.min(30, state.targetTemp + 1) });
  });

  document.getElementById("deviceForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const type = form.get("type");
    const initialLevel = type === "climate" ? state.targetTemp : type === "light" ? 65 : 1;
    const device = {
      id: createId(),
      name: String(form.get("name")),
      type,
      room: String(form.get("room")),
      source: String(form.get("source")),
      on: true,
      level: initialLevel
    };

    state.devices = [...state.devices, device];
    state.selectedRoom = device.room;
    state.view = "rooms";
    persist();
    closeModal();
    render();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
      document.getElementById("customizerPanel").classList.remove("is-open");
      document.getElementById("customizerPanel").setAttribute("aria-hidden", "true");
    }
  });
}

bindEvents();
render();
updateClock();
setInterval(updateClock, 1000);
