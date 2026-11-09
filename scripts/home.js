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






const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    completed: true
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    completed: true
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    completed: true
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    completed: false
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    completed: true
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Web Frontend Development I',
    credits: 2,
    certificate: 'Web and Computer Programming',
    completed: false
  }
];


const container = document.getElementById('courses-container'); 
const totalCreditsContainer = document.getElementById('credits'); 
const allBtn = document.getElementById('all');
const cseBtn = document.getElementById('cse');
const wddBtn = document.getElementById('wdd');


function displayCourses(coursesList) {
  container.innerHTML = "";
  
  coursesList.forEach(course => {
    const card = document.createElement('div');
    card.classList.add('course-card');
    
   
    if (course.completed) {
      card.classList.add('completed');
    }

    card.innerHTML = `
      <h3>${course.subject} ${course.number}</h3>
      <p>${course.title}</p>
      <p>Crédits: ${course.credits}</p>
    `;

    container.appendChild(card);
  });
}


function calculateTotalCredits(coursesList) {
  const total = coursesList.reduce((sum, course) => sum + course.credits, 0);
  if (totalCreditsContainer) {
    totalCreditsContainer.textContent = `The total number of credits listed above is ${total}.`;
  }
}


allBtn.addEventListener('click', () => {
  displayCourses(courses);
  calculateTotalCredits(courses);
});

cseBtn.addEventListener('click', () => {
  const filtered = courses.filter(course => course.subject === 'CSE');
  displayCourses(filtered);
  calculateTotalCredits(filtered);
});

wddBtn.addEventListener('click', () => {
  const filtered = courses.filter(course => course.subject === 'WDD');
  displayCourses(filtered);
  calculateTotalCredits(filtered);
});


displayCourses(courses);
calculateTotalCredits(courses);