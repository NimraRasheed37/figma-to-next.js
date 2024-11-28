import Image from "next/image";

export default function Logos(){
    return (
        <>
        <div className="lg:w-[1037px] lg:h-[162px] h-auto m-auto p-10 lg:flex items-center justify-between lg:gap-4 gap-2 grid grid-col-1 sm:grid-cols-2 md:grid-cols-3">
                <Image 
                className=""
                src= "/img/logos/1.png"
                alt="logo1"
                width={130}
                height={130}
                />
                <Image 
                className=""
                src= "/img/logos/2.png"
                alt="logo2"
                width={172}
                height={110}
                />
                <Image 
                className=""
                src= "/img/logos/3.png"
                alt="logo3"
                width={162}
                height={162}
                />
                <Image 
                className=""
                src= "/img/logos/4.png"
                alt="logo4"
                width={162}
                height={32}
                />
                <Image 
                className=""
                src= "/img/logos/5.png"
                alt="logo5"
                width={94}
                height={21}
                />
            </div>
        </>
    );
}