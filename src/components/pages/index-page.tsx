import { useNavigate } from "react-router-dom";
import { Heading } from "..";
import { useState } from "react";

export const IndexPage = () => {
  const [isMasterMind, setIsMastermind] = useState(true);
  const navigateTo = useNavigate();

  const goToCreateGame = () => {
    navigateTo("/game/create");
  };

  const goToJoinGame = () => {
    navigateTo("/game/join");
  };

  return (
    <section className="mx-auto h-screen my-0 ">
      <section className="w-full items-center h-full flex md:flex-row flex-col gap-2 ">
        {isMasterMind ? (
          <section className="w-full flex justify-center drop-shadow-lg hover:bg-opacity-50 bg-opacity-10 rounded-lg p-4">
            <section className=" flex flex-col justify-center items-center">
              <Heading isMain>MasterMind</Heading>
              <p className="text-white">
                Start a game as the master mind, As the master mind you will be
                able to create secret pins that your participants need to guess
              </p>
              <button
                onClick={goToCreateGame}
                className="border border-lime-400 rounded-md py-1 px-5 text-white hover:text-lime-400 hover:border-white"
              >
                Create
              </button>
              <button
                className="hover:text-sm text-blue-400 text-xs underline"
                onClick={() => setIsMastermind(false)}
              >
                I have code. Join as a participant
              </button>
            </section>
          </section>
        ) : (
          <section className="w-full flex justify-center drop-shadow-lg text-white bg-opacity-20 rounded-lg p-4">
            <section className=" flex flex-col justify-center items-center">
              <Heading>Participant</Heading>
              <p>Join a game as a participant</p>
              <button
                onClick={goToJoinGame}
                className="border border-lime-400 rounded-md py-1 px-5"
              >
                Join
              </button>
              <button
                className="hover:text-sm text-blue-400 text-xs underline"
                onClick={() => setIsMastermind(true)}
              >
                I don't have code. Create a game
              </button>
            </section>
          </section>
        )}
      </section>
    </section>
  );
};
