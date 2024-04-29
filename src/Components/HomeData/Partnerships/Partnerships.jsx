import Marquee from "react-fast-marquee";
import logo1 from './../../../assets/partnarships/logo1.png'
import client2 from './../../../assets/partnarships/client-2.png'
import client3 from './../../../assets/partnarships/client-3.png'
import client4 from './../../../assets/partnarships/client-4.png'
import client5 from './../../../assets/partnarships/client-6.png'


export default function Partnerships() {
    
  return (
    <>
    <div className=" last:">
    <h1 
    data-aos="zoom-in-right"
    data-aos-delay="1000 "
    data-aos-duration="1200"
    className=" font-bold text-2xl md:text-3xl  lg:text-4xl  ml-2 " >Partnerships & Collabo<span className="text-[#fcb040]" >rations.</span></h1>
    </div>
      <div 
      
      data-aos="zoom-in"
              data-aos-delay="1000 "
              data-aos-duration="1500"
      className="mt-4    bg-white/80 " >
        
      <Marquee pauseOnHover={true} >
  <div className=" gap-16 md:gap-32 flex">
  <img className=" " src={logo1} alt="" />
  <img src={client2} alt="" />
  <img src={client3} alt="" />
  <img src={client4} alt="" /> 
  <img src={client5} alt="" /> 
  </div>
</Marquee>
      </div>
    </>
  )
}