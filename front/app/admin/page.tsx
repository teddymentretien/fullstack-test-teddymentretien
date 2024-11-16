"use client";
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { fetchProducts, deleteProduct } from '../services/api';

const Admin = () => {
  const [products, setProducts] = useState([]);

  const refreshProducts = async () => {
    const data = await fetchProducts();
    setProducts(data);
  };

  useEffect(() => {
    refreshProducts();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteProduct(id);
    refreshProducts();
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6">Espace Admin</h1>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product: any) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              category={product.category}
              onDelete={() => handleDelete(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
