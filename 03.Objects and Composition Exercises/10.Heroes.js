// Create a function that returns an object with 2 methods (mage and fighter). 
// This object should be able to create heroes (fighters and mages). Every hero has a state.
// •	Fighters have a name, health = 100, and stamina = 100 and every fighter can fight. 
// When he fights his stamina decreases by 1 and the following message is printed on the console:
// `${fighter's name} slashes at the foe!`
// •	Mages also have state (name, health = 100 and mana = 100). 
//Every mage can cast spells. When a spell is cast the mage's mana decreases by 1 and the following message is printed on the console:
// `${mage's name} cast ${spell}`


function solve(){
   return {
        mage(name){
           return {
            name: name,
            health: 100,
            mana:100,
            cast(spell){
                this.mana -= 1;
                console.log(`${this.name} cast ${spell}`);
                
            }
           }
        },

        fighter(name){
            return{
                name,
                health: 100,
                stamina: 100,
                fight(){
                    this.stamina -= 1;
                    console.log(`${this.name} slashes at the foe!`);
                    
                }
            }
        }
    }
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
