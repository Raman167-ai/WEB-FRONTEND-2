$(document).ready(function(){
    const btnaddcart = $('.btnaddcart');
    const badge = $('.badge');
    const cartpanel = $('.cart-panel');
    const cart = $('.fa-cart-shopping');
    
    const price= $('#Total');
    

    var num =0;
    var  item_price = 0;
    btnaddcart.click(function(){
        var item=`
        <div class="item">
            <div class="image">
              <img src="#" alt="">
            </div>   
            <div class="des">
              <h2>Product1</h2>
              <p> Price : 30$</p>
              <button type="button" class="btnremove">Remove </button>
          
            </div>
          </div>
           
        `;
        cartpanel.prepend(item);
         item_price+=30;
        price.text(`Total price : $ ${item_price}`);
       badge.html(++num );
    });
  
   cart.click(function(){
       cartpanel.css('transform', 'translateX(0)');
    })
    
    cartpanel.on('click', '.btnremove', function(){
        $(this).closest('.item').remove();
        num--;
       
        item_price -= 30;
        price.text(`Total price : $ ${item_price}`);
        badge.html(num);
    })
    cart.click(function(){
       cartpanel.css('transform', 'translateX(0)');
    })
  
    cartpanel.on('click', '.btnadd', function(){
        $(this).closest('.item').book();
        
       
        badge.html(num);
    })

});
