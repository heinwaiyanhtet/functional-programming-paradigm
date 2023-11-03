//Using the apply and call methods

function junggle(){
    var result = 0;
    for (let n = 0; n < arguments.length; n++) {
        result += arguments[n];
    }

    this.result = result;
}

var junggle1 = {};
var junggle2 = {};

junggle.apply(junggle1,[1,2,3,4]);
junggle.call(junggle2,5,6,7,8)

console.assert(junggle1.result === 10,"junggled via apply");
console.assert(junggle2.result === 26,"junggled via call");

// Constructors explicitly returning object values 


var puppet = 
{
    rules:false,
}

function Emperor()
{
    this.rules = true;
    return puppet;
}

var emperor = new Emperor();

console.assert(emperor === puppet,"The emperor is merely a puppet");
console.assert(emperor.rules === false,"The puppet does not know how to rule!");




// constructor returing primitive values

function Ninja()
{
    this.stulk = function ()
    {
        return true;
    }
    return 1;
}

console.assert(Ninja() === 1,"Return value honored when not called as a constructor")

var ninja = new Ninja();

console.assert(typeof ninja === "object","Object returned when called as a constructor");
console.assert(typeof ninja.stulk === "function","ninja object has a skulk method");


// using a constructor to set up common objects

function Ninja() {
    this.stulk = function(){
        return this;
    }
}

var ninja1 = new Ninja();
var ninja2 = new Ninja();

console.assert(ninja1.stulk() === ninja1,"this 1st ninja is stulking");
console.assert(ninja2.stulk() === ninja2,"this 2nd ninja is stulking");



// difference between function and method invocations

function whatsMyContext(){
    return this;
}

var getMyThis = whatsMyContext;

var ninja1 = {
    getMyThis : whatsMyContext
}

var ninja2 = {
    getMyThis : whatsMyContext
}

console.assert(whatsMyContext() === window,"Function call on window");