//SECTION  Creating  dummy data using faker.js

const faker = require("faker");
const fs = require("fs");

//NOTE creat a user object with faker data methods 👨‍🎓
const createUser = () => {
	return {
		id: faker.datatype.uuid(),
		productName: faker.commerce.productName(),
		productCategory: faker.commerce.product(),
		quantity: faker.datatype.number(),
		price: faker.commerce.price(),
		description: faker.commerce.productDescription(),
		image: faker.image.image(),
	};
};

// ------------------------------
//NOTE creat an array of number of users 🧑‍🤝‍🧑
const createUsers = (numUsers = 10) => {
	return Array.from({ length: numUsers }, createUser);
};

let fakeUsers = createUsers(5);
// console.log(fakeUsers);
//----------------------------------------
//NOTE save the the dummy data in a json file using node core modules 🌳
fs.writeFile("./db.json", JSON.stringify(fakeUsers, null, 4), (err) => {});
