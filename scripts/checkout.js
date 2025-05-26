// Checkout page functionality
let checkoutData = null;

function initializeCheckoutPage() {
    // Load checkout data from localStorage
    const storedData = localStorage.getItem('checkoutData');
    if (!storedData) {
        showMessage('Không có dữ liệu đơn hàng!', 'error');
        window.location.href = 'cart.html';
        return;
    }
    
    checkoutData = JSON.parse(storedData);
    
    displayOrderSummary();
    initializeForm();
}

function displayOrderSummary() {
    const orderItems = $('orderItems');
    const checkoutSubtotal = $('checkoutSubtotal');
    const checkoutShipping = $('checkoutShipping');
    const checkoutTotal = $('checkoutTotal');
    
    if (!orderItems || !checkoutData) return;
    
    // Display order items
    const orderItemsHTML = checkoutData.items.map(item => {
        if (!item.product) return '';
        
        return `
            <div class="order-item">
                <div class="order-item-image">
                    <img src="${item.product.image}" alt="${item.product.name}">
                </div>
                <div class="order-item-info">
                    <h4>${item.product.name}</h4>
                    <p>Số lượng: ${item.quantity}</p>
                </div>
                <div class="order-item-price">
                    ${formatPrice(item.product.price * item.quantity)}
                </div>
            </div>
        `;
    }).join('');
    
    orderItems.innerHTML = orderItemsHTML;
    
    // Display totals
    if (checkoutSubtotal) checkoutSubtotal.textContent = formatPrice(checkoutData.subtotal);
    if (checkoutShipping) checkoutShipping.textContent = formatPrice(checkoutData.shipping);
    if (checkoutTotal) checkoutTotal.textContent = formatPrice(checkoutData.total);
}

function initializeForm() {
    const form = $('checkoutForm');
    if (!form) return;
    
    // Add form validation
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearFieldError(input));
    });
}

function validateField(field) {
    const fieldName = field.name;
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Clear previous error
    clearFieldError(field);
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Trường này là bắt buộc';
    }
    
    // Specific field validations
    switch (fieldName) {
        case 'fullName':
            if (value && value.length < 2) {
                isValid = false;
                errorMessage = 'Họ tên phải có ít nhất 2 ký tự';
            }
            break;
            
        case 'email':
            if (value && !isValidEmail(value)) {
                isValid = false;
                errorMessage = 'Email không hợp lệ';
            }
            break;
            
        case 'phone':
            if (value && !isValidPhone(value)) {
                isValid = false;
                errorMessage = 'Số điện thoại không hợp lệ';
            }
            break;
            
        case 'address':
            if (value && value.length < 10) {
                isValid = false;
                errorMessage = 'Địa chỉ phải có ít nhất 10 ký tự';
            }
            break;
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    const errorElement = $(field.name + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
    field.style.borderColor = 'hsl(var(--error))';
}

function clearFieldError(field) {
    const errorElement = $(field.name + 'Error');
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }
    field.style.borderColor = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Vietnamese phone number patterns
    const phoneRegex = /^(\+84|84|0)[3|5|7|8|9][0-9]{8}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

function validateForm() {
    const form = $('checkoutForm');
    if (!form) return false;
    
    const requiredFields = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isFormValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isFormValid = false;
        }
    });
    
    return isFormValid;
}

function submitOrder() {
    if (!validateForm()) {
        showMessage('Vui lòng kiểm tra lại thông tin đã nhập!', 'error');
        return;
    }
    
    if (!checkoutData || checkoutData.items.length === 0) {
        showMessage('Không có sản phẩm trong đơn hàng!', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = document.querySelector('.place-order-btn');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang xử lý...';
    }
    
    // Simulate order processing
    setTimeout(() => {
        // Generate order number
        const orderNumber = 'TS' + Date.now().toString().slice(-8);
        
        // Show success message
        showOrderSuccess(orderNumber, checkoutData.total);
        
        // Clear cart and checkout data
        clearCart();
        localStorage.removeItem('checkoutData');
        
        // Re-enable button (in case user stays on page)
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Xác nhận đặt hàng';
        }
    }, 2000);
}

function showOrderSuccess(orderNumber, total) {
    const checkoutContent = $('checkoutContent');
    const orderSuccess = $('orderSuccess');
    const orderNumberEl = $('orderNumber');
    const orderTotalEl = $('orderTotal');
    
    if (checkoutContent) checkoutContent.style.display = 'none';
    if (orderSuccess) orderSuccess.style.display = 'block';
    if (orderNumberEl) orderNumberEl.textContent = orderNumber;
    if (orderTotalEl) orderTotalEl.textContent = formatPrice(total);
    
    // Scroll to top to show success message
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize checkout page when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCheckoutPage);
} else {
    initializeCheckoutPage();
}

// Export functions for global access
window.submitOrder = submitOrder;
