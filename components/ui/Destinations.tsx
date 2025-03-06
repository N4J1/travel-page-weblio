import DestinationCard from "./DestinationCard";

interface DestinationsProps {}

export default function Destinations({}: DestinationsProps) {
  const destinations = [
    {
      location: "Marseille",
      title: "Calanques",
      duration: "3 jours 4 nuits",
      flights: 2,
      hotels: 1,
      activities: 4,
      transfers: 2,
      activityList: [
        "Tour gastronomique",
        "Canoë-kayak",
        "Visite de musée",
        "Escalade",
      ],
      price: 400,
      imageSrc: "/images/Calanques.jpg",
    },
    {
      location: "Nice",
      title: "Promenade des Anglais",
      duration: "2 jours 1 nuit",
      flights: 0,
      hotels: 1,
      activities: 3,
      transfers: 1,
      activityList: [
        "Tour gastronomique",
        "Canoë-kayak",
        "Visite de musée",
        "Escalade",
      ],
      price: 350,
      imageSrc: "/images/Promenade.jpg",
    },
    {
      location: "Bordeaux",
      title: "La Cité du Vin",
      duration: "4 jours 3 nuits",
      flights: 2,
      hotels: 1,
      activities: 5,
      transfers: 2,
      activityList: [
        "Tour gastronomique",
        "Canoë-kayak",
        "Visite de musée",
        "Escalade",
      ],
      price: 650,
      imageSrc: "/images/Vin.jpg",
    },
  ];

  return (
    <div className="max-w-[1600px] w-full mx-auto px-4 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <DestinationCard key={index} {...destination} />
        ))}
      </div>
    </div>
  );
}
