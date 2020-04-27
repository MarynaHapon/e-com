export const updateCartItemQuantity = (items, itemToAdd) => {
  const hasItem = items.find(item => item.id === itemToAdd.id);

  if (hasItem) {
    return items.map(item => (item.id === itemToAdd.id)
      ? { ...item, quantity: item.quantity + 1 }
      : item);
  }

  return [ ...items, { ...itemToAdd, quantity: 1 } ];
};
