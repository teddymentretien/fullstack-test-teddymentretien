"use client";
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/api';

const Boutique = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6">Boutique</h1>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product: any) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Boutique;
