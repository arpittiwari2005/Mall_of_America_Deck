(function(){
  // ── SEQUENCE TIMING (ms) ──
  const FRAMES = [
    {id:'cf1', dur:3000},
    {id:'cf2', dur:3500},
    {id:'cf3', dur:3500},
    {id:'cf4', dur:3000},
    {id:'cf5', dur:4000},
  ];
  const TOTAL = FRAMES.reduce((a,f)=>a+f.dur,0);
  let current = 0;
  let elapsed = 0;
  let montageInterval = null;
  let progressInterval = null;
  let frameTimeout = null;
  let started = false;

  const intro  = document.getElementById('cinematic-intro');
  const bar    = document.getElementById('intro-progress');

  function showFrame(idx){
    FRAMES.forEach((f,i)=>{
      const el = document.getElementById(f.id);
      el.classList.toggle('active', i===idx);
    });
  }

  function startMontage(){
    let ms = 0;
    const slides = document.querySelectorAll('.montage-slide');
    const flash  = document.getElementById('flashEl');
    slides.forEach(s=>s.classList.remove('show'));
    slides[0].classList.add('show');

    montageInterval = setInterval(()=>{
      slides.forEach(s=>s.classList.remove('show'));
      ms = (ms+1) % slides.length;
      slides[ms].classList.add('show');
      // white flash
      flash.style.animation='none';
      flash.offsetHeight; // reflow
      flash.style.animation='flashCut .12s ease';
    }, 550);
  }

  // inject flash keyframe
  const sty = document.createElement('style');
  sty.textContent='@keyframes flashCut{0%{opacity:.35}100%{opacity:0}}';
  document.head.appendChild(sty);

  function stopMontage(){ if(montageInterval) clearInterval(montageInterval); }

  function advance(){
    if(current >= FRAMES.length - 1) return;
    if(current === 2) stopMontage(); // leaving frame 3
    current++;
    showFrame(current);
    if(current === 2) startMontage(); // entering frame 3
    if(current < FRAMES.length - 1){
      frameTimeout = setTimeout(advance, FRAMES[current].dur);
    }
  }

  function startProgress(){
    const startTime = Date.now();
    progressInterval = setInterval(()=>{
      const pct = Math.min(((Date.now()-startTime)/TOTAL)*100, 100);
      bar.style.width = pct + '%';
    }, 50);
  }

  function runIntro(){
    if(started) return;
    started = true;
    showFrame(0);
    startProgress();
    frameTimeout = setTimeout(advance, FRAMES[0].dur);
    bar.style.transitionDuration = TOTAL + 'ms';
  }

  window.skipIntro = function(){
    clearTimeout(frameTimeout);
    clearInterval(montageInterval);
    clearInterval(progressInterval);
    stopMontage();
    intro.classList.add('fade-out');
    document.body.style.overflow='';
    setTimeout(()=>{ intro.style.display='none'; }, 800);
  };

  // Start immediately
  document.body.style.overflow='hidden';
  runIntro();

  // Auto-dismiss after full sequence
  setTimeout(()=>{
    if(!intro.classList.contains('fade-out')) skipIntro();
  }, TOTAL + 1500);
})();


// NAV SCROLL
window.addEventListener('scroll',()=>{
  const nav=document.getElementById('navbar');
  nav.style.background=window.scrollY>50?'rgba(5,3,10,0.95)':'rgba(5,3,10,0.7)';
});

// COUNTER ANIMATION
function animateCounter(el,target,isFloat){
  const dur=2000,fps=60,steps=dur/(1000/fps);
  let cur=0,inc=target/steps;
  const t=setInterval(()=>{
    cur+=inc;
    if(cur>=target){cur=target;clearInterval(t);}
    el.textContent=isFloat?cur.toFixed(1):Math.floor(cur);
  },1000/fps);
}
const nums=document.querySelectorAll('.hero-stat .num');
let started=false;
const heroObs=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting&&!started){
    started=true;
    nums.forEach(el=>{
      const t=parseFloat(el.dataset.target);
      animateCounter(el,t,t%1!==0);
    });
  }
},{threshold:.5});
if(nums.length)heroObs.observe(nums[0]);

// REVEAL ON SCROLL
const reveals=document.querySelectorAll('.reveal');
const revObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revObs.unobserve(e.target);}});
},{threshold:.12});
reveals.forEach(el=>revObs.observe(el));

// TABS
function switchTab(id){
  document.querySelectorAll('.tab').forEach((t,i)=>{
    const ids=['luxury','midtier','dining','popup'];
    t.classList.toggle('active',ids[i]===id);
  });
  document.querySelectorAll('.tab-panel').forEach(p=>{
    p.classList.toggle('active',p.id==='tab-'+id);
  });
}

// MODAL
function openModal(type){
  document.getElementById('modal-'+type).classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(type){
  document.getElementById('modal-'+type).classList.remove('open');
  document.body.style.overflow='';
}
document.querySelectorAll('.modal').forEach(m=>{
  m.addEventListener('click',e=>{if(e.target===m){const id=m.id.replace('modal-','');closeModal(id);}});
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape') document.querySelectorAll('.modal.open').forEach(m=>{const id=m.id.replace('modal-','');closeModal(id);});
});

// FORM SUBMIT
function submitForm(type){
  const box=document.querySelector('#modal-'+type+' .modal-box');
  box.innerHTML=`<div style="text-align:center;padding:40px 0">
    <div style="font-size:4rem;margin-bottom:24px">🎉</div>
    <h2 style="font-family:Playfair Display,serif;font-size:1.8rem;margin-bottom:12px">Inquiry Received!</h2>
    <p style="color:#9B97B2;line-height:1.7">Thank you for reaching out. A member of our partnerships team will be in touch within <strong style="color:#C9A84C">24 business hours</strong>.</p>
    <button class="btn-primary" style="margin-top:32px" onclick="closeModal('${type}');location.reload()">Back to Deck</button>
  </div>`;
}

// STAGGER ANIMATION for fact cards
document.querySelectorAll('.why-facts .fact-card').forEach((c,i)=>{
  c.style.transitionDelay=i*0.1+'s';
});
document.querySelectorAll('.strip-stat').forEach((c,i)=>{
  c.style.transitionDelay=i*0.15+'s';
});

// ── SIDE NAV SCROLL SPY ──
(function(){
  const sections = ['hero','why','retail','events','sponsorship','leasing','contact'];
  const items    = document.querySelectorAll('.sn-item');
  function onScroll(){
    let current = 'hero';
    sections.forEach(id=>{
      const el = document.getElementById(id);
      if(!el) return;
      if(window.scrollY >= el.offsetTop - 200) current = id;
    });
    items.forEach(item=>{
      item.classList.toggle('sn-active', item.dataset.section === current);
    });
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();