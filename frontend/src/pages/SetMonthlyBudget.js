import React, { useState } from "react";
import { setMonthlyBudget } from "../api/budget";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const SetMonthlyBudget = () => {
  const [budget, setBudget] = useState("");
  const [month, setMonth] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      // Example: get userId from auth or context
      const userId = "user_1";
      // Convert month to ISO string (first day of month)
      const monthISO = new Date(month + "-01T00:00:00").toISOString();
      await setMonthlyBudget(userId, parseInt(budget, 10), monthISO);
      setSuccess("Budget set successfully!");
    } catch (err) {
      setError("Failed to set budget.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen pb-16 bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-700 to-green-400 rounded-b-3xl p-6 text-white relative">
        <div className="flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="mr-2 p-1 rounded-full hover:bg-green-600"
            aria-label="Back"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-bold">Set Monthly Budget</h2>
        </div>
      </div>

      {/* Form Card */}
      <div className="px-4 mt-8">
        <div className="bg-white rounded-xl shadow p-6">
          <form onSubmit={handleSubmit}>
            <label className="block mb-4 font-medium">
              Monthly Budget (Rp)
              <input
                type="number"
                className="mt-1 block w-full border rounded px-3 py-2"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                min="0"
                required
              />
            </label>
            <label className="block mb-4 font-medium">
              Month
              <input
                type="month"
                className="mt-1 block w-full border rounded px-3 py-2"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                required
              />
            </label>
            <button
              type="submit"
              className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 font-semibold"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
            {error && <div className="text-red-500 mt-2">{error}</div>}
            {success && <div className="text-green-500 mt-2">{success}</div>}
          </form>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default SetMonthlyBudget; 