//store the products array in localstorage as "products"

// const { json } = require("express/lib/response");


let arr = [];
function Product (t,d,p,i){


  this.type =t;
  this.desc =d;
  this.price=p;
  this.image=i;
}


function addData(e){


  e.preventDefault();

  let form = document.getElementById("products") ;

  let type = form.type.value;
  console.log(type)

  let description = form.desc.value;

  let price = form.price.value;

  let image = form.image.value;


  let p1 = new Product (type,description,price,image);


  arr.push(p1)

  localStorage.setItem("products",JSON.stringify(arr));
  
    type = document.getElementById("type").value=""
   description =document.getElementById("desc").value=""
   price =document.getElementById("price").value=""
   image =document.getElementById("image").value=""
  
}