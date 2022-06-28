import { useWeb3React } from "@web3-react/core";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import React, { FC } from "react";
import connectors from "./connectors";

const Connect: FC = () => {
  const { active, account, activate, deactivate } = useWeb3React();

  function createConnectHandler(connectorId: string) {
    return async () => {
      try {
        const connector = connectors[connectorId];

        // Taken from https://github.com/NoahZinsmeister/web3-react/issues/124#issuecomment-817631654
        if (
          connector instanceof WalletConnectConnector &&
          connector.walletConnectProvider
        ) {
          connector.walletConnectProvider = undefined;
        }

        await activate(connector);
      } catch (error) {
        console.error(error);
      }
    };
  }

  async function handleDisconnect() {
    try {
      deactivate();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          {/*image*/}
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Dao
          </span>
        </a>
        <div className="flex md:order-2">
          {active ? (
            <button
              type="button"
              className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
              onClick={handleDisconnect}
            >
              Disconnect {account}
            </button>
          ) : (
            <div>
              {Object.keys(connectors).map((v) => (
                <button
                  key={v}
                  type="button"
                  className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                  onClick={createConnectHandler(v)}
                >
                  Connect to {v}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Connect;
