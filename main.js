// Portfolio main.js — menu, top button, enquiry form -> WhatsApp/mailto
(function(){
  var menuBtn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function(){
      var open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded','false'); });
    });
  }
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  var topBtn = document.getElementById('topBtn');
  window.addEventListener('scroll', function(){
    if (topBtn) topBtn.style.display = window.scrollY > 600 ? 'block' : 'none';
  }, {passive:true});
  if (topBtn) topBtn.addEventListener('click', function(){ window.scrollTo({top:0, behavior:'smooth'}); });

  var form = document.getElementById('enquiryForm');
  function payload(){
    var n = form ? (form.name ? form.name.value : '') : '';
    var need = '';
    if (form) { var s = form.querySelector('[name=need]'); if (s) need = s.value; }
    var m = '';
    if (form) { var t = form.querySelector('[name=message]'); if (t) m = t.value; }
    return { name: (n||'').trim(), need: need, msg: (m||'').trim() };
  }
  if (form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var p = payload();
      var text = 'Hi Chinmayee, I saw your portfolio. Name: ' + (p.name || '-') + ' | Need: ' + p.need + (p.msg ? ' | Message: ' + p.msg : '');
      window.open('https://wa.me/917978601417?text=' + encodeURIComponent(text), '_blank');
    });
    var mailBtn = document.getElementById('mailBtn');
    if (mailBtn) mailBtn.addEventListener('click', function(){
      var p = payload();
      var subject = encodeURIComponent('Digital Marketing Role — via Portfolio (' + (p.name || 'Hello') + ')');
      var body = encodeURIComponent('Name: ' + (p.name || '-') + '\nNeed: ' + p.need + '\nMessage: ' + p.msg);
      window.location.href = 'mailto:tripathychinmayee1@gmail.com?subject=' + subject + '&body=' + body;
    });
  }
})();
