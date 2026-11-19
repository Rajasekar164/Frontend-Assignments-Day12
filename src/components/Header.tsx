
import { ShoppingCart, Hotel } from "lucide-react";
import { useCart } from "../context/CartContext";
import { hotels } from "../data/hotels";

export default function Header() {
  const { cart } = useCart();

  const itemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const total = cart.reduce((sum, item) => {
    const hotel = hotels.find((hotel) => hotel.id === item.id);
    return sum + (hotel ? hotel.price * item.quantity : 0);
  }, 0);

  return (
    <header className="header">
      <div className="logo">
        <Hotel size={26} />
        <span>Stay<span className="highlight">Finder</span></span>
      </div>

      <div className="cart-summary">
        <ShoppingCart size={22} />
        <div>
          <strong>{itemCount} Items</strong>
          <p>₹{total.toLocaleString("en-IN")}</p>
        </div>
      </div>
    </header>
  );
}
