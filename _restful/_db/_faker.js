//SECTION  Creating  dummy data using faker.js

const faker = require("faker");
const fs = require("fs");

//NOTE creat a user object with faker data methods 👨‍🎓
const createUser = () => {
	return {
		card: faker.helpers.contextualCard()
	};
};

// ------------------------------
//NOTE creat an array of number of users 🧑‍🤝‍🧑
const createUsers = (numUsers = 10) => {
	return Array.from({ length: numUsers }, createUser);
};

let fakeUsers = createUsers(10);
// console.log(fakeUsers);
//----------------------------------------
//NOTE save the the dummy data in a json file using node core modules 🌳
fs.writeFile("./data.json", JSON.stringify(fakeUsers, null, 4), (err) => {});

// ------------------------------
//REVIEW  https://github.com/Marak/faker.js
