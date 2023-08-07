const surveyForm = document.getElementById('surveyForm');
const pages = document.querySelectorAll('.page');
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');

let currentPage = 1;

function showPage(pageNum) {
  pages.forEach(page => page.classList.remove('active'));
  document.querySelector(`[data-page="${pageNum}"]`).classList.add('active');
}

function saveFormData() {
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    food: document.getElementById('food').value,
    color: document.getElementById('color').value,
    feedback: document.getElementById('feedback').value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

function loadFormData() {
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
    document.getElementById('name').value = formData.name || '';
    document.getElementById('email').value = formData.email || '';
    document.getElementById('food').value = formData.food || '';
    document.getElementById('color').value = formData.color || '';
    document.getElementById('feedback').value = formData.feedback || '';
  }
}

nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentPage < pages.length) {
      currentPage++;
      showPage(currentPage);
      saveFormData();
    }
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
      saveFormData();
    }
  });
});

surveyForm.addEventListener('submit', e => {
  e.preventDefault();
  // Perform submission logic here, like sending data to a server or email.
  alert('Survey submitted successfully!');
});

// Load saved form data on page load
loadFormData();
showPage(currentPage);
