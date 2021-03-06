# Donation Smart Contract

This contract can recieve donations from other addresses and storing whole list of unique addresses and total sum of their donations. After that owner of the contract, which is the address deploys exact contract, can withdraw certain amount of available tokens to any address

## Functions

- **donate(amount)**
>make donation with certain amount
- **getDonators()**
>returns unique list of donator addresses
- **getAmount(address)**
>returns total amount of donations of exact address
- **withdraw(address, amount)**
>send certain amount of tokens from contract balance to provided address, this function can be called just by the owner of contract


## HardHat Custom Tasks


```shell
node scripts/deploy.js --network rinkeby
npx hardhat donate --amount 100
npx hardhat donators
npx hardhat total-amount --address 0x5FbDB2315678afecb367f032d93F642f64180aa3
npx hardhat withdraw --address 0x5FbDB2315678afecb367f032d93F642f64180aa3 --amount 100
```

## Other commands

```shell
node scripts/deploy.js --network rinkeby
npx hardhat test
npx hardhat coverage --testfiles "test/*.js"
```

