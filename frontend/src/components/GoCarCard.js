export default function GoCarCard({ name, description, price }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
      <div>
        <div className="font-bold">{name}</div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
      <div className="text-green-600 font-bold">{price}</div>
    </div>
  );
} 