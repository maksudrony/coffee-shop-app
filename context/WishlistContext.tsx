import React, { createContext, useContext, useState, ReactNode } from 'react';

// Hardcoded sample product data since we aren't fetching directly from Firebase yet
const PRODUCTS_DB: Record<string, any> = {
  'coffee-mocha': {
    id: 'coffee-mocha',
    name: 'Caffe Mocha',
    type: 'Deep Foam',
    price: 4.53,
    rating: 4.8,
    reviews: 230,
    image: require('../assets/images/coffee-mocha.png')
  }
};

interface WishlistContextData {
  wishlist: any[];
  toggleWishlist: (id: string) => void;
  isWishlisted: (id: string) => boolean;
}

const WishlistContext = createContext<WishlistContextData>({} as WishlistContextData);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  const toggleWishlist = (id: string) => {
    setWishlistIds(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  const isWishlisted = (id: string) => {
    return wishlistIds.includes(id);
  };

  const wishlist = wishlistIds.map(id => PRODUCTS_DB[id] || { id, name: 'Unknown Product', price: 0 });

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
