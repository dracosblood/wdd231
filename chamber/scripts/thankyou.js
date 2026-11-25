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
  const summaryContainer = document.querySelector("#application-summary");
  if (!summaryContainer) return;

  const params = new URLSearchParams(window.location.search);

  const fields = [
    { label: "First Name", key: "first-name" },
    { label: "Last Name", key: "last-name" },
    { label: "Email Address", key: "email" },
    { label: "Mobile Phone", key: "phone" },
    { label: "Business / Organization Name", key: "organization" },
    { label: "Submitted Timestamp", key: "timestamp" }
  ];

  const list = document.createElement("dl");
  list.classList.add("submission-list");

  fields.forEach(({ label, key }) => {
    const dt = document.createElement("dt");
    dt.textContent = label;

    const dd = document.createElement("dd");
    const rawValue = params.get(key);

    if (key === "timestamp" && rawValue) {
      const parsedDate = new Date(rawValue);
      dd.textContent = Number.isNaN(parsedDate.getTime())
        ? rawValue
        : parsedDate.toLocaleString();
    } else {
      dd.textContent = rawValue && rawValue.trim() !== "" ? rawValue : "Not provided";
    }

    list.appendChild(dt);
    list.appendChild(dd);
  });

  summaryContainer.appendChild(list);
});