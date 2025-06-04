
document.addEventListener("DOMContentLoaded", () => {
  // Elementos do menu mobile
  const mobileMenuToggle = document.getElementById("mobileMenuToggle")
  const mobileNavDropdown = document.getElementById("mobileNavDropdown")

  // Verifica se os elementos existem
  if (mobileMenuToggle && mobileNavDropdown) {
    // Toggle do menu mobile
    mobileMenuToggle.addEventListener("click", (e) => {
      e.preventDefault()
      e.stopPropagation()

      // Toggle das classes
      mobileMenuToggle.classList.toggle("active")
      mobileNavDropdown.classList.toggle("active")

      console.log("Menu toggled") // Para debug
    })

    // Fecha o menu ao clicar fora
    document.addEventListener("click", (e) => {
      if (!mobileMenuToggle.contains(e.target) && !mobileNavDropdown.contains(e.target)) {
        mobileMenuToggle.classList.remove("active")
        mobileNavDropdown.classList.remove("active")
      }
    })

    // Fecha o menu ao clicar em um link
    const mobileNavLinks = mobileNavDropdown.querySelectorAll("a")
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuToggle.classList.remove("active")
        mobileNavDropdown.classList.remove("active")
      })
    })
  }



    
    // Smooth scrolling para links internos
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Adiciona classe ativa ao link atual
    function setActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(function(link) {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // Executa a função de link ativo
    setActiveLink();
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.desktop-nav');
        if (window.scrollY > 100) {
            if (navbar) navbar.classList.add('scrolled');
        } else {
            if (navbar) navbar.classList.remove('scrolled');
        }
    });
    
});
