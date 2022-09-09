const { expect } = require("chai")
const { ethers, waffle} = require("hardhat");
const provider = waffle.provider;

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter")
    const greeter = await Greeter.deploy("Hello, world!")
    const [owner] = await ethers.getSigners();
    await greeter.deployed()

    const balance0ETH = await provider.getBalance(owner.address);
    // console.log('BALANCE before ETH', balance0ETH)

    const sendViaTransferTx = await greeter.sendViaTransfer(owner.address, 50)
    const balanceafterSentETH = await provider.getBalance(owner.address);
    // console.log('BALANCE after sent ETH', balanceafterSentETH)
    console.log('BALANCE diff', Math.abs(balanceafterSentETH - balance0ETH))

    console.log('>>> SENDVIATRANSFERTX', sendViaTransferTx)

  })
})
