import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";



const Footer = () => {
  return (
    <footer className="bg-[#FDF2EC] pt-24">
      <div className="container px-5 py-12 mx-auto flex items-center sm:flex-row flex-col ">
        <img src="logo.png" alt="logo" className="w-40" />

        <span className=" sm:ml-auto sm:mt-0 mt-4 flex flex-col gap-4 ">
          <p>Features</p>
          <p>FAQ</p>
          <p>Pricing</p>
          <p>Testimonials</p>
         
 
        </span>
      </div>

      
        <div className="container px-5 py-12 mx-auto flex items-center sm:flex-row flex-col">
     
          <p className="text-base   sm:mt-0 mt-4">
          © 2022 ManageWise, Inc.
          
          </p>

          <span className="text-2xl  flex gap-4 sm:ml-auto sm:mt-0 mt-4  justify-center sm:justify-start">
          <RiInstagramFill />

          <FaSquareXTwitter />

          <GrLinkedinOption />

          </span>
        </div>
    
    </footer>
  );
};

export default Footer;
