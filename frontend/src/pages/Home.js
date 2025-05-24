import React from "react";
import { BellIcon, UserCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ServiceMenu from "../components/ServiceMenu";
import BottomNav from "../components/BottomNav";

export default function Home() {
  return (
    <div className="min-h-screen pb-16 bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-700 to-green-400 rounded-b-3xl p-6 text-white relative">
        <div className="flex justify-between items-center">
          <div className="flex-1 flex items-center bg-white rounded-full px-3 py-2">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 mr-2" />
            <input
              className="w-full bg-transparent outline-none text-black placeholder-gray-400"
              placeholder="Ayam Bakar"
            />
          </div>
          <BellIcon className="w-7 h-7 ml-4" />
          <UserCircleIcon className="w-9 h-9 ml-2" />
        </div>
        {/* Balance Card */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mt-6 flex items-center justify-between">
          <div>
            <div className="text-lg font-bold text-gray-800">Rp53.836</div>
            <div className="text-xs text-gray-500">0 coins</div>
          </div>
          <div className="flex gap-2">
            <button className="bg-green-100 text-green-700 rounded-full px-3 py-1 text-xs font-semibold">Pay</button>
            <button className="bg-green-100 text-green-700 rounded-full px-3 py-1 text-xs font-semibold">Top Up</button>
            <button className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs font-semibold">More</button>
          </div>
        </div>
      </div>

      {/* Services */}
      <ServiceMenu />

      {/* Recommendation Section */}
      <div className="px-4 mt-8">
        <div className="bg-white rounded-xl shadow p-4 flex items-center">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=96&h=96" alt="promo" className="w-16 h-16 rounded-lg mr-4" />
          <div>
            <div className="font-bold mb-1">Brand Festival</div>
            <div className="text-yellow-500 text-2xl font-bold">50% OFF</div>
            <div className="text-xs text-gray-500">Periode: 19 - 25 Mei 2025</div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
} 