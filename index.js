// add to cart
let cart = [];
let addToCart = (id) => {
  cart.push(id);

  // cart[{...cart},id]
  // //using spred operator
  // cart=[...cart,id]
  let length = cart.length;
  console.log(cart);
  document.getElementById("cart").innerHTML = length;
};

//fetch api
fetch("https://fakestoreapi.com/products")
  .then((data) => {
    return data.json();
  })
  .then((result) => {
    console.table(result);
    let data1 = "";
    result.map((values) => {
      data1 += `<div class="card">
 <div class='image-conatiner'>
 <img src=${values.image} alt="Avatar" style="width:100%">
 </div>
 <div class="container-c">
   <h4>Title :<b>${values.title.slice(0, 50)}</b></h4> 
   <p>Price: ${values.price}</p> 
   <p> Rate :${values.rating.rate}</p> 
   <p>Description: ${values.description.slice(0, 80)}...</p>
   <button onclick=addToCart(${values.id})>Add to cart</button>
 </div>
</div>`;

      //document.write(values.title)
      document.getElementById("cards").innerHTML = data1;
    });
  })

  .catch((err) => {
    console.log(err);
  });

// image slideshow code
// auto slides code
let images = [
  "./image1.jpg",
  "./images2.jpg",
  "./images3.png",
  "./images4.png",
  "./images5.png",
];
let i = 0;
function slides() {
  document.getElementById("slide").src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
}

setInterval(slides, 2000);

// IMAGE SLIDER CODE WITH BUTTON
//let images=["./image1.jpg","./images2.jpg","./images3.png","./images4.png","./images5.png"];
var index = 0;
let nextSlide = document.getElementById("right-slide");
let prevSlide = document.getElementById("left-slide");

function next(direction) {
  if (direction == "next") {
    if (index < images.length - 1) {
      index++;
    } else {
      index = 0;
    }
  } else if (direction == "prev") {
    console.log(index);
    if (index == 0) {
      index = images.length - 1;
    } else {
      index--;
    }
  }
  document.getElementById("slide").src = images[index];
}
nextSlide.onclick = () => {
  console.log("click");
  next("next");
};
prevSlide.onclick = () => {
  console.log("click");
  next("prev");
};
// search filter

document.getElementById("searchFilter").onkeyup = () => {
  let idata = document.getElementById("searchFilter").value;
  console.log(idata);
};
//Hello
