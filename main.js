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

document.getElementById('send-otp').addEventListener('click', function() {
  document.getElementById('otp-section').classList.remove('hidden');
});

document.getElementById('verify-otp').addEventListener('click', function() {
  // Add OTP verification logic here
  document.getElementById('schedule').classList.remove('hidden');
});

document.getElementById('resend-otp').addEventListener('click', function() {
  // Add resend OTP logic here
});

document.getElementById('send-email-otp').addEventListener('click', function() {
  document.getElementById('email-otp-section').classList.remove('hidden');
});

document.getElementById('verify-email-otp').addEventListener('click', function() {
  // Add your email OTP verification logic here
  document.getElementById('schedule').classList.remove('hidden');
  document.getElementById('schedule').disabled = false;
});

document.getElementById('resend-email-otp').addEventListener('click', function() {
  // Add your resend email OTP logic here
});
