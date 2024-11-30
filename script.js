function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
const  typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer.', 'Web Designer','Graphics Designer.', 'Content Creator','Social media manager'],
    typeSpeed: 80,
    backSpeed:80,
    backDelay:1200,
    loop: true,
  });