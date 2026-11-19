
import Header from "./components/Header";
import HotelCard from "./components/HotelCard";
import CartPage from "./pages/CartPage";
import { hotels } from "./data/hotels";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <section className="hero">
          <p className="eyebrow">YOUR NEXT JOURNEY STARTS HERE</p>
          <h1>Find Your Perfect Stay</h1>
          <p>Discover amazing hotels across India.</p>
        </section>

        <section className="hotels-section">
          <div className="section-heading">
            <h2>Popular Hotels</h2>
            <span>{hotels.length} Hotels</span>
          </div>

          <div className="hotel-grid">
            {hotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </section>

        <CartPage />
      </main>
    </>
  );
}

export default App;
