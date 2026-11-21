// Shared behaviour: nav state, mobile menu, reveal on scroll, scroll-to-top
(function(){
  const nav=document.querySelector('.nav');
  const onScroll=()=>{ nav&&nav.classList.toggle('scrolled',scrollY>40); top&&top.classList.toggle('show',scrollY>400); };
  const top=document.querySelector('.totop');
  addEventListener('scroll',onScroll,{passive:true}); onScroll();
  top&&top.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
  const ov=document.querySelector('.overlay');
  document.querySelector('.burger')?.addEventListener('click',()=>ov.classList.add('open'));
  ov?.querySelector('.close').addEventListener('click',()=>ov.classList.remove('open'));
  const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }),{threshold:.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
})();
