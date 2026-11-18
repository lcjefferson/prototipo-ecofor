document.addEventListener("ecofor:ready", () => {
  const track = document.getElementById("news-track");
  const dots = document.getElementById("news-dots");
  if (!track) return;
  let index = 0;

  function render() {
    const lang = ECO.lang();
    const news = ECOFOR.news;
    const visible = [0, 1, 2].map((offset) => news[(index + offset) % news.length]);
    track.innerHTML = visible.map((item) => `
      <a class="news-card" href="noticia.html?id=${item.id}">
        <img src="${item.img}" alt="">
        <div class="body">
          <h3>${item.title[lang]}</h3>
          <p>${item.excerpt[lang]}</p>
          <span class="readmore">${ECO.t("news.read")}</span>
        </div>
      </a>`).join("");
    const pages = news.length;
    dots.innerHTML = news.map((_, i) => `<button type="button" class="${i === index ? "on" : ""}" aria-label="${i + 1}"></button>`).join("");
    dots.querySelectorAll("button").forEach((btn, i) => btn.addEventListener("click", () => { index = i; render(); }));
  }

  document.getElementById("news-next")?.addEventListener("click", () => {
    index = (index + 1) % ECOFOR.news.length;
    render();
  });
  ECO.onLang(render);
  render();
});
