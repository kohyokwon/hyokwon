
class User {
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}
const user1 = new User('hyokwon', 'Job', -1);
console.log(user1.age);