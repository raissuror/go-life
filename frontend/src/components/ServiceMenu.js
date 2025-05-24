import { CurrencyDollarIcon, TruckIcon, ShoppingBagIcon, CreditCardIcon, FireIcon, StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const services = [
  {
    name: "GoRide",
    path: "/goride-gocar",
    icon: <TruckIcon className="w-7 h-7 text-green-600" />,
    badge: "ONLY5K",
    badgeColor: "bg-black text-white",
  },
  {
    name: "GoCar",
    path: "/goride-gocar",
    icon: <CreditCardIcon className="w-7 h-7 text-green-600" />,
    badge: "ONLY6K",
    badgeColor: "bg-black text-white",
  },
  {
    name: "GoFood",
    path: "/gofood",
    icon: <ShoppingBagIcon className="w-7 h-7 text-red-500" />,
    badge: "-75%",
    badgeColor: "bg-red-500 text-white",
  },
  {
    name: "GoSend",
    path: "/",
    icon: <TruckIcon className="w-7 h-7 text-blue-500" />,
    badge: "FLAT5K",
    badgeColor: "bg-green-500 text-white",
  },
  {
    name: "GoMart",
    path: "/",
    icon: <ShoppingBagIcon className="w-7 h-7 text-yellow-500" />,
    badge: "-40%",
    badgeColor: "bg-yellow-400 text-white",
  },
  {
    name: "GoPay Pinjam",
    path: "/",
    icon: <CurrencyDollarIcon className="w-7 h-7 text-blue-600" />,
    badge: "25JUTA",
    badgeColor: "bg-blue-600 text-white",
  },
  {
    name: "GoFood HEMAT",
    path: "/gofood",
    icon: <FireIcon className="w-7 h-7 text-orange-500" />,
    badge: "HEMAT",
    badgeColor: "bg-orange-500 text-white",
  },
  {
    name: "More",
    path: "/",
    icon: <StarIcon className="w-7 h-7 text-gray-400" />,
    badge: "",
    badgeColor: "",
  },
];

export default function ServiceMenu() {
  return (
    <div className="grid grid-cols-4 gap-4 px-4 mt-[-32px]">
      {services.map((service) => (
        <Link
          key={service.name}
          to={service.path}
          className="bg-white rounded-2xl shadow flex flex-col items-center py-4 relative"
        >
          {service.badge && (
            <span className={`absolute top-2 left-2 text-xs px-2 py-0.5 rounded-full font-bold ${service.badgeColor}`}>
              {service.badge}
            </span>
          )}
          <span className="mb-2">{service.icon}</span>
          <span className="font-semibold text-xs text-center">{service.name}</span>
        </Link>
      ))}
    </div>
  );
}