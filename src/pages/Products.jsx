import './Products.css';
import Footer from '../components/Footer';

const ProductsPage = () => {
  const handleEmailPress = () => {
    window.open("mailto:nancypanghal13@gmail.com", "_self");
  };

  return (
    <div className="products-page">
      <div className="products-container">
        <div className="products-content">
          <h1 className="products-title">Products Not Available</h1>
          <p className="products-message">
            We're currently updating our product inventory. Please check back later or contact us for more information.
          </p>
          <p className="products-message">
            Please email us if you are interested, cost will be under 7k INR!
          </p>
          <button className="email-button" onClick={handleEmailPress}>
            Email Us
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;