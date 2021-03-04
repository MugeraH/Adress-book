let tomatoes = { name: "Tomatoes", price: 300 };
let potatoes = { name: "Potatoes", price: 150 };
let onions = { name: "Onions", price: 100 };


let groceryStore ={
  name:"Mama Mboga",
  products:[tomatoes,potatoes,onions]
}


let iPhone = { name: "iPhone", price: 699 };
let android = { name: "Android", price: 499 };
let windowsPhone = { name: "Windows Phone", price: 399 };

let phoneStore= {name:'RadioShack',
products:[iPhone,android,windowsPhone]}

let stores = [phoneStore,groceryStore]

stores.forEach((store)=>{
  console.log(`${store.name} sells`);
  store.products.forEach((product)=>{
console.log(product.name);
  })
  console.log('\n');
})

// a prototype method is a method meant to be called on a specific type of object
