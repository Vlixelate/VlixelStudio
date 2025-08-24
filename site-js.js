
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
      bsCollapse.hide();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const image = document.getElementById("musicImage");
  const audio = document.getElementById("myAudio");

  image.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      image.classList.add("beat");
    } else {
      audio.pause();
      image.classList.remove("beat");
    }
  });

  audio.addEventListener("ended", () => {
    image.classList.remove("beat");
  });
});
