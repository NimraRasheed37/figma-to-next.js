import Image from "next/image";


export default function Booking() {
    return (
      <div className="flex flex-wrap justify-between items-center gap-2 p-10 bg-gray-50 mb-4
      xl:w-[1114px] xl:h-[492px] md:w-[900px] w-[90%] h-auto mx-auto ">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-md md:text-[18px] font-semibold text-[#5e6282]">Easy and Fast</h2>
          <h1 className="text-xl md:text-[50px] leading-snug font-bold text-[#14183e]  mt-1">
            Book Your Next Trip <br /> In 3 Easy Steps
          </h1>
          <div className="mt-8 md:space-y-6 w-[95%] h-auto md:w-[395px] md:h-[289px]">
            {/* Step 1 */}
            <div className="flex items-start">
            <Image
                  src="/img/booking/Group 7.png"
                  alt="img1"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
              <div className="ml-4">
                <h3 className="text-lg: md:text-[16px] font-bold text-[#5e6282]">Choose Destination</h3>
                <p className="text-lg: md:text-[16px] text-[#5e6282]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex items-start">
            <Image
                  src="/img/booking/Group 12.png"
                  alt="img1"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
              <div className="ml-4">
                <h3 className="text-lg: md:text-[16px] font-bold text-[#5e6282]">Make Payment</h3>
                <p className="text-lg: md:text-[16px] text-[#5e6282]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex items-start">
                <Image
                  src="/img/booking/Group 11.png"
                  alt="img1"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
              <div className="ml-4">
                <h3 className="text-lg: md:text-[16px] font-bold text-[#5e6282]">
                  Reach Airport on Selected Date
                </h3>
                <p className="text-lg: md:text-[16px] text-[#5e6282]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Right Section */}
          <div className="rounded-lg shadow-lg overflow-hidden bg-white">
            <Image
              src="/img/booking/Image.png"
              alt="Trip to Greece"
              className="object-cover"
              width={485}
              height={459}
            />
           
        </div>
      </div>
    );
  }
  