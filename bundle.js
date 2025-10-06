// минимизированный вариант твоего JS
(function(){
  const data = {
    "enjoyer-1": {title:"ENJOYER", desc:"Главная страница Enjoyer.", link:"https://t.me/+4vQilJYZHrIwMGUy"},
    "enjoyer-2": {title:"KryptoMah — Обменник", desc:"Обмен 20-21 $ , один из самых быстрых и надежных обменников, ровность его второе имя", link:"https://t.me/KryptoMahNEW"},
    "enjoyer-3": {title:"Baza777 — Магазин", desc:"БАЗА САМЫЙ ЛУЧШИЙ ШОП НА ПРОСТОРАХ СНГ", link:"https://t.me/BAZA_BEST777"}
  };

  const root = document.getElementById('root');
  root.innerHTML = `
    <header>ENJOYER</header>
    <div class="container">
      <div id="menu" class="menu">
        <div class="item" data-id="enjoyer-1">ENJOYER — Главное</div>
        <div class="item" data-id="enjoyer-2">KryptoMah — Обменник</div>
        <div class="item" data-id="enjoyer-3">Baza777 — Магазин</div>
      </div>
      <div id="details" class="details" aria-hidden="true">
        <h2 id="title"></h2>
        <p id="desc">Описание появится здесь.</p>
        <a id="chatBtn" class="btn" href="#" target="_blank" rel="noopener noreferrer">Перейти в чат</a>
        <div class="back" id="backBtn">← Назад</div>
      </div>
      <footer>EnjoyerTeam - выбирай всегда лучших</footer>
    </div>
  `;

  const menuItems = root.querySelectorAll('.item');
  const details = root.querySelector('#details');
  const titleEl = root.querySelector('#title');
  const descEl = root.querySelector('#desc');
  const chatBtn = root.querySelector('#chatBtn');
  const backBtn = root.querySelector('#backBtn');
  const menu = root.querySelector('#menu');

  menuItems.forEach(el=>{
    el.addEventListener('click',()=>{
      const id = el.dataset.id;
      const obj = data[id] || {title:el.textContent, desc:"Без описания", link:"#"};
      titleEl.textContent = obj.title;
      descEl.textContent = obj.desc;
      chatBtn.href = obj.link;
      menu.style.display = 'none';
      details.classList.add('active');
      details.setAttribute('aria-hidden','false');
    });
  });

  backBtn.addEventListener('click',()=>{
    details.classList.remove('active');
    details.setAttribute('aria-hidden','true');
    setTimeout(()=> menu.style.display='block',160);
  });
})();
