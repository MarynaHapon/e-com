export const increaseCartItemQuantity = (items, itemToAdd) => {
  const hasItem = items.find(item => item.id === itemToAdd.id);

  if (hasItem) {
    return items.map(item => (item.id === itemToAdd.id)
      ? { ...item, quantity: item.quantity + 1 }
      : item);
  }

  return [ ...items, { ...itemToAdd, quantity: 1 } ];
};

export const decreaseCartItemQuantity = (items, itemToRemove) => {
  const hasItem = items.find(item => item.id === itemToRemove.id);

  if (hasItem.quantity === 1) {
    return items.filter((item) => (item.id !== itemToRemove.id));
  }

  return items.map((item) => (item.id === itemToRemove.id)
    ? { ...item, quantity: item.quantity - 1 }
    : item)
};

