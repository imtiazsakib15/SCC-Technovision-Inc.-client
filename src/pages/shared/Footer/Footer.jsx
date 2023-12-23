import { Link } from "react-router-dom";
import Logo from "/logo.png";
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 lg:pt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <Link
              to={"/"}
              className="text-white flex items-center justify-center sm:text-xl lg:text-2xl font-bold"
            >
              <img
                className="w-7 h-7 lg:w-10 lg:h-10 -mr-1.5"
                src={Logo}
                alt="Logo"
              />
              CC Technovision Inc.
            </Link>
            <p className="mt-4 text-gray-300">
              Revolutionize your productivity with SCC Technovision Inc.&apos;s
              Task Management Platform. Effortless task tracking for the modern
              multitasker.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Important Links</h4>

            <div className="mt-3 grid space-y-3">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200"
                  to="/"
                >
                  Home
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200"
                  to="/recent"
                >
                  Recent
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200"
                  to="/templates"
                >
                  Templates
                </Link>
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Follow Us On</h4>

            <div className="mt-4">
              <Link
                className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
                to="/"
              >
                <BsFacebook />
              </Link>
              <Link
                className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
                to="/"
              >
                <BsGoogle />
              </Link>
              <Link
                className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
                to="/"
              >
                <BsTwitter />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-5 sm:mt-12 text-center">
          <p className="text-sm text-gray-300">
            &copy; 2023{" "}
            <Link className="underline" to="/">
              scc-technovision-inc
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
