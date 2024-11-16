"use client";

import { useCart } from "../context/CartContext";

const PanierPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Votre Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4">
            {cart.map((item) => (
              <div key={item.product.id} className="p-4 border rounded">
                <h2 className="font-bold">{item.product.name}</h2>
                <p>Prix : {item.product.price} €</p>
                <p>Quantité : {item.quantity}</p>
                <div className="flex gap-2 mt-2">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => removeFromCart(item.product.id!)}
                  >
                    Supprimer
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.product.id!, parseInt(e.target.value))
                    }
                    className="border p-2 bg-white text-black"
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            onClick={clearCart}
          >
            Vider le panier
          </button>
        </>
      )}
    </div>
  );
};

export default PanierPage;
