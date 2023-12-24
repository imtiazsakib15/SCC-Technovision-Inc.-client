import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { MdErrorOutline } from "react-icons/md";
import PropTypes from "prop-types";
import useAuth from "../../../hooks/useAuth";

const AddNewTaskModal = ({ setshowmodal, taskRefetch }) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const task = {
      ...data,
      condition: "todo",
      email: user?.email,
    };
    axiosPublic.post("/tasks", task).then((res) => {
      if (res?.data?.insertedId) {
        taskRefetch();
        Swal.fire({
          title: "Task Added Successfully!",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
      }
      setshowmodal(false);
    });
  };

  return (
    <div className="overflow-y-auto overflow-x-hidden fixed z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative p-4 w-full max-w-xl max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
            <h3 className="text-lg font-semibold text-gray-900">
              Add New Task
            </h3>
            <button
              onClick={() => setshowmodal(false)}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form className="p-5" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                {...register("title", {
                  required: "Title is required.",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <p>
                {errors.title && (
                  <span className="text-red-600 text-xs flex items-center gap-0.5">
                    <MdErrorOutline />
                    {errors.title?.message}
                  </span>
                )}
              </p>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="deadline"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Deadline
                </label>
                <input
                  type="date"
                  id="deadline"
                  {...register("deadline", {
                    required: "Deadline is required.",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <p>
                  {errors.deadline && (
                    <span className="text-red-600 text-xs flex items-center gap-0.5">
                      <MdErrorOutline />
                      {errors.deadline?.message}
                    </span>
                  )}
                </p>
              </div>
              <div>
                <label
                  htmlFor="priority"
                  className="block mb-2 text-sm font-medium"
                >
                  Select Priority
                </label>
                <select
                  id="priority"
                  {...register("priority", {
                    required: "Priority is required.",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="">Choose priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
                <p>
                  {errors.priority && (
                    <span className="text-red-600 text-xs flex items-center gap-0.5">
                      <MdErrorOutline />
                      {errors.priority?.message}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Description
              </label>
              <textarea
                id="description"
                rows="3"
                {...register("description", {
                  required: "Description is required.",
                })}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
              <p>
                {errors.description && (
                  <span className="text-red-600 text-xs flex items-center gap-0.5">
                    <MdErrorOutline />
                    {errors.description?.message}
                  </span>
                )}
              </p>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Add New Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

AddNewTaskModal.propTypes = {
  setshowmodal: PropTypes.func,
  taskRefetch: PropTypes.func,
};

export default AddNewTaskModal;
