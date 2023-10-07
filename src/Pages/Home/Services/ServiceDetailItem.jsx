import { AiOutlineShareAlt } from 'react-icons/ai';



const ServiceDetailItem = ({services}) => {
     const { id, name, image,price, short_description } = services||{};
     console.log(services);
     return (
          <div className='flex grid-cols-3 gap-5 mx-20 mt-12 '>
               <div className='  border rounded-xl shadow-md sticky top-2 border-[#00bf73] p-4 w-72'>
                    <h2 className='flex justify-between text-lg  font-medium mb-4'>Price <span className=' text-xl font-extrabold text-[#00bf73]'>{price} $</span></h2>
                    <h2 className='flex justify-between text-lg font-medium mb-4'>Instructor <span className=' text-gray-500 '>Admin</span></h2>
                    <h2 className='flex justify-between text-lg font-medium mb-4'>Duration <span className=' text-gray-500 '>10 week(s)</span></h2>
                    <h2 className='flex justify-between text-lg font-medium mb-4'>Enrolled <span className=' text-gray-500 '>0 student(s)</span></h2>
                    <h2 className='flex justify-between text-lg font-medium mb-4'>Language <span className=' text-gray-500 '>English</span></h2>
                    <h2 className='flex justify-between text-lg font-medium mb-4'>Items <span className=' text-gray-500 '>0</span></h2>
                    <h2 className='flex justify-between text-lg font-medium mb-4'>Status <span className=' text-gray-500 '>Not enrolled</span></h2>
                    <div className=' mx-auto text-center'>
                         <button className=' bg-[#00bf73] text-white font-bold p-3 mt-5 rounded-xl w-full'>Buy this Course</button>
                         <div className=' flex items-center justify-center mt-2 gap-2'><AiOutlineShareAlt/> <span>Share this course</span></div>

                    </div>
               </div>
               <div>
                    <img className=' col-span-2 rounded-xl' src={image} alt="" />
                    <h2>{name}</h2>
                    <p>{short_description}</p>
               </div>
              
          </div>
     );
};

export default ServiceDetailItem;