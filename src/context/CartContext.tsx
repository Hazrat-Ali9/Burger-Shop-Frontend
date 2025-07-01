import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  customizations?: string[];
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (newItem: Omit<CartItem, 'quantity'>) => {
    setIsLoading(true);
    
    setTimeout(() => {
      setItems(prevItems => {
        const existingItem = prevItems.find(item => item.id === newItem.id);
        
        if (existingItem) {
          const updatedItems = prevItems.map(item =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          toast.success(`${newItem.name} quantity updated!`, {
            icon: '🍔',
          });
          return updatedItems;
        } else {
          toast.success(`${newItem.name} added to cart!`, {
            icon: '🛒',
          });
          return [...prevItems, { ...newItem, quantity: 1 }];
        }
      });
      setIsLoading(false);
    }, 300);
  };

  const removeFromCart = (id: number) => {
    const item = items.find(item => item.id === id);
    setItems(prevItems => prevItems.filter(item => item.id !== id));
    if (item) {
      toast.success(`${item.name} removed from cart`, {
        icon: '🗑️',
      });
    }
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast.success('Cart cleared!');
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalItems,
      getTotalPrice,
      isLoading
    }}>
      {children}
    </CartContext.Provider>
  );
};