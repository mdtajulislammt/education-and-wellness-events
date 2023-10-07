import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetailItem from "./ServiceDetailItem";

const ServiceDetail = () => {
     const {id} = useParams();
     const [services, setServices] = useState({});
     const serviceData = useLoaderData();

     useEffect(()=>{
          const fineservicedata = serviceData?.find(service=>service.id == id)
          setServices(fineservicedata)
     },[id,serviceData])
     
     return (
          <div>
               <ServiceDetailItem services={services}></ServiceDetailItem>
          </div>
     );
};

export default ServiceDetail;