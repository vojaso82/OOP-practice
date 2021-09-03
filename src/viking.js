// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack = () => {
    return this.strength;
  };

  receiveDamage(damage) {
    console.log('Damage');
    this.health -= damage;
    return this.health;
  }
}

let Percy = new Soldier(50, 50);
let Achilles = new Soldier(30, 60);

Achilles.receiveDamage(Percy.attack());
console.log(Percy, Achilles);

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage = (damage) => {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  };

  battleCry = () => {
    return 'Odin Owns You All!';
  };
}

let Bjorn = new Viking('Bjorn', 3000, 100);
console.log(Bjorn.battleCry());
console.log(Bjorn.receiveDamage(Percy.attack()));
console.log(Bjorn);

// Saxon
class Saxon extends Soldier {
  receiveDamage = (damage) => {
    let health = super.receiveDamage(damage);
    console.log(health);

    if (health <= 0) {
      return 'A Saxon has died in combat';
    } else {
      return 'A Saxon has received ' + damage + ' points of damage';
    }
  };
}

let Alfred = new Saxon(150, 40);
console.log(Alfred.receiveDamage(Bjorn.attack()));


// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(v) {
    this.vikingArmy.push(v);
  }

  addSaxon(s) {
    this.saxonArmy.push(s);
  }

  vikingAttack() {
    let randomIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomIndex];
    let randomViking = 
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
      randomSaxon.receiveDamage(randomViking.attack());
      if(randomSaxon.health <=0){
       this.saxonArmy.splice(this.saxonArmy[randomIndex,1])
      }
  
  }
  saxonAttack() {
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    return randomViking.receiveDamage(randomSaxon.attack());
  }

showStatus(){
  if(this.saxonArmy.length === 0){
    return `Vikings have won the war of the century!`
  } else if(this.vikingArmy.length === 0){
    return `Saxons have fought for their lives and survived another day...`
  } else{
    return `Vikings and Saxons are still in the thick of battle.`
  }
}
}
let fight = new War()
fight.addViking(Bjorn)
fight.addSaxon(Alfred)
fight.saxonAttack()
fight.vikingAttack()
console.log(fight.showStatus())

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
