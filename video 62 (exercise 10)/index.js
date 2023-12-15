/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

let Adjectives = ["Craz", "Amazing", "Fire"];
let ShopName = ["Engine", "Foods", "Garments"];
let AnotherWord = ["Bros", "Limited", "Hub"];

function businessNameGenerator(){
    console.log(`${Adjectives[Math.floor(Math.random() * 3)]}${ShopName[Math.floor(Math.random() * 3)]}${AnotherWord[Math.floor(Math.random() * 3)]}`);
}

businessNameGenerator();
