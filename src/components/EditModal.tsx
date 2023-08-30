import { updateUser } from "../reduxStore/userDataSlice";
import { useAppDispatch } from "../reduxStore/hooks";
import { useRef, useState } from "react";
import userModel from "../models/userModel";

interface props {
  user: userModel;
}

const EditModal = (props: props) => {
  const dispatch = useAppDispatch();
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const [statusState, setstatus] = useState("x");
  function handleSubmit() {
    dispatch(
      updateUser({
        id: props.user.id,
        firstname: firstNameRef.current!.value,
        lastname: lastNameRef.current!.value,
        status: statusState,
      })
    );
  }

  return (
    <>
      <div
        id="EditUser-Modal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="EditUser-Modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Update a Contact
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    defaultValue={props.user.firstname}
                    name="firstName"
                    id="firstName"
                    ref={firstNameRef}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    ref={lastNameRef}
                    defaultValue={props.user.lastname}
                    name="lastName"
                    id="lastName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div className="flex gap-4">
                  <div className=" flex items-center mb-4">
                    <input
                      onClick={() => setstatus("ACTIVE")}
                      id="radio1"
                      type="radio"
                      name="status"
                      value="Active"
                      className="w-4 h-4 border-gray-300 focus:ring-2"
                    />
                    <label
                      htmlFor="radio1"
                      className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Active
                    </label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      onClick={() => setstatus("INACTIVE")}
                      id="radio2"
                      type="radio"
                      name="status"
                      value="Inactive"
                      className="w-4 h-4 border-gray-300 focus:ring-2"
                    />
                    <label
                      htmlFor="radio2"
                      className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Inactive
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  onClick={(event) => {
                    event.preventDefault();
                    handleSubmit();
                  }}
                  className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Update User
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;
