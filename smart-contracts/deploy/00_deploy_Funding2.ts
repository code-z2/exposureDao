import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployFunding2: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  const { getNamedAccounts, deployments, network } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy, log } = deployments;
  log("deploying Exposure");
  const receipt = await deploy("Exposure", {
    from: deployer,
    args: [],
    log: true,
  });
  log("deployed funding contract at" + receipt.address);
};

export default deployFunding2;
deployFunding2.tags = ["all", "Exposure"];
