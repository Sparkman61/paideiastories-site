/* Paideia Stories — Shared Nav (hamburger) */
(function(){
  var btn = document.getElementById('nav-hamburger');
  var menu = document.getElementById('nav-mobile');
  if (!btn || !menu) return;

  btn.addEventListener('click', function(){
    var open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on link tap
  menu.addEventListener('click', function(e){
    if (e.target.tagName === 'A'){
      menu.classList.remove('open');
      btn.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Close on resize to desktop
  window.addEventListener('resize', function(){
    if (window.innerWidth > 900){
      menu.classList.remove('open');
      btn.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
})();
