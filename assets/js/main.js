// ! Anio actual, se usa en el footer
document.getElementById("anio").innerHTML = new Date().getFullYear();

$(() => {
  $('[data-toggle="tooltip"]').tooltip();
});

window.addEventListener("scroll", () => {
  const scroll = document.querySelector(".scrollTop");
  scroll.classList.toggle("active", window.scrollY > 100);
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
