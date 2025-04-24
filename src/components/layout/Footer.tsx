
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-gradient">
              Logic
            </Link>
            <p className="text-gray-600 pr-4">
              We help students master coding and practical skills through engaging, 
              industry-relevant education and hands-on experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-logic-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-logic-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-logic-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-logic-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-logic-200">Home</Link>
              </li>
              <li>
                <Link to="/#about" className="text-gray-600 hover:text-logic-200">About Us</Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-600 hover:text-logic-200">Services</Link>
              </li>
              <li>
                <Link to="/#reviews" className="text-gray-600 hover:text-logic-200">Reviews</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">Web Development</li>
              <li className="text-gray-600">Mobile App Development</li>
              <li className="text-gray-600">Data Science & Analytics</li>
              <li className="text-gray-600">AI & Machine Learning</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-logic-200" />
                <span className="text-gray-600">info@logiclearning.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-logic-200" />
                <span className="text-gray-600">+1 (123) 456-7890</span>
              </li>
              <li className="text-gray-600">
                123 Learning Street, 
                <br />
                Tech City, TC 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Logic Learning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
