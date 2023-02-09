const App = () => {
  return (
    <div className=" bg-main w-screen h-screen font-poppins">
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col justify-between p-4 bg-white min-h-[250px] min-w-[300px] rounded-md shadow-2xl">
          <div className="mb-4">
            <h1 className="font-bold text-xl mb-4">Todo App</h1>
            <div className="flex justify-between">
              <input type="text" placeholder="Add task" className="p-2 border-2 border-gray-400 rounded-sm text-sm w-full" />
              <button className="bg-blue-500 text-white p-2 px-4 ml-2 rounded-sm">
                <strong>+</strong>
              </button>
            </div>
          </div>
          <hr />
          <ul className="space-y-2 my-6">
            <div className="flex justify-between items-center h-fit overflow-hidden rounded-sm">
              <li className="item-task p-2">Makan Malam</li>
              <button className="bg-red-500 h-full p-2 px-4 text-white text-sm">-</button>
            </div>
            <div className="flex justify-between items-center overflow-hidden rounded-sm">
              <li className="item-task p-2">Sapu halaman</li>
              <button className="bg-red-500 h-full p-2 px-4 text-white text-sm">-</button>
            </div>
          </ul>
          <hr />
          <div className="text-main flex justify-between items-center text-xs mt-4">
            <p className="">
              You Have <span>0</span> pending task
            </p>
            <button className="bg-blue-500 text-white p-2 px-4 ml-2 rounded-sm">Clear All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
