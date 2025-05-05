document.addEventListener("DOMContentLoaded", () => {
  // Cambiar el estilo de la barra de navegación al hacer scroll
  const navbar = document.querySelector(".navbar")

  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.style.padding = "0.5rem 0"
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
      } else {
        navbar.style.padding = "1rem 0"
        navbar.style.backgroundColor = "transparent"
      }
    })
  }

  // Formulario de reserva
  const reservationForm = document.getElementById("reservation-form")

  if (reservationForm) {
    reservationForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Obtener los valores del formulario
      const restaurant = document.getElementById("restaurant").value
      const date = document.getElementById("date").value
      const time = document.getElementById("time").value
      const guests = document.getElementById("guests").value
      const name = document.getElementById("name").value
      const surname = document.getElementById("surname").value
      const phone = document.getElementById("phone").value
      const email = document.getElementById("email").value
      const comments = document.getElementById("comments").value

      // Aquí normalmente enviarías los datos a un servidor
      // Por ahora, solo mostraremos un mensaje de confirmación
      alert(`¡Gracias por su reserva ${name}! 
                  Hemos recibido su solicitud para ${guests} personas en ${restaurant} 
                  el día ${date} a las ${time}. 
                  Le contactaremos en breve para confirmar su reserva.`)

      // Resetear el formulario
      reservationForm.reset()
    })
  }

  // Animación para los elementos al hacer scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".menu-item, .team-member, .sustainability-icon, .restaurant-info h2, .restaurant-info h5, .restaurant-info p, .about-section h2, .about-section p, .philosophy-section h2, .philosophy-section p, .philosophy-list li",
    )

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (elementPosition < screenPosition) {
        element.classList.add("animate__animated")

        if (element.classList.contains("menu-item")) {
          element.classList.add("animate__fadeInUp")
        } else if (element.classList.contains("team-member")) {
          element.classList.add("animate__fadeIn")
        } else if (element.classList.contains("sustainability-icon")) {
          element.classList.add("animate__pulse")
        } else if (element.tagName === "H2") {
          element.classList.add("animate__fadeInDown")
        } else if (element.tagName === "H5") {
          element.classList.add("animate__fadeInLeft")
        } else if (element.tagName === "P") {
          element.classList.add("animate__fadeIn")
        } else if (element.tagName === "LI") {
          element.classList.add("animate__fadeInRight")
        }
      }
    })
  }

  // Aplicar animaciones al hacer hover en elementos
  const menuItems = document.querySelectorAll(".menu-item")
  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateY(-5px)"
      item.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)"
    })

    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateY(0)"
      item.style.boxShadow = "none"
    })
  })

  // Animación para imágenes
  const images = document.querySelectorAll(".restaurant-image, .about-image, .team-image")
  images.forEach((image) => {
    image.addEventListener("mouseenter", () => {
      image.style.transform = "scale(1.05)"
    })

    image.addEventListener("mouseleave", () => {
      image.style.transform = "scale(1)"
    })
  })

  // Ejecutar la animación al cargar la página y al hacer scroll
  window.addEventListener("load", animateOnScroll)
  window.addEventListener("scroll", animateOnScroll)

  // Animación para el texto del hero
  const heroText = document.querySelector(".hero-section h1")
  if (heroText) {
    setTimeout(() => {
      heroText.style.opacity = "1"
      heroText.style.transform = "translateY(0)"
    }, 500)
  }

  // Mantener activos los enlaces de navegación según la página actual
  const currentPage = window.location.pathname.split("/").pop();
  
  // Función para activar enlaces según la página actual
  function setActiveLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    const brandLink = document.querySelector('.navbar-brand');
    
    // Resetear todos los enlaces
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    
    if (brandLink) {
      brandLink.classList.remove('active');
    }
    
    // Activar enlaces según la página actual
    if (currentPage === '' || currentPage === 'index.html') {
      // En la página principal, activar SABROSO
      if (brandLink) {
        brandLink.classList.add('active');
      }
    } else {
      // En otras páginas, activar el enlace correspondiente
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
          link.classList.add('active');
        }
      });
    }
  }
  
  // Ejecutar al cargar la página
  setActiveLinks();
  
  // Manejar clic en el enlace "RESTAURANTES" para ir a la sección de restaurantes
  const restaurantesLink = document.querySelector('.nav-link[href="index.html"]');
  if (restaurantesLink) {
    restaurantesLink.addEventListener('click', function(e) {
      // Si estamos en la página de inicio
      if (currentPage === '' || currentPage === 'index.html') {
        e.preventDefault();
        const restaurantsSection = document.querySelector('.restaurants-section');
        if (restaurantsSection) {
          restaurantsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
})