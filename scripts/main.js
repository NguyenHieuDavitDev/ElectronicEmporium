// Product Data - Electronics with real images
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        category: "smartphone",
        price: 29990000,
        originalPrice: 32990000,
        image: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-200x200.jpg",
        images: [
            "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-1-1.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-2-1.jpg"
        ],
        description: "iPhone 15 Pro Max với chip A17 Pro mạnh mẽ, camera 48MP chuyên nghiệp và thiết kế titanium sang trọng.",
        specs: {
            "Màn hình": "6.7 inch Super Retina XDR OLED",
            "Chip": "A17 Pro 3nm",
            "Camera": "48MP Fusion + 12MP Ultra Wide + 12MP Telephoto",
            "RAM": "8GB",
            "Bộ nhớ": "256GB",
            "Pin": "4441mAh",
            "Hệ điều hành": "iOS 17"
        },
        rating: 4.8,
        reviews: 2847,
        featured: true
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        category: "smartphone",
        price: 27990000,
        originalPrice: 31990000,
        image: "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-grey-thumbnew-200x200.jpg",
        images: [
            "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-grey-thumbnew-600x600.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-1-1.jpg",
            "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-2-1.jpg"
        ],
        description: "Samsung Galaxy S24 Ultra với S Pen tích hợp, camera 200MP và AI thông minh.",
        specs: {
            "Màn hình": "6.8 inch Dynamic AMOLED 2X",
            "Chip": "Snapdragon 8 Gen 3",
            "Camera": "200MP + 50MP + 12MP + 10MP",
            "RAM": "12GB",
            "Bộ nhớ": "512GB",
            "Pin": "5000mAh",
            "Hệ điều hành": "Android 14"
        },
        rating: 4.7,
        reviews: 1923,
        featured: true
    },
    {
        id: 3,
        name: "MacBook Pro 14 inch M3 Pro",
        category: "laptop",
        price: 54990000,
        originalPrice: 59990000,
        image: "https://cdn.tgdd.vn/Products/Images/44/309016/macbook-pro-14-inch-m3-pro-2023-xam-thumbnew-200x200.jpg",
        images: [
            "https://cdn.tgdd.vn/Products/Images/44/309016/macbook-pro-14-inch-m3-pro-2023-xam-thumbnew-600x600.jpg",
            "https://cdn.tgdd.vn/Products/Images/44/309016/macbook-pro-14-inch-m3-pro-2023-1-1.jpg",
            "https://cdn.tgdd.vn/Products/Images/44/309016/macbook-pro-14-inch-m3-pro-2023-2-1.jpg"
        ],
        description: "MacBook Pro 14 inch với chip M3 Pro mạnh mẽ, màn hình Liquid Retina XDR và thiết kế di động.",
        specs: {
            "Màn hình": "14.2 inch Liquid Retina XDR",
            "Chip": "Apple M3 Pro 11-core CPU",
            "RAM": "18GB Unified Memory",
            "Bộ nhớ": "512GB SSD",
            "GPU": "14-core GPU",
            "Pin": "Lên đến 18 giờ",
            "Hệ điều hành": "macOS Sonoma"
        },
        rating: 4.9,
        reviews: 756,
        featured: true
    },
    {
        id: 4,
        name: "Dell XPS 13 Plus",
        category: "laptop",
        price: 32990000,
        originalPrice: 36990000,
        image: "https://cdn.tgdd.vn/Products/Images/44/285071/dell-xps-13-plus-9320-i7-71013359-220722-093324-200x200.jpg",
        images: [
            "https://cdn.tgdd.vn/Products/Images/44/285071/dell-xps-13-plus-9320-i7-71013359-220722-093324-600x600.jpg",
            "https://cdn.tgdd.vn/Products/Images/44/285071/dell-xps-13-plus-9320-i7-71013359-1-1.jpg",
            "https://cdn.tgdd.vn/Products/Images/44/285071/dell-xps-13-plus-9320-i7-71013359-2-1.jpg"
        ],
        description: "Dell XPS 13 Plus với thiết kế hiện đại, màn hình 4K và hiệu năng mạnh mẽ.",
        specs: {
            "Màn hình": "13.4 inch 4K+ Touch",
            "CPU": "Intel Core i7-1360P",
            "RAM": "16GB LPDDR5",
            "Bộ nhớ": "1TB SSD",
            "GPU": "Intel Iris Xe",
            "Pin": "Lên đến 12 giờ",
            "Hệ điều hành": "Windows 11"
        },
        rating: 4.6,
        reviews: 432,
        featured: false
    },
    {
        id: 5,
        name: "Sony WH-1000XM5",
        category: "headphone",
        price: 8990000,
        originalPrice: 9990000,
        image: "https://cdn.tgdd.vn/Products/Images/54/289326/tai-nghe-bluetooth-chup-tai-sony-wh-1000xm5-den-thumbnew-200x200.jpg",
        images: [
            "https://cdn.tgdd.vn/Products/Images/54/289326/tai-nghe-bluetooth-chup-tai-sony-wh-1000xm5-den-thumbnew-600x600.jpg",
            "https://cdn.tgdd.vn/Products/Images/54/289326/tai-nghe-bluetooth-chup-tai-sony-wh-1000xm5-1-1.jpg",
            "https://cdn.tgdd.vn/Products/Images/54/289326/tai-nghe-bluetooth-chup-tai-sony-wh-1000xm5-2-1.jpg"
        ],
        description: "Tai nghe chống ồn hàng đầu với chất lượng âm thanh Hi-Fi và pin 30 giờ.",
        specs: {
            "Driver": "30mm Carbon Fiber Composite",
            "Chống ồn": "Active Noise Cancelling",
            "Kết nối": "Bluetooth 5.2, NFC",
            "Pin": "30 giờ nghe nhạc",
            "Sạc nhanh": "3 phút sạc = 3 giờ nghe",
            "Codec": "LDAC, AAC, SBC",
            "Trọng lượng": "250g"
        },
        rating: 4.8,
        reviews: 1245,
        featured: true
    },
    {
        id: 6,
        name: "AirPods Pro 2nd Gen",
        category: "headphone",
        price: 6990000,
        originalPrice: 7990000,
        image: "https://cdn.tgdd.vn/Products/Images/54/289780/tai-nghe-bluetooth-true-wireless-apple-airpods-pro-2nd-gen-magsafe-charge-thumbnew-200x200.jpg",
        images: [
            "https://cdn.tgdd.vn/Products/Images/54/289780/tai-nghe-bluetooth-true-wireless-apple-airpods-pro-2nd-gen-magsafe-charge-thumbnew-600x600.jpg",
            "https://cdn.tgdd.vn/Products/Images/54/289780/tai-nghe-bluetooth-true-wireless-apple-airpods-pro-2nd-gen-1-1.jpg",
            "https://cdn.tgdd.vn/Products/Images/54/289780/tai-nghe-bluetooth-true-wireless-apple-airpods-pro-2nd-gen-2-1.jpg"
        ],
        description: "AirPods Pro thế hệ 2 với chip H2, chống ồn thích ứng và âm thanh không gian.",
        specs: {
            "Chip": "Apple H2",
            "Chống ồn": "Active Noise Cancellation",
            "Driver": "Custom High Dynamic Range",
            "Pin": "6 giờ + 24 giờ với case",
            "Sạc": "MagSafe, Wireless, Lightning",
            "Chống nước": "IPX4",
            "Tính năng": "Spatial Audio, Adaptive Transparency"
        },
        rating: 4.7,
        reviews: 987,
        featured: false
    },
    {
        id: 7,
        name: "iPad Pro 12.9 inch M2",
        category: "tablet",
        price: 29990000,
        originalPrice: 32990000,
        image: "https://cdn.tgdd.vn/Products/Images/522/289172/ipad-pro-m2-12-9-wifi-128gb-2022-xam-thumbnew-200x200.jpg",
        images: [
            "https://cdn.tgdd.vn/Products/Images/522/289172/ipad-pro-m2-12-9-wifi-128gb-2022-xam-thumbnew-600x600.jpg",
            "https://cdn.tgdd.vn/Products/Images/522/289172/ipad-pro-m2-12-9-wifi-128gb-2022-1-1.jpg",
            "https://cdn.tgdd.vn/Products/Images/522/289172/ipad-pro-m2-12-9-wifi-128gb-2022-2-1.jpg"
        ],
        description: "iPad Pro 12.9 inch với chip M2 mạnh mẽ, màn hình Liquid Retina XDR và hỗ trợ Apple Pencil.",
        specs: {
            "Màn hình": "12.9 inch Liquid Retina XDR",
            "Chip": "Apple M2 8-core CPU",
            "RAM": "8GB",
            "Bộ nhớ": "256GB",
            "Camera": "12MP Wide + 10MP Ultra Wide",
            "Pin": "Lên đến 10 giờ",
            "Kết nối": "Wi-Fi 6E, 5G"
        },
        rating: 4.8,
        reviews: 634,
        featured: false
    },
    {
        id: 8,
        name: "Samsung Galaxy Tab S9 Ultra",
        category: "tablet",
        price: 24990000,
        originalPrice: 27990000,
        image: "https://cdn.tgdd.vn/Products/Images/522/309831/samsung-galaxy-tab-s9-ultra-5g-xam-thumbnew-200x200.jpg",
        images: [
            "https://cdn.tgdd.vn/Products/Images/522/309831/samsung-galaxy-tab-s9-ultra-5g-xam-thumbnew-600x600.jpg",
            "https://cdn.tgdd.vn/Products/Images/522/309831/samsung-galaxy-tab-s9-ultra-5g-1-1.jpg",
            "https://cdn.tgdd.vn/Products/Images/522/309831/samsung-galaxy-tab-s9-ultra-5g-2-1.jpg"
        ],
        description: "Galaxy Tab S9 Ultra với màn hình 14.6 inch, S Pen đi kèm và hiệu năng mạnh mẽ.",
        specs: {
            "Màn hình": "14.6 inch Dynamic AMOLED 2X",
            "Chip": "Snapdragon 8 Gen 2",
            "RAM": "12GB",
            "Bộ nhớ": "256GB",
            "Camera": "13MP + 8MP Ultra Wide",
            "Pin": "11200mAh",
            "S Pen": "Đi kèm trong hộp"
        },
        rating: 4.6,
        reviews: 289,
        featured: false
    },
    {
        id: 9,
        name: "Apple Watch Series 9",
        category: "smartwatch",
        price: 9990000,
        originalPrice: 10990000,
        image: "https://cdn.tgdd.vn/Products/Images/7077/309897/apple-watch-s9-gps-45mm-vien-nhom-day-cao-su-xanh-thumbnew-200x200.jpg",
        images: [
            "https://cdn.tgdd.vn/Products/Images/7077/309897/apple-watch-s9-gps-45mm-vien-nhom-day-cao-su-xanh-thumbnew-600x600.jpg",
            "https://cdn.tgdd.vn/Products/Images/7077/309897/apple-watch-s9-gps-45mm-vien-nhom-day-cao-su-1-1.jpg",
            "https://cdn.tgdd.vn/Products/Images/7077/309897/apple-watch-s9-gps-45mm-vien-nhom-day-cao-su-2-1.jpg"
        ],
        description: "Apple Watch Series 9 với chip S9 SiP, màn hình sáng hơn và tính năng Double Tap mới.",
        specs: {
            "Màn hình": "45mm Always-On Retina",
            "Chip": "S9 SiP với Neural Engine 4 nhân",
            "Bộ nhớ": "64GB",
            "Pin": "Lên đến 18 giờ",
            "Chống nước": "50m",
            "Tính năng": "ECG, Blood Oxygen, GPS",
            "Kết nối": "Wi-Fi, Bluetooth, NFC"
        },
        rating: 4.7,
        reviews: 1456,
        featured: true
    },
    {
        id: 10,
        name: "Samsung Galaxy Watch6 Classic",
        category: "smartwatch",
        price: 7990000,
        originalPrice: 8990000,
        image: "https://via.placeholder.com/300x300/84CC16/ffffff?text=Galaxy+Watch",
        images: [
            "https://via.placeholder.com/400x400/84CC16/ffffff?text=Galaxy+Watch+Front",
            "https://via.placeholder.com/400x400/84CC16/ffffff?text=Galaxy+Watch+Classic",
            "https://via.placeholder.com/400x400/84CC16/ffffff?text=Galaxy+Watch+Band"
        ],
        description: "Galaxy Watch6 Classic với vòng xoay Rotating Bezel, theo dõi sức khỏe toàn diện.",
        specs: {
            "Màn hình": "43mm Super AMOLED",
            "Chip": "Exynos W930 Dual Core",
            "RAM": "2GB",
            "Bộ nhớ": "16GB",
            "Pin": "300mAh - 40 giờ",
            "Chống nước": "5ATM + IP68",
            "Cảm biến": "Samsung BioActive Sensor"
        },
        rating: 4.5,
        reviews: 723,
        featured: false
    }
];

// Cart management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM utility functions
function $(id) {
    return document.getElementById(id);
}

function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt star"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star star empty"></i>';
    }
    
    return starsHTML;
}

function calculateDiscount(originalPrice, currentPrice) {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}

// Product display functions
function createProductCard(product) {
    const discount = calculateDiscount(product.originalPrice, product.price);
    
    return `
        <div class="product-card" onclick="goToProduct(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-content">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    <div class="stars">${generateStars(product.rating)}</div>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">${formatPrice(product.price)}</span>
                    <span class="original-price">${formatPrice(product.originalPrice)}</span>
                    <span class="discount">-${discount}%</span>
                </div>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCartFromCard(${product.id})">
                    <i class="fas fa-shopping-cart"></i>
                    Thêm vào giỏ
                </button>
            </div>
        </div>
    `;
}

function getCategoryName(category) {
    const categories = {
        smartphone: 'Điện thoại',
        laptop: 'Laptop',
        headphone: 'Tai nghe',
        tablet: 'Tablet',
        smartwatch: 'Đồng hồ thông minh'
    };
    return categories[category] || category;
}

function displayProducts(productsToShow, containerId) {
    const container = $(containerId);
    if (!container) return;
    
    if (productsToShow.length === 0) {
        container.innerHTML = '<p class="text-center">Không tìm thấy sản phẩm nào.</p>';
        return;
    }
    
    container.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
}

// Category filtering
function initializeFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.dataset.category;
            filterProducts(category);
        });
    });
}

function filterProducts(category) {
    let filteredProducts = products;
    
    if (category !== 'all') {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    displayProducts(filteredProducts, 'productsGrid');
}

// Search functionality
function initializeSearch() {
    const searchInput = $('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            if (query === '') {
                displayProducts(products, 'productsGrid');
                return;
            }
            
            const searchResults = products.filter(product => 
                product.name.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query) ||
                getCategoryName(product.category).toLowerCase().includes(query)
            );
            
            displayProducts(searchResults, 'productsGrid');
        });
    }
}

function searchProducts() {
    const searchInput = $('searchInput');
    if (searchInput) {
        searchInput.focus();
    }
}

// Cart functionality
function updateCartCount() {
    const cartCount = $('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function addToCartFromCard(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    addToCart(product.id, 1);
    
    // Show success message (you can customize this)
    showMessage(`Đã thêm ${product.name} vào giỏ hàng!`, 'success');
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            quantity: quantity,
            addedAt: new Date().toISOString()
        });
    }
    
    saveCart();
    updateCartCount();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
}

function updateCartItemQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            saveCart();
            updateCartCount();
        }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartCount();
}

// Navigation functions
function goToProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

function goToCart() {
    window.location.href = 'cart.html';
}

function scrollToProducts() {
    const productsSection = $('productsSection');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Message system
function showMessage(message, type = 'info') {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `message message-${type}`;
    messageEl.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#2563EB'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    messageEl.textContent = message;
    document.body.appendChild(messageEl);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        messageEl.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.parentNode.removeChild(messageEl);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for messages
function addMessageStyles() {
    if (!document.getElementById('messageStyles')) {
        const style = document.createElement('style');
        style.id = 'messageStyles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize page
function initializePage() {
    // Add message styles
    addMessageStyles();
    
    // Update cart count
    updateCartCount();
    
    // Check if we're on the homepage
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        // Display featured products
        const featuredProducts = products.filter(product => product.featured);
        displayProducts(featuredProducts, 'featuredProducts');
        
        // Display all products
        displayProducts(products, 'productsGrid');
        
        // Initialize filters and search
        initializeFilters();
        initializeSearch();
    }
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
}

// Export functions for use in other scripts
window.products = products;
window.cart = cart;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartItemQuantity = updateCartItemQuantity;
window.formatPrice = formatPrice;
window.generateStars = generateStars;
window.goToProduct = goToProduct;
window.goToCart = goToCart;
window.showMessage = showMessage;
window.searchProducts = searchProducts;
window.scrollToProducts = scrollToProducts;
