import React, { useState, useEffect } from "react";

function Main() {
  let [computerChoice, setComputerChoice] = useState("");
  let [playerChoice, setPlayerChoice] = useState("");
  let [c, setC] = useState(0);
  let [result, setResult] = useState("");

  let computer = () => {
    let number = Math.floor(Math.random() * 3 + 1);
    if (number == 1) {
      setComputerChoice("rock");
    } else if (number == 2) {
      setComputerChoice("paper");
    } else {
      setComputerChoice("scissor");
    }
  };

  let play = () => {
    if (computerChoice === playerChoice) {
      setResult("draw");
    } else if (computerChoice === "rock" && playerChoice === "paper") {
      setResult("you win 👍");
    } else if (computerChoice === "rock" && playerChoice === "scissor") {
      setResult("computer win 👎");
    } else if (computerChoice === "paper" && playerChoice === "scissor") {
      setResult("you win 👍");
    } else if (computerChoice === "paper" && playerChoice === "rock") {
      setResult("computer win 👎");
    } else if (computerChoice === "scissor" && playerChoice === "rock") {
      setResult("you win 👍");
    } else if (computerChoice === "scissor" && playerChoice === "paper") {
      setResult("computer win 👎");
    }
  };

  let displayResult = () => {};

  let handleClick = (e) => {
    setPlayerChoice(e.target.id);
    setC((prevC) => prevC + 1);
    computer();
    play();
  };

  return (
    <>
      <h1 className="text-center m-3 uppercase font-bold font-mono text-3xl">
        Play Rock Paper Scissor
      </h1>

      <div className="player flex w-[30vw] m-auto  justify-evenly p-4 items-center rounded bg-[#FFF2AF]">
        <button
          onClick={handleClick}
          id="rock"
          className="border py-2 px-3 font-bold rounded cursor-pointer bg-[#3688c2] text-white"
        >
          Rock
        </button>
        <button
          onClick={handleClick}
          id="paper"
          className="border py-2 px-3 font-bold rounded cursor-pointer bg-[#DE3163] text-white"
        >
          Paper
        </button>
        <button
          onClick={handleClick}
          id="scissor"
          className="border py-2 px-3 font-bold rounded cursor-pointer bg-[#16C47F]  text-white"
        >
          Scissor
        </button>
      </div>

      <div className="displayResult my-5">
        <h1>
          {c > 0 ? (
            <>
              <div className="flex bg-green-200  h-20 w-[60%] m-auto  justify-center items-center rounded-xl">
                <span className="text-xl p-2 uppercase">you choose</span>
                <img
                  src={`./src/assets/images/${playerChoice}.png`}
                  alt={playerChoice}
                  style={{ width: "50px", height: "50px" }}
                />
                <span className="text-xl p-2 uppercase">and computer choice </span>
                <img
                  src={`./src/assets/images/${computerChoice}.png`}
                  alt={playerChoice}
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
            </>
          ) : (
            ""
          )}
        </h1>
        <h1 className="text-center m-5 text-3xl uppercase font-semibold">{result}</h1>
      </div>
    </>
  );
}

export default Main;
