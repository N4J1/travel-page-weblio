import { ArrowRightIcon } from "lucide-react";
import Destinations from "../ui/Destinations";
interface PopularProps {}

export default function Popular({}: PopularProps) {
  return (
    <div className="max-w-[1600px] w-full mx-auto px-4 md:px-8 py-10 lg:py-16 relative z-10">
      <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-8 text-left text-[#00C689]">
        Nos Week& <br /> Populaires
      </h2>
      <h2
        className="text-3xl md:text-5xl lg:text-8xl text-end font-bold mb-8 text-transparent outer-stroke-text absolute -top-[4%] md:-top-[7%] lg:-top-[12%] right-0 bg-white px-4 py-2"
        style={{ fontFamily: "sans-serif" }}
      >
        Week
        <br />&
      </h2>
      <div className="flex justify-end">
        <a
          href="#"
          className="text-lg md:text-xl lg:text-3xl font-bold mb-8 text-[#00C689] flex items-center gap-2 lg:gap-6 relative group"
        >
          <span className="relative">
            Découvrir la sélection
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00C689] transition-all duration-300 group-hover:w-full"></span>
          </span>
          <ArrowRightIcon className="w-10 h-10 text-[#264653]" />
        </a>
      </div>
      <Destinations />
    </div>
  );
}
