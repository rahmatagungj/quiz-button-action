import React from "react";
import MainLayout from "../layouts/MainLayouts";
import { playerActions } from "../contexts/playerActions";

const Home = () => {
  const { playerOne } = React.useContext(playerActions);

  console.log(playerOne);

  return (
    <MainLayout>
      <main className="h-screen flex ">
        <div className="m-auto  flex flex-col justify-center">
          {playerOne && (
            <h1 className="text-gray-100 font-bold text-4xl text-center">
              🖐 Peserta 1 Menjawab
            </h1>
          )}
          <button className="mt-10 bg-yellow-600 max-w-xl p-5 rounded-xl text-white font-bold text-2xl hover:bg-yellow-700">
            Reset
          </button>
        </div>
      </main>
      <div className="flex-grow" />
    </MainLayout>
  );
};

export default Home;
