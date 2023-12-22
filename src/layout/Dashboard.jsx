import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Dashboard = () => {
  const { logOut } = useAuth();
  const handleLogout = () => {
    logOut()
      .then(() => {
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

  return (
    <div className="flex">
      <div className="w-60 min-h-screen bg-blue-400 font-bold text-white space-y-4 px-5 py-12">
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
    </div>
  );
};

export default Dashboard;
