"use client";

import { useState, useEffect, Fragment } from 'react';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/api';
import { Product } from '../types';
import { useCart } from "../context/CartContext";

const Boutique = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Toutes');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const { addToCart } = useCart();

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data);
    };
    getProducts();
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'Toutes') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const handleSortChange = (order: 'asc' | 'desc') => {
    setSortOrder(order);
    const sorted = [...filteredProducts].sort((a, b) =>
      order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setFilteredProducts(sorted);
  };

  const categories = Array.from(new Set(products.map((product) => product.category)));

  return (
    <Fragment>
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6">Boutique</h1>

        <div className="flex items-center mb-6">
          <div className="mr-4">
            <label className="font-bold mr-2">Catégorie :</label>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="border p-2 bg-white text-black"
            >
              <option value="Toutes">Toutes</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-bold mr-2">Trier par nom :</label>
            <select
              value={sortOrder}
              onChange={(e) => handleSortChange(e.target.value as 'asc' | 'desc')}
              className="border p-2 bg-white text-black"
            >
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={() => addToCart(product)} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Boutique;
