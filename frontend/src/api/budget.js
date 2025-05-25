export async function setMonthlyBudget(userId, budgetAmount, month) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/users/${userId}/budget`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        budget_amount: budgetAmount,
        month: month, // should be an ISO string, e.g. "2024-06-01T00:00:00"
      }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to set budget");
  }
  return response.json();
} 