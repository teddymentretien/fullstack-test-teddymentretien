type ProductCardProps = {
  name: string;
  description: string;
  price: number;
  category: string;
  onEdit?: () => void;
  onDelete?: () => void;
};

const ProductCard = ({ name, description, price, category, onEdit, onDelete }: ProductCardProps) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-green-500 font-semibold">{price} €</p>
      <p className="text-sm text-gray-400">Catégorie: {category}</p>
      {onEdit && onDelete && (
        <div className="mt-4 space-x-2">
          <button onClick={onEdit} className="bg-blue-500 text-white px-4 py-2 rounded">
            Modifier
          </button>
          <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded">
            Supprimer
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
