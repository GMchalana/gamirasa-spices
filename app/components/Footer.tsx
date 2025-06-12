const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Gamirasa Spices</h3>
            <p className="text-gray-300">Premium quality spices for your kitchen. Enhancing flavors since 1995.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="text-gray-300 hover:text-white">Products</a></li>
              <li><a href="#special" className="text-gray-300 hover:text-white">Special Pack</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-white">Benefits</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Contact Info</h3>
            <p className="text-gray-300 mb-2">123 Spice Street, Colombo, Sri Lanka</p>
            <p className="text-gray-300 mb-2">Phone: +94 112 345 678</p>
            <p className="text-gray-300">Email: info@gamirasa.com</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gamirasa Spices. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;