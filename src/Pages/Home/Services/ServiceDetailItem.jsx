import { Rating } from "@mui/material";
import { AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServiceDetailItem = ({ services }) => {
  const {  name, image, price, short_description,rating} = services || {};

 
  return (
    
    <div >
        <Link to={`/service`}><button className="py-2 sticky top-0 rounded-b-md font-bold w-full bg-[#00bf73] text-white ">Back All Services</button></Link>

      <div className="grid lg:grid-cols-3  md:grid-cols-1 gap-5 mx-5 md:mx-10 lg:mx-20 mt-12 ">
      <div className="  border rounded-xl shadow-lx  border-[#00bf73] p-4 w-full md:w-full  h-[470px]">
        <h2 className="flex justify-between text-lg  font-medium mb-4"> Price
          <span className=" text-xl font-extrabold text-[#00bf73] ">
            {price} $
          </span>
        </h2>
        <h2 className="flex justify-between text-lg font-medium mb-4">
          Instructor <span className=" text-gray-500 ">Admin</span>
        </h2>
        <h2 className="flex justify-between text-lg font-medium mb-4">
          Duration <span className=" text-gray-500 ">10 week(s)</span>
        </h2>
        <h2 className="flex justify-between text-lg font-medium mb-4">
          Enrolled <span className=" text-gray-500 ">0 student(s)</span>
        </h2>
        <h2 className="flex justify-between text-lg font-medium mb-4">
          Language <span className=" text-gray-500 ">English</span>
        </h2>
        <h2 className="flex justify-between text-lg font-medium mb-4">
          Items <span className=" text-gray-500 ">0</span>
        </h2>
        <h2 className="flex justify-between text-lg font-medium mb-4">
          Status <span className=" text-gray-500 ">Not enrolled</span>
        </h2>
        <div className=" flex items-center justify-center">
        <Rating name="half-rating" defaultValue={rating} precision={0.5} />
                    <p className=' text-base font-medium text-[#706F6F]'>{rating}</p>
        </div>
        <div className=" mx-auto text-center">
          <button className=" bg-[#00bf73] text-white font-bold p-3 mt-5 rounded-xl w-full">
            Buy this Course
          </button>
          <div className=" flex items-center justify-center mt-2 gap-2 hover:text-[#00bf73]">
            <AiOutlineShareAlt /> <a href="#">Share this course</a>
          </div>
        </div>
      </div>
      <div className=" lg:col-span-2 ">
        <img className="  rounded-xl w-full" src={image} alt="" />
        <div className=" p-5">
          <h2 className=" text-xl lg:text-4xl font-bold text-[#00bf73]">{name}</h2>
          <p className=" leading-8">{short_description}</p>
        </div>


          <div>
               


          </div>


      </div>
    </div>
    </div>
  );
};

export default ServiceDetailItem;
