const ContributeArtifact = require('../artifacts/contracts/Contribute.sol/Contribute.json')
require('dotenv').config()

task("donate", "Send donation")
  .addParam("amount", "Amount of tokens")
  .setAction(async (taskArgs) => {
    const [signer] = await hre.ethers.getSigners()
    const contributeAddr = process.env.CONTRACT_ADDRESS

    const contributeContract = new hre.ethers.Contract(
      contributeAddr,
      ContributeArtifact.abi,
      signer
    )

    const result = await contributeContract.donate(taskArgs.amount, { value: taskArgs.amount })
    
    console.log(result)
  });