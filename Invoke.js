//Invoke as a function
function skulk(name) {};

function Ninja(name) {};

skulk('Hattori');
(function(who) {return who;})('Hattori');


// Invoke as a constructor

function Person(name, age) {
    this.name = name;
    this.age = age;
}
  
  const bill = new Person('William', 59);
  
  console.log(bill);


