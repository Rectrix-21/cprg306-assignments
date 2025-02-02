export function Item({ name, quantity, category }) {
    return (
      <li className="p-4 bg-gray-800 text-white rounded-lg mb-3 shadow-md">
        <div className="font-bold text-lg">{name}</div>
        <div className="text-gray-400">Buy {quantity} in {category}</div>
      </li>
    );
  }