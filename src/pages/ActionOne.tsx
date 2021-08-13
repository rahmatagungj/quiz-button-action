import React from "react";
import MainLayout from "../layouts/MainLayouts";
import { playerActions } from "../contexts/playerActions";

const ActionOne = () => {
  const { playerOne, setPlayerOne } = React.useContext(playerActions);

  const HandleClick = () => setPlayerOne(true);
  return (
    <MainLayout>
      <div className="flex justify-center w-ful mt-10">
        <h1 className="text-gray-100 font-bold text-4xl text-center">
          Peserta 1
        </h1>
      </div>
      <main className="h-screen flex">
        <div className="m-auto">
          <button
            onClick={HandleClick}
            className={`${
              playerOne
                ? "cursor-not-allowed bg-yellow-600"
                : "bg-green-600 hover:bg-green-700"
            } p-5 rounded-xl h-64 w-64 text-white font-bold text-3xl`}
          >
            {!playerOne ? "Jawab" : "Menjawab"}
          </button>
        </div>
      </main>
      <div className="flex-grow" />
    </MainLayout>
  );
};

export default ActionOne;
