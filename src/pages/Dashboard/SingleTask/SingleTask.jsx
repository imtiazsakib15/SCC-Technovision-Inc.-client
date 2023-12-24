import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SingleTask = ({ task }) => {
  return (
    <div className="border rounded-md mt-2 p-4">
      <h3 className="text-lg font-bold">{task?.title}</h3>
      <p>Priority: {task?.priority}</p>
      <p className="text-red-500 font-medium">Deadline: {task?.deadline}</p>
      <p>Description: {task?.description}</p>
      <div className="text-xl flex gap-5 pt-3 justify-end">
        <FaEdit className="cursor-pointer" />
        <MdDelete className="text-red-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default SingleTask;
