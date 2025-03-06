import Image from "next/image";

interface HowItWorksProps {}

export default function HowItWorks({}: HowItWorksProps) {
  return (
    <div className="bg-white border-t-[#00D493] border-t-2 border-dashed py-10 lg:py-16 mt-10 relative z-10">
      <div className="max-w-[1600px] w-full mx-auto px-4 py-24 lg:py-28 border-b-[#00D493] border-b-2 border-dashed">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-8 text-left text-[#00C689]">
          Réservez votre prochain <br /> Week-end en toute <br /> Simplicité
        </h2>
        <div className="">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between relative gap-10">
            <Image
              src="/images/Vector.png"
              alt="Vector"
              className="hidden lg:block absolute bottom-0 left-0 w-[1000px] h-auto object-contain -z-10"
              width={1000}
              height={1000}
            />
            <div className="flex flex-col items-center justify-start lg:items-start gap-10 lg:gap-28">
              <div className="w-48 h-48 bg-gray-200 rounded-full relative">
                <Image
                  src="/images/step-1.png"
                  alt="How It Works"
                  className="w-full h-full object-cover"
                  fill
                />
                <div className="absolute bottom-0 left-0 w-[70px] h-[70px] bg-white text-black flex items-center justify-center rounded-full p-2 shadow-2xl shadow-[#A29587]">
                  <h3 className="text-[#A29587] text-5xl font-bold">1</h3>
                </div>
              </div>
              <h1 className="text-[#A29587] text-2xl font-bold w-full text-center lg:text-left h-full bg-white">
                Indiquez vos <br /> souhaits pour le <br /> week-end
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-[#00D493] text-6xl font-black">+</h1>
            </div>
            <div className="flex flex-col items-center justify-start lg:items-start gap-4 lg:gap-28">
              <div className="w-48 h-48 bg-gray-200 rounded-full relative">
                <Image
                  src="/images/step-2.png"
                  alt="How It Works"
                  className="w-full h-full object-cover"
                  fill
                />
                <div className="absolute bottom-0 left-0 w-[70px] h-[70px] bg-white text-black flex items-center justify-center rounded-full p-2 shadow-2xl shadow-[#79747E]">
                  <h3 className="text-[#79747E] text-5xl font-bold">2</h3>
                </div>
              </div>
              <h1 className="text-[#79747E] text-2xl font-bold w-full text-center lg:text-left h-full bg-white">
                Trouvez votre <br /> week-end idéal en <br /> quelques minutes
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-[#00D493] text-6xl font-black">+</h1>
            </div>
            <div className="flex flex-col items-center justify-start lg:items-start gap-4 lg:gap-28">
              <div className="w-48 h-48 bg-gray-200 rounded-full relative">
                <Image
                  src="/images/step-3.png"
                  alt="How It Works"
                  className="w-full h-full object-cover"
                  fill
                />
                <div className="absolute bottom-0 left-0 w-[70px] h-[70px] bg-white text-black flex items-center justify-center rounded-full p-2 shadow-2xl shadow-[#504539]">
                  <h3 className="text-[#504539] text-5xl font-bold">3</h3>
                </div>
              </div>
              <h1 className="text-[#504539] text-2xl font-bold w-full text-center lg:text-left h-full bg-white">
                Réservez, partez, <br /> profitez !
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-[#00D493] text-6xl font-black">=</h1>
            </div>
            <div className="w-96 h-auto lg:w-[500px] lg:-mt-40 bg-transparent rounded-full relative">
              <Image
                src="/images/promo.png"
                alt="Promo"
                className="w-full h-full object-cover"
                width={3000}
                height={3000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
