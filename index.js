class BankAccount {
  #balance;

  constructor(accountHolderName, balance) {
    this.accountHolderName = accountHolderName;
    this.#balance = balance;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Invalid amount");
      return;
    }

    this.#balance = this.#balance + amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient balance");
      return;
    }

    this.#balance = this.#balance - amount;
  }

  getAccountType() {
    console.log("This is a Bank Account");
  }
}

class SavingBankAccount extends BankAccount {
  constructor(accountHolderName, balance, interestRate) {
    super(accountHolderName, balance);
    this.interestRate = interestRate;
  }

  getAccountType() {
    console.log("This is a Saving Bank Account");
  }
}

// Bank Account
let RohitSBI = new BankAccount("Rohit Pathak", 7000);

console.log(RohitSBI.accountHolderName);
console.log(RohitSBI.getBalance());

RohitSBI.deposit(2000);

console.log(RohitSBI.getBalance());

RohitSBI.withdraw(1000);

console.log(RohitSBI.getBalance());

RohitSBI.getAccountType();

// Saving Bank Account
let anupSBI = new SavingBankAccount("ANUP", 15000, 10);

console.log(anupSBI.accountHolderName);
console.log(anupSBI.getBalance());
console.log(anupSBI.interestRate);

anupSBI.deposit(1000);

console.log(anupSBI.getBalance());

anupSBI.getAccountType();