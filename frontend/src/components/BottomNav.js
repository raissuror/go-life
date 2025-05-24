import { Link, useLocation } from "react-router-dom";

const navs = [
  { to: "/", label: "Home", icon: "🏠" },
  { to: "/goride-gocar", label: "GoRide/GoCar", icon: "🚗" },
  { to: "/gofood", label: "GoFood", icon: "🍽️" },
];

export default function BottomNav() {
  const { pathname } = useLocation();
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 z-50">
      {navs.map((nav) => (
        <Link
          key={nav.to}
          to={nav.to}
          className={`flex flex-col items-center ${
            pathname === nav.to ? "text-green-600 font-bold" : "text-gray-500"
          }`}
        >
          <span className="text-xl">{nav.icon}</span>
          <span className="text-xs">{nav.label}</span>
          {pathname === nav.to && (
            <span className="w-1 h-1 bg-green-600 rounded-full mt-1"></span>
          )}
        </Link>
      ))}
    </nav>
  );
} 