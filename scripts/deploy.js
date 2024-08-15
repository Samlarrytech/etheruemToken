const hre = require("hardhat");

async function main() {
  const Etheruem = await hre.ethers.getContractFactory("Etheruem");
  const etheruem = await Etheruem.deploy(100000000, 50);

  await etheruem.deployed();

  console.log("Etheruem has been deployed: ", etheruem.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
