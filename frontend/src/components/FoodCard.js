export default function FoodCard({ image, name, discount, price }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex items-center">
      <img src={image} alt={name} className="w-16 h-16 rounded-lg object-cover mr-4" />
      <div>
        <div className="font-bold">{name}</div>
        <div className="text-sm text-gray-500">{discount}</div>
        <div className="text-green-600 font-bold">{price}</div>
      </div>
    </div>
  );
} 