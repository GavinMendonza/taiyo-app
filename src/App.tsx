// import { BsFillPlusCircleFill } from "react-icons/bs";
import Sidebar from "./components/Sidebar";
// import Modal from "./components/Modal";
// import UserList from "./components/UserList";
function App() {
  return (
    <>
      {/* <div className="flex flex-col h-screen  lg:flex-row "> */}
      <Sidebar />
      <div>
        {/* <button
            data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
            className="mt-5 mb-10 text-white flex place-items-center gap-1 bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <BsFillPlusCircleFill /> Add User
          </button>
          <Modal />

          <UserList /> */}
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
