const filter_buttons = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");




filter_buttons.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_buttons.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filtervalue = btn.dataset.filter;
    $(".grid").isotope({ filter: filtervalue });
  })
);

$(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
});



window.addEventListener("scroll", () => {
    skillsEffect();
    countUp();
  });
  
  function checkScroll(el) {
    let rect = el.getBoundingClientRect();
    if (window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
  }
  
  function skillsEffect() {
    if (!checkScroll(skills_wrap)) return;
    skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
  }