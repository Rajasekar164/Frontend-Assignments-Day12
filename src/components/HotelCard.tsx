
import { ShoppingCart, Star, MapPin } from "lucide-react";
import type { Hotel } from "../types";
import { useCart } from "../context/CartContext";

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: hotel.id,
        type: "hotel",
        quantity: 1,
      },
    });
  };

  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} />

      <div className="hotel-details">
        <div className="hotel-rating">
          <Star size={16} fill="currentColor" />
          {hotel.rating}
        </div>

        <h3>{hotel.name}</h3>

        <p className="location">
          <MapPin size={15} />
          {hotel.location}
        </p>

        <p className="description">{hotel.description}</p>

        <div className="hotel-footer">
          <div>
            <strong>₹{hotel.price.toLocaleString("en-IN")}</strong>
            <small> / night</small>
          </div>

          <button onClick={addToCart}>
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
