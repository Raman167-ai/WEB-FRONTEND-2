$(document).ready(function(){
     let allProducts = [];


     $.ajax({
            url: 'https://zandokh.com/index',
            method: 'GET',
            success: function(products) {
                allProducts = products;
                displayProducts(products);
            },
            error: function(error) {
                console.error('Error fetching products:', error);
            }
        });

    function displayProducts(products) {
        const container = $('#productsContainer');
        container.empty();

        for (let i in products) {
            const product = products[i];
            const productCard = `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-price">$${product.price}</p>
                    <p class="product-category">${product.category}</p>
                    <p class="product-rating">⭐ ${product.rating.rate}(${product.rating.count} reviews)</p>
                    </div>
            `;
            container.append(productCard);

        }
    }

// Search functionality
    $('#searchButton').on('click', function() {
        // const searchTerm = $(this).val().toLowerCase();// convert to lowercase 
        const searchTerm = $('#searchInput').val().toLowerCase();
        const filteredProducts = allProducts.filter(product => 
            product.title.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
        displayProducts(filteredProducts);
    });
})