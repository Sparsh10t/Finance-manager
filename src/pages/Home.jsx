import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="landing">

      {/* ===== HERO SECTION ===== */}

      <section className="landing-hero">

        <h1>
          Manage Your Money Smarter
          <span className="money-icon"> 💰</span>
        </h1>

        <p>
          Track expenses, monitor income, and take full control of your finances
          with our modern and easy-to-use platform.
        </p>

        <div className="hero-buttons">

          <Link to="/register">
            <button className="cta-btn">Get Started</button>
          </Link>

          <Link to="/login">
            <button className="outline-btn">Login</button>
          </Link>

        </div>

      </section>



      {/* ===== FEATURES ===== */}

      <section className="landing-features">

        <div className="feature-card">
          <h3>📊 Smart Tracking</h3>
          <p>Monitor income and expenses in real time.</p>
        </div>

        <div className="feature-card">
          <h3>🔒 Secure</h3>
          <p>Your financial data stays safe and private.</p>
        </div>

        <div className="feature-card">
          <h3>⚡ Fast & Simple</h3>
          <p>Clean interface with instant updates.</p>
        </div>

      </section>



      {/* ===== CTA ===== */}

      <section className="landing-cta">

  <h2>Start Managing Your Finances Today</h2>

  <Link to="/register">
    <button className="cta-btn">Create Account</button>
  </Link>

</section>


    </div>
  );
};

export default Home;
