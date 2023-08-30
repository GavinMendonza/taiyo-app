import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

import userModel from "../models/userModel";
import { useAppDispatch, useAppSelector } from "../reduxStore/hooks";
import { removeUser } from "../reduxStore/userDataSlice";
// import EditModal from "./EditModal";

interface props {
  user: userModel;
  updateData: (currentUser: userModel) => void;
}

const UserDisplay = (props: props) => {
  const userData = useAppSelector((state) => state.userData);

  const dispatch = useAppDispatch();

  return (
    <>
      <div className="  flex flex-col gap-2 p-4 w-full bg-slate-200 rounded-lg">
        <div className="font-semibold">
          {props.user.firstname + " " + props.user.lastname}{" "}
        </div>

        <div
          className={
            "text-white font-bold text-xs text-center p-1 rounded-lg " +
            `${
              props.user.status === "ACTIVE" ? "bg-green-400" : "bg-orange-400"
            }`
          }
        >
          {/* {props.user.status.toUpperCase()} */}
          {props.user.status}
        </div>
        <div className="flex gap-2 w-full justify-between">
          <button
            onClick={() => {
              props.updateData(props.user);
            }}
            className="flex gap-4 place-items-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            <BiSolidPencil /> Edit
          </button>
          <button
            onClick={() => {
              dispatch(removeUser(props.user.id));
              console.log(userData, props.user.id);
            }}
            className="flex gap-4 place-items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            <MdDelete /> Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default UserDisplay;
