import React, { useEffect, useState } from "react";
import { fetchRecommendations } from "../api/recommendation";
import BottomNav from "../components/BottomNav";
import HeaderSelector from "../components/HeaderSelector";
import { MapPinIcon, ArrowRightIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function GoRideGoCar() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recOpen, setRecOpen] = useState(true);

  // New state for selectors
  const [user, setUser] = useState("user_1");
  const [weather, setWeather] = useState("clear");
  const [timestamp, setTimestamp] = useState(() => {
    // Default to now in local datetime-local format
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0,16);
  });

  useEffect(() => {
    setLoading(true);
    fetchRecommendations({
      app_context: "gojek",
      user_id: user,
      weather,
      timestamp: new Date(timestamp).toISOString(),
    })
      .then((res) => {
        setRecommendation(res.data?.message || "No recommendation");
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch recommendation");
        setLoading(false);
      });
  }, [user, weather, timestamp]);

  return (
    <div className="min-h-screen pb-16 bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-600 to-green-400 rounded-b-3xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-4">GoRide / GoCar</h1>
        <HeaderSelector
          user={user}
          setUser={setUser}
          weather={weather}
          setWeather={setWeather}
          timestamp={timestamp}
          setTimestamp={setTimestamp}
        />
        {/* Booking Card */}
        <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <MapPinIcon className="w-5 h-5 text-green-500" />
            <input
              className="rounded-full px-4 py-2 text-black flex-1 border border-gray-200"
              placeholder="Pickup location"
              value={pickup}
              onChange={e => setPickup(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <ArrowRightIcon className="w-5 h-5 text-gray-400" />
            <input
              className="rounded-full px-4 py-2 text-black flex-1 border border-gray-200"
              placeholder="Destination"
              value={destination}
              onChange={e => setDestination(e.target.value)}
            />
          </div>
          <button className="bg-green-500 text-white rounded-full py-2 mt-2 font-semibold shadow">
            Book GoCar
          </button>
        </div>
      </div>
      {/* Recommendation */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-semibold text-lg">Recommended for you</h2>
          <button
            className="flex items-center text-green-600 hover:text-green-800 focus:outline-none"
            onClick={() => setRecOpen((v) => !v)}
            aria-label={recOpen ? "Close recommendation" : "Open recommendation"}
          >
            {recOpen ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
          </button>
        </div>
        {recOpen && (
          <div className="bg-white rounded-xl shadow p-4 border-l-4 border-green-500">
            {loading && <div>Loading...</div>}
            {error && <div className="text-red-500">{error}</div>}
            {!loading && !error && (
              <div className="text-gray-700 whitespace-pre-line">{recommendation}</div>
            )}
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
}