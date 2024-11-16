"use client";

import { useState, useEffect, Fragment } from 'react';
import { fetchProducts, createProduct, updateProduct, deleteProduct } from '../services/api';
import { Product } from '../types';
import ProductForm from '../components/ProductForm';
import ProductCard from '../components/ProductCard';

const AdminPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const defaultProduct: Product = { name: '', description: '', price: 0, category: '', stock: 0 };
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const loadProducts = async () => {
    const data = await fetchProducts();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleCreate = async (product: Product) => {
    await createProduct(product);
    loadProducts();
  };

  const handleUpdate = async (product: Product) => {
    await updateProduct(product.id!, product);
    setEditingProduct(null);
    loadProducts();
  };

  const handleDelete = async (id: number) => {
    await deleteProduct(id);
    loadProducts();
  };

  return (
    <Fragment>
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6">Gestion des Produits</h1>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            {editingProduct ? 'Modifier un produit' : 'Créer un produit'}
          </h2>
          <ProductForm
            initialProduct={editingProduct || defaultProduct}
            onSubmit={editingProduct ? handleUpdate : handleCreate}
            submitText={editingProduct ? 'Mettre à jour' : 'Créer'}
          />
        </div>

        <h2 className="text-xl font-bold mb-4">Les produits</h2>
        <div className="grid grid-cols-3 gap-4">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onEdit={setEditingProduct}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default AdminPage;
