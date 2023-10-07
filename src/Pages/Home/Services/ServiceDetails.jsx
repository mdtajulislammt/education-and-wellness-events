import { Link } from "react-router-dom";


const ServiceDetails = ({ service }) => {
  const { id, name, image, short_description,price } = service;
  return (
    <div>
      <div className="border border-[#00bf73]  h-90 rounded-lg">
        <figure>
          <img
            src={image}
            alt="Movie"
            className=" w-full h-[200px] rounded-t-lg"
          />
        </figure>
        <div className="p-4">
          <h2 className="md:text-sm md:font-semibold lg:text-xl my-2">{name}</h2>
          <p className=" md:text-xs lg:text-sm">{short_description.slice(0,70)}<span>. . .</span></p>
          <h2 className="flex justify-between text-lg font-semibold bg-[#00bf73] text-white p-2 rounded-md my-2"> Price
          <span className=" text-xl font-bold text-[#ffffff] ">
            {price} $
          </span>
        </h2>
        </div>
        <Link to={`/services/${id}`}><button className="py-2 rounded-b-md font-bold w-full bg-[#00bf73] text-white ">Details</button></Link>
      </div>
      </div>
  );
};

export default ServiceDetails;
