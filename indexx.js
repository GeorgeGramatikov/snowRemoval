

document.addEventListener('DOMContentLoaded', function () {
  const callbackBtn = document.getElementById('callbackBtn');
  const scheduleBtn = document.getElementById('scheduleBtn');
  const allReviewsBtn = document.getElementById('allReviewsBtn');
  const quoteForm = document.getElementById('quoteForm');

  callbackBtn.addEventListener('click', () => {
    window.location.href = 'tel:2897165557';
  });

  scheduleBtn.addEventListener('click', () => {
    document.getElementById('quoteForm').scrollIntoView({ behavior: 'smooth' });
  });

  allReviewsBtn.addEventListener('click', () => {
    window.open('https://www.google.com/', '_blank');
  });

  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(quoteForm);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
      consent: formData.get('consent') ? true : false,
    };

    console.log('Form submitted:', data);

    alert('Thank you! Your request has been submitted.');

    quoteForm.reset();
  });
});