import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import AddNewTaskModal from "../pages/Dashboard/AddNewTaskModal/AddNewTaskModal";
import { useState } from "react";
import TodoTasks from "../pages/Dashboard/TodoTasks/TodoTasks";
import OngoingTasks from "../pages/Dashboard/OngoingTasks/OngoingTasks";
import CompletedTasks from "../pages/Dashboard/CompletedTasks/CompletedTasks";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Dashboard = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [showmodal, setshowmodal] = useState(false);
  const axiosPublic = useAxiosPublic();

  // User logout function
  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
        Swal.fire({
          title: "Good job!",
          text: `Log Out Successfully!`,
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Get user specific todos
  const { data, refetch: taskRefetch } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => await axiosPublic.get(`/tasks/${user?.email}`),
  });

  const tasks = data?.data || [];
  const todos = tasks?.filter((task) => task?.condition === "todo");
  const ongoing = tasks?.filter((task) => task?.condition === "ongoing");
  const completed = tasks?.filter((task) => task?.condition === "completed");

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-48 md:w-60 sm:min-h-screen text-center sm:text-left bg-blue-400 font-bold text-white space-y-4 px-5 py-12">
        <div className="flex items-center justify-center gap-2">
          <img
            className="w-12 h-12 rounded-full"
            src={user?.photoURL}
            alt="User Photo"
          />
          <h4 className="font-medium">Welcome {user?.displayName}</h4>
        </div>
        <div className="border"></div>
        <div>
          <Link to={"/dashboard"}>Dashboard</Link>
        </div>
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div className="pt-5">
          <button
            onClick={handleLogout}
            className="btn bg-blue-500 text-white hover:bg-blue-700"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex-1">
        <div className="text-right">
          <button
            onClick={() => setshowmodal(true)}
            className="font-semibold m-5 px-5 py-2 bg-black text-white"
          >
            Add New Task
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 p-5 gap-4">
          <TodoTasks todos={todos} taskRefetch={taskRefetch} />
          <OngoingTasks ongoing={ongoing} taskRefetch={taskRefetch} />
          <CompletedTasks completed={completed} taskRefetch={taskRefetch} />
        </div>
      </div>
      {showmodal && (
        <AddNewTaskModal
          setshowmodal={setshowmodal}
          taskRefetch={taskRefetch}
        />
      )}
    </div>
  );
};

export default Dashboard;
