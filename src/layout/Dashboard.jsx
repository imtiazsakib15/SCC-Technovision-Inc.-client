import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Dashboard = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

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

  return (
    <div className="flex">
      <div className="w-full sm:w-60 sm:min-h-screen text-center sm:text-left bg-blue-400 font-bold text-white space-y-4 px-5 py-12">
        <div className="flex items-center justify-center gap-2">
          <img
            className="w-12 h-12 rounded-full"
            src={user?.photoUrl}
            alt="User Photo"
          />
          <h4 className="font-medium">Welcome {user?.displayname}</h4>
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
    </div>
  );
};

export default Dashboard;
