const courses = [
    {
        id: '1',
        title: "Lập trình Web Cơ bản",
        description: "Học cách xây dựng website từ đầu với HTML, CSS và JavaScript.",
        level: "Cơ bản",
        price: "Miễn phí",
        rating: "★★★★★ 4.5",
        duration: "10 giờ",
        instructor: "Nguyễn Văn A",
        image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        category: "Lập trình Web",
        createdAt: "2025-01-10",
        isFeatured: true,
        enrollmentCount: 1200,
        priceValue: 0
    },
    {
        id: '2',
        title: "Phân tích Dữ liệu với Python",
        description: "Học Pandas, NumPy, Matplotlib để phân tích dữ liệu.",
        level: "Trung cấp",
        price: "Có phí",
        rating: "★★★★☆ 4.2",
        duration: "15 giờ",
        instructor: "Trần Thị B",
        image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
        category: "Phân tích Dữ liệu",
        createdAt: "2024-11-15",
        isFeatured: false,
        enrollmentCount: 800,
        priceValue: 500000
    },
    {
        id: '3',
        title: "Thiết kế UI/UX",
        description: "Học Figma và nguyên tắc thiết kế giao diện người dùng.",
        level: "Cơ bản",
        price: "Miễn phí",
        rating: "★★★★★ 4.7",
        duration: "8 giờ",
        instructor: "Lê Văn C",
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
        category: "Thiết kế UI/UX",
        createdAt: "2025-02-01",
        isFeatured: true,
        enrollmentCount: 1500,
        priceValue: 0
    },
    {
        id: '4',
        title: "Lập trình Mobile với React Native",
        description: "Xây dựng ứng dụng di động đa nền tảng với React Native.",
        level: "Trung cấp",
        price: "Có phí",
        rating: "★★★★☆ 4.3",
        duration: "12 giờ",
        instructor: "Phạm Minh D",
        image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_5",
        category: "Lập trình Mobile",
        createdAt: "2025-03-05",
        isFeatured: true,
        enrollmentCount: 1100,
        priceValue: 600000
    },
    {
        id: '5',
        title: "Học Máy Cơ bản",
        description: "Khám phá các thuật toán học máy với Python và Scikit-learn.",
        level: "Nâng cao",
        price: "Có phí",
        rating: "★★★★★ 4.6",
        duration: "20 giờ",
        instructor: "Hoàng Thị E",
        image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_6",
        category: "Học Máy",
        createdAt: "2024-10-01",
        isFeatured: false,
        enrollmentCount: 700,
        priceValue: 800000
    },
    {
        id: '6',
        title: "Lập trình Game với Unity",
        description: "Học cách phát triển game 2D và 3D với Unity và C#.",
        level: "Trung cấp",
        price: "Miễn phí",
        rating: "★★★★☆ 4.4",
        duration: "18 giờ",
        instructor: "Đỗ Văn F",
        image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_7",
        category: "Lập trình Game",
        createdAt: "2025-01-25",
        isFeatured: true,
        enrollmentCount: 1300,
        priceValue: 0
    },
    {
        id: '7',
        title: "Lập trình Back-end với Node.js",
        description: "Xây dựng API và ứng dụng server-side với Node.js và Express.",
        level: "Trung cấp",
        price: "Có phí",
        rating: "★★★★☆ 4.5",
        duration: "14 giờ",
        instructor: "Nguyễn Thị G",
        image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_8",
        category: "Lập trình Web",
        createdAt: "2024-12-10",
        isFeatured: false,
        enrollmentCount: 950,
        priceValue: 550000
    },
    {
        id: '8',
        title: "An ninh mạng Cơ bản",
        description: "Tìm hiểu về bảo mật web và các kỹ thuật bảo vệ hệ thống.",
        level: "Cơ bản",
        price: "Miễn phí",
        rating: "★★★★☆ 4.3",
        duration: "10 giờ",
        instructor: "Trần Văn H",
        image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_9",
        category: "An ninh mạng",
        createdAt: "2025-02-15",
        isFeatured: true,
        enrollmentCount: 1400,
        priceValue: 0
    },
    {
        id: '9',
        title: "Xây dựng Chatbot với AI",
        description: "Học cách tạo chatbot thông minh sử dụng Python và NLP.",
        level: "Nâng cao",
        price: "Có phí",
        rating: "★★★★★ 4.8",
        duration: "16 giờ",
        instructor: "Lê Thị I",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_10",
        category: "Học Máy",
        createdAt: "2025-03-01",
        isFeatured: true,
        enrollmentCount: 1000,
        priceValue: 700000
    }
];

function renderCourseList(filteredCourses = courses) {
    const courseList = document.getElementById('course-list');
    if (!courseList) return;

    courseList.innerHTML = filteredCourses.map(course => `
        <a href="courses-detail.html?id=${course.id}" class="bg-gradient-to-r from-gray-400 to-blue-900 text-white rounded-lg shadow course-card hover-scale p-4">
            <img src="${course.image}" alt="Course Image" class="w-full h-40 object-cover rounded-lg mb-4" loading="lazy">
            <h4 class="text-lg font-semibold">${course.title}</h4>
            <p class="text-gray-200">${course.description}</p>
            <p class="text-sm text-gray-100">Cấp độ: ${course.level}</p>
            <p class="text-sm text-gray-100">Giá: ${course.price}</p>
            <p class="text-sm text-gray-100">Đánh giá: ${course.rating}</p>
        </a>
    `).join('');
}

function applyFilters() {
    const levels = Array.from(document.querySelectorAll('input[type="checkbox"][value^="level-"]'))
        .filter(cb => cb.checked)
        .map(cb => cb.value.replace('level-', ''));
    const prices = Array.from(document.querySelectorAll('input[type="checkbox"][value^="price-"]'))
        .filter(cb => cb.checked)
        .map(cb => cb.value.replace('price-', ''));
    const ratings = Array.from(document.querySelectorAll('input[type="checkbox"][value^="rating-"]'))
        .filter(cb => cb.checked)
        .map(cb => parseFloat(cb.value.replace('rating-', '')));
    const activeCategory = document.querySelector('.category-active')?.dataset.category || 'all';
    const sortOption = document.querySelector('select')?.value || 'Mới nhất';

    let filteredCourses = courses.filter(course => {
        const levelMatch = levels.length === 0 || levels.includes(course.level);
        const priceMatch = prices.length === 0 || prices.includes(course.price);
        const ratingValue = parseFloat(course.rating.match(/\d+\.\d+/)[0]);
        const ratingMatch = ratings.length === 0 || ratings.some(r => ratingValue >= r);
        const categoryMatch = activeCategory === 'all' || course.category === activeCategory;

        return levelMatch && priceMatch && ratingMatch && categoryMatch;
    });

    // Apply sorting
    filteredCourses.sort((a, b) => {
        if (sortOption === 'Mới nhất') {
            return new Date(b.createdAt) - new Date(a.createdAt);
        } else if (sortOption === 'Nổi bật') {
            return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
        } else if (sortOption === 'Đánh giá cao') {
            const ratingA = parseFloat(a.rating.match(/\d+\.\d+/)[0]);
            const ratingB = parseFloat(b.rating.match(/\d+\.\d+/)[0]);
            return ratingB - ratingA;
        } else if (sortOption === 'Học viên nhiều') {
            return b.enrollmentCount - a.enrollmentCount;
        } else if (sortOption === 'Giá thấp đến cao') {
            return a.priceValue - b.priceValue;
        } else if (sortOption === 'Giá cao đến thấp') {
            return b.priceValue - a.priceValue;
        }
        return 0;
    });

    renderCourseList(filteredCourses);
}

function setupFilters() {
    const filterContainer = document.querySelector('.md\\:w-1\\/4');
    if (!filterContainer) return;

    // Add event listeners to checkboxes
    const allCheckboxes = filterContainer.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    // Add event listener to clear filters button
    const clearFilterBtn = document.getElementById('clear-filters');
    clearFilterBtn.addEventListener('click', () => {
        allCheckboxes.forEach(checkbox => (checkbox.checked = false));
        const categories = document.querySelectorAll('[data-category]');
        categories.forEach(cat => cat.classList.remove('category-active'));
        document.querySelector('[data-category="all"]').classList.add('category-active');
        renderCourseList();
    });

    // Add event listener to sort dropdown
    const sortSelect = document.querySelector('select');
    if (sortSelect) {
        sortSelect.addEventListener('change', applyFilters);
    }
}

function setupCategories() {
    const categories = document.querySelectorAll('[data-category]');
    categories.forEach(category => {
        category.addEventListener('click', (e) => {
            e.preventDefault();
            categories.forEach(cat => cat.classList.remove('category-active'));
            category.classList.add('category-active');
            applyFilters();
        });
    });
}

function loadCourseDetails() {
    const courseId = new URLSearchParams(window.location.search).get('id');
    const course = courses.find(c => c.id === courseId) || courses[0]; // Fallback to first course if ID not found

    document.getElementById('course-title').textContent = course.title;
    document.getElementById('course-description').textContent = course.description;
    document.getElementById('course-level').textContent = course.level;
    document.getElementById('course-price').textContent = course.price;
    document.getElementById('course-rating').textContent = course.rating;
    document.getElementById('course-duration').textContent = course.duration;
    document.getElementById('course-instructor').textContent = course.instructor;
    document.getElementById('course-image').src = course.image;

    // Handle "Bắt đầu học" button click
    const startCourseBtn = document.getElementById('start-course-btn');
    if (startCourseBtn) {
        startCourseBtn.addEventListener('click', () => {
            const videoSection = document.getElementById('video-section');
            const videoIframe = document.getElementById('course-video');
            videoIframe.src = course.videoUrl;
            videoSection.classList.remove('hidden');
            videoSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// Initialize based on the current page
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('course-list')) {
        renderCourseList();
        setupFilters();
        setupCategories();
    } else if (document.getElementById('course-title')) {
        loadCourseDetails();
    }
});
