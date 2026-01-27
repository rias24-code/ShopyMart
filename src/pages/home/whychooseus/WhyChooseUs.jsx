import { FaTruck, FaLock, FaHeadset } from "react-icons/fa";
import "./WhyChooseUs.css";

const features = [
  {
    icon: <FaTruck />,
    title: "Free Shipping",
    description: "Free delivery on all orders above ₹999",
  },
  {
    icon: <FaLock />,
    title: "Secure Payments",
    description: "100% secure payment gateways",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    description: "We are here to help anytime",
  },
];


const WhyChooseUs = () => {
  return (
    <section className="why-choose">
      <h2>Why Choose Us</h2>

      <div className="features">
        {features.map((fea, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{fea.icon}</div>
            <h3>{fea.title}</h3>
            <p>{fea.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
