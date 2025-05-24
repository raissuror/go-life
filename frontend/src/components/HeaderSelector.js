import React from "react";

export default function HeaderSelector({ user, setUser, weather, setWeather, timestamp, setTimestamp }) {
  return (
    <div className="flex flex-col md:flex-row gap-2 mb-4">
      {/* Weather Select */}
      <select
        className="rounded px-2 py-1 border text-gray-800 focus:ring-2 focus:ring-green-400"
        value={weather}
        onChange={e => setWeather(e.target.value)}
      >
        <option value="clear">Clear</option>
        <option value="rainy">Rainy</option>
        <option value="cloudy">Cloudy</option>
        <option value="stormy">Stormy</option>
      </select>
      {/* Datetime Picker */}
      <input
        type="datetime-local"
        className="rounded px-2 py-1 border text-gray-800 focus:ring-2 focus:ring-green-400"
        value={timestamp}
        onChange={e => setTimestamp(e.target.value)}
      />
    </div>
  );
}