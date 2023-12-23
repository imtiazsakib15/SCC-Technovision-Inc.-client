import microsoft_logo from "../../../assets/microsoft_logo.png";
import amazon_logo from "../../../assets/amazon_logo.png";
import netflix_logo from "../../../assets/netflix_logo.png";
import google_logo from "../../../assets/google_logo.png";
import disnep_logo from "../../../assets/disnep_logo.png";

const Sponsors = () => {
  return (
    <div className="max-w-7xl bg-blue-200 mx-auto px-4 sm:px-6 lg:px-10 text-center py-8 md:py-12">
      <p>
        1 million+ people and teams trust their sanity and productivity to SCC
        Techonvision Inc
      </p>
      <div className="flex justify-center flex-wrap gap-4 mt-4 md:mt-8 px-6">
        <img className=" h-16 p-4" src={microsoft_logo} alt="Microsoft Logo" />
        <img className=" h-16" src={amazon_logo} alt="Amazon logo" />
        <img className=" h-16" src={netflix_logo} alt="Netflix Logo" />
        <img className=" h-16" src={google_logo} alt="Google Logo" />
        <img className=" h-16 p-2" src={disnep_logo} alt="Disnep Logo" />
      </div>
    </div>
  );
};

export default Sponsors;
