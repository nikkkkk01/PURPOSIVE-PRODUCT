function showPaymentForm() {
    const existingForm = document.getElementById('payment-form');
    if (existingForm) {
      existingForm.style.display = 'block';
      return;
    }

    const paymentForm = document.createElement('form');
    paymentForm.id = 'payment-form';
  
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.name = 'name';
    nameInput.placeholder = 'Name';
    nameInput.required = true;
  
    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.id = 'phone';
    phoneInput.name = 'phone';
    phoneInput.placeholder = 'Phone Number';
    phoneInput.required = true;
  
    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.id = 'address';
    addressInput.name = 'address';
    addressInput.placeholder = 'Address';
    addressInput.required = true;
  
    const paymentMethodSelect = document.createElement('select');
    paymentMethodSelect.id = 'payment-method';
    paymentMethodSelect.name = 'payment-method';
    paymentMethodSelect.required = true;
  
    const gcashOption = document.createElement('option');
    gcashOption.value = 'gcash';
    gcashOption.text = 'GCASH';
  
    paymentMethodSelect.appendChild(gcashOption);
  
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Pay Now';
  
    paymentForm.appendChild(nameInput);
    paymentForm.appendChild(phoneInput);
    paymentForm.appendChild(addressInput);
    paymentForm.appendChild(paymentMethodSelect);
    paymentForm.appendChild(submitButton);
  
    const paymentSection = document.getElementById('payment-form-section');
    paymentSection.appendChild(paymentForm);
    paymentSection.style.display = 'block';
  
    paymentForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const address = document.getElementById('address').value;
      const paymentMethod = document.getElementById('payment-method').value;
  
      console.log('Processing payment...');
      console.log(`Name: ${name}`);
      console.log(`Phone: ${phone}`);
      console.log(`Address: ${address}`);
      console.log(`Payment Method: ${paymentMethod}`);
  
      window.location.href = 'payment-success.html';
    });
  }
  
  const buyButton = document.querySelector('.buy-button');
  const addToCartButton = document.querySelector('.add-to-cart-button');
  
  buyButton.addEventListener('click', showPaymentForm);
  addToCartButton.addEventListener('click', showPaymentForm);
  