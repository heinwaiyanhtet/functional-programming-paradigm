function Ninja() {
    var feints = 0;

    this.getfeints = function() {
        return feints;
    }

    this.feint = function(){
        feints++;
    }
}

var ninja1 = new Ninja();
ninja1.feint();


console.assert(ninja1.feints === undefined,"And the private data is un accessible to us");

console.assert(ninja1.getfeints() === 1,"we are accessible to the internal feint count");

var ninja2 = new Ninja(); 
 console.assert(ninja2.getfeints()=== 0, 
 "The second ninja object gets its own feints variable.")

