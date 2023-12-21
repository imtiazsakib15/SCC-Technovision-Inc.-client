import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center pt-10 sm:pt-14 lg:pt-20">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">404</h1>
      <p className="pt-5 px-5 font-semibold">The page you are looking, is not found!!!</p>
      <div className="pt-8">
        <Link
          to={"/"}
          className="px-8 py-3 rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
