import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="container-header">
      <div className="header-container">
        {/* <h1 className="header">Discover Smart Delivery Solutions</h1> */}
      </div>
      <div className="marketing-container">
        <p className="marketing">
          Automate pre-paid deliveries!
          <span className="icon1">
            <ion-icon name="sparkles-outline"></ion-icon>
          </span>
          Stop theft, automate receiving with smart boxes.
        </p>
      </div>
      <div className="features-container">
        <p className="features">
          Prevent package theft and damage, control via mobile app, real-time notifications,
        </p>
        <p className="features">
          models - wall-mounted and floor-mounted, easy to install!
        </p>
      </div>
      <div className="working-container">
        <h2 className="working-header">Working</h2>
        <div className="columns-container">
          <div className="column-box">
            <h3 className="working-subheader">User Side</h3>
            <p className="working-text">
              1. Copy the order ID from e-commerce site.
            </p>
            <p className="working-text">
              2. Open our app, go to "New Order," and paste the order ID.
            </p>
            <p className="working-text">
              3. Select the e-commerce platform and add any order name for simplicity.
            </p>
            <p className="working-text">
              4. Submit, and you're done! Your smart box is ready to receive.
            </p>
          </div>
          <div className="column-box">
            <h3 className="working-subheader">Delivery Person Side</h3>
            <p className="working-text">
              1. Scan the QR code on the smart box.
            </p>
            <p className="working-text">
              2. Enter the order ID and select the delivery company.
            </p>
            <p className="working-text">
              3. The box unlocks automatically for secure package placement.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;