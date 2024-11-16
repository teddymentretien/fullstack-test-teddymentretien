import React, { Fragment, useState } from 'react';
import { Product } from '../types';

interface ProductFormProps {
  initialProduct: Product;
  onSubmit: (product: Product) => void;
  submitText: string;
}

const ProductForm: React.FC<ProductFormProps> = ({ initialProduct, onSubmit, submitText }) => {
  const [product, setProduct] = useState<Product>(initialProduct);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: name === 'price' || name === 'stock' ? parseFloat(value) : value,
    });
  };

  return (
    <Fragment>
      <input
        type="text"
        name="name"
        placeholder="Nom"
        value={product.name}
        onChange={handleChange}
        className="border p-2 mr-2 text-black"
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={product.description}
        onChange={handleChange}
        className="border p-2 mr-2 text-black"
      />
      <input
        type="number"
        name="price"
        placeholder="Prix"
        value={product.price}
        onChange={handleChange}
        className="border p-2 mr-2 text-black"
      />
      <input
        type="text"
        name="category"
        placeholder="Catégorie"
        value={product.category}
        onChange={handleChange}
        className="border p-2 mr-2 text-black"
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={product.stock}
        onChange={handleChange}
        className="border p-2 mr-2 text-black"
      />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => onSubmit(product)}
      >
        {submitText}
      </button>
    </Fragment>
  );
};

export default ProductForm;
