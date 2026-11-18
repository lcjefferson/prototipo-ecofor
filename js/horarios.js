document.addEventListener("ecofor:ready", () => {
  const regionEl = document.getElementById("region");
  const areaEl = document.getElementById("area");
  const daysEl = document.getElementById("days");
  if (!regionEl) return;

  function nameOf(id) {
    return ECO.t("names." + id) || id;
  }

  function fillRegions() {
    const current = regionEl.value || "aquiraz";
    regionEl.innerHTML = ECOFOR.regions.map((region) => `<option value="${region.id}">${nameOf(region.id)}</option>`).join("");
    regionEl.value = [...regionEl.options].some((o) => o.value === current) ? current : "aquiraz";
    fillAreas();
  }

  function fillAreas() {
    const region = ECOFOR.regions.find((item) => item.id === regionEl.value) || ECOFOR.regions[0];
    const current = areaEl.value || "alto-alegre";
    areaEl.innerHTML = region.areas.map((area) => `<option value="${area.id}">${nameOf(area.id)}</option>`).join("");
    areaEl.value = [...areaEl.options].some((o) => o.value === current) ? current : region.areas[0].id;
    renderDays();
  }

  function renderDays() {
    const region = ECOFOR.regions.find((item) => item.id === regionEl.value);
    const area = region.areas.find((item) => item.id === areaEl.value) || region.areas[0];
    const labels = ECO.t("schedule.days");
    const today = new Date().getDay();
    daysEl.innerHTML = labels.map((label, day) => {
      const on = area.days.includes(day);
      const hoje = day === today ? `<span class="hoje">${ECO.t("schedule.today")}</span>` : "";
      const text = on
        ? `<span>${ECO.t("schedule.from")} ${area.time} de ${area.period}</span>`
        : `<em>${ECO.t("schedule.none")}</em>`;
      return `<article class="day${on ? " has" : ""}">${hoje}<strong>${label}</strong>${text}</article>`;
    }).join("");
  }

  regionEl.addEventListener("change", fillAreas);
  areaEl.addEventListener("change", renderDays);
  ECO.onLang(() => fillRegions());
  fillRegions();
});
