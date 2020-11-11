let arrayOfObjectJSON = `[
  {
      "name":"Marcus",
      "age":31,
      "email":"marcus@iconicdigitalpalette.com"
  },
  {
      "name":"Jamie",
      "age":32,
      "email":"jmking88@yahoo.com"
  },
  {
      "name":"Baby",
      "age":11,
      "email":"baby@ImAdog.com"
  },
  {
      "name":"Jackson",
      "age":8,
      "email":"Jackson@ImAdog.com"
  }
]`;
let famArray = JSON.parse(arrayOfObjectJSON);
let famArray2 = JSON.stringify(arrayOfObjectJSON);
let famArray3 = JSON.parse(famArray2);
console.log(famArray);
console.log(famArray2);
console.log(famArray3);
