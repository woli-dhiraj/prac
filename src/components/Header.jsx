import React from "react";

function Header() {
  return (
    <>
      <div className="main h-[15vh] w-[100%] bg-red-100 flex justify-center items-center py-2 px-6">
        <header className="w-full">
          <nav className="flex justify-between items-center ">
            <div className="logo">
              <img
                src="./src/assets/images/soccer.png"
                alt="logo"
                className="h-15 w-15"
              />
            </div>
            <div className="navList">
              <ul className="flex justify-between items-center space-x-10">
                <li className="text-xl cursor-pointer">Home</li>
                <li className="text-xl cursor-pointer">Matches</li>
                <li className="text-xl cursor-pointer">Jersey</li>
                <li className="text-xl cursor-pointer">Contact</li>
              </ul>
            </div>
            <div className="signIn">
              <button className="max-sm:hidden border py-2 px-3 rounded ">Sign In</button>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Header;
