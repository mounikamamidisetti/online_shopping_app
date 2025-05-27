// const productContainer= document.getElementById("productContainer");
// const cartContainer=document.getElementById("cartContainer");
// const feedbackEle=document.getElementById("feedback");
// let cart=[];
//     const products=[
//     {
//         id:1,
//         name:"Laptop",
//         price:50000,
//     },
//     {
//         id:2,
//         name:"Phone",
//         price:20000,
//     },
//     {
//         id:3,
//         name:"Tablet",
//         price:5000,
//     },
//     {
//         id:4,
//         name:"SmartWatch",
//         price:2000,
//     },
//     {
//         id:5,
//         name:"HeadPhones",
//         price:500,
//     },
// ];
// products.forEach( function(productvalue){
//     // const productrow=
//     // `
//     // // <div class="productRow">
//     // // <p>${productvalue.name} - Rs. ${productvalue.price}</p>
//     // //     <button>Add to cart</button>
//     // // </div>
//     // // `;
//     // //     productContainer.insertAdjacentHTML("beforeend", productrow);
//     const {id, name, price}=productvalue;
//     const divElement=document.createElement("div");
//     divElement.className="productRow";
//     divElement.innerHTML=`
//     <p>${productvalue.name} - Rs. ${productvalue.price}</p>
//     <button onclick="addtoCart(${id})">Add to cart</button>
//     `;
//     productContainer.appendChild(divElement);

// });
// function addtoCart(id){
//     console.log("add to cart clicking" , id);
//     const isProductAvail=cart.some((productvalue)=> productvalue.id===id);
//     console.log("isProductAvail",isProductAvail);
//     if (isProductAvail) {
//          const producttoAdd=products.find(function(productvalue){
//         return productvalue.id===id;
//     });
//         feedbackEle.textContent=`item is already added to the cart `,"error";
//         return;
//     }
//     const producttoAdd=products.find(function(productvalue){
//         return productvalue.id===id;
//     });
//     console.log(producttoAdd);
//     cart.push(producttoAdd);
//     console.log(cart);
    
//     const {prodid, name, price}=producttoAdd;
//     const cartRow=`<div class="productRow">
//                 <p>${name} - Rs. ${price}</p>
//                 <button>Remove</button>
//                 </div>
//                 `;
//                 cartContainer.insertAdjacentHTML("beforeend", cartRow);
//                 // feedbackEle.textContent=`${name} is added to the cart `;
//                 updatedUserFeedback.textContent=`${name} is added to the cart `,"success";
// }
// function updatedUserFeedback(msg, type){
//     if(type==="success"){
//         feedbackEle.style.backgroundColor="green";

//     }
//     if(type==="error"){
//         feedbackEle.style.backgroundColor="red";

//     }
//     feedbackEle.textContent=msg;
// }





// const productContainer = document.getElementById("productContainer");
// const cartContainer = document.getElementById("cartContainer");
// const feedbackEle = document.getElementById("feedback");

// let cart = [];

// const products = [
//     { id: 1, name: "Laptop", price: 50000 },
//     { id: 2, name: "Phone", price: 20000 },
//     { id: 3, name: "Tablet", price: 5000 },
//     { id: 4, name: "SmartWatch", price: 2000 },
//     { id: 5, name: "HeadPhones", price: 500 },
// ];

// // Render product list
// products.forEach((product) => {
//     const { id, name, price } = product;
//     const divElement = document.createElement("div");
//     divElement.className = "productRow";
//     divElement.innerHTML = `
//         <p>${name} - Rs. ${price}</p>
//         <button onclick="addToCart(${id})">Add to cart</button>
//     `;
//     productContainer.appendChild(divElement);
// });

// // Add to cart function
// function addToCart(id) {
//     const isProductInCart = cart.some(product => product.id === id);

//     if (isProductInCart) {
//         updatedUserFeedback("Item is already added to the cart", "error");
//         return;
//     }

//     const productToAdd = products.find(product => product.id === id);

//     if (productToAdd) {
//         cart.push(productToAdd);

        
//     }
// }
// function renderCartDetails(){
//     cartContainer.innerHTML="";
//     cart.forEach(function(product){
//         const {id,  name, price } = productToAdd;
        
//         const cartRow = `
//             <div class="productRow">
//                 <p>${name} - Rs. ${price}</p>
//                 <button onclick="removeFromCart(${id})">Remove</button>
//             </div>
//         `;
//         cartContainer.insertAdjacentHTML("beforeend", cartRow);
       

//         updatedUserFeedback(`${name} is added to the cart`, "success");
        
//     })
// }


// function removeFromCart(id){
//     console.log(id);
//     const productIndex=cart.findIndex((product )=> product.id === id);
//     cart.splice(productIndex, 1);
//     renderCartDetails();
// }
// // Feedback message display
// let timeId;
// function updatedUserFeedback(msg, type) {
//     clearTimeout(timeId);

//     feedbackEle.style.display="block";
//     feedbackEle.textContent = msg;
//     feedbackEle.style.backgroundColor = (type === "success") ? "green" : "red";
//    timeId=setTimeout(function(){
//         feedbackEle.style.display="none";
//     },3000);
// }




const productContainer = document.getElementById("productContainer");
const cartContainer = document.getElementById("cartContainer");
const feedbackEle = document.getElementById("feedback");
let totalPrice=document.getElementById("totalprice");
const clearCart=document.getElementById("clearCart");
const sortCartPrice=document.getElementById("sortCartPrice");

let cart = [];
let timeId;

const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Tablet", price: 5000 },
    { id: 4, name: "SmartWatch", price: 2000 },
    { id: 5, name: "HeadPhones", price: 500 },
];

 function clearedCart(){
    cart.length=0;
    renderCartDetails();
    updatedUserFeedback("cart is cleared ","sucess");

 }
clearCart.addEventListener("click", clearedCart);

function sortByPrice(){
    cart.sort(function(val1, val2){
        return val1.price-val2.price;
    });
    renderCartDetails();
};
sortCartPrice.addEventListener("click", sortByPrice);

function renderProductDetails(){


// Render product list
products.forEach((product) => {
    const { id, name, price } = product;
    const divElement = document.createElement("div");
    divElement.className = "productRow";
    divElement.innerHTML = `
        <p>${name} - Rs. ${price}</p>
        <button onclick="addToCart(${id})">Add to cart</button>
    `;
    productContainer.appendChild(divElement);
});
}

// Render cart
function renderCartDetails() {
    cartContainer.innerHTML = "";
    cart.forEach(function(product) {
        const { id, name, price } = product; // ✅ fixed variable name
        const cartRow = `
            <div class="productRow">
                <p>${name} - Rs. ${price}</p>
                <button onclick="removeFromCart(${id})">Remove</button>
            </div>
        `;
        cartContainer.insertAdjacentHTML("beforeend", cartRow);
        updatedUserFeedback(`${name} is added to the cart`, "success");
    });
    // let totalprices=0;
    // for(let i=0;i<cart.length;i++){
    //     totalprices=totalprices+cart[i].price;
    // }
    
    const totPrice=cart.reduce(function(accu, curproduct){
        return accu+curproduct.price;
    }, 0);
    totalPrice.textContent=`RS. ${totPrice}`;
}

// Add to cart function
function addToCart(id) {
    const isProductInCart = cart.some(product => product.id === id);

    if (isProductInCart) {
        updatedUserFeedback("Item is already added to the cart", "error");
        return;
    }

    const productToAdd = products.find(product => product.id === id);

    if (productToAdd) {
        cart.push(productToAdd);
        renderCartDetails(); // ✅ call render after adding
    }
}

// Remove item
function removeFromCart(id) {
    const product=cart.find((product)=>product.id === id);
    const productIndex = cart.findIndex(product => product.id === id);
    // if (productIndex !== -1) {
        cart.splice(productIndex, 1);
        
        updatedUserFeedback(`${product.name}removed from the cart`, "error");
        renderCartDetails();
        
    // }
}

// Feedback message display

function updatedUserFeedback(msg, type) {
    clearTimeout(timeId);
    feedbackEle.style.display = "block";
    feedbackEle.textContent = msg;
    feedbackEle.style.backgroundColor = (type === "success") ? "green" : "red";

    timeId = setTimeout(function () {
        feedbackEle.style.display = "none";
    }, 3000);
}



//redering products
renderProductDetails();


