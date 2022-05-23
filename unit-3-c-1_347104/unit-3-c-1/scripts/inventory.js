

let product = JSON.parse(localStorage.getItem("products"))||[];

console.log(product);


product.map(function(elem,index){

  let box = document.createElement("div");

 let image = document.createElement("img");
 image.setAttribute("src",elem.image);

 let box1 = document.createElement("p");
 box1.innerText= elem.type;

 let box2 = document.createElement("p");
 box2.innerText= elem.desc;

 let box3 = document.createElement("p");
 box3.innerText= elem.price;


 let remove = document.createElement("button");
 remove.innerText="remove";
 remove.setAttribute=("id","remove");

 remove.addEventListener("click",function(){
   removeItem(elem,index);
 })


 function removeItem(elem,index){
  console.log(elem,index);

  product.splice(index,1);

  console.log(product)




  localStorage.setItem("products",JSON.stringify(product));

window.location.reload();
}


 box.append(image,box1,box2,box3,remove)

 document.getElementById("all_products").append(box);

 box.style.display ="grid";
 box.style.display ="grid-template-columns(3,ifr)";

})

