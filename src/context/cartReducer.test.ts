
import { cartReducer } from "./CartContext";
import type { CartItem } from "../types";

const initialCart: CartItem[] = [];

const hotel: CartItem = {
  id: "hotel-1",
  type: "hotel",
  quantity: 1,
};

// Test 1: Add item
const test1 = cartReducer(initialCart, {
  type: "ADD_ITEM",
  payload: hotel,
});
console.assert(test1.length === 1, "Test 1 failed: Add item");

// Test 2: Add same item again
const test2 = cartReducer(test1, {
  type: "ADD_ITEM",
  payload: hotel,
});
console.assert(test2[0].quantity === 2, "Test 2 failed: Duplicate item");

// Test 3: Update quantity
const test3 = cartReducer(test2, {
  type: "UPDATE_QUANTITY",
  payload: { id: "hotel-1", quantity: 5 },
});
console.assert(test3[0].quantity === 5, "Test 3 failed: Update quantity");

// Test 4: Remove item
const test4 = cartReducer(test3, {
  type: "REMOVE_ITEM",
  payload: "hotel-1",
});
console.assert(test4.length === 0, "Test 4 failed: Remove item");

// Test 5: Clear cart
const test5 = cartReducer([hotel], {
  type: "CLEAR_CART",
});
console.assert(test5.length === 0, "Test 5 failed: Clear cart");

console.log("All 5 cart reducer checks completed!");
