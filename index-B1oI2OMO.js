(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l={"enjoyer-1":{title:"ENJOYER",desc:"Главная страница Enjoyer.",link:"https://t.me/+4vQilJYZHrIwMGUy"},"enjoyer-2":{title:"KryptoMah — Обменник",desc:"Обмен 20-21 $ , один из самых быстрых и надежных обменников, ровность его второе имя",link:"https://t.me/KryptoMahNEW"},"enjoyer-3":{title:"Baza777 — Магазин",desc:"БАЗА САМЫЙ ЛУЧШИЙ ШОП НА ПРОСТОРАХ СНГ",link:"https://t.me/BAZA_BEST777"}},r=document.getElementById("root");r.innerHTML=`
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
`;const u=r.querySelectorAll(".item"),n=r.querySelector("#details"),y=r.querySelector("#title"),f=r.querySelector("#desc"),m=r.querySelector("#chatBtn"),h=r.querySelector("#backBtn"),a=r.querySelector("#menu");u.forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.id,o=l[i]||{title:s.textContent,desc:"Без описания",link:"#"};y.textContent=o.title,f.textContent=o.desc,m.href=o.link,a.style.display="none",n.classList.add("active"),n.setAttribute("aria-hidden","false")})});h.addEventListener("click",()=>{n.classList.remove("active"),n.setAttribute("aria-hidden","true"),setTimeout(()=>a.style.display="block",160)});
