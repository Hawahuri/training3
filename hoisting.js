
//function add(x,y=5)
//{
    //return(x+y);
//}
//console.log(add(10));
//console.log(add(10,20));

//const arr1=[1,2,3,4];
//const arr2=[6,7,8];
// spread operator const combined=[...arr1,...arr2];
//const combined1=[arr1,arr2];
//console.log(combined);
//console.log(combined1);


//rest operator//converts single elements to array elements
//




////function greet(name,callback)
//{
  //  console.log('${name}')
 //  callback();
//}
//function aftergreet()
//{
 ///   console.log("hi");
//}
///greet("frijal",aftergreet);
//array.immutable/mutable function
const num=[1,2,3,4,5,6,7,8];
const odd=num.filter(n=>n%2!=0);
console.log(odd);


const a1=num.reduce((acc,n)=>n+acc,0);
console.log(a1);

const user=[{id:1},{id:2}];
user.find(u=>u.id==2);
user.findIndex(u=>u.id==2);

num.some(n=>n>5);
num.every(n=>n=2);

const arr=[1,2,3,4];
arr.push(4);
console.log(arr);

arr.pop();
console.log(arr);


arr.shift();
console.log(arr);


arr.unshift(4);
console.log(arr);

