document.addEventListener("DOMContentLoaded", () => {
    // Select all dropdown toggle elements
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
  
        // Find the dropdown menu and arrow
        const dropdownMenu = toggle.nextElementSibling;
        const arrow = toggle.querySelector(".arrow");
  
        // Toggle visibility of the dropdown menu
        if (dropdownMenu.style.display === "block") {
          dropdownMenu.style.display = "none";
          arrow.classList.remove("rotate");
        } else {
          dropdownMenu.style.display = "block";
          arrow.classList.add("rotate");
        }
  
        // Close other open dropdowns
        document.querySelectorAll(".dropdown-menu").forEach((menu) => {
          if (menu !== dropdownMenu) {
            menu.style.display = "none";
            const otherArrow = menu.previousElementSibling.querySelector(".arrow");
            otherArrow.classList.remove("rotate");
          }
        });
      });
    });
  
    // Close dropdowns when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown-menu").forEach((menu) => {
          menu.style.display = "none";
          const arrow = menu.previousElementSibling.querySelector(".arrow");
          arrow.classList.remove("rotate");
        });
      }
    });
  });
  