class Person {
	constructor(name, age = 0) {
		this.name = name
		this.age = age
	}

	getGreeting() {
		return "Hi!" + this.name
	}

	getDescription() {
		return this.name + this.age
	}
}

class Student extends Person {
	constructor(name, age, major = "Undecided") {
		super(name, age) // call parent constructor
		this.major = major
	}

	hasMajor() {
		return !!this.major
	}

	getDescription() {
		let description = super.getDescription() // function from the parent

		if (this.hasMajor()) {
			description = description += ` Their major is ${this.major}.`
		}

		return description
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation) {
		super(name, age)
		this.homeLocation = homeLocation
	}

	hasHomeLocation() {
		return !!this.homeLocation
	}

	getGreeting() {
		let description = super.getGreeting() // function from the parent

		if (this.hasHomeLocation()) {
			description = description += ` I'm from ${this.homeLocation}.`
		}

		return description
	}
}
