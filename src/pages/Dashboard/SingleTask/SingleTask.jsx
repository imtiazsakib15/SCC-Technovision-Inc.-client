import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const SingleTask = ({ task, taskRefetch }) => {
  const axiosPublic = useAxiosPublic();

  //   Delete a task function
  const handleDelete = async (id) => {
    const result = await axiosPublic.delete(`/tasks/${id}`);
    if (result?.data?.deletedCount > 0) {
      taskRefetch();

      Swal.fire({
        title: "Good job!",
        text: `Deleted Successfully!`,
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  return (
    <div className="border rounded-md mt-2 p-4">
      <h3 className="text-lg font-bold">{task?.title}</h3>
      <p>Priority: {task?.priority}</p>
      <p className="text-red-500 font-medium">Deadline: {task?.deadline}</p>
      <p>Description: {task?.description}</p>
      <div className="text-xl flex gap-5 pt-3 justify-end">
        <FaEdit className="cursor-pointer" />
        <MdDelete
          onClick={() => handleDelete(task?._id)}
          className="text-red-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SingleTask;
