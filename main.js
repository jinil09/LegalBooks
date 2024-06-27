function togglePopup() {
  const popup = document.getElementById('customPopup');
  popup.classList.toggle('hidden-custom-popup');
}

function closePopup() {
  const popup = document.getElementById('customPopup');
  popup.classList.add('hidden-custom-popup');
}

function toggleSpecializations(checkbox, specializationId) {
  const specializations = document.getElementById(specializationId);
  const checkboxes = specializations.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(cb => cb.checked = checkbox.checked);
}

document.addEventListener('click', function(event) {
  const popup = document.getElementById('customPopup');
  const button = document.querySelector('.input-field.mb-2.md\\:mb-0.bg-blue-500');
  if (!popup.contains(event.target) && !button.contains(event.target) && !popup.classList.contains('hidden-custom-popup')) {
      closePopup();
  }
});

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  document.querySelector(".mobile-menu").classList.toggle("visible");
});
