export async function fetchRecommendations({ app_context, user_id, weather, timestamp }) {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/recommend`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user_id,
      app_context,
      weather,
      timestamp,
    }),
  });
  if (!res.ok) throw new Error("Failed to fetch recommendations");
  return res.json();
} 