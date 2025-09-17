import React from 'react';
import Footer from '../components/Footer';
import './AboutProduct.css';
import webNewOrderImage from '../assets/images/web-new-order.jpg';
import webOpenBoxImage from '../assets/images/web-open-box.jpg';
import deliveryScanImage from '../assets/images/delivery-scan.jpg';
const AboutProductPage = () => {
  return (
    <div className="container-about-product">
      <div className="scroll-container">
        <h1 className="title-about-product">About Our Products</h1>

        {/* Product Models Section */}
        <div className="models-container">
          <h2 className="models-title">Models</h2>
          <p className="models-text">
            Our product comes in two models : Wall Mounted and Floor Mounted. The working mechanism is the same for both, with the only difference being in the installation process.
          </p>
        </div>

        {/* User Setup and Usage Section */}
        <h2 className="section-title">User Setup and Usage</h2>
        <div className="section-container">
          <div className="text-box">
            <p className="text">
              Install our app if you have purchased the product. Then, scan the QR code that is on the paper included in the box.
            </p>
            <p className="warning">
              Note: Do not scan the QR code on the box itself—that is for delivery persons only.
            </p>
          </div>
          {/* QR Container - Commented out as in original */}
          {/* <div className="qr-container">
            <QRCode value="fake-app-install://setup" size={250} color="#FFFFFF" backgroundColor="#2C2C2C" />
          </div> */}
        </div>

        {/* App Usage Instructions */}
        <div className="section-container">
          <div className="text-box">
            <p className="text">
              After scanning the QR code, enter your name, email, and password. You are now ready to use the app.
            </p>
            <p className="text">
              Each time you order something from an e-commerce site, copy the order ID and paste it into the app's Orders → New Order section. Add any order name for your convenience and select the e-commerce platform (company) from where you are ordering the package.
            </p>
            <p className="warning">
              Note: Delivery receiving will fail if you entered the wrong order ID or selected the wrong delivery company. If you did so, scroll down and delete the order.
            </p>
            <p className="text">
              You can add this info in the app anytime before the delivery person reaches your home. The good thing is to add it right after ordering so you don't need to remember.
            </p>
          </div>
          <img src={webNewOrderImage} alt="New Order" className="image1 product-image" />
        </div>

        {/* Box Opening Options */}
        <div className="section-container">
          <div className="text-box">
            <h3 className="sub-section-title">Opening Via app</h3>
            <p className="text">
              You can open the box via the app if you are within a 30-meter range of the box, or you can also use mechanical keys.
            </p>
            <p className="warning">
              Note: To use our box automation, you have to pay the order price while ordering, no cash on delivery.
            </p>
          </div>
          <img src={webOpenBoxImage} alt="Open Box" className="image product-image" />
        </div>

        {/* Delivery Person Side */}
        {/* <h2 className="section-title">Delivery Person Side</h2> */}
        <div className="section-container">
          <div className="text-box">
            <h3 className="sub-section-title">Delivery Person Side</h3>
            <p className="text">
              The delivery person will reach your home, then scan the QR code on the box and enter the order ID and e-commerce site. After validation, the box's lock will be unlocked and then lock again in some seconds.
            </p>
            <p className="text">
              If the delivery failed, check that the battery is charged or inside the box.
            </p>
          </div>
          <img src={deliveryScanImage} alt="Delivery Scan" className="image product-image" />
        </div>

        {/* Installation Section */}
        {/* <h2 className="section-title">Installation</h2> */}
        <div className="section-container">
          <div className="text-box">
            <h3 className="sub-section-title">Wall Mounted Model</h3>
            <p className="text">
              The wall-mounted box stand will be drilled on the wall with 4 small holes and then screwed up. You can easily reinstall it.
            </p>
          </div>
          {/* <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg" alt="Wall Mounted" className="image" /> */}
        </div>

        <div className="section-container">
          <div className="text-box">
            <h3 className="sub-section-title">Floor Mounted Model</h3>
            <p className="text">
              On a solid surface two holes will be created and the center leg of the stand will be screwed up , you can also use it without drilling. Easy to reinstall.
            </p>
          </div>
          {/* <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="Floor Mounted" className="image" /> */}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default AboutProductPage;