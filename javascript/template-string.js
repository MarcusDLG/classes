// let a = "awesome";
// let b = "cool";
// let c = "kittens";
// a = "facebook";

// const myFirstArrowFunc = (foo) => {
// 	console.log(foo);
// };
// myFirstArrowFunc(`I've got some ${a} data for all of ya ${b} cats and ${c}`);

// const myArrowFunc = (num1, num2) => {
// 	console.log(num1 + num2);
// };
// myArrowFunc(4, 5);

// let myArrOfNames = ["Marcus", "Jake", "Anthony", "Clint"];
// myArrOfNames.forEach((name, idx) => console.log(`${idx + 1}. ${name}`));

// let letters = ["a", "b", "c", "d"];
// let letterPlus = letters.map((letter) => letter + letter);
// console.log(letters);
// console.log(letterPlus);

// let familyCars = [
// 	{
// 		name: "F-150",
// 		speed: 100,
// 		passengers: 5,
// 	},
// 	{
// 		name: "Civic",
// 		speed: 120,
// 		passengers: 4,
// 	},
// 	{
// 		name: "Bronco",
// 		speed: 88,
// 		passengers: 7,
// 	},
// ];

// let carNames = familyCars.map((car) => car.name);
// console.log(carNames);

// familyCars.forEach((car) => {
// 	console.log(
// 		`Your ${car.name} can hold ${car.passengers} passengers, and has a top speed of ${car.speed}`
// 	);
// });

// let status = ["complete", "in-progress", "to-do"];
// let updated = status.map((member) => {
// 	let newStatus = {};
// 	// for (key in member) {
// 	// 	newStatus[key] = member[key];
// 	// }
// 	newStatus.things = "sweep, mop";
// 	return newStatus;
// });
// console.log(status);
// console.log(updated);

// let numbers = [5, 3, -10, 3, -21, 78, -54, -1, 8];
// bigNumbers = numbers.filter((num) => num > -10);
// console.log(bigNumbers);

// let ships = [
// 	{
// 		type: "freighter",
// 		name: "falcon",
// 	},
// 	{
// 		type: "fighter",
// 		name: "xwing",
// 	},
// 	{
// 		type: "bomber",
// 		name: "ywing",
// 	},
// 	{
// 		type: "fighter",
// 		name: "tie-fighter",
// 	},
// ];

// let fighters = ships
// 	.filter((ship) => ship.type == "fighter")
// 	.map((fighter) => fighter.name);
// let justName = fighters.map((fighter) => fighter.name);
// console.log(fighters);

// todoItems = [
// 	{ id: 1, status: "complete", items: "scratch head" },
// 	{ id: 2, status: "WIP", items: "Climbing" },
// 	{ id: 3, status: "WIP", items: "wash hair" },
// 	{ id: 4, status: "todo", items: "clip dog toenail" },
// 	{ id: 5, status: "complete", items: "cook" },
// 	{ id: 6, status: "todo", items: "clean car" },
// ];

// let status = todoItems.map((todos) => todos.status);

// let condensedTodos = [...new Set(todoItems.map((todo) => todo.status))];

// let result = [];
// condensedTodos.forEach((stat) => {
// 	let newObj = {};
// 	newObj.stat = stat;
// 	result.push(newObj);
// });

// result.forEach((stat) => {
// 	stat.item = [];
// 	todoItems.forEach((todo) => {
// 		if (stat.stat === todo.status) {
// 			stat.item.push(todo.items);
// 		}
// 	});
// });
// console.log(result);\

// let array1 = [1, 2, 3];
// let array2 = [...array1, 4, 5];
// console.log(...array1);

// let me = {
// 	firstName: "Clint",
// 	lastName: "Fleetwood",
// 	email: "clint@digitalcrafts.com",
// };

// let newPerson = { age: 39, ...me };
// console.log(newPerson);

//you do not need everything
let me = ["Clint", 29, "clint@digitalcrafts.com", 160];
let [name, age, email, weight] = me;
console.log("1", name, age, weight);

// you can also leave out some items
[name, age, , weight] = me;
console.log(me);
console.log(name, age, weight);
