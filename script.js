let currentType = 'pickup';

function showForm(type) {
  currentType = type;
  
  // Update buttons
  document.querySelectorAll('.type-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Show/hide address field
  const addressField = document.getElementById('address-field');
  if (type === 'delivery') {
    addressField.classList.remove('hidden');
  } else {
    addressField.classList.add('hidden');
  }
}

function submitOrder(event) {
  event.preventDefault();
  
  const form = event.target;
  const name = form.querySelector('input[type="text"]').value;
  const food = form.querySelector('select').value;
  const quantity = form.querySelector('input[type="number"]').value;
  
  let message = `Thank you ${name}! Your order for ${quantity} ${food} has been received. `;
  
  if (currentType === 'delivery') {
    const address = form.querySelector('textarea').value;
    message += `We'll deliver to ${address} within 30 minutes.`;
  } else {
    message += `We'll deliver your order to your table as soon as it is ready.`;
  }
  
  // Show success message
  document.getElementById('msg-text').textContent = message;
  document.getElementById('success-msg').classList.add('show');
  
  // Reset form
  form.reset();
}

function closeMsg() {
  document.getElementById('success-msg').classList.remove('show');
}

// Close message when clicking outside
document.addEventListener('click', function(event) {
  const msg = document.getElementById('success-msg');
  if (event.target === msg) {
    closeMsg();
  }
});