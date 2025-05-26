// Product detail page functionality
function initializeProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (!productId) {
        showMessage('Sản phẩm không tồn tại!', 'error');
        window.location.href = 'index.html';
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        showMessage('Sản phẩm không tồn tại!', 'error');
        window.location.href = 'index.html';
        return;
    }
    
    displayProductDetails(product);
    displayProductSpecs(product);
    displayRelatedProducts(product);
    initializeImageGallery(product);
    initializeQuantityControls();
}

function displayProductDetails(product) {
    // Update breadcrumb
    const breadcrumbCategory = $('breadcrumbCategory');
    const breadcrumbProduct = $('breadcrumbProduct');
    if (breadcrumbCategory) {
        breadcrumbCategory.textContent = getCategoryName(product.category);
    }
    if (breadcrumbProduct) {
        breadcrumbProduct.textContent = product.name;
    }
    
    // Update product info
    const productName = $('productName');
    const currentPrice = $('currentPrice');
    const originalPrice = $('originalPrice');
    const discount = $('discount');
    const productDescription = $('productDescription');
    const productRating = $('productRating');
    const ratingCount = $('ratingCount');
    
    if (productName) productName.textContent = product.name;
    if (currentPrice) currentPrice.textContent = formatPrice(product.price);
    if (originalPrice) originalPrice.textContent = formatPrice(product.originalPrice);
    if (productDescription) productDescription.textContent = product.description;
    if (productRating) productRating.innerHTML = generateStars(product.rating);
    if (ratingCount) ratingCount.textContent = `(${product.reviews} đánh giá)`;
    
    if (discount) {
        const discountPercent = calculateDiscount(product.originalPrice, product.price);
        discount.textContent = `-${discountPercent}%`;
    }
    
    // Set main product image
    const mainProductImage = $('mainProductImage');
    if (mainProductImage) {
        mainProductImage.src = product.images[0] || product.image;
        mainProductImage.alt = product.name;
    }
    
    // Store current product in global variable for cart functionality
    window.currentProduct = product;
}

function displayProductSpecs(product) {
    const specsTable = $('specsTable');
    if (!specsTable || !product.specs) return;
    
    const specsHTML = Object.entries(product.specs).map(([key, value]) => `
        <div class="spec-row">
            <div class="spec-label">${key}</div>
            <div class="spec-value">${value}</div>
        </div>
    `).join('');
    
    specsTable.innerHTML = specsHTML;
}

function displayRelatedProducts(product) {
    const relatedProductsContainer = $('relatedProducts');
    if (!relatedProductsContainer) return;
    
    // Find products in the same category, excluding current product
    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4); // Show only 4 related products
    
    if (relatedProducts.length === 0) {
        relatedProductsContainer.style.display = 'none';
        return;
    }
    
    const relatedProductsGrid = relatedProductsContainer.querySelector('.products-grid');
    if (relatedProductsGrid) {
        relatedProductsGrid.innerHTML = relatedProducts.map(p => createProductCard(p)).join('');
    }
}

function initializeImageGallery(product) {
    const mainImage = $('mainProductImage');
    const thumbnailsContainer = $('imageThumbnails');
    
    if (!mainImage || !thumbnailsContainer || !product.images) return;
    
    // Create thumbnails
    const thumbnailsHTML = product.images.map((image, index) => `
        <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${image}', ${index})">
            <img src="${image}" alt="${product.name} ${index + 1}">
        </div>
    `).join('');
    
    thumbnailsContainer.innerHTML = thumbnailsHTML;
}

function changeMainImage(imageSrc, index) {
    const mainImage = $('mainProductImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (mainImage) {
        mainImage.src = imageSrc;
    }
    
    // Update active thumbnail
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function initializeQuantityControls() {
    const quantityInput = $('quantity');
    if (!quantityInput) return;
    
    // Ensure quantity stays within bounds
    quantityInput.addEventListener('change', function() {
        const value = parseInt(this.value);
        if (isNaN(value) || value < 1) {
            this.value = 1;
        } else if (value > 10) {
            this.value = 10;
        }
    });
}

function decreaseQuantity() {
    const quantityInput = $('quantity');
    if (!quantityInput) return;
    
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}

function increaseQuantity() {
    const quantityInput = $('quantity');
    if (!quantityInput) return;
    
    const currentValue = parseInt(quantityInput.value);
    if (currentValue < 10) {
        quantityInput.value = currentValue + 1;
    }
}

function addToCart() {
    if (!window.currentProduct) {
        showMessage('Có lỗi xảy ra, vui lòng tải lại trang!', 'error');
        return;
    }
    
    const quantityInput = $('quantity');
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
    
    if (isNaN(quantity) || quantity < 1) {
        showMessage('Số lượng không hợp lệ!', 'error');
        return;
    }
    
    // Add to cart using the function from main.js
    window.addToCart(window.currentProduct.id, quantity);
    
    showMessage(`Đã thêm ${quantity} ${window.currentProduct.name} vào giỏ hàng!`, 'success');
    
    // Reset quantity to 1
    if (quantityInput) {
        quantityInput.value = 1;
    }
}

// Initialize when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeProductPage);
} else {
    initializeProductPage();
}

// Export functions for global access
window.changeMainImage = changeMainImage;
window.decreaseQuantity = decreaseQuantity;
window.increaseQuantity = increaseQuantity;
window.addToCart = addToCart;
