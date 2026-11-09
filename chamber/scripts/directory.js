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


async function fetchMembers() {
  try {
    const response = await fetch('data/members.json');
    const data = await response.json();
    
    const directoryContainer = document.getElementById('directory');
    
    data.forEach(member => {
      const memberCard = document.createElement('div');
      memberCard.classList.add('member-card');
      

      memberCard.innerHTML = `
        <h3>${member.companyname}</h3>
        <p>${member.description}</p>
        <p>Phone: ${member.phone}</p>
        <img src="${member.image}" alt="${member.companyname}">
        <p>Website: <a href="${member.website}" target="_blank">${member.companyname}</a></p>
      `;

      directoryContainer.appendChild(memberCard);
    });

  } catch (error) {
    console.error('Error cargando los miembros:', error);
  }
}

fetchMembers();

document.getElementById("grid-view").addEventListener("click", function() {
    const directoryContainer = document.getElementById('directory');
    directoryContainer.classList.add('grid-view');
    directoryContainer.classList.remove('list-view');
});

document.getElementById("list-view").addEventListener("click", function() {
    const directoryContainer = document.getElementById('directory');
    directoryContainer.classList.add('list-view');
    directoryContainer.classList.remove('grid-view');
});

const gridButton = document.querySelector("#grid-view");
const listButton = document.querySelector("#list-view");
const display = document.querySelector("#directory");


gridButton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});


listButton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});