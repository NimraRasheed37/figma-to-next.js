import Image from "next/image";

export default function Destination() {
  return (
    <div className="container lg:w-[1000px] lg:h-[517px]  h-auto rounded-sm mx-auto">
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-[#5e6282] text-md font-semibold font-Poppins">Top Selling</p>
        <h2 className="text-4xl font-bold font-Volkhov text-[#14183E]">Top Destinations</h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <Image
        src="/img/destinations/rome.png"
        alt="Rome, Italy"
        width={315}
        height={457}
        className="hover:w-[320px] hover:h-[460px] cursor-pointer mx-auto"
        />
        <Image
        src="/img/destinations/london.png"
        alt="London"
        width={315}
        height={457}
        className="hover:w-[320px] hover:h-[460px] cursor-pointer mx-auto"
        />
        <Image
        src="/img/destinations/europe.png"
        alt="Europe"
        width={315}
        height={457}
        className="hover:w-[320px] hover:h-[460px] cursor-pointer mx-auto"
        />

      </div>
    </div>
  );
}
