
import { ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { hotels } from "../data/hotels";
import CartItem from "../components/CartItem";

export default function CartPage() {
  const { cart, dispatch } = useCart();

  const total = cart.reduce((sum, item) => {
    const hotel = hotels.find((hotel) => hotel.id === item.id);
    return sum + (hotel ? hotel.price * item.quantity : 0);
  }, 0);

  return (
    <section className="cart-section">
      <div className="cart-heading">
        <div>
          <h2>Your Shopping Cart</h2>
          <p>Review your selected stays</p>
        </div>

        {cart.length > 0 && (
          <button
            className="clear-button"
            onClick={() => dispatch({ type: "CLEAR_CART" })}
          >
            <Trash2 size={16} />
            Clear Cart
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <ShoppingBag size={55} />
          <h3>Your cart is empty</h3>
          <p>Add your favourite hotels to get started.</p>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-total">
            <span>Grand Total</span>
            <strong>₹{total.toLocaleString("en-IN")}</strong>
          </div>
        </>
      )}
    </section>
  );
}
