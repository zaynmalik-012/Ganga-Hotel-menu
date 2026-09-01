 const icons = {
    idli: `<svg viewBox="0 0 40 40"><ellipse cx="20" cy="15" rx="13" ry="8" fill="#fff"/><ellipse cx="20" cy="15" rx="13" ry="8" fill="none" stroke="#c9a24a" stroke-width="1.5"/><ellipse cx="20" cy="25" rx="15" ry="8.5" fill="#fdf6e3"/><ellipse cx="20" cy="25" rx="15" ry="8.5" fill="none" stroke="#c9a24a" stroke-width="1.5"/></svg>`,
    vada: `<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="14" fill="#c9862f"/><circle cx="20" cy="20" r="14" fill="none" stroke="#8a5a1a" stroke-width="1.5"/><circle cx="20" cy="20" r="5" fill="#fdf6e3"/></svg>`,
    dosa: `<svg viewBox="0 0 40 40"><path d="M6 24 Q6 8 22 8 Q36 8 34 22 Q30 34 16 32 Q6 30 6 24Z" fill="#e8c15c"/><path d="M6 24 Q6 8 22 8 Q36 8 34 22 Q30 34 16 32 Q6 30 6 24Z" fill="none" stroke="#a9781f" stroke-width="1.5"/></svg>`,
    rice: `<svg viewBox="0 0 40 40"><path d="M6 20a14 10 0 0 0 28 0Z" fill="#f4ede0"/><path d="M6 20a14 10 0 0 0 28 0" fill="none" stroke="#a9781f" stroke-width="1.5"/><ellipse cx="20" cy="20" rx="14" ry="5" fill="#fff8ea"/><ellipse cx="20" cy="20" rx="14" ry="5" fill="none" stroke="#a9781f" stroke-width="1.2"/><path d="M14 12 q1 -4 3 -6 M20 10 q0 -4 1 -6 M26 12 q-1 -4 -2 -6" stroke="#9aa77a" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,
    porridge: `<svg viewBox="0 0 40 40"><path d="M8 18a12 9 0 0 0 24 0Z" fill="#f0d99a"/><path d="M8 18a12 9 0 0 0 24 0" fill="none" stroke="#a9781f" stroke-width="1.5"/><ellipse cx="20" cy="18" rx="12" ry="4.5" fill="#f7e6ba"/><circle cx="16" cy="17" r="1.4" fill="#8a5a1a"/><circle cx="22" cy="16" r="1.4" fill="#8a5a1a"/><circle cx="20" cy="19" r="1.4" fill="#8a5a1a"/></svg>`,
    puri: `<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="13" fill="#e6b34a"/><circle cx="20" cy="20" r="13" fill="none" stroke="#a9781f" stroke-width="1.5"/><circle cx="20" cy="20" r="8" fill="#f3cd76" opacity="0.7"/></svg>`,
    fritter: `<svg viewBox="0 0 40 40"><path d="M10 24c-2-6 3-13 10-13s12 7 10 13-9 8-10 8-8-2-10-8Z" fill="#d98d2f"/><path d="M10 24c-2-6 3-13 10-13s12 7 10 13-9 8-10 8-8-2-10-8Z" fill="none" stroke="#8a5a1a" stroke-width="1.5"/></svg>`,
    sweet: `<svg viewBox="0 0 40 40"><circle cx="20" cy="19" r="12" fill="#7a4620"/><circle cx="20" cy="19" r="12" fill="none" stroke="#4a2a10" stroke-width="1.5"/><path d="M10 28q10 8 20 0" stroke="#e0993a" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
    bottle: `<svg viewBox="0 0 40 40"><rect x="16" y="6" width="8" height="6" rx="1.5" fill="#134E4A"/><path d="M14 14c0-2 2-3 2-3h8s2 1 2 3v18a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3Z" fill="#cfe9e6" stroke="#134E4A" stroke-width="1.5"/></svg>`,
    tea: `<svg viewBox="0 0 40 40"><path d="M8 16h20v9a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8Z" fill="#c9862f" stroke="#8a5a1a" stroke-width="1.5"/><path d="M28 18c4 0 5 3 5 5s-1 5-5 5" fill="none" stroke="#8a5a1a" stroke-width="1.8"/><path d="M14 12q1-3 3-4M20 11q0-3 1-4M24 12q-1-3-2-4" stroke="#8a5a1a" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,
    coffee: `<svg viewBox="0 0 40 40"><path d="M13 14h14l-2 8a5 5 0 0 1-5 4h-0a5 5 0 0 1-5-4Z" fill="#E0993A"/><ellipse cx="20" cy="14" rx="7" ry="2" fill="#F3C878"/><path d="M11 22h18l-1.4 5a6 6 0 0 1-6 5h-3.2a6 6 0 0 1-6-5Z" fill="#134E4A"/><ellipse cx="20" cy="22" rx="9" ry="2.2" fill="#1c6b64"/></svg>`,
    milk: `<svg viewBox="0 0 40 40"><path d="M15 8h10l1 4-1 2v16a2 2 0 0 1-2 2H17a2 2 0 0 1-2-2V14l-1-2Z" fill="#fdfdfd" stroke="#c9a24a" stroke-width="1.5"/><rect x="14" y="16" width="12" height="12" fill="#eef6f4"/></svg>`,
    boost: `<svg viewBox="0 0 40 40"><path d="M14 10h12l-1 20a2 2 0 0 1-2 2H17a2 2 0 0 1-2-2Z" fill="#7a4620" stroke="#4a2a10" stroke-width="1.5"/><rect x="13" y="10" width="14" height="4" fill="#4a2a10"/></svg>`
  };

  const menuItems = [
    ["Shira","1 plate",null,35,"porridge"],
    ["Upit","1 plate",null,30,"porridge"],
    ["Idli (2 pieces)","1 plate",25,40,"idli"],
    ["Idli Wada (2+1 pieces)","1 plate",50,60,"idli"],
    ["Wada Sambar (2 pieces)","1 plate",30,60,"vada"],
    ["Puri Bhaji (4 pieces)","1 plate",35,70,"puri"],
    ["Susla","1 plate",25,35,"rice"],
    ["Aalubhat","1 plate",30,40,"rice"],
    ["Masala Rice","1 plate",30,40,"rice"],
    ["Masala Dosa","1 plate",null,60,"dosa"],
    ["Uttappa","1 plate",null,70,"dosa"],
    ["Set Dosa","1 plate",null,70,"dosa"],
    ["Meals","1 plate",null,90,"rice"],
    ["Mirchi Bhaji (4 pieces)","1 plate",null,30,"fritter"],
    ["Pakoda (50 gm)","1 plate",null,35,"fritter"],
    ["Khara (50 gm)","1 plate",null,35,"fritter"],
    ["Papad (50 gm)","1 plate",null,35,"puri"],
    ["Balusha (1 piece)","1 plate",null,25,"sweet"],
    ["Jamun (2 pieces)","1 plate",25,"50*","sweet"],
    ["Water Bottle","1 litre","10 (half ltr)",20,"bottle"],
  ];

  const teaItems = [
    ["Tea","cup",10,20,"tea"],
    ["Special Tea","cup",15,25,"tea"],
    ["Coffee","cup",15,25,"coffee"],
    ["Boost","cup",15,25,"boost"],
    ["Black Tea (Decoction) / Lemon","cup",10,20,"tea"],
    ["Milk","cup",15,25,"milk"],
  ];

  function renderRows(container, items){
    const el = document.getElementById(container);
    el.innerHTML = items.map((it) => {
      const [name, qty, half, full, icon] = it;
      const halfCell = half ? `₹${half}` : `<span class="price dash">—</span>`;
      return `<div class="row">
        <div class="dish-icon">${icons[icon] || ''}</div>
        <div class="item">
          <div class="name"><span class="veg-mark"></span>${name}</div>
          <div class="qty">${qty}</div>
        </div>
        <div class="price">${half ? '₹'+half : '<span class="price dash">—</span>'}</div>
        <div class="price">₹${full}</div>
      </div>`;
    }).join('');
  }

  renderRows('rows-menu', menuItems);
  renderRows('rows-tea', teaItems);

  const tabBtns = document.querySelectorAll('.tab-btn');
  const highlight = document.getElementById('tabHighlight');
  const panels = { menu: document.getElementById('panel-menu'), tea: document.getElementById('panel-tea') };

  tabBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      highlight.style.transform = `translateX(${idx * 100}%)`;
      Object.values(panels).forEach(p => p.classList.remove('active'));
      panels[btn.dataset.panel].classList.add('active');
      observeRows();
    });
  });

  function observeRows(){
    const rows = document.querySelectorAll('.panel.active .row:not(.in-view)');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in-view'); io.unobserve(e.target); } });
    }, {threshold:0.15});
    rows.forEach(r => io.observe(r));
  }
  observeRows();

  const quotes = ["Har maslay ka hal — ek cup chai","No chai, no mood","Good tea fixes almost everything"];
  let qi = 0;
  const quoteEl = document.getElementById('quoteText');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reduceMotion){
    setInterval(() => {
      quoteEl.classList.remove('show');
      setTimeout(() => { qi = (qi + 1) % quotes.length; quoteEl.textContent = quotes[qi]; quoteEl.classList.add('show'); }, 400);
    }, 3800);
  }