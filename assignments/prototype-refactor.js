/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject{
    constructor(character){
        this.createdAt = character.createdAt;
        this.name = character.name;
        this.dimensions = character.dimensions;
    }
    destroy(){
        return `${this.name} was removed from the game.`
    }
}
  
class CharacterStats extends GameObject {
    constructor(thechar){
        super(thechar);
        this.healthPoints = thechar.healthPoints;
    }
    takeDamage(){
        return `${this.name} took damage.`
  }
}

class Humanoid extends CharacterStats {
    constructor(char){
        super(char);
        this.team = char.team;
        this.weapons = char.weapons;
        this.language = char.language;
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}`
    }
}
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
    console.log(swordsman)
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
    class Hero extends Humanoid{
        constructor(heroAttrs){
          super(heroAttrs);
        }
        sasukeee(enemy){
          if (enemy.healthPoints > 0){
            console.log(`${this.name} attacks ${enemy.name}`)
            enemy.healthPoints = enemy.healthPoints - 5;
            if (enemy.healthPoints <= 0){
            console.log(`${enemy.name}'s Health Point is now 0`)
            console.log(`RIP ${enemy.name}`)
            } else {
              console.log(`${enemy.name}'s Health Point is now ${enemy.healthPoints}`)
            }
          }
        }
      }
        
      class Villain extends Humanoid{
        constructor(villainAttrs){
          super(villainAttrs);
        }
        narutooo(enemy){
          if (enemy.healthPoints > 0){
            console.log(`${this.name} attacks ${enemy.name}`)
            enemy.healthPoints = enemy.healthPoints - 5;
            if (enemy.healthPoints <= 0){
            console.log(`${enemy.name}'s Health Point is now 0`)
            console.log(`RIP ${enemy.name}`)
            } else {
              console.log(`${enemy.name}'s Health Point is now ${enemy.healthPoints}`)
            }
          }
        }
      }
      const theHero = new Hero({
        createdAt: new Date(),
        dimensions: {
          length: 1,
          width: 2,
          height: 4,
        },
        healthPoints: 20,
        name: 'Naruto',
        team: 'Konoha Village',
        weapons: [
          'Shuriken',
          'Chakra',
        ],
        language: 'Gibberish',
      });
    
      const theVillain = new Villain({
        createdAt: new Date(),
        dimensions: {
          length: 1,
          width: 2,
          height: 4,
        },
        healthPoints: 20,
        name: 'Sasuke',
        team: 'Sasuke-kun Team',
        weapons: [
          'Sword',
          'Sharingan',
        ],
        language: 'Nonsense',
      });
      theVillain.narutooo(theHero)
      theHero.sasukeee(theVillain)
      theVillain.narutooo(theHero)
      theHero.sasukeee(theVillain)
      theVillain.narutooo(theHero)
      theHero.sasukeee(theVillain)
      theVillain.narutooo(theHero)
      theHero.sasukeee(theVillain)