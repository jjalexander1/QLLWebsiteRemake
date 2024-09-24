import React, { useState } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
import '../styles/Join.css'; // Import the CSS file

const Join: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [gdprAccepted, setGdprAccepted] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you can handle form submission, e.g., send data to the server
    if (!gdprAccepted) {
      alert('You must accept the GDPR policy.');
      return;
    }
    // Form submission logic here
    console.log({
      name,
      email,
      mobile,
      message,
      gdprAccepted,
      captchaValue,
    });
    // Reset the form
    setName('');
    setEmail('');
    setMobile('');
    setMessage('');
    setGdprAccepted(false);
    setCaptchaValue(null);
  };

  return (
    <div className="join-container">
      <h2>Join The Quiz League of London</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="tel"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message (Optional):</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={gdprAccepted}
              onChange={(e) => setGdprAccepted(e.target.checked)}
              required
            />
            I accept the GDPR policy
          </label>
        </div>
        {/* 
        TODO 
        Setting Up Google reCAPTCHA
            Register Your Site:

            Go to the Google reCAPTCHA admin console.
            Register your site and choose reCAPTCHA v2.
            Get your Site Key and Secret Key.
            Replace the Site Key:

            Replace YOUR_RECAPTCHA_SITE_KEY in the Join component with your actual site key.
        <div className="form-group">
          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your Google reCAPTCHA site key
            onChange={(value) => setCaptchaValue(value)}
            required
          />
        </div> */}
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default Join;
