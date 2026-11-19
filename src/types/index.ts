
export interface CartItem {
  id: string;
  type: "hotel";
  quantity: number;
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" };

export interface Hotel {
  id: string;
  name: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  description: string;
}
