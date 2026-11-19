let d = new Date();
document.getElementById("year").innerHTML = `&copy; ${d.getFullYear()}  &#10070; Darwin J. Tovar &#10070; Venezuela`;
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

document.querySelector("#hamburger").addEventListener("click", function() {
    const nav = document.querySelector(".nav-home");
    nav.classList.toggle("show");
    if (nav.classList.contains("show")) {
        document.getElementById("hamburger").textContent = "X";
    }
    else {
        document.getElementById("hamburger").textContent = "☰";
    }
});

document.addEventListener("DOMContentLoaded", () => {

  const timestampInput = document.querySelector("#timestamp");
  if (timestampInput) {
    timestampInput.value = new Date().toISOString();
  }


  const openButtons = document.querySelectorAll(".cta-button");
  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.dataset.modal;
      const modal = document.getElementById(modalId);
      if (modal && typeof modal.showModal === "function") {
        modal.showModal();
      }
    });
  });

  
  const modals = document.querySelectorAll("dialog.membership-modal");
  modals.forEach((modal) => {
    const closeBtn = modal.querySelector(".close-modal");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => modal.close());
    }

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.close();
      }
    });
  });
});