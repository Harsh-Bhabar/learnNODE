class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	greetings(){
		return (`Hi ${this.name} of ${this.age} age.`);
	}
}

module.exports = Person;