var hoje=new Date().toISOString().slice(0,10);
document.getElementById('ent').min=hoje;document.getElementById('sai').min=hoje;
function reservar(e){e.preventDefault();
  var f=function(d){return d.split('-').reverse().join('/')};
  document.getElementById('msg').value='Olá! Gostaria de consultar disponibilidade de '+f(document.getElementById('ent').value)+' a '+f(document.getElementById('sai').value)+' para '+document.getElementById('hosp').value+'.';
  document.getElementById('contato').scrollIntoView({behavior:'smooth'});
  document.getElementById('nome').focus({preventScroll:true});return false}
function enviar(e){e.preventDefault();document.getElementById('ok').style.display='block';e.target.reset();return false}
