const arr=[
  {
    "id": 1,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 25.99,
    "discount": 5,
    "rating": 4.3,
    "inStock": true,
    "tags": ["computer", "mouse", "wireless"],
    "variants": [
      { "color": "Black", "quantity": 25 },
      { "color": "White", "quantity": 10 }
    ]
  },
  {
    "id": 2,
    "name": "Mechanical Keyboard",
    "category": "Electronics",
    "price": 89.99,
    "discount": 10,
    "rating": 4.7,
    "inStock": false,
    "tags": ["keyboard", "mechanical", "rgb"],
    "variants": [
      { "color": "Black", "quantity": 0 },
      { "color": "Gray", "quantity": 5 }
    ]
  },
  {
    "id": 3,
    "name": "Running Shoes",
    "category": "Fashion",
    "price": 59.5,
    "discount": 15,
    "rating": 4.1,
    "inStock": true,
    "tags": ["shoes", "sports", "running"],
    "variants": [
      { "color": "Blue", "quantity": 15 },
      { "color": "Red", "quantity": 7 }
    ]
  },
  {
    "id": 4,
    "name": "Cotton Hoodie",
    "category": "Fashion",
    "price": 35.0,
    "discount": 0,
    "rating": 4.0,
    "inStock": false,
    "tags": ["hoodie", "cotton", "winter"],
    "variants": [
      { "color": "Black", "quantity": 0 },
      { "color": "Green", "quantity": 2 }
    ]
  },
  {
    "id": 5,
    "name": "Smart Watch",
    "category": "Electronics",
    "price": 149.99,
    "discount": 20,
    "rating": 4.8,
    "inStock": true,
    "tags": ["watch", "smart", "fitness"],
    "variants": [
      { "color": "Black", "quantity": 30 },
      { "color": "Pink", "quantity": 12 }
    ]
  }
];
// 1. search by  product name
// 2. Check if any product out of stock
// 3. Check if all electronics > $20
// 4. sort by price
// 5. sort by rating 
// 6. find total stock 
// 7. Remove or insert products
// 8. filter by electronics category
//1
const search=arr.filter(n=>n.name==="Cotton Hoodie");
console.log(search);
//2
const product=arr.some(n=>n.inStock===false);
console.log("out of stock",product);
//3
const electronics=arr.some(n=>n.price>20);
console.log(electronics);
//4
const sortbyprice=arr.sort((item1,item2)=>item1.price-item2.price);
console.log(sortbyprice);

//5
const sortbyrating=arr.sort((item1,item2)=>item1.rating-item2.rating);
console.log(sortbyrating);

//6
const totalstock=arr.reduce(function(item,count=0)
{
    if(item.inStock===true)
    {
        count++;
    }
    return count;
});




//7
arr.push()