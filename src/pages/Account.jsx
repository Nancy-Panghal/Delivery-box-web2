import './Account.css';

const Account = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Account</h1>
        <p className="message">Welcome to your account</p>
        <button className="email-button">
          <span className="email-button-text">Contact Us</span>
        </button>
      </div>
    </div>
  );
};

export default Account;