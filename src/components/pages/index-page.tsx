import React from "react";

export const IndexPage = () => {
  const goToCreateGame = () => {
    console.log("goToCreateGame");
  };

  const goToJoinGame = () => {
    console.log("goToJoinGame");
  };

  return (
    <section className="w-full flex divide-x-2">
      <section className="w-1/2 flex justify-center">
        <section>
          <h1 className="font-bold text-2xl">MasterMind</h1>
          <p>Start a game as the master mind</p>
          <button
            onClick={goToCreateGame}
            className="border border-lime-400 rounded-md py-1 px-5"
          >
            Create
          </button>
        </section>
      </section>
      <section className="w-1/2 flex justify-center">
        <section>
          <h1 className="font-bold text-2xl">Participant</h1>
          <p>Join a game as a participant</p>
          <button
            onClick={goToJoinGame}
            className="border border-lime-400 rounded-md py-1 px-5"
          >
            Join
          </button>
        </section>
      </section>
    </section>
  );
};
