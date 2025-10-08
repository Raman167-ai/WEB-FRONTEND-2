 var ProductList = [
    {
        id:1,
        category:"clothing",  
        price: 299.99,
        description : "A stylish and comfortable t-shirt made from 100% organic cotton.",
        image: "https://phorn-khouch.netlify.app/image/shirt1.png",
     },
    {
        id:2,
        category:"clothing",
        price: 299.99,
        description : "A stylish and comfortable t-shirt made from 100% organic cotton.",
        image: "https://phorn-khouch.netlify.app/image/shirt2.png",
    },
    {
         id:3,
         category:"clothing",       
         price:12.59,       
         description : "A stylish and comfortable t-shirt made from 100% organic cotton.",
         image: "https://phorn-khouch.netlify.app/image/shirt3.png",
     },
     {
         id:4,
         category:"clothing",
         price: 299.99,
         description : "A stylish and comfortable t-shirt made from 100% organic cotton.",
         image: "https://phorn-khouch.netlify.app/image/shirt4.png",
     },
     {
         id:6,
         category:"Pants",
         price: 299.99,
        description : "A stylish and comfortable t-shirt made from 100% organic cotton.",
         image: "https://phorn-khouch.netlify.app/image/pant1.png",
     },
     {
         id:7,
         category:"Pants",
         price: 10.99,
         description : "A stylish and comfortable t-shirt made from 100% organic cotton.",
         image: "https://phorn-khouch.netlify.app/image/pant2.png",
     },
     {
        id:8,
         category:"Pants",
         price: 20.99,
         description : "A stylish and comfortable t-shirt made from 100% organic cotton.",
         image: "https://phorn-khouch.netlify.app/image/pant3.png",
     },
     {
         id:9,
         category:"Pants",
        price: 30.99,
         description : "A stylish and comfortable t-shirt made from 100% organic cotton.",
         image: "https://phorn-khouch.netlify.app/image/pant4.png",
     },
     {
         id:10,
         category:"Pants",
        price: 35.99,
         description : "A stylish and comfortable t-shirt made from 100% organic cotton.",
         image: "https://phorn-khouch.netlify.app/image/pant3.png",
     },
     {
         id:11,
         category:"Pants",
        price: 50.99,
         description : "A stylish and comfortable t-shirt made from 100% organic cotton.",
         image: "https://phorn-khouch.netlify.app/image/pant1.png",
     },
     {
         id:12,
         category:"Pants",
        price: 70.99,
         description : "A stylish and comfortable t-shirt made from 100% organic cotton.",
         image: "https://phorn-khouch.netlify.app/image/pant4.png",
     },
     {
         id:13,
         category:"Pants",
        price: 29.99,
         description : "A stylish and comfortable t-shirt made from 100% organic cotton.",
         image: "https://phorn-khouch.netlify.app/image/pant4.png",
     },
]

function GetProduct(){
    var item='';
    for(var i in ProductList){
       // console.log(ProductList[i].category);
       item +=`
      <div class="box-item">
            <div class="image">
                <img src="${ProductList[i].image}" alt="">
            </div>
            <div class="des">
            <h2>${ProductList[i].category}</h2>
            <p>${ProductList[i].description}</p>
            <p>Price${ProductList[i].price}$</p>
        </div>
    </div>
       `;
    }
    document.querySelector('.container').innerHTML = item;
   
}

GetProduct();


