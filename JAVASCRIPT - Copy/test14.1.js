var Productlist = [

{
    id:1,
    catagory:"Jean",
    price:30.90,
    description : "Regular T-Shirts font copy",
    Image:"https://zandokh.com/image/cache/catalog/products/2025-07/4122504299/10S25DPA027_LIndigo%20(1)-cr-450x672.jpg"
},
{
    id:2,
    catagory:"Jean",
    price:296.99,
    description : "Regular T-Shirts font copy",
    Image:"https://zandokh.com/image/cache/catalog/products/2025-07/4122504299/10S25DPA027_LIndigo%20(2)-cr-450x672.jpg",
},
{
    id:3,
    catagory:"Jean",
    price:249.99,
    description : "Regular T-Shirts font copy",
    Image:"https://zandokh.com/image/cache/catalog/products/2025-07/4122504299/10S25DPA027_LIndigo%20(2)-cr-450x672.jpg",
},
{
    id:4,
    catagory:"T-Shirt",
    price:239.99,
    description : "Regular T-Shirts font copy",
    Image:"https://zandokh.com/image/cache/catalog/products/2025-07/21224121128/Regular%20T-Shirts%20font%20copy-cr-450x672.jpg",
},
{
    id:5,
    catagory:"clothing",
    price:259.99,
    description : "Regular T-Shirts font copy",
    Image:"https://zandokh.com/image/cache/catalog/products/2025-07/21224121128/Regular%20T-Shirts%20font%20copy-cr-450x672.jpg",
},
{
    id:6,
    catagory:"clothing",
    price:249.99,
    description : "Regular T-Shirts font copy",
    Image:"https://zandokh.com/image/cache/catalog/products/2025-07/21224121128/Regular%20T-Shirts%20font%20copy-cr-450x672.jpg",
},
{
    id:7,
    catagory:"T-Shirt",
    price:209.99,
    description : "Regular T-Shirts font copy",
    Image:"https://zandokh.com/image/cache/catalog/products/2025-07/21224121128/Regular%20T-Shirts%20font%20copy-cr-450x672.jpg",
},
{
    id:8,
    catagory:"clothing",
    price:25.99,
    description : "Regular T-Shirts font copy",
    Image:"https://zandokh.com/image/cache/catalog/products/2025-07/21224121128/Regular%20T-Shirts%20font%20copy-cr-450x672.jpg",
},
{
    id:9,
    catagory:"clothing",
    price:25.99,
    description : "Regular T-Shirts font copy",
    Image:"https://zandokh.com/image/cache/catalog/products/2025-07/21224121128/Regular%20T-Shirts%20font%20copy-cr-450x672.jpg",
},
]




var ProductList = [];


var btn= document.querySelector('#btn');
var name_box= document.querySelector('#name');
var price_box= document.querySelector('#price');
var btnupdate = document.getElementById('btnupdate');
document.getElementById('btnupdate').style.display = 'none'; // Hide the update button initially
btn.addEventListener('click', AddProduct);
btnupdate.addEventListener('click', UpdateItem);

function AddProduct(){
    if(price_box.value === ''){
       Swal.fire({
            title: "Warning!",
            text: "Price is required",
            icon: "warning",
            confirmButtonText: "OK",});
        return;
    }
    else if(name_box.value === ''){
        Swal.fire({
            title: "Warning!",
            text: "Name is required",
            icon: "warning",
            confirmButtonText: "OK",});
        return;

    }
    ProductList.push({
        id: ProductList.length + 1, // Auto-incrementing ID
        name:name_box.value,
        price: price_box.value,
    });
    //message alert for adding product
    Message('Product added successfully!');
    // Clear the input fields after adding
    name_box.value = '';
    price_box.value = '';
    name_box.focus();
    DisplayProduct(ProductList);
}

function DisplayProduct(Listobject){
    var item='';
    for(var i in Listobject){
        item += `
            <tr>
                <th>${Listobject[i].id}</th>
                <th>${Listobject[i].name}</th>
                <th>${Listobject[i].price}</th>
                <th>
                <button onclick='DeleteItem(${Listobject[i].id})' >Delete</button>
                <button onclick='EditItem(${Listobject[i].id})'>Edit</button>
                </th>
           </tr>
        
        `;
    }
// Display the items in the container
    document.querySelector('#result').innerHTML = item;
}

function Message(message){
   const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
    });
    Toast.fire({
    icon: "success",
    title: message
    });
}


function DeleteItem(id){
    const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
    }).then((result) => {
    if (result.isConfirmed) {
        var object = [
            {
                id: 1,
                name: "Sample Product",
                price: 100
            },
            {
                id: 2,
                name: "Another Product",
                price: 200
            },
            {
                id: 3,
                name: "Third Product",
                price: 300
            }
        ]
        const index = object.findIndex(item => item.id === id);
        if (index !== -1) {
            ProductList.splice(index, 1); 
            Message('Product deleted successfully!');
            DisplayProduct(ProductList); 
        } else {
            Message('Product not found!');
        }
    } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
    ) {
        swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your imaginary file is safe :)",
        icon: "error"
        });
    }
    });
    
}


function EditItem(id){
    const item = ProductList.find(item => item.id === id);
    console.log(item);
    if (item) {
        // Populate the input fields with the item's data
        document.getElementById('id').value = item.id; // Assuming you have an input field for ID
        document.querySelector('#name').value = item.name;
        document.querySelector('#price').value = item.price;
        document.getElementById('btn').style.display = 'none'; // Hide the Add button
        document.getElementById('btnupdate').style.display = 'block'; // Show the
    } else {
        Message('Product not found!');
    }
}


function UpdateItem(){
    const name = document.querySelector('#name').value;
    const price = document.querySelector('#price').value;
    const ID = document.getElementById('id').value;
    if (name === '' || price === '') {
        Swal.fire({
            title: "Warning!",
            text: "Both fields are required",
            icon: "warning",
            confirmButtonText: "OK",
        });
        return;
    }
    
    const object = ProductList.find(item => item.id ==ID);
    if (object !== undefined) {
        object.name = name;
        object.price = price;
        Message('Product updated successfully!');
        DisplayProduct(ProductList);
        
        // Reset the form
        document.querySelector('#name').value = '';
        document.querySelector('#price').value = '';
        document.getElementById('btn').style.display = 'block'; // Show the Add button
        document.getElementById('btnupdate').style.display = 'none'; // Hide the update button
    }
    else{
        Message('Product not found!');
    }
}


////
$(document).ready(function(){
     let allProducts = [];

     $.ajax({
            url: 'https://zandokh.com/index',
            method: 'GET',
            success: function(products) {
                allProducts = products;
                displayProducts(products);