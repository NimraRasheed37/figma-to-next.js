import Image from "next/image";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay } from '@fortawesome/free-solid-svg-icons';
export default function Contact() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center md:gap-8 gap-2 lg:px-8 contact-image">
        {/* pointer */}
        <Image
          className="hidden md:block md:absolute top-[-25px] right-0 transform hover:shadow-2xl rounded-full cursor-pointer shadow-purple-900"
          src="/img/contact/c-arrow.png"
          alt="Star Icon"
          width={60}
          height={60}
        />
        {/* Stars Image */}
        <Image
          className="absolute bottom-0 right-0 transform "
          src="/img/services/stars.png"
          alt="Star Icon"
          width={120}
          height={120}
        />
        <div className="mx-auto text-center">
          <h2 className=" text-md md:text-[33px] font-semibold text-[#5e6282] w-[80%] md:w-[881px] md:h-[108px] mx-auto">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h2>
          <div className="mt-6 flex flex-col gap-4 md:flex-row justify-center">
            <input
              type="email"
              placeholder="Your email"
              className="w-[70%] mx-auto md:w-full max-w-md px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-1 text-[#39425D] focus:ring-orange-500"
            />
            <button className="mx-auto md:ml-10 shadow-md shadow-[#FF7D70] md:w-[180px] md:h-[68px] w-[150px] h-[60px] rounded-md bg-gradient-to-b from-[#FF946D] to-[#FF7D68] text-white font-bold text-lg transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
