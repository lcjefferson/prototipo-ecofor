document.addEventListener("ecofor:ready", () => {
  const listEl = document.getElementById("eco-list");
  if (!listEl || typeof L === "undefined") return;

  const points = ECOFOR.points.map((point) => ({ ...point }));
  let filter = "all";
  let selected = "coco";
  let user = null;

  const map = L.map("map", { zoomControl: true }).setView([-3.77, -38.5], 12);
  L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
    attribution: "Tiles &copy; Esri",
    maxZoom: 19
  }).addTo(map);
  map.zoomControl.setPosition("topright");

  const recycle = `<span class="pin-symbol" aria-hidden="true">♻</span>`;
  const markers = {};
  points.forEach((point) => {
    const icon = L.divIcon({
      className: "",
      html: `<div class="pin-bubble${point.closed ? " closed" : ""}">${recycle}</div>`,
      iconSize: [42, 42],
      iconAnchor: [21, 21],
      popupAnchor: [0, -18]
    });
    const marker = L.marker([point.lat, point.lng], { icon }).addTo(map);
    marker.bindPopup(popupHTML(point));
    marker.on("click", () => select(point.id, false));
    markers[point.id] = marker;
  });

  function isOpen(point) {
    if (point.closed) return false;
    const now = new Date();
    const day = now.getDay();
    if (day === 0) return false;
    const mins = now.getHours() * 60 + now.getMinutes();
    return (mins >= 8 * 60 && mins < 12 * 60) || (mins >= 13 * 60 && mins < 17 * 60);
  }

  function distance(point) {
    const origin = user || { lat: -3.732, lng: -38.51 };
    const R = 6371;
    const dLat = (point.lat - origin.lat) * Math.PI / 180;
    const dLng = (point.lng - origin.lng) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(origin.lat * Math.PI / 180) * Math.cos(point.lat * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function popupHTML(point) {
    const dest = encodeURIComponent(`${point.lat},${point.lng}`);
    return `<div class="eco-pop"><img src="${point.img}" alt=""><div><strong>${point.name}</strong><span>${point.address}</span><a target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${dest}">${ECO.t("eco.route")}</a></div></div>`;
  }

  function visiblePoints() {
    const q = (document.getElementById("eco-q").value || "").trim().toLowerCase();
    let rows = points.filter((point) => {
      const blob = `${point.name} ${point.address} ${point.neighborhood}`.toLowerCase();
      if (q && !blob.includes(q)) return false;
      if (filter === "open") return isOpen(point);
      return true;
    });
    if (filter === "near") rows = rows.slice().sort((a, b) => distance(a) - distance(b));
    return rows;
  }

  function renderList() {
    const rows = visiblePoints();
    if (!rows.length) {
      listEl.innerHTML = `<p class="empty">${ECO.t("eco.empty")}</p>`;
      return;
    }
    listEl.innerHTML = rows.map((point) => {
      const open = isOpen(point);
      const active = point.id === selected;
      return `<button class="eco-card${active ? " on" : ""}" type="button" data-id="${point.id}">
        <header><h3>${point.name}</h3><span class="badge ${open ? "open" : "closed"}">${open ? ECO.t("eco.open") : ECO.t("eco.closed")}</span></header>
        <p>${point.address}</p>
        ${active ? `<div class="hours">${point.hours}</div><div class="mini-actions">
          <button type="button" data-act="hours" title="${ECO.t("nav.schedule")}">◷</button>
          <button type="button" data-act="pin" title="${ECO.t("eco.route")}">⌖</button>
          <button type="button" data-act="doc" title="${ECO.t("eco.materials")}">☰</button>
          <button type="button" data-act="recycle" title="${ECO.t("eco.materials")}">♻</button>
        </div>` : ""}
      </button>`;
    }).join("");
  }

  function select(id, fly) {
    selected = id;
    const point = points.find((item) => item.id === id);
    if (!point) return;
    map.closePopup();
    markers[id].setPopupContent(popupHTML(point));
    markers[id].openPopup();
    if (fly !== false) map.flyTo([point.lat, point.lng], 14, { duration: 0.6 });
    renderList();
    listEl.querySelector(`[data-id="${id}"]`)?.scrollIntoView({ block: "nearest" });
  }

  listEl.addEventListener("click", (e) => {
    const action = e.target.closest("[data-act]");
    const card = e.target.closest(".eco-card");
    if (!card) return;
    if (action) {
      e.stopPropagation();
      const point = points.find((item) => item.id === card.dataset.id);
      if (action.dataset.act === "pin") window.open(`https://www.google.com/maps/dir/?api=1&destination=${point.lat},${point.lng}`, "_blank", "noopener");
      if (action.dataset.act === "doc" || action.dataset.act === "recycle") ECO.openMaterials();
      if (action.dataset.act === "hours") select(point.id);
      return;
    }
    select(card.dataset.id);
  });

  document.getElementById("eco-filters").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    filter = btn.dataset.filter;
    document.querySelectorAll("#eco-filters .chip").forEach((chip) => chip.classList.toggle("on", chip === btn));
    if (filter === "near" && !user && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        user = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        renderList();
      }, () => renderList());
    }
    renderList();
  });
  document.getElementById("eco-q").addEventListener("input", renderList);
  document.getElementById("map-search").addEventListener("click", () => document.getElementById("eco-q").focus());
  document.getElementById("map-locate").addEventListener("click", () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((pos) => {
      user = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      map.flyTo([user.lat, user.lng], 14);
      filter = "near";
      document.querySelectorAll("#eco-filters .chip").forEach((chip) => chip.classList.toggle("on", chip.dataset.filter === "near"));
      renderList();
    });
  });

  function refreshLabels() {
    document.querySelectorAll("#eco-filters .chip").forEach((chip) => {
      chip.textContent = ECO.t("eco." + chip.dataset.key);
    });
    points.forEach((point) => markers[point.id].bindPopup(popupHTML(point)));
    renderList();
  }
  ECO.onLang(refreshLabels);
  renderList();
  setTimeout(() => {
    map.invalidateSize();
    map.setView([-3.77, -38.5], 12);
    select("coco", false);
  }, 250);
  window.addEventListener("resize", () => map.invalidateSize());
});
