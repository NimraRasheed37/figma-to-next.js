import Image from "next/image";

export default function Reviews() {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-between md:w-[80%] lg:w-[1000px] lg:h-[356px]  auto w-[90%] mx-auto my-12">
        <div className="flex flex-col justify-between gap-4 md:[409px] ">
            <h1 className="text-md md:text-[18px] font-semibold font-'Poppins' text-[#5e6282]">TESTIMONIALS</h1>
            <h1 className="text-[#14183e] leading-normal font-bold text-lg lg:text-[50px] mt-4">What people say
            about Us.</h1>

            <Image
            src="/img/review/Group 61.png"
            alt="dots"
            width={100}
            height={50}
            className="mt-12"
            />
        </div>
        <div>
        <Image
            src="/img/review/Group 64.png"
            alt="review"
            width={350}
            height={320}
            className="lg:w-[669px] lg:h-[356px]"
            />
        </div>
    </div>
    </>
       
  );
};

