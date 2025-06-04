// Smooth scrolling para links internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})


// Menu mobile toggle
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
const desktopNav = document.querySelector(".desktop-nav")

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", () => {
    desktopNav.classList.toggle("mobile-active")
    mobileMenuToggle.classList.toggle("active")
  })
}

// Smooth scrolling para links internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})


// Navbar scroll effect (se necessário)
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".desktop-nav")
  if (window.scrollY > 100) {
    navbar?.classList.add("scrolled")
  } else {
    navbar?.classList.remove("scrolled")
  }
})
