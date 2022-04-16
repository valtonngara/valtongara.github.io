const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const records_wrap = document.querySelector(".records");
const records_number = document.querySelectorAll(".number");
const footer_input = document.querySelector(".footer-input");


filter_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filter_btns.forEach((button) => button.classList.remove("active"));
      btn.classList.add("active");
  
      let filterValue = btn.dataset.filter;
  
      $(".grid").isotope({ filter: filterValue });
    });
});

$(".grid").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    trasnsitionDuration: "0.6s",
  });

window.addEventListener("scroll", () => {
  skillsEffect();
  countUp();
})

footer_input.addEventListener("focus", () =>{
  footer_input.classList.add("focus");
}
)

footer_input.addEventListener("blur", () =>{
  if (footer_input.value != "") return;
  footer_input.classList.remove("focus");
}
)


function checkScroll(el) {
    let rect = el.getBoundingClientRect();

    if (window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
  }

function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bars.forEach(skill => (skill.style.width = skill.dataset.progress));
}

function countUp() {
  if (!checkScroll(records_wrap)) return;
    records_number.forEach((numb) => {
      const updateCount = () => {
        let currentNum = +numb.innerText;
        let maxNum = +numb.dataset.num;
        let speed = 100;
        const increment = Math.ceil(maxNum / speed);

        if (currentNum < maxNum) {
          numb.innerText = currentNum + increment;
          setTimeout(updateCount, 1);
        } else {
          numb.innerText = maxNum;
        }
      };
      
      setTimeout(updateCount, 800);
    }); 
}