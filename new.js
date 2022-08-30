class person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new person('hero', 'alom', 2000);
console.log(heroPerson);

const friendlyPerson = new person('sakil', 'anik', 2500);
console.log(friendlyPerson);



function person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldPerson = new person1('grand', 'papa', 1200);
console.log(oldPerson);