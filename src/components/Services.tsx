import Image from "next/image";

const Services = () => {
    const services = [
      {
        title: "Calculated Weather",
        description: "Built Wicket longer admire do barton vanity itself do in it.",
        icon: "/img/services/sattelite.png", // Replace with an actual image/icon if needed
      },
      {
        title: "Best Flights",
        description: "Engrossed listening. Park gate sell they west hard for the.",
        icon: "/img/services/plane.png", // Replace with an actual image/icon if needed
      },
      {
        title: "Local Events",
        description: "Barton vanity itself do in it. Prefer to men it engrossed listening.",
        icon: "/img/services/mic.png", // Replace with an actual image/icon if needed
      },
      {
        title: "Customization",
        description: "We deliver outsourced aviation services for military customers.",
        icon: "/img/services/setting.png", // Replace with an actual image/icon if needed
      },
    ];
  
    return (
        <div className=" relative container px-6 py-12 lg:w-[1228px] lg:h-[525px] mx-auto">
  {/* Stars Image */}
  <Image 
    className="absolute top-10 right-0 transform"
    src="/img/services/stars.png"
    alt="Star Icon"
    width={120} // Adjust size as needed
    height={120} // Adjust size as needed
  />
  
  {/* CATEGORY Heading */}
  <h1 className="md:w-[98px] md:h-[27px] mx-auto text-md text-center md:text-[18px] font-semibold font-Poppins text-[#5E6282] mb-2">
    CATEGORY
  </h1>
  
  {/* Main Heading */}
  <h2 className="md:w-[574px] md:h-[65px] md:left[428px] mx-auto text-3xl md:text-[50px] font-bold text-[#14183e] font-['Volkhov'] mb-6 text-center">
    We Offer Best Services
  </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            
            <div
              key={index}
              className="relative flex flex-col items-center text-center p-6 bg-white rounded-2xl hover:rounded-2xl shadow-md hover:shadow-xl hover:w-[230px] hover:h-[250px] w-[220px] h-[240px] mx-auto cursor-pointer"
            >
              <div className="relative mb-4 w-[92px] h-[72px] ">
                <Image
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  width={40} 
                  height={40} 
                  className="mx-auto"
                />
                {/* Star Image
                <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
                <Image
                  src="/img/services/rec1.png"
                  alt="Star Icon"
                  width={30} // Adjust width
                  height={30} // Adjust height
                />
                </div> */}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Services;
  