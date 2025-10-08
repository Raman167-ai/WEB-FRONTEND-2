
        var api_url="https://fakestoreapi.com/products";
        fetch(api_url)
        .then(function(response){
            return response.json();
        })
        .then(function(product){
            var item = '';
            for(var i in product){
                item = item + `
                         <tr>
                            <td>${product[i].id}</td>
                            <td>${product[i].category}</td>
                            <td>${product[i].description}</td>
                            <td>${product[i].price}$</td>
                            <td><img src="${product[i].image}" alt=""></td>
                         </tr>
                         `;
                        `<tr>
                            <td>${product.id}</td>
                            <td>${product.category}</td>
                            <td>${product.description}</td>
                            <td>${product.price}$</td>
                            <td><img src="${product.image}" alt=""></td>
                        </tr>
                         `;
            }
            document.querySelector('#result').innerHTML = item;
        });
            