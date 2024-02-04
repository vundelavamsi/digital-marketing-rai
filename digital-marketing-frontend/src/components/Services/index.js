import './index.css';

const Services = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="service-card">
        <h3>Service 1</h3>
        <p>Description of Service 1.</p>
        <a href="/services/1">Learn More</a>
      </div>
      {/* Repeat the above structure for more services */}
    </div>
  );
}

export default Services;
