let myJsonObject = `{
  "name":"Marcus",
  "age":31,
  "email":"marcus@iconicdigitalpalette.com"
}`;
let oneJSONobject = JSON.stringify(myJsonObject);
console.log(oneJSONobject); //Create a javascript object and convert that object into a JSON string.

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
console.log(famArray2); //Create an array of objects and turn that array of objects into a JSON string
console.log(famArray3); //Turn that JSON string back into a an array of objects.
