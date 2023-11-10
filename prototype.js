function Ninja() {

    this.swung = false;

    this.swingSword = function()
    {
        return !this.swung;
    }

}

Ninja.prototype.swingSword = function(){
    return this.swung;
}

const ninja = new Ninja();



// function Ninja() {}
// Ninja.prototype.swingSword = function () {
//     return true;
// }


// const ninja1 = Ninja();
// console.assert(ninja1 === undefined,"no instance of ninja created");

// const ninja2 = new Ninja(); 
// console.assert(ninja2 && 
//             ninja2.swingSword &&
//             ninja2.swingSword(),
//             "Instance exists and method is callable"
//         );





// const yoshi = { skulk: true }; 

// const hattori = { sneak: true }; 

// const kuma = { creep: true };


// console.assert("skulk" in yoshi, "Yoshi can skulk"); 

// console.assert(!("sneak" in yoshi), "Yoshi cannot sneak");