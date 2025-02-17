// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simulate form submission (you can replace this with an actual API call)
  setTimeout(() => {
    document.getElementById('form-status').textContent = `Thank you, ${name}! Your message has been sent.`;
    document.getElementById('contact-form').reset();
  }, 1000);
});
