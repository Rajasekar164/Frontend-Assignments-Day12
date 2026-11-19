
import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem as CartItemType } from "../types";
import { hotels } from "../data/hotels";
import { useCart } from "../context/CartContext";

interface Props {
  item: CartItemType;
}

export default function CartItem({ item }: Props) {
  const { dispatch } = useCart();

  const hotel = hotels.find((hotel) => hotel.id === item.id);

  if (!hotel) return null;

  return (
    <div className="cart-item">
      <img src={hotel.image} alt={hotel.name} />

      <div className="cart-item-info">
        <h3>{hotel.name}</h3>
        <p>{hotel.location}</p>
        <strong>₹{(hotel.price * item.quantity).toLocaleString("en-IN")}</strong>
      </div>

      <div className="quantity-controls">
        <button
          onClick={() =>
            dispatch({
              type: "UPDATE_QUANTITY",
              payload: { id: item.id, quantity: item.quantity - 1 },
            })
          }
        >
          <Minus size={15} />
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() =>
            dispatch({
              type: "UPDATE_QUANTITY",
              payload: { id: item.id, quantity: item.quantity + 1 },
            })
          }
        >
          <Plus size={15} />
        </button>
      </div>

      <button
        className="remove-button"
        onClick={() =>
          dispatch({ type: "REMOVE_ITEM", payload: item.id })
        }
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}
