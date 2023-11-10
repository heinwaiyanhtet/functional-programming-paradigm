function Ninja(){}
const ninja = new Ninja();

console.assert(typeof ninja === "object",
      "The type of the instance is object."
      )

      console.assert(ninja instanceof Ninja, 
        "instanceof identifies the constructor." );





// function Ninja()
// {
//     this.swung = true; 
// }

// const ninja1 = new Ninja();

// Ninja.prototype.swingSword = function()
// {
//     return this.swung;
// };

// console.assert(ninja1.swingSword(),"Method exists , even out of order");

// Ninja.prototype = {
//     pierce : function(){
//         return true; 
//     }
// }

// console.assert(ninja1.swingSword(), 
//  "Our ninja can still swing!"); 


//  const ninja2 = new Ninja(); 
//  console.assert(ninja2.pierce(),"Newly created ninjas can pierce");
//  console.assert(!ninja2.swingSword, "But they cannot swing!");  


// function Ninja() {

//     this.swung = false;

//     this.swingSword = function()
//     {
//         return !this.swung;
//     }

// }

// Ninja.prototype.swingSword = function(){
//     return this.swung;
// }

// const ninja = new Ninja();



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