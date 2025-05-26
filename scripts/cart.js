// Cart page functionality
function initializeCartPage() {
    displayCartItems();
    updateCartSummary();
}

function displayCartItems() {
    const cartContent = $('cartContent');
    const emptyCart = $('emptyCart');
    const cartSummary = $('cartSummary');
    
    if (!cartContent || !emptyCart || !cartSummary) return;
    
    if (cart.length === 0) {
        cartContent.style.display = 'none';
        cartSummary.style.display = 'none';
        emptyCart.style.display = 'block';
        return;
    }
    
    emptyCart.style.display = 'none';
    cartContent.style.display = 'block';
    cartSummary.style.display = 'block';
    
    // Create cart items HTML
    const cartItemsHTML = `
        <div class="cart-items">
            ${cart.map(item => createCartItemHTML(item)).join('')}
        </div>
    `;
    
    cartContent.innerHTML = cartItemsHTML;
}

function createCartItemHTML(cartItem) {
    const product = products.find(p => p.id === cartItem.id);
    if (!product) return '';
    
    const totalPrice = product.price * cartItem.quantity;
    
    return `
        <div class="cart-item" data-product-id="${product.id}">
            <div class="cart-item-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="cart-item-info">
                <h3>${product.name}</h3>
                <p>${getCategoryName(product.category)}</p>
                <p class="item-price">${formatPrice(product.price)} / sản phẩm</p>
            </div>
            <div class="cart-item-actions">
                <div class="cart-item-price">
                    ${formatPrice(totalPrice)}
                </div>
                <div class="cart-item-quantity">
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateQuantity(${product.id}, ${cartItem.quantity - 1})">-</button>
                        <input type="number" value="${cartItem.quantity}" min="1" max="10" 
                               onchange="updateQuantity(${product.id}, parseInt(this.value))">
                        <button class="qty-btn" onclick="updateQuantity(${product.id}, ${cartItem.quantity + 1})">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeItem(${product.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeItem(productId);
        return;
    }
    
    if (newQuantity > 10) {
        showMessage('Số lượng tối đa cho mỗi sản phẩm là 10!', 'error');
        return;
    }
    
    updateCartItemQuantity(productId, newQuantity);
    displayCartItems();
    updateCartSummary();
    
    showMessage('Đã cập nhật số lượng!', 'success');
}

function removeItem(productId) {
    const product = products.find(p => p.id === productId);
    const productName = product ? product.name : 'Sản phẩm';
    
    if (confirm(`Bạn có chắc muốn xóa "${productName}" khỏi giỏ hàng?`)) {
        removeFromCart(productId);
        displayCartItems();
        updateCartSummary();
        
        showMessage(`Đã xóa "${productName}" khỏi giỏ hàng!`, 'success');
    }
}

function updateCartSummary() {
    const subtotalEl = $('subtotal');
    const shippingEl = $('shipping');
    const totalEl = $('total');
    
    if (!subtotalEl || !shippingEl || !totalEl) return;
    
    // Calculate subtotal
    const subtotal = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);
    
    // Shipping fee
    const shipping = subtotal > 0 ? 30000 : 0; // Free shipping for orders over certain amount could be added
    
    // Total
    const total = subtotal + shipping;
    
    subtotalEl.textContent = formatPrice(subtotal);
    shippingEl.textContent = formatPrice(shipping);
    totalEl.textContent = formatPrice(total);
}

function proceedToCheckout() {
    if (cart.length === 0) {
        showMessage('Giỏ hàng trống!', 'error');
        return;
    }
    
    // Store cart summary for checkout page
    const cartSummary = {
        items: cart.map(item => {
            const product = products.find(p => p.id === item.id);
            return {
                ...item,
                product: product
            };
        }),
        subtotal: cart.reduce((sum, item) => {
            const product = products.find(p => p.id === item.id);
            return sum + (product ? product.price * item.quantity : 0);
        }, 0),
        shipping: 30000
    };
    
    cartSummary.total = cartSummary.subtotal + cartSummary.shipping;
    
    localStorage.setItem('checkoutData', JSON.stringify(cartSummary));
    window.location.href = 'checkout.html';
}

// Initialize cart page when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCartPage);
} else {
    initializeCartPage();
}

// Export functions for global access
window.updateQuantity = updateQuantity;
window.removeItem = removeItem;
window.proceedToCheckout = proceedToCheckout;
