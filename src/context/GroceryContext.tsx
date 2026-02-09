import React, { createContext, useContext, useMemo, useState } from 'react';

type GroceryContextType = {
  items: string[];
  addItems: (ingredients: string[]) => void;
  clearItems: () => void;
};

const GroceryContext = createContext<GroceryContextType | undefined>(undefined);

export const GroceryProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<string[]>([]);

  const value = useMemo(
    () => ({
      items,
      addItems: (ingredients: string[]) =>
        setItems((prev) => Array.from(new Set([...prev, ...ingredients]))),
      clearItems: () => setItems([])
    }),
    [items]
  );

  return <GroceryContext.Provider value={value}>{children}</GroceryContext.Provider>;
};

export const useGrocery = () => {
  const context = useContext(GroceryContext);
  if (!context) {
    throw new Error('useGrocery must be used inside GroceryProvider');
  }
  return context;
};
