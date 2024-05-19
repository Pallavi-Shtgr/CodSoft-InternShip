// // Sample product data (replace with your actual product information)
// const products = [
//     {
//       id: 1,
//       name: 'Men\'s T-Shirt',
//       price: 29.99,
//       image: 'images/product1.jpg'
//     },
//     {
//       id: 2,
//       name: 'Women\'s Dress',
//       price: 49.99,
//       image: 'images/product2.jpg'
//     },
//     {
//       id: 3

// Sample product data (replace with your actual product information)
const products = [
    {
      id: 1,
      name: 'Men\'s T-Shirt',
      price: 29.99,
      image: 'images/product1.jpg'
    },
    {
      id: 2,
      name: 'Women\'s Dress',
      price: 49.99,
      image: 'images/product2.jpg'
    },
    // ... add more products
  ];

  const heroHeading = document.querySelector('.hero h1');
  
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      heroHeading.style.color = '#007bff'; // Change heading color on scroll
    } else {
      heroHeading.style.color = '#fff'; // Reset heading color on scroll up
    }
  });
  
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      card.style.boxShadow = '0px 5px 10px rgba(0, 0, 0, 0.2)'; // Add subtle shadow on hover
    });
    card.addEventListener('mouseleave', function() {
      card.style.boxShadow = 'none'; // Remove shadow on mouse leave
    });
  });
  
  