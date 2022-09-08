const Card = () => {
  return (
    <div className="card-container">
      <img alt="perfume" />
      <div className="info">
        <h2>PERFUME</h2>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p className="description">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="price">
          <span className="new-price">$149.99</span>
          <span className="old-price">$169.99</span>
        </div>
        <button type="button">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
