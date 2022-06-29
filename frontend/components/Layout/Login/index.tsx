import UAuth from "@uauth/js";
import React, { useEffect, useState } from "react";

const uauth = new UAuth({
  clientID: "7f4f5811-e1a7-4787-a560-94dbdae94da3",
  redirectUri: "http://localhost:5000/callback",
  scope: "openid wallet humanity_check",
});

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [user, setUser] = useState<any>();

  // Check to see if the user is inside the cache
  useEffect(() => {
    setLoading(true);
    uauth
      .user()
      .then(setUser)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  // Login with a popup and save the user
  const handleLogin = () => {
    setLoading(true);
    uauth
      .loginWithPopup()
      .then(() => uauth.user().then(setUser))
      .catch(setError)
      .finally(() => setLoading(false));
  };

  // Logout and delete user
  const handleLogout = () => {
    setLoading(true);
    uauth
      .logout()
      .then(() => setUser(undefined))
      .catch(setError)
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    console.error(error);
    return <>{String(error.stack)}</>;
  }

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://localhost:3000/" className="flex items-center">
          {/*image*/}
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Dao
          </span>
        </a>
        <div className="flex md:order-2">
          {user ? (
            <>
              <div>
                Connected to {user.wallet_address} {user.sub}
              </div>
              <button
                className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                onClick={() => handleLogout()}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
              onClick={() => handleLogin()}
            >
              Login with Unstoppable
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default App;
