// Product Data - Electronics with real images
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        category: "smartphone",
        price: 29990000,
        originalPrice: 32990000,
        image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-bluetitanium-select?wid=470&hei=556&fmt=png-alpha&.v=1692895703032",
        images: [
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-bluetitanium-select?wid=470&hei=556&fmt=png-alpha&.v=1692895703032",
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-side-bluetitanium-select?wid=470&hei=556&fmt=png-alpha&.v=1692895703703",
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-back-bluetitanium-select?wid=470&hei=556&fmt=png-alpha&.v=1692895703703"
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
        image: "https://images.samsung.com/is/image/samsung/p6pim/vn/2401/gallery/vn-galaxy-s24-ultra-s928-sm-s928bzkexxv-thumb-539573719",
        images: [
            "https://images.samsung.com/is/image/samsung/p6pim/vn/2401/gallery/vn-galaxy-s24-ultra-s928-sm-s928bzkexxv-539573714",
            "https://images.samsung.com/is/image/samsung/p6pim/vn/2401/gallery/vn-galaxy-s24-ultra-s928-sm-s928bzkexxv-539573715",
            "https://images.samsung.com/is/image/samsung/p6pim/vn/2401/gallery/vn-galaxy-s24-ultra-s928-sm-s928bzkexxv-539573716"
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
        image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054290",
        images: [
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054290",
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-side-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054440",
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-open-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054497"
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
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/13-9320/media-gallery/notebook-xps-13-9320-nt-silver-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2324&qlt=100,1&resMode=sharp2&size=3491,2324&chrss=full&imwidth=5000",
        images: [
            "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/13-9320/media-gallery/notebook-xps-13-9320-nt-silver-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2324&qlt=100,1&resMode=sharp2&size=3491,2324&chrss=full&imwidth=5000",
            "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/13-9320/media-gallery/notebook-xps-13-9320-nt-silver-gallery-2.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2324&qlt=100,1&resMode=sharp2&size=3491,2324&chrss=full&imwidth=5000",
            "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/13-9320/media-gallery/notebook-xps-13-9320-nt-silver-gallery-3.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2324&qlt=100,1&resMode=sharp2&size=3491,2324&chrss=full&imwidth=5000"
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
        image: "https://assets.sony.com/image/5d02f6a72b3afd95e6e7dd8e6541207c?fmt=pjpg&wid=440&hei=440&fit=constrain",
        images: [
            "https://assets.sony.com/image/5d02f6a72b3afd95e6e7dd8e6541207c?fmt=pjpg&wid=440&hei=440&fit=constrain",
            "https://assets.sony.com/image/0d1ed1a538a96a52e8fc93abf3fb3a39?fmt=pjpg&wid=440&hei=440&fit=constrain",
            "https://assets.sony.com/image/91fccc34ea2aa4d80b36b3d25f6aa88b?fmt=pjpg&wid=440&hei=440&fit=constrain"
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
        image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQD83?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1660803972361",
        images: [
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQD83?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1660803972361",
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2nd-gen-hero-select-202209?wid=556&hei=556&fmt=png-alpha&.v=1660925845194",
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQD83_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1660803981240"
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
        image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202210?wid=940&hei=1112&fmt=png-alpha&.v=1664411207213",
        images: [
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202210?wid=940&hei=1112&fmt=png-alpha&.v=1664411207213",
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-landscape-202210?wid=1112&hei=940&fmt=png-alpha&.v=1664411207308",
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-12-pencil-202210?wid=940&hei=1112&fmt=png-alpha&.v=1664411207435"
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
        image: "https://images.samsung.com/is/image/samsung/p6pim/vn/sm-x910nzaaxxv/gallery/vn-galaxy-tab-s9-ultra-x910-sm-x910nzaaxxv-thumb-537855093",
        images: [
            "https://images.samsung.com/is/image/samsung/p6pim/vn/sm-x910nzaaxxv/gallery/vn-galaxy-tab-s9-ultra-x910-sm-x910nzaaxxv-537855088",
            "https://images.samsung.com/is/image/samsung/p6pim/vn/sm-x910nzaaxxv/gallery/vn-galaxy-tab-s9-ultra-x910-sm-x910nzaaxxv-537855089",
            "https://images.samsung.com/is/image/samsung/p6pim/vn/sm-x910nzaaxxv/gallery/vn-galaxy-tab-s9-ultra-x910-sm-x910nzaaxxv-537855090"
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
        image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/watch-s9-45-alum-blue-nc-s9_VW_PF+watch-face-s9-45-alum-blue-nc-s9_VW_PF_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1694507270866",
        images: [
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/watch-s9-45-alum-blue-nc-s9_VW_PF+watch-face-s9-45-alum-blue-nc-s9_VW_PF_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1694507270866",
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/watch-s9-45-alum-blue-nc-s9_VW_34FR+watch-face-s9-45-alum-blue-nc-s9_VW_34FR_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1694507270975",
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/watch-s9-45-alum-blue-nc-s9_VW_FL+watch-face-s9-45-alum-blue-nc-s9_VW_FL_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1694507271010"
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
        image: "https://images.samsung.com/is/image/samsung/p6pim/vn/2307/gallery/vn-galaxy-watch6-r940-sm-r940nzkaxev-thumb-537038633",
        images: [
            "https://images.samsung.com/is/image/samsung/p6pim/vn/2307/gallery/vn-galaxy-watch6-r940-sm-r940nzkaxev-537038628",
            "https://images.samsung.com/is/image/samsung/p6pim/vn/2307/gallery/vn-galaxy-watch6-r940-sm-r940nzkaxev-537038629", 
            "https://images.samsung.com/is/image/samsung/p6pim/vn/2307/gallery/vn-galaxy-watch6-r940-sm-r940nzkaxev-537038630"
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

// Prevent infinite loop by checking if already initialized
if (!window.mainJsInitialized) {
    window.mainJsInitialized = true;
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializePage);
    } else {
        initializePage();
    }
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
