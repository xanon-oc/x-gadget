// Add Data To Local Storage

const addToDb = (id) => {
  let shoppingCart = {};
  // get previous data from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

// Get Stored From Cart

const getStoredCart = () => {
  let shoppingCart = {};

  // get previous data from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

//Remove Specific Element From Local Storage

const removeFromDb = (id) => {
  // get previous data from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

// Clear all Data From Local Storage

const deleteShoppingCart = () => localStorage.removeItem("shopping-cart");

export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart };
