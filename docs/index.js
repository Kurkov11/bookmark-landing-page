
class Person{
    sayHello(){
        console.log("HELLO");
    }
}

const Damian = new Person;

Damian.sayHello();

Person.prototype.sayHello = function(){
    console.log("HI");
}

Damian.sayHello();
