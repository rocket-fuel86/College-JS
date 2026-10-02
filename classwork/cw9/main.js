class BankAccount {
    constructor(owner, initialBalance = 0) {
        this.owner = owner;
        this.balance = initialBalance;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Balance replenished");
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Not enough money");
            return;
        }
        this.balance -= amount;
        console.log("Withdraw successful");
    }
}

class Hero {
    #name;
    #health;
    #damage;
    #maxHealth;

    constructor(name, health = 100, damage) {
        this.#name = name;
        this.#health = health;
        this.#damage = damage;
        this.#maxHealth = this.#health;
    }

    attack(target) {
        if (this.isAlive && this.isSelfAttack(target) === false) {
            target.health -= this.damage;
            console.log(`${this.name} attacked ${target.name} with ${this.damage} DMG`);
            console.log(`${target.name} now has ${target.health} HP`);
        }
    }

    heal() {
        if (this.isAlive && this.#health + 10 <= this.#maxHealth) { 
            this.#health += 10;
            console.log(`${this.#name} healed 10 HP`);
            console.log(`${this.#name} now has ${this.#health} HP`);
        } else if (!this.isAlive) {
            console.log("Hero isn`t alive");
        } else {
            console.log("Max health reached");
        }
    }

    get name() {
        return this.#name;
    }

    get health() {
        return this.#health;
    }

    set health(health) {
        this.#health = health;
    }

    get damage() {
        return this.#damage;
    }

    isSelfAttack(target) {
        if (this.name === target.name && 
            this.health === target.health && 
            this.damage === target.damage) {
                console.log("Hero can`t attack themself");
                return true;
        } else {
            return false;
        }
    }

    isAlive() {
        return this.health > 0;
    }
}

const test1 = new Hero("Test 1", 100, 10);
const test2 = new Hero("Test 2", 100, 15);

test1.attack(test2);
test1.attack(test1); // Can`t attack themself
test2.attack(test1);
test1.heal();

// const acc = new BankAccount("Test", 1337);

// acc.deposit(100);
// console.log(acc.getBalance());
// acc.withdraw(100);
// console.log(acc.getBalance());