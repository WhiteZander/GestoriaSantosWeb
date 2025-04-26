window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    // Si el scroll vertical supera 50px, se añade la clase shrink
    if (window.scrollY > 35) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
  }
  });

  const burger = document.querySelector(".burger");

  const menuNavegacion = document.querySelector(".menuNavegacion");


  burger.addEventListener("click",()=>{
    menuNavegacion.classList.toggle("active");
  })

