import Image from "next/image";
import {
  Heart,
  Plane,
  Building,
  Activity,
  Truck,
  Check,
  MapPin,
} from "lucide-react";

interface DestinationCardProps {
  location: string;
  title: string;
  duration: string;
  flights: number;
  hotels: number;
  activities: number;
  transfers: number;
  activityList: string[];
  price: number;
  imageSrc: string;
}

export default function DestinationCard({
  location = "Marseille",
  title = "Calanques",
  duration = "3 jours 4 nuits",
  flights = 2,
  hotels = 1,
  activities = 4,
  transfers = 2,
  activityList = [
    "Tour gastronomique",
    "Canoë-kayak",
    "Visite de musée",
    "Escalade",
  ],
  price = 400,
  imageSrc = "/images/hero-image.jpg",
}: Partial<DestinationCardProps>) {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-full h-auto">
      <div className="relative p-3">
        <div className="bg-white rounded-full py-1 flex items-center gap-2 z-10">
          <MapPin size={20} className="text-[#00D493]" />
          <span className="font-bold text-gray-800">{location}</span>
        </div>

        <div className="h-72 relative rounded-2xl overflow-hidden">
          <Image src={imageSrc} alt={title} className="object-cover" fill />
        </div>

        <div className="absolute bottom-7 left-0 right-0 flex justify-center gap-1">
          <span className="w-2 h-2 bg-white rounded-full opacity-100"></span>
          <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
          <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-gray-800 mb-1">{title}</h3>
            <p className="text-sm text-gray-400 mb-4">{duration}</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-slate-200 rounded-full p-2 text-[#00D493] cursor-pointer">
              <Heart
                fill="#00D493"
                size={20}
                className="hover:scale-130 transition-all duration-300"
              />
            </button>
          </div>
        </div>
        <div className="flex justify-between mb-6">
          <div className="flex flex-col items-center">
            <Plane size={20} className="text-gray-700 mb-1" />
            <span className="text-xs text-gray-600">{flights} Vols</span>
          </div>
          <div className="flex flex-col items-center">
            <Building size={20} className="text-gray-700 mb-1" />
            <span className="text-xs text-gray-600">{hotels} Hotel</span>
          </div>
          <div className="flex flex-col items-center">
            <Activity size={20} className="text-gray-700 mb-1" />
            <span className="text-xs text-gray-600">
              {activities} Activités
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Truck size={20} className="text-gray-700 mb-1" />
            <span className="text-xs text-gray-600">
              {transfers} Transferts
            </span>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          {activityList.map((activity, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="bg-[#00D493] rounded-full p-1">
                <Check size={14} className="text-white" />
              </div>
              <span className="text-sm text-gray-600">{activity}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2 align-end">
            <span className="text-3xl font-bold text-gray-800">{price}€</span>
            <span className="text-xs text-gray-500 text-end">Per person</span>
          </div>
          <button className="bg-[#F9A826] hover:bg-[#f8a010] text-white font-medium py-2 px-6 rounded-2xl transition-colors cursor-pointer">
            Réserver
          </button>
        </div>
      </div>
    </div>
  );
}
