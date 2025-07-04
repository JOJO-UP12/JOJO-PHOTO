/* Variables */
:root {
    --primary: #2c3e50;
    --secondary: #e74c3c;
    --accent: #3498db;
    --light: #f9f9f9;
    --dark: #222;
    --text: #333;
    --text-light: #777;
    
    --font-main: 'Raleway', sans-serif;
    --font-heading: 'Playfair Display', serif;
    
    --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

/* Base */
body {
    font-family: var(--font-main);
    color: var(--text);
    line-height: 1.6;
}

/* Header */
.header {
    position: fixed;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: var(--shadow);
    z-index: 1000;
    transition: var(--transition);
}

.logo {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    font-weight: 700;
}

.logo span {
    color: var(--secondary);
}

/* Hero */
.hero {
    height: 100vh;
    position: relative;
    overflow: hidden;
}

.hero-slider .slide {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 1s ease;
}

.hero-slider .slide.active {
    opacity: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    padding: 0 20px;
}

.hero-title .line {
    display: block;
    overflow: hidden;
    margin: 5px 0;
}

.hero-title span {
    display: inline-block;
    transform: translateY(100%);
    animation: fadeUp 0.8s forwards;
}

@keyframes fadeUp {
    to {
        transform: translateY(0);
    }
}

/* Portfolio */
.portfolio-section {
    padding: 100px 0;
    background: var(--light);
}

.portfolio-filter {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 40px;
}

.filter-btn {
    padding: 8px 20px;
    background: none;
    border: 2px solid var(--primary);
    color: var(--primary);
    cursor: pointer;
    transition: var(--transition);
    border-radius: 30px;
    font-weight: 600;
}

.filter-btn.active, .filter-btn:hover {
    background: var(--primary);
    color: white;
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.portfolio-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    aspect-ratio: 1 / 1;
}

.portfolio-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.portfolio-item:hover img {
    transform: scale(1.1);
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 0;
    transition: var(--transition);
}

.portfolio-item:hover .overlay {
    opacity: 1;
}

/* Responsive */
@media (max-width: 768px) {
    .portfolio-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    }
