import React, { useState } from "react";
import Modal from "./components/modal/Modal";
// React Icons
import { FaTrash } from "react-icons/fa";
import { HiPlusSm } from "react-icons/hi";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [modal, setModal] = useState(false);

  const handleChange = (event) => {
    event.target.value.length <= 25 ? setNewTask(event.target.value) : alert("Maksimal 25 karakter");
  };

  const isTodoListEmpty = todoList.length === 0;

  const taskCount = todoList.length;

  // function to clear input after task added
  const clearTodoList = () => {
    setTodoList([]);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    const makeListFrom = [...todoList, task];
    newTask.length !== 0 ? setTodoList(makeListFrom) : setModal(true); //display modal when input is 0
    setNewTask(""); // clear input after task added
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className=" bg-main w-screen h-screen font-inter">
      <Modal isOpen={modal} closeModal={() => setModal(false)}>
        Can't add an empty task !
      </Modal>
      <div className="flex justify-center items-center h-full">
        {/* Content Container */}
        <div className="flex flex-col justify-between p-4 bg-white min-h-[200px] min-w-[300px] rounded-md shadow-2xl">
          <div className="">
            <h1 className="font-bold text-xl mb-4">Todo App</h1>
            <div className="flex justify-between">
              <input type="text" placeholder="Add task" className="p-2 border-2 border-gray-400 rounded-sm text-sm w-full" value={newTask} onChange={handleChange} onKeyPress={handleKeyPress} />
              <button className="bg-blue-500 text-white p-2 px-4 ml-2 rounded-sm" onClick={addTask}>
                <HiPlusSm />
              </button>
            </div>
            <span className="text-xs pt-2 text-gray-400">{newTask.length}/25</span>
          </div>
          <ul className="space-y-3">
            <hr className="border-[1px]" />
            {todoList.map((task) => {
              return (
                <div className="flex justify-between h-[40px] w-full items-center overflow-hidden rounded-sm">
                  <li className="item-task px-2 py-[10px] h-full capitalize">{task.taskName}</li>
                  <button className="bg-red-500 px-4 h-full  text-white text-sm" onClick={() => deleteTask(task.id)}>
                    <FaTrash />
                  </button>
                </div>
              );
            })}
            {isTodoListEmpty && <li className="item-task px-2 py-[10px] h-full ">There is no task todo!</li>}
            {!isTodoListEmpty && <hr className="border-[1px]" />}
          </ul>
          {!isTodoListEmpty && (
            <div className="text-main flex justify-between items-center text-xs mt-2">
              <p className="">
                You have <span>{taskCount}</span> task(s) todo
              </p>
              <button className="bg-blue-500 text-white p-2 px-4 ml-2 rounded-sm" onClick={clearTodoList}>
                Clear All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
