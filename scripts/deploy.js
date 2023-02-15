const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["LT #307", "LT #105", "LT #115"],       // Names
    ["https://i.seadn.io/gae/DEIq6NBN6llSJXCD97X6VVQ3sYpiw7UAHq9IRoR-KG1MtuCIWr9NgfS_a2YI-fd0FF12q2LRJk-nRzekXDUJFK703ZFNFKAAqupD?auto=format&w=1000", // Images
    "https://i.seadn.io/gae/PwAGu355s7Ul_vIiDevEjwKhEvBFP3FkWEVNqdo7MK0SQuPuaTYhJ6Ags_ytD9F07klnUID9S4SGWzedL5tHIC7jSZgqPFCWGYON?auto=format&w=1920", 
    "https://i.seadn.io/gae/97QfX6dpryRg2Wzio_yqwyS_-g9uLK4nE5zH1z5Q8hn5yNxZrhdtJdl5rBnq8rSpj3uePgDOEcvc-5cB_u6j-5mhiE3nEyvbOG5Vig?auto=format&w=1000"],
    [100, 300, 100],                    // HP values
    [100, 50, 500],                      // Attack damage values
    "Elon Musk", // Boss name
    "https://i.imgur.com/AksR0tt.png", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();