

window.sr = ScrollReveal({ reset: true});


sr.reveal('.area-1',  { 
    rotate: { x:30, y: 0, z:0},
    duration: 2000
 });

sr.reveal('.sobre-mim', { 
    rotate: { x:30, y: 0, z:0},
    duration: 2000
});

sr.reveal('.container', { 
    rotate: { x:30, y: 0, z:0},
    duration: 2000
});




const elemento = document.querySelector();

elemento.addEventListener('click', function(event) {
  event.preventDefault();

  const destino = document.querySelector(this.hash);
  destino.scrollIntoView({
    behavior: 'smooth'
  });
});

