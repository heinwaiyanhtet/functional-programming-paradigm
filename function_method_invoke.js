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