import Image from "next/image";
import Header from "./Header";
import SearchBox from "@/components/ui/SearchBox";

interface HeroProps {}

export default function Hero({}: HeroProps) {
  return (
    <div className="min-h-[96vh] w-full relative">
      <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-gradient-to-t from-[#F7FAFB] to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-[90%] bg-gradient-to-b from-slate-900/60 to-transparent -z-9" />
      <Image
        src="/images/hero-image.jpg"
        alt="Hero"
        fill
        className="object-cover object-top -z-10"
      />
      <div className="flex flex-col w-full h-full min-h-[96vh]">
        <Header />

        <div className="flex-grow flex flex-col justify-end w-full px-0 md:px-16 mx-auto gap-10">
          <div className="w-full max-w-[1600px] mx-auto px-8 md:px-0">
            <h1 className="text-white text-3xl md:text-7xl font-bold py-16 leading-tight drop-shadow-lg">
              Préparez <br /> votre Week-end <br /> entre amis <br /> en un clic
            </h1>
          </div>
          <SearchBox />
        </div>
      </div>
    </div>
  );
}
