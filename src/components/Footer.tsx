import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";
export default function Footer(){
    return (
        <>
    <footer className="px-8 lg:px-24 text-[#5e6282] py-8 w-full h-auto">
      <div className="mx-auto lg:px-6">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center w-full">
          <div className="w-full h-auto lg:w-[207px] lg:h-[133px]">
            <h2 className="text-[44px] font-semibold text-[#181E4B] font-Poppins]">Jadoo.</h2>
            <p className="text-[#5e6282] mt-2">
              Book your trip in minute, get full control for much longer.
            </p>
          </div>


          <div className="flex flex-col lg:flex-row lg:gap-8 w-full h-auto lg:w-[474px] lg:h-[153px] lg:space-x-16 mt-4 ">
            <div>
              <h3 className="text-[#080809] text-[21px] font-bold mb-3">Company</h3>
              <ul className="text-[#5e6282] space-y-2">
                <li>About</li>
                <li>Careers</li>
                <li>Mobile</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#080809] text-[21px] font-bold mb-3">Contact</h3>
              <ul className="text-[#5e6282] space-y-2">
                <li>Help/FAQ</li>
                <li>Press</li>
                <li>Affiliates</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#080809] text-[21px] font-bold mb-3">More</h3>
              <ul className="text-[#5e6282] space-y-2">
                <li>Airlinefees</li>
                <li>Airline</li>
                <li>Low fare tips</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 flex flex-col items-center">
            <div className="flex items-center justify-between gap-4 mt-4 mb-4">
            <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 text-blue-500 bg-" />
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-purple-500 rounded-full" />
            <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 text-blue-400 bg-" />
            </div>
            <h3 className="text-[#5e6282] text-[20px] font-semibold mb-4">Discover our app</h3>
            <div className="flex space-x-4 mt-4">
              <Image
                src="/img/footer/Google Play.png"
                alt="Google Play"
                width={50}
                height={10}
              />
              <Image
                src="/img/footer/Play Store.png"
                alt="Apple Store"
                width={50}
                height={10}
              />
            </div>
          </div>
        </div>
        <div className="text-center text-[#5e6282] text-[14px] mt-10 font-semibold">
          All rights reserved @jadoo.co
        </div>
      </div>
    </footer>
        </>
    )

}