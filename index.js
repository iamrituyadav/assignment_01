/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/

const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

function getUniqueProductCount(arr) {
  let prodCount = {};

  /* arr.sort((a,b)=>{
    if(a.productName > b.productName){
      return -1;
    }
    
    if(a.productName < b.productName){
      return 1;
    }
    
    return 0;
      
  }) */

  /* console.log(arr); */

  arr.forEach((elem) => {
    if (prodCount[elem.productName] === undefined) {
      prodCount[elem.productName] = 1;
    } else {
      prodCount[elem.productName]++;
    }
  });

  return prodCount;
}

function getUniquePrducts(arr) {
  return arr.reduce(reducer, []);

  function reducer(ac, cv) {
    if (ac.length >= 0) {
      let flag = "false";
      for (let i = 0; i < ac.length; i++) {
        if (ac[i].productName === cv.productName) {
          flag = "true";
          ac[i].quantity += cv.quantity;
          break;
        }
      }

      if (flag === "false") {
        ac.push(cv);
      }
    }
    return ac;
  }
}

console.log(getUniqueProductCount(listOfProducts));
console.log(getUniquePrducts(listOfProducts));
