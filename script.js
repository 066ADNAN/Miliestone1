document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll("#skills li");
  
    skills.forEach((skill) => {
      skill.addEventListener("mouseover", () => {
        skill.style.color = "#4CAF50";
      });
  
      skill.addEventListener("mouseout", () => {
        skill.style.color = "inherit";
      });
    });
  });
  