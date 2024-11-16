import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart?: () => void;
  onEdit?: (product: Product) => void;
  onDelete?: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onEdit, onDelete }) => {
  return (
    <div className="p-4 border rounded">
      <h2 className="font-bold">{product.name}</h2>
      <p>{product.description}</p>
      <p>Prix : {product.price} €</p>
      <p>Catégorie : {product.category}</p>
      <p>Stock : {product.stock}</p>
      {onAddToCart &&
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          onClick={onAddToCart}
        >
          Ajouter au panier
        </button>
      }
      { onEdit && onDelete && 
        <div className="flex gap-2 mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => onEdit(product)}
          >
            Modifier
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => onDelete(product.id!)}
          >
            Supprimer
          </button>
        </div>
      }
    </div>
  );
};

export default ProductCard;
