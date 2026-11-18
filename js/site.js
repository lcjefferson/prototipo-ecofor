(function () {
  const I18N = {
    pt: {
      nav: { company: "A empresa", services: "Serviços", sustain: "Sustentabilidade", news: "Notícias", careers: "Carreiras", contact: "Contato", client: "ÁREA DO CLIENTE", schedule: "Horário de Coleta", request: "Solicite uma coleta", points: "EcoPontos" },
      top: { contrast: "Contraste", search: "Buscar" },
      hero: { title: "Cuidamos de Fortaleza,<br>transformamos o amanhã." },
      quick: { schedule: "Horários de Coleta", request: "Solicitação de Coleta", points: "EcoPontos" },
      stats: { tons: "+6 mil toneladas", tonsSub: "De resíduos coletados por dia", years: "+40 anos", yearsSub: "Cuidando de Fortaleza" },
      commit: { title: "EcoFor, Compromisso com Fortaleza e o Meio Ambiente", more: "SAIBA MAIS" },
      help: { before: "Precisa de ajuda?", after: "Ligue para a Central de Atendimento:" },
      news: { title: "Notícias", more: "Acessar todas as notícias", read: "Leia Mais", next: "Próximas notícias" },
      short: { social: "Responsabilidade Social", careers: "Carreiras", contact: "Fale Conosco" },
      foot: { inst: "Institucional", about: "Sobre a Ecofor", services: "Serviços", group: "Marquise Ambiental", companyOf: "Uma empresa da" },
      schedule: { title: "Calendário de Coleta Domiciliar", lead: "Lixo para fora somente nos dias e horários corretos. Veja abaixo:", weekly: "Calendário Semanal", hint: "Por favor selecione seu endereço para ver os horários de coleta na sua região", none: "não tem coleta", from: "A partir das", today: "Hoje", days: ["dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"] },
      names: { aquiraz: "Aquiraz", fortaleza: "Fortaleza", "alto-alegre": "Alto Alegre", porto: "Porto das Dunas", "centro-aq": "Centro", aldeota: "Aldeota", meireles: "Meireles", benfica: "Benfica", coco: "Cocó", messejana: "Messejana", centro: "Centro", mucuripe: "Mucuripe", parangaba: "Parangaba" },
      eco: { title: "Ecopontos em Fortaleza", lead: "Encontre o local mais próximo para descarte correto de resíduos.", search: "Buscar por bairro, rua ou CEP...", all: "Todos", openNow: "Abertos Agora", near: "Por perto", open: "ABERTO", closed: "FECHADO", route: "Como chegar", empty: "Nenhum ecoponto encontrado.", materials: "Materiais aceitos", materialsBody: "Papel, plástico, metal, vidro, eletrônicos de pequeno porte e óleo de cozinha. Não recebemos resíduo de saúde, inflável industrial ou entulho de obra." },
      chat: { title: "Assistente Virtual", online: "Online", name: "EcoBot", greet: "Olá sou a assistente virtual da Ecofor. Como posso te ajudar hoje?", ph: "Digite sua mensagem...", schedule: "Horário de Coleta", request: "Solicitação de Coleta", agent: "Falar com atendente", ansSchedule: "A coleta depende do bairro. Abra o calendário, escolha a região e veja o dia e o horário.", ansRequest: "Para pedir uma coleta fora da rota, preencha a solicitação com endereço e tipo de resíduo.", ansAgent: "A Central de Atendimento atende pelo 0800 275 4400.", ansPoints: "Os ecopontos aparecem no mapa, com endereço, horário e status aberto ou fechado.", ansFallback: "Posso ajudar com horário de coleta, solicitação de coleta ou ecopontos. Se preferir, fale com o atendimento no 0800 275 4400.", attach: "O envio de arquivo fica com o atendimento humano, no 0800 275 4400." },
      search: { title: "Buscar no site", ph: "Digite um assunto", empty: "Nada encontrado." },
      forms: { name: "Nome", phone: "Telefone", email: "E-mail", address: "Endereço", area: "Bairro", type: "Tipo de resíduo", date: "Data preferida", notes: "Observações", send: "Enviar solicitação", ok: "Solicitação registrada neste navegador. Protocolo", doc: "CPF ou CNPJ", password: "Senha", enter: "Entrar", clientTitle: "Área do cliente", clientLead: "Acompanhe protocolos e a próxima coleta da sua região.", out: "Sair", hello: "Olá", sample: "Painel de demonstração", next: "Próxima coleta informada", req: "Solicitações", contactTitle: "Contato", contactLead: "Fale com a Central de Atendimento ou envie uma mensagem.", message: "Mensagem", contactOk: "Mensagem registrada. Se for urgente, ligue 0800 275 4400.", careersTitle: "Carreiras", careersLead: "Vagas operacionais e administrativas da Ecofor.", apply: "Candidatar-se", applyOk: "Candidatura registrada neste navegador.", role: "Área de interesse", requestTitle: "Solicitação de Coleta", requestLead: "Use este formulário para coleta fora da rota domiciliar regular.", adminBtn: "Vagas Administrativas", opsBtn: "Vagas Operacionais", err: "Preencha os campos obrigatórios." },
      company: { title: "A empresa" },
      sustain: { title: "Sustentabilidade" },
      social: { title: "Responsabilidade Social" },
      osasco: { title: "EcoOsasco" },
      taubate: { title: "EcoTaubaté" },
      newsPage: { title: "Notícias", lead: "Reportagens e avisos da Ecofor e da Marquise Ambiental." },
      jobsAdmin: [
        { title: "Analista ambiental", meta: "Fortaleza · Corporativo" },
        { title: "Assistente administrativo", meta: "Fortaleza · Corporativo" }
      ],
      jobsOps: [
        { title: "Motorista de coleta", meta: "Fortaleza · Operação" },
        { title: "Operador de ecoponto", meta: "Fortaleza · Atendimento" }
      ]
    },
    en: {
      nav: { company: "The company", services: "Services", sustain: "Sustainability", news: "News", careers: "Careers", contact: "Contact", client: "CLIENT AREA", schedule: "Collection times", request: "Request a collection", points: "Eco points" },
      top: { contrast: "Contrast", search: "Search" },
      hero: { title: "We look after Fortaleza,<br>and change tomorrow." },
      quick: { schedule: "Collection times", request: "Collection request", points: "Eco points" },
      stats: { tons: "+6 thousand tonnes", tonsSub: "Of waste collected each day", years: "+40 years", yearsSub: "Looking after Fortaleza" },
      commit: { title: "Ecofor, a commitment to Fortaleza and the environment", more: "LEARN MORE" },
      help: { before: "Need help?", after: "Call the service line:" },
      news: { title: "News", more: "See all news", read: "Read more", next: "Next stories" },
      short: { social: "Social responsibility", careers: "Careers", contact: "Contact us" },
      foot: { inst: "Institutional", about: "About Ecofor", services: "Services", group: "Marquise Ambiental", companyOf: "A company of" },
      schedule: { title: "Household collection calendar", lead: "Set waste out only on the right days and times. See below:", weekly: "Weekly calendar", hint: "Select your address to see collection times in your area", none: "no collection", from: "From", today: "Today", days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] },
      names: { aquiraz: "Aquiraz", fortaleza: "Fortaleza", "alto-alegre": "Alto Alegre", porto: "Porto das Dunas", "centro-aq": "Centro", aldeota: "Aldeota", meireles: "Meireles", benfica: "Benfica", coco: "Cocó", messejana: "Messejana", centro: "Centro", mucuripe: "Mucuripe", parangaba: "Parangaba" },
      eco: { title: "Eco points in Fortaleza", lead: "Find the nearest place for correct disposal.", search: "Search by neighborhood, street or postcode...", all: "All", openNow: "Open now", near: "Nearby", open: "OPEN", closed: "CLOSED", route: "Get directions", empty: "No eco point found.", materials: "Accepted materials", materialsBody: "Paper, plastic, metal, glass, small electronics and cooking oil. We do not take medical waste or construction rubble." },
      chat: { title: "Virtual assistant", online: "Online", name: "EcoBot", greet: "Hello, I am Ecofor’s virtual assistant. How can I help today?", ph: "Type your message...", schedule: "Collection times", request: "Collection request", agent: "Talk to an agent", ansSchedule: "Collection depends on the neighborhood. Open the calendar, pick the area and see the day and time.", ansRequest: "To ask for a collection outside the route, fill in the request with address and waste type.", ansAgent: "The service line answers at 0800 275 4400.", ansPoints: "Eco points are on the map, with address, hours and open or closed status.", ansFallback: "I can help with collection times, collection requests or eco points. Or call 0800 275 4400.", attach: "File upload stays with the human desk, at 0800 275 4400." },
      search: { title: "Search the site", ph: "Type a topic", empty: "Nothing found." },
      forms: { name: "Name", phone: "Phone", email: "Email", address: "Address", area: "Neighborhood", type: "Waste type", date: "Preferred date", notes: "Notes", send: "Send request", ok: "Request saved in this browser. Protocol", doc: "ID number", password: "Password", enter: "Sign in", clientTitle: "Client area", clientLead: "Follow protocols and the next collection in your area.", out: "Sign out", hello: "Hello", sample: "Demonstration panel", next: "Next informed collection", req: "Requests", contactTitle: "Contact", contactLead: "Call the service line or send a message.", message: "Message", contactOk: "Message saved. If it is urgent, call 0800 275 4400.", careersTitle: "Careers", careersLead: "Operational and office roles at Ecofor.", apply: "Apply", applyOk: "Application saved in this browser.", role: "Area of interest", requestTitle: "Collection request", requestLead: "Use this form for collection outside the regular household route.", adminBtn: "Administrative jobs", opsBtn: "Operational jobs", err: "Fill in the required fields." },
      company: { title: "The company" },
      sustain: { title: "Sustainability" },
      social: { title: "Social responsibility" },
      osasco: { title: "EcoOsasco" },
      taubate: { title: "EcoTaubaté" },
      newsPage: { title: "News", lead: "Stories and notices from Ecofor and Marquise Ambiental." },
      jobsAdmin: [
        { title: "Environmental analyst", meta: "Fortaleza · Corporate" },
        { title: "Administrative assistant", meta: "Fortaleza · Corporate" }
      ],
      jobsOps: [
        { title: "Collection driver", meta: "Fortaleza · Operations" },
        { title: "Eco point operator", meta: "Fortaleza · Service" }
      ]
    },
    es: {
      nav: { company: "La empresa", services: "Servicios", sustain: "Sostenibilidad", news: "Noticias", careers: "Carreras", contact: "Contacto", client: "ÁREA DEL CLIENTE", schedule: "Horario de recolección", request: "Solicite una recolección", points: "Ecopuntos" },
      top: { contrast: "Contraste", search: "Buscar" },
      hero: { title: "Cuidamos de Fortaleza,<br>transformamos el mañana." },
      quick: { schedule: "Horarios de recolección", request: "Solicitud de recolección", points: "Ecopuntos" },
      stats: { tons: "+6 mil toneladas", tonsSub: "De residuos recogidos por día", years: "+40 años", yearsSub: "Cuidando de Fortaleza" },
      commit: { title: "Ecofor, compromiso con Fortaleza y el medio ambiente", more: "SEPA MÁS" },
      help: { before: "¿Necesita ayuda?", after: "Llame a la central de atención:" },
      news: { title: "Noticias", more: "Ver todas las noticias", read: "Lea más", next: "Siguientes noticias" },
      short: { social: "Responsabilidad social", careers: "Carreras", contact: "Hable con nosotros" },
      foot: { inst: "Institucional", about: "Sobre Ecofor", services: "Servicios", group: "Marquise Ambiental", companyOf: "Una empresa de" },
      schedule: { title: "Calendario de recolección domiciliaria", lead: "Saque los residuos solo en los días y horarios correctos. Vea abajo:", weekly: "Calendario semanal", hint: "Seleccione su dirección para ver los horarios de su región", none: "no hay recolección", from: "A partir de las", today: "Hoy", days: ["dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"] },
      names: { aquiraz: "Aquiraz", fortaleza: "Fortaleza", "alto-alegre": "Alto Alegre", porto: "Porto das Dunas", "centro-aq": "Centro", aldeota: "Aldeota", meireles: "Meireles", benfica: "Benfica", coco: "Cocó", messejana: "Messejana", centro: "Centro", mucuripe: "Mucuripe", parangaba: "Parangaba" },
      eco: { title: "Ecopuntos en Fortaleza", lead: "Encuentre el lugar más cercano para el descarte correcto.", search: "Buscar por barrio, calle o código postal...", all: "Todos", openNow: "Abiertos ahora", near: "Cerca", open: "ABIERTO", closed: "CERRADO", route: "Cómo llegar", empty: "Ningún ecopunto encontrado.", materials: "Materiales aceptados", materialsBody: "Papel, plástico, metal, vidrio, electrónicos pequeños y aceite de cocina. No recibimos residuos de salud ni escombros de obra." },
      chat: { title: "Asistente virtual", online: "En línea", name: "EcoBot", greet: "Hola, soy la asistente virtual de Ecofor. ¿Cómo puedo ayudar hoy?", ph: "Escriba su mensaje...", schedule: "Horario de recolección", request: "Solicitud de recolección", agent: "Hablar con un agente", ansSchedule: "La recolección depende del barrio. Abra el calendario, elija la región y vea el día y la hora.", ansRequest: "Para pedir una recolección fuera de la ruta, complete la solicitud con dirección y tipo de residuo.", ansAgent: "La central atiende por el 0800 275 4400.", ansPoints: "Los ecopuntos aparecen en el mapa, con dirección, horario y estado abierto o cerrado.", ansFallback: "Puedo ayudar con horarios, solicitudes o ecopuntos. Si prefiere, llame al 0800 275 4400.", attach: "El envío de archivos queda con la atención humana, en el 0800 275 4400." },
      search: { title: "Buscar en el sitio", ph: "Escriba un tema", empty: "Nada encontrado." },
      forms: { name: "Nombre", phone: "Teléfono", email: "Correo", address: "Dirección", area: "Barrio", type: "Tipo de residuo", date: "Fecha preferida", notes: "Observaciones", send: "Enviar solicitud", ok: "Solicitud guardada en este navegador. Protocolo", doc: "Documento", password: "Contraseña", enter: "Entrar", clientTitle: "Área del cliente", clientLead: "Siga protocolos y la próxima recolección de su región.", out: "Salir", hello: "Hola", sample: "Panel de demostración", next: "Próxima recolección informada", req: "Solicitudes", contactTitle: "Contacto", contactLead: "Hable con la central o envíe un mensaje.", message: "Mensaje", contactOk: "Mensaje registrado. Si es urgente, llame al 0800 275 4400.", careersTitle: "Carreras", careersLead: "Vacantes operativas y administrativas de Ecofor.", apply: "Postularse", applyOk: "Postulación registrada en este navegador.", role: "Área de interés", requestTitle: "Solicitud de recolección", requestLead: "Use este formulario para recolección fuera de la ruta domiciliaria regular.", adminBtn: "Vacantes administrativas", opsBtn: "Vacantes operativas", err: "Complete los campos obligatorios." },
      company: { title: "La empresa" },
      sustain: { title: "Sostenibilidad" },
      social: { title: "Responsabilidad social" },
      osasco: { title: "EcoOsasco" },
      taubate: { title: "EcoTaubaté" },
      newsPage: { title: "Noticias", lead: "Reportajes y avisos de Ecofor y Marquise Ambiental." },
      jobsAdmin: [
        { title: "Analista ambiental", meta: "Fortaleza · Corporativo" },
        { title: "Asistente administrativo", meta: "Fortaleza · Corporativo" }
      ],
      jobsOps: [
        { title: "Conductor de recolección", meta: "Fortaleza · Operación" },
        { title: "Operador de ecopunto", meta: "Fortaleza · Atención" }
      ]
    }
  };

  const BANNERS = {
    pt: {
      company: { title: "A empresa", sub: "Cuidamos de Fortaleza e do meio ambiente." },
      sustain: { title: "Sustentabilidade", sub: "O compromisso do Grupo Marquise com um futuro compartilhado." },
      news: { title: "Notícias", sub: "Reportagens e avisos da Ecofor e da Marquise Ambiental." },
      article: { title: "Notícias", sub: "Reportagens e avisos da Ecofor e da Marquise Ambiental." },
      careers: { title: "Carreiras", sub: "Escolha o tipo de vaga e venha cuidar de Fortaleza." },
      contact: { title: "Contato", sub: "Fale com a Central de Atendimento." },
      social: { title: "Responsabilidade Social", sub: "Ações com a comunidade e com as equipes de coleta." },
      request: { title: "Solicitação de Coleta", sub: "Peça uma coleta fora da rota domiciliar regular." },
      client: { title: "Área do cliente", sub: "Acompanhe protocolos e a próxima coleta da sua região." },
      osasco: { title: "EcoOsasco", sub: "Uma empresa da Marquise Ambiental." },
      taubate: { title: "EcoTaubaté", sub: "Uma empresa da Marquise Ambiental." },
      schedule: { title: "Calendário de Coleta Domiciliar", sub: "Lixo para fora somente nos dias e horários corretos." },
      points: { title: "Ecopontos em Fortaleza", sub: "Encontre o local mais próximo para o descarte correto." },
      admin: { title: "Vagas Administrativas", sub: "Funções de escritório e de gestão na Ecofor." },
      ops: { title: "Vagas Operacionais", sub: "Funções de coleta, rua e ecopontos." }
    },
    en: {
      company: { title: "The company", sub: "We look after Fortaleza and the environment." },
      sustain: { title: "Sustainability", sub: "Grupo Marquise’s commitment to a shared future." },
      news: { title: "News", sub: "Stories and notices from Ecofor and Marquise Ambiental." },
      article: { title: "News", sub: "Stories and notices from Ecofor and Marquise Ambiental." },
      careers: { title: "Careers", sub: "Choose a job type and help look after Fortaleza." },
      contact: { title: "Contact", sub: "Talk to the service line." },
      social: { title: "Social responsibility", sub: "Work with the community and the collection crews." },
      request: { title: "Collection request", sub: "Ask for a collection outside the regular route." },
      client: { title: "Client area", sub: "Follow protocols and the next collection in your area." },
      osasco: { title: "EcoOsasco", sub: "A Marquise Ambiental company." },
      taubate: { title: "EcoTaubaté", sub: "A Marquise Ambiental company." },
      schedule: { title: "Household collection calendar", sub: "Set waste out only on the right days and times." },
      points: { title: "Eco points in Fortaleza", sub: "Find the nearest place for correct disposal." },
      admin: { title: "Administrative jobs", sub: "Office and management roles at Ecofor." },
      ops: { title: "Operational jobs", sub: "Collection, street and eco point roles." }
    },
    es: {
      company: { title: "La empresa", sub: "Cuidamos de Fortaleza y del medio ambiente." },
      sustain: { title: "Sostenibilidad", sub: "El compromiso del Grupo Marquise con un futuro compartido." },
      news: { title: "Noticias", sub: "Reportajes y avisos de Ecofor y Marquise Ambiental." },
      article: { title: "Noticias", sub: "Reportajes y avisos de Ecofor y Marquise Ambiental." },
      careers: { title: "Carreras", sub: "Elija el tipo de vacante y cuide de Fortaleza." },
      contact: { title: "Contacto", sub: "Hable con la central de atención." },
      social: { title: "Responsabilidad social", sub: "Acciones con la comunidad y con los equipos." },
      request: { title: "Solicitud de recolección", sub: "Pida una recolección fuera de la ruta regular." },
      client: { title: "Área del cliente", sub: "Siga protocolos y la próxima recolección de su región." },
      osasco: { title: "EcoOsasco", sub: "Una empresa de Marquise Ambiental." },
      taubate: { title: "EcoTaubaté", sub: "Una empresa de Marquise Ambiental." },
      schedule: { title: "Calendario de recolección domiciliaria", sub: "Saque los residuos solo en los días y horarios correctos." },
      points: { title: "Ecopuntos en Fortaleza", sub: "Encuentre el lugar más cercano para el descarte correcto." },
      admin: { title: "Vacantes administrativas", sub: "Funciones de oficina y de gestión en Ecofor." },
      ops: { title: "Vacantes operativas", sub: "Funciones de recolección, calle y ecopuntos." }
    }
  };

  const state = {
    lang: localStorage.getItem("ecofor-lang") || "pt",
    contrast: localStorage.getItem("ecofor-contrast") === "1",
    font: Number(localStorage.getItem("ecofor-font") || 1)
  };
  const listeners = [];
  const dict = () => I18N[state.lang] || I18N.pt;

  function t(path) {
    return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), dict());
  }

  function svg(inner, box) {
    return `<svg viewBox="${box || "0 0 24 24"}" aria-hidden="true">${inner}</svg>`;
  }

  const logo = (light) => `
    <a class="logo${light ? " footer-logo" : ""}" href="index.html" aria-label="Ecofor">
      <img src="assets/logo-ecofor.png" alt="Ecofor">
    </a>`;

  const marquise = `<img class="marquise" src="assets/logo-marquise.png" alt="Marquise Ambiental">`;
  const botFace = `<span class="bot-face"><img src="assets/bot.png" alt=""></span>`;

  function headerHTML() {
    const d = dict();
    const page = document.body.dataset.page;
    const item = (href, key, label) => `<a href="${href}" data-nav="${key}" class="${page === key ? "active" : ""}">${label}</a>`;
    return `
      <div class="topbar">
        <div class="container topbar-inner">
          <div class="font-size-ctrl">
            <button type="button" id="font-dec" aria-label="A-">A-</button>
            <button type="button" id="font-inc" aria-label="A+">A+</button>
          </div>
          <button type="button" class="contrast-btn" id="contrast-btn"><span class="contrast-ico"></span> ${d.top.contrast}</button>
          <div class="langs" role="group" aria-label="Idioma">
            <button type="button" class="lang-btn ${state.lang === "en" ? "active" : ""}" data-lang="en">EN</button>
            <span class="lang-sep">|</span>
            <button type="button" class="lang-btn ${state.lang === "pt" ? "active" : ""}" data-lang="pt">PT</button>
            <span class="lang-sep">|</span>
            <button type="button" class="lang-btn ${state.lang === "es" ? "active" : ""}" data-lang="es">ES</button>
          </div>
          <button type="button" class="icon-btn" id="search-open" aria-label="${d.top.search}">${svg('<circle cx="11" cy="11" r="6.5"/><path d="M16 16l5 5"/>')}</button>
        </div>
      </div>
      <header class="header">
        <div class="container header-inner">
          ${logo(false)}
          <button class="menu-toggle" id="menu-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
          <nav class="nav" id="nav">
            ${item("empresa.html", "company", d.nav.company)}
            <div class="nav-item">
              <button class="nav-btn" type="button" aria-expanded="false">${d.nav.services}</button>
              <div class="submenu">
                <a href="horarios.html">${d.nav.schedule}</a>
                <a href="solicitacao.html">${d.nav.request}</a>
                <a href="ecopontos.html">${d.nav.points}</a>
              </div>
            </div>
            ${item("sustentabilidade.html", "sustain", d.nav.sustain)}
            ${item("noticias.html", "news", d.nav.news)}
            ${item("carreiras.html", "careers", d.nav.careers)}
            ${item("contato.html", "contact", d.nav.contact)}
            <a class="btn-client mobile" href="area-cliente.html">${d.nav.client}</a>
          </nav>
          <a class="btn-client" href="area-cliente.html">${d.nav.client}</a>
        </div>
      </header>`;
  }

  function footerHTML() {
    const d = dict();
    const hide = document.body.dataset.page === "points";
    if (hide) return "";
    return `
      <footer class="footer">
        <div class="container footer-grid">
          ${logo(true)}
          <div>
            <h3>${d.foot.inst}</h3>
            <a href="empresa.html">${d.foot.about}</a>
            <a href="sustentabilidade.html">${d.nav.sustain}</a>
            <a href="noticias.html">${d.nav.news}</a>
          </div>
          <div>
            <h3>${d.foot.services}</h3>
            <a href="horarios.html">${d.nav.schedule}</a>
            <a href="solicitacao.html">${d.nav.request}</a>
            <a href="ecopontos.html">${d.nav.points}</a>
          </div>
          <div>
            <h3>${d.foot.group}</h3>
            <a href="empresa.html">${d.foot.group}</a>
            <a href="ecoosasco.html">EcoOsasco</a>
            <a href="ecotaubate.html">EcoTaubaté</a>
          </div>
        </div>
      </footer>
      <div class="footer-bottom">
        <div class="container">${d.foot.companyOf} ${marquise}</div>
      </div>`;
  }

  function chatHTML() {
    const d = dict();
    return `
      <button class="launcher" id="launcher" aria-label="${d.chat.title}"><img src="assets/bot.png" alt=""></button>
      <section class="chat" id="chat" aria-label="${d.chat.title}">
        <header class="chat-head">
          ${botFace}
          <div><strong>${d.chat.title}</strong><span class="online"><i></i> ${d.chat.online}</span></div>
          <button class="chat-x" id="chat-x" type="button" aria-label="Fechar">×</button>
        </header>
        <div class="chat-log" id="chat-log"></div>
        <div class="quick-replies" id="quick-replies">
          <button type="button" data-reply="schedule">${d.chat.schedule}</button>
          <button type="button" data-reply="request">${d.chat.request}</button>
          <button type="button" data-reply="agent">${d.chat.agent}</button>
        </div>
        <form class="chat-form" id="chat-form">
          <input id="chat-input" autocomplete="off" placeholder="${d.chat.ph}">
          <button class="clip" type="button" id="chat-clip" aria-label="Anexo">${svg('<path d="M8 13l6.5-6.5a3 3 0 0 1 4.2 4.2l-7.2 7.2a2 2 0 0 1-2.8-2.8l6.4-6.4" fill="none" stroke="currentColor" stroke-width="1.7"/>')}</button>
          <button class="send" type="submit" aria-label="Enviar">${svg('<path d="M4 12l16-7-7 16-2-7z" fill="currentColor" stroke="none"/>')}</button>
        </form>
      </section>
      <div class="search-modal" id="search-modal">
        <div class="search-box">
          <h2>${d.search.title}</h2>
          <input id="search-input" placeholder="${d.search.ph}">
          <ul id="search-results"></ul>
        </div>
      </div>
      <div class="materials" id="materials">
        <div class="panel">
          <h2>${d.eco.materials}</h2>
          <p style="margin:10px 0 16px">${d.eco.materialsBody}</p>
          <button class="btn" type="button" id="materials-x">OK</button>
        </div>
      </div>`;
  }

  function applyTypography() {
    const sizes = [87.5, 100, 112.5, 125];
    const index = Math.max(0, Math.min(sizes.length - 1, state.font));
    state.font = index;
    document.documentElement.style.fontSize = sizes[index] + "%";
    localStorage.setItem("ecofor-font", String(index));
    document.body.classList.toggle("contrast", state.contrast);
    localStorage.setItem("ecofor-contrast", state.contrast ? "1" : "0");
    document.documentElement.lang = state.lang === "pt" ? "pt-BR" : state.lang === "es" ? "es" : "en";
  }

  let booted = false;
  function mount() {
    const header = document.getElementById("site-header");
    const footer = document.getElementById("site-footer");
    if (header) header.innerHTML = headerHTML();
    if (footer) footer.innerHTML = footerHTML();
    ["launcher", "chat", "search-modal", "materials"].forEach((id) => document.getElementById(id)?.remove());
    document.body.insertAdjacentHTML("beforeend", chatHTML());
    applyTypography();
    applyPageCopy();
    bindChrome();
    if (!booted) {
      bindForms();
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          closeSearch();
          document.getElementById("materials")?.classList.remove("open");
        }
      });
      booted = true;
    }
    const saved = sessionStorage.getItem("ecofor-client");
    if (saved && document.getElementById("client-panel")) showClient(saved);
    greet();
  }

  function applyPageCopy() {
    const d = dict();
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = t(el.dataset.i18n);
      if (typeof value === "string") el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const value = t(el.dataset.i18nHtml);
      if (typeof value === "string") el.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const value = t(el.dataset.i18nPlaceholder);
      if (typeof value === "string") el.placeholder = value;
    });
    const page = document.body.dataset.page;
    const slot = document.getElementById("page-copy");
    const pages = window.ECOFOR.pages;
    if (slot && pages[page] && pages[page][state.lang]) slot.innerHTML = pages[page][state.lang];
    const jobs = document.getElementById("job-list");
    if (jobs) {
      const list = jobs.dataset.kind === "ops" ? d.jobsOps : d.jobsAdmin;
      jobs.innerHTML = list.map((job) => `
        <article class="job">
          <div><h3>${job.title}</h3><p>${job.meta}</p></div>
        </article>`).join("");
    }
    renderBanner();
  }

  function renderBanner() {
    const page = document.body.dataset.page;
    const info = (BANNERS[state.lang] || BANNERS.pt)[page];
    const main = document.querySelector("main");
    if (!main || !info) return;
    let banner = document.getElementById("page-banner");
    if (!banner) {
      banner = document.createElement("section");
      banner.id = "page-banner";
      banner.className = "page-banner";
      banner.innerHTML = `<div class="container"><h1></h1><p></p></div>`;
      main.prepend(banner);
    }
    banner.querySelector("h1").textContent = info.title;
    banner.querySelector("p").textContent = info.sub;
    document.querySelector(".page-head")?.remove();
  }

  function setLang(lang) {
    state.lang = lang;
    localStorage.setItem("ecofor-lang", lang);
    mount();
    listeners.forEach((fn) => fn());
  }

  function bindChrome() {
    document.getElementById("font-inc")?.addEventListener("click", () => { state.font += 1; applyTypography(); });
    document.getElementById("font-dec")?.addEventListener("click", () => { state.font -= 1; applyTypography(); });
    document.getElementById("contrast-btn")?.addEventListener("click", () => { state.contrast = !state.contrast; applyTypography(); });
    document.querySelectorAll("[data-lang]").forEach((btn) => btn.addEventListener("click", () => setLang(btn.dataset.lang)));
    document.getElementById("menu-toggle")?.addEventListener("click", () => document.getElementById("nav")?.classList.toggle("open"));
    document.getElementById("launcher")?.addEventListener("click", () => {
      document.getElementById("chat").classList.add("open");
      document.getElementById("launcher").style.display = "none";
    });
    document.getElementById("chat-x")?.addEventListener("click", () => {
      document.getElementById("chat").classList.remove("open");
      document.getElementById("launcher").style.display = "";
    });
    document.getElementById("search-open")?.addEventListener("click", openSearch);
    document.getElementById("search-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "search-modal") closeSearch();
    });
    document.getElementById("search-input")?.addEventListener("input", (e) => renderSearch(e.target.value));
    document.getElementById("chat-form")?.addEventListener("submit", onChat);
    document.getElementById("quick-replies")?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-reply]");
      if (!btn) return;
      pushUser(btn.textContent.trim());
      answer(btn.dataset.reply);
    });
    document.getElementById("chat-clip")?.addEventListener("click", () => pushBot(dict().chat.attach));
    document.getElementById("materials-x")?.addEventListener("click", () => document.getElementById("materials").classList.remove("open"));
    renderNewsIndex();
    renderArticle();
  }

  function greet() {
    const log = document.getElementById("chat-log");
    if (!log || log.childElementCount) return;
    pushBot(dict().chat.greet, false);
  }

  function pushUser(text) {
    const log = document.getElementById("chat-log");
    const el = document.createElement("div");
    el.className = "msg user";
    el.textContent = text;
    log.appendChild(el);
    log.scrollTop = log.scrollHeight;
    document.getElementById("quick-replies").style.display = "none";
  }

  function pushBot(html, scroll) {
    const d = dict();
    const log = document.getElementById("chat-log");
    const wrap = document.createElement("div");
    wrap.className = "msg bot";
    wrap.innerHTML = `<div class="who">${botFace} ${d.chat.name}</div><div class="bot-text"></div>`;
    wrap.querySelector(".bot-text").innerHTML = html;
    log.appendChild(wrap);
    if (scroll !== false) log.scrollTop = log.scrollHeight;
  }

  function answer(kind) {
    const d = dict().chat;
    const map = {
      schedule: `${d.ansSchedule} <a href="horarios.html">${d.schedule}</a>`,
      request: `${d.ansRequest} <a href="solicitacao.html">${d.request}</a>`,
      agent: `${d.ansAgent}`,
      points: `${d.ansPoints} <a href="ecopontos.html">EcoPontos</a>`
    };
    pushBot(map[kind] || d.ansFallback);
  }

  function onChat(e) {
    e.preventDefault();
    const input = document.getElementById("chat-input");
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    pushUser(text);
    const q = text.toLowerCase();
    if (/hor[aá]r|coleta domic|calend/.test(q)) answer("schedule");
    else if (/solicit|pedido|agendar/.test(q)) answer("request");
    else if (/atenden|humano|telefone|0800|agente/.test(q)) answer("agent");
    else if (/ecoponto|recicl|mapa|descarte/.test(q)) answer("points");
    else answer("fallback");
  }

  function searchIndex() {
    const d = dict();
    const items = [
      { href: "index.html", title: "Ecofor", text: d.hero.title.replace(/<br>/g, " ") },
      { href: "empresa.html", title: d.company.title, text: d.nav.company },
      { href: "horarios.html", title: d.schedule.title, text: d.schedule.lead },
      { href: "solicitacao.html", title: d.forms.requestTitle, text: d.forms.requestLead },
      { href: "ecopontos.html", title: d.eco.title, text: d.eco.lead },
      { href: "sustentabilidade.html", title: d.sustain.title, text: d.nav.sustain },
      { href: "carreiras.html", title: d.forms.careersTitle, text: d.forms.careersLead },
      { href: "contato.html", title: d.forms.contactTitle, text: "0800 275 4400" },
      { href: "responsabilidade.html", title: d.social.title, text: d.short.social },
      { href: "area-cliente.html", title: d.forms.clientTitle, text: d.forms.clientLead }
    ];
    window.ECOFOR.news.forEach((item) => items.push({ href: `noticia.html?id=${item.id}`, title: item.title[state.lang], text: item.excerpt[state.lang] }));
    window.ECOFOR.points.forEach((item) => items.push({ href: "ecopontos.html", title: item.name, text: `${item.address} ${item.neighborhood}` }));
    return items;
  }

  function openSearch() {
    document.getElementById("search-modal").classList.add("open");
    const input = document.getElementById("search-input");
    input.value = "";
    renderSearch("");
    input.focus();
  }
  function closeSearch() { document.getElementById("search-modal")?.classList.remove("open"); }
  function renderSearch(q) {
    const list = document.getElementById("search-results");
    const query = q.trim().toLowerCase();
    const items = searchIndex().filter((item) => !query || `${item.title} ${item.text}`.toLowerCase().includes(query)).slice(0, 8);
    list.innerHTML = items.length ? items.map((item) => `<li><a href="${item.href}"><strong>${item.title}</strong><br><span style="color:#667">${item.text}</span></a></li>`).join("") : `<li>${dict().search.empty}</li>`;
  }

  function bindForms() {
    document.getElementById("request-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      if (!form.reportValidity()) return;
      const n = "ECO-" + Date.now().toString().slice(-6);
      const box = document.getElementById("request-ok");
      box.hidden = false;
      box.textContent = `${dict().forms.ok} ${n}.`;
      form.reset();
    });
    document.getElementById("contact-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!e.target.reportValidity()) return;
      const box = document.getElementById("contact-ok");
      box.hidden = false;
      box.textContent = dict().forms.contactOk;
      e.target.reset();
    });
    document.getElementById("apply-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!e.target.reportValidity()) return;
      const box = document.getElementById("apply-ok");
      box.hidden = false;
      box.textContent = dict().forms.applyOk;
      e.target.reset();
    });
    const login = document.getElementById("login-form");
    if (login) {
      const saved = sessionStorage.getItem("ecofor-client");
      if (saved) showClient(saved);
      login.addEventListener("submit", (e) => {
        e.preventDefault();
        const doc = document.getElementById("client-doc").value.trim();
        const pass = document.getElementById("client-pass").value;
        const err = document.getElementById("login-err");
        if (doc.length < 5 || pass.length < 4) {
          err.hidden = false;
          err.textContent = dict().forms.err;
          return;
        }
        sessionStorage.setItem("ecofor-client", doc);
        showClient(doc);
      });
      document.getElementById("logout")?.addEventListener("click", () => {
        sessionStorage.removeItem("ecofor-client");
        document.getElementById("client-panel").hidden = true;
        login.hidden = false;
      });
    }
  }

  function showClient(doc) {
    const d = dict().forms;
    document.getElementById("login-form").hidden = true;
    const panel = document.getElementById("client-panel");
    panel.hidden = false;
    panel.innerHTML = `
      <h2></h2>
      <p class="lead">${d.sample}</p>
      <div class="info-list">
        <article><h3>${d.next}</h3><p>Aldeota · segunda, quarta e sexta · 18:45</p></article>
        <article><h3>${d.req}</h3><p>ECO-204181 · em análise</p></article>
      </div>
      <p style="margin-top:16px"><button class="btn" type="button" id="logout">${d.out}</button></p>`;
    panel.querySelector("h2").textContent = `${d.hello}, ${doc}`;
    document.getElementById("logout").addEventListener("click", () => {
      sessionStorage.removeItem("ecofor-client");
      panel.hidden = true;
      document.getElementById("login-form").hidden = false;
    });
  }

  function renderNewsIndex() {
    const box = document.getElementById("news-list");
    if (!box) return;
    box.innerHTML = window.ECOFOR.news.map((item) => `
      <a class="news-row" href="noticia.html?id=${item.id}">
        <img src="${item.img}" alt="">
        <div>
          <h2>${item.title[state.lang]}</h2>
          <p>${item.excerpt[state.lang]}</p>
          <span class="readmore">${dict().news.read}</span>
        </div>
      </a>`).join("");
  }

  function renderArticle() {
    const box = document.getElementById("article");
    if (!box) return;
    const id = new URLSearchParams(location.search).get("id");
    const item = window.ECOFOR.news.find((n) => n.id === id) || window.ECOFOR.news[0];
    const lang = state.lang;
    document.title = item.title[lang] + " | Ecofor";
    const bannerTitle = document.querySelector("#page-banner h1");
    const bannerSub = document.querySelector("#page-banner p");
    if (bannerTitle) bannerTitle.textContent = item.title[lang];
    if (bannerSub) bannerSub.textContent = item.excerpt[lang];
    box.innerHTML = `
      <a class="back" href="noticias.html">← ${dict().news.title}</a>
      <h1>${item.title[lang]}</h1>
      <img src="${item.img}" alt="">
      ${item.body[lang].split("\n\n").map((p) => `<p>${p}</p>`).join("")}`;
  }

  window.ECO = {
    t,
    lang: () => state.lang,
    onLang(fn) { listeners.push(fn); },
    openMaterials() { document.getElementById("materials")?.classList.add("open"); }
  };

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function internalDestination(anchor, event) {
    if (!anchor || event.defaultPrevented || event.button !== 0) return "";
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return "";
    if (anchor.target && anchor.target !== "_self") return "";
    if (anchor.hasAttribute("download")) return "";
    const href = anchor.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return "";
    let url;
    try { url = new URL(anchor.href, location.href); } catch (err) { return ""; }
    if (url.origin !== location.origin) return "";
    if (url.pathname === location.pathname && url.search === location.search) return "";
    return url.href;
  }

  let leaving = false;
  function setupMotion() {
    if (prefersReducedMotion()) return;
    document.body.classList.add("motion");
    const viewHeight = window.innerHeight || 800;
    const sections = [...document.querySelectorAll("main > section")];
    sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top < viewHeight * 0.82) return;
      section.classList.add("reveal");
      section.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
    });
    const hidden = document.querySelectorAll("main > section.reveal");
    if (hidden.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.14, rootMargin: "0px 0px -6% 0px" });
      hidden.forEach((section) => observer.observe(section));
    }
    document.addEventListener("click", (event) => {
      const anchor = event.target.closest("a");
      const destination = internalDestination(anchor, event);
      if (!destination || leaving) return;
      event.preventDefault();
      leaving = true;
      document.body.classList.add("is-leaving");
      window.setTimeout(() => { location.href = destination; }, 300);
    });
    window.addEventListener("pageshow", () => {
      leaving = false;
      document.body.classList.remove("is-leaving");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    mount();
    document.dispatchEvent(new Event("ecofor:ready"));
    setupMotion();
  });
})();
