import './index.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" />

        <label>Email:</label>
        <input type="email" name="email" />

        <label>Phone:</label>
        <input type="text" name="phone" />

        <label>Message:</label>
        <textarea name="message" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
