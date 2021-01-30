
class User {
    constuctor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value){
        if(value < 0);
        this._age = 3;
    } 
}

const user1 = new User('steve', 'Job', -1);
console.log(user1.age);