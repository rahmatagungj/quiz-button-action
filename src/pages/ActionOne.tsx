import MainLayout from "../layouts/MainLayouts";

const ActionOne = () => {
  return (
    <MainLayout>
      <div className="flex justify-center w-ful mt-10">
        <h1 className="text-gray-100 font-bold text-4xl text-center">
          Peserta 1
        </h1>
      </div>
      <main className="h-screen flex">
        <div className="m-auto">
          <button className="bg-green-600 p-5 rounded-xl h-64 w-64 text-white font-bold text-3xl hover:bg-green-700">
            Jawab
          </button>
        </div>
      </main>
      <div className="flex-grow" />
    </MainLayout>
  );
};

export default ActionOne;
