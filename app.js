

const sections = document.querySelectorAll('section');
const transition = document.querySelector('.trans');
const colors = ["blue", "chartreuse", "chocolate", "cadetblue"];

const tresh = {
    treshold: 0.9
}

const observer = new IntersectionObserver(navScroll, tresh);
sections.forEach(function (section) {
    observer.observe(section)
});

function navScroll(entries) {
  entries.forEach(function(entry)  {
      const className = entry.target.className;
      const activePage = document.querySelector(`[data-page="${className}"]`);
      const indecies = entry.target.getAttribute('data-index');
      const coordinates = activePage.getBoundingClientRect();

      const direction = {
          height: coordinates.height,
          width: coordinates.width,
          top: coordinates.top,
          left: coordinates.left
      };
      if (entry.isIntersecting) {
          transition.style.setProperty("height", `${direction.height}px`);
          transition.style.setProperty("width", `${direction.width}px`);
          transition.style.setProperty("top", `${direction.top}px`);
          transition.style.setProperty("left", `${direction.left}px`);
          transition.style.backgroundColor=colors[indecies];
      }
  });
}