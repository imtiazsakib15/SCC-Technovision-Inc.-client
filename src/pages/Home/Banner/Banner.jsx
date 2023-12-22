import { Link } from "react-router-dom";
import bannerImg from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="flex flex-col sm:flex-row sm:gap-6 p-4 md:p-8">
        <div className="space-y-4 sm:w-1/2 py-20">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-lg">
            Welcome to SCC Technovision Inc.
          </h1>
          <p>Your Ultimate Task Management Solution</p>
          <Link
              to={"/register"}
              className="btn bg-blue-500 text-white hover:bg-blue-700 uppercase"
            >
              Start for Free
            </Link>
        </div>
        <div className="sm:w-1/2">
          <img className="w-full rounded-md" src={bannerImg} alt="bannerImg" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
