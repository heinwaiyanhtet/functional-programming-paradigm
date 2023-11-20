function Ninja() {
    let _skillLevel = 0;

    Object.defineProperty(this,"skillLevel",{

        get: () => {
            
        }
    })
}

// function Ninja () {
//     let skillLevel;
    
//     this.getSkillLevel = () => {
//     report("Getting skill level value"); 
//     return skillLevel;
//     };
//     this.setSkillLevel = value => {
//     report("Modifying skillLevel property from:", 
//     skillLevel, "to: ", value); 
//     skillLevel = value;
//     }
//    }

//    let ninja = new Ninja();
//    console.log(ninja.skillLevel);

// class NinjaCollection{
//     constructor(){
//         this.ninjas = ["Yoshi", "Kuma", "Hattori"];
//     }

//     get firstNinja(){
//         report("Getting firstNinja"); 
//         return this.ninjas[0]; 
//     }

//     set firstNinja(value){
//         report("Setting firstNinja");
//         this.ninjas[0] = value;
//     }
// }
// const ninjaCollection  = new NinjaCollection();

// console.assert(ninjaCollection.firstNinja === "Yoshi","Yoshi is the first Ninja");

// ninjaCollection.firstNinja = "Hachi";
// console.assert(ninjaCollection.firstNinja === "Hachi"
//         && ninjaCollection.ninjas[0] === "Hachi",
//         "Now Hachi is the first Ninja"
// );