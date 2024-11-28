import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <>
      <section className="relative w-full max-w-[1200px] top-10 mx-auto h-auto sm:h-[764px]  flex flex-col lg:flex-row items-center px-4 md:px-8">
        {/* Left Text Content */}
        <div className="flex flex-col w-full md:w-[630px] h-auto md:h-[535px] text-center md:text-left">
          <h4 className="text-[#DF6951] font-poppins font-[700] text-[12px] md:text-[20px] mb-2 mt-8 lg:mt-2">
            BEST DESTINATIONS AROUND THE WORLD
          </h4>
          <h1 className="text-2xl md:5xl lg:text-7xl text-[#181E4B] font-['Volkhov'] font-[700]">
            Travel, <span className="md:underline-image">enjoy</span> <br />
            and live a new <br />
            and full life
          </h1>
          <p className="font-poppins text-[#5E6282] font-[400] text-[14px] md:text-[12px] w-[80%] md:w-[477px] mt-4 mx-auto md:mx-0">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 md:mt-8 items-center justify-center md:justify-start">
            <button className="px-4 py-1 bg-[#f1a501] text-white font-semibold text-[14px] md:text-[18px] rounded-lg w-[150px] md:w-[170px] h-[50px] md:h-[60px] hover:shadow-[#F1A50126] hover:shadow-md">
              Find Out More
            </button>
            <button className="flex items-center gap-2 text-[#686D77]">
              <div className="bg-[#DF6951] shadow-[#DF69514D] shadow-md w-[40px] md:w-[52px] h-[40px] md:h-[52px] flex justify-center items-center text-center rounded-full text-white">
                <FontAwesomeIcon icon={faPlay} className="w-3 md:w-4" />
              </div>
              Play Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mt-8 top-[50px] md:mt-0 w-[80%] h-auto lg:w-[783px] lg:h-[764px] md:w-[583] md:h-[584] flex justify-center">
          <div className="relative">
            <Image
              src="/img/hero/Traveller 1.png"
              alt="Woman with suitcase"
              className="relative w-[383] h-[384]"
              width={735}
              height={734}
            />
            <Image
              src="/img/hero/plane.png"
              alt="Airplane"
              className="absolute top-[50px] md:top-[70px] left-[50px] md:left-[150px]"
              width={120}
              height={80}
            />
            <Image
              src="/img/hero/plane.png"
              alt="Airplane"
              className="hidden md:bolck md:absolute top-[100px] md:top-[120px] left-[250px] sm:left-[350px] md:left-[550px]"
              width={110}
              height={75}
            />
          </div>
        </div>
      </section>
    </>
  );
}
