import userModel from "../models/userModel";

import ToastMessage from "./ToastMessage";
import UserDisplay from "./UserDisplay";
import { useAppSelector } from "../reduxStore/hooks";
import EditModal from "./EditModal";
import { useState } from "react";

const UserList = () => {
  const userData = useAppSelector((state) => state.userData);
  const [editUser, seteditUser] = useState<userModel>({
    id: "",
    firstname: "",
    lastname: "",
    status: "",
  });
  const updateData = (currentUser: userModel) => {
    console.log(`edit btn clicked by user: ${currentUser.firstname}`);
    document.getElementById("editModalBtn")?.click();
    seteditUser(currentUser);
  };

  //   let users = [];
  //   let users: userModel[] = [
  //     { id: "ab", firstname: "bob", lastname: "mend", status: "active" },
  //     { id: "ac", firstname: "bobby", lastname: "mend", status: "inactive" },
  //     { id: "ad", firstname: "shawn", lastname: "mend", status: "active" },
  //     { id: "ae", firstname: "shawn", lastname: "mend", status: "inactive" },
  //     { id: "af", firstname: "shawn", lastname: "mend", status: "active" },
  //   ];
  return (
    <>
      <div className="  grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {userData.length == 0 && (
          <ToastMessage message="No users found!" closeAble={true} />
        )}
        {userData.map((values: userModel) => {
          return (
            <UserDisplay
              key={values.id}
              user={values}
              updateData={updateData}
            />
          );
        })}
        <button
          data-modal-target="EditUser-Modal"
          data-modal-toggle="EditUser-Modal"
          id="editModalBtn"
          className="hidden mt-5 mb-10 text-white  place-items-center gap-1 bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit User
        </button>
        <EditModal user={editUser!} />

        {/* {users.length == 0 && (
          // <div>No users found! Please create some new users!</div>
          <ToastMessage message="No users found!" closeAble={true} />
        )}
        {users.map((values: userModel) => {
          return <UserDisplay key={values.id} user={values} />;
        })} */}
      </div>
    </>
  );
};

export default UserList;
