
import { Spice } from '../types/types';
import ContactForm from './components/ContactForm';
import ProductCard from './components/ProductCard';
import SpecialPack from './components/SpecialPack';
import Image from 'next/image';

const Home = () => {
  // Sample spice data - replace with your actual products
  const spices: Spice[] = [
    {
      id: 1,
      name: 'Turmeric',
      image: '/spices/turmeric.jpg',
      description: 'Premium organic turmeric powder with rich color and aroma.',
      benefits: [
        'Powerful anti-inflammatory effects',
        'Boosts brain function',
        'Lowers risk of heart disease',
        'Helps prevent cancer'
      ]
    },
    {
    id: 2,
    name: 'Chilli Powder',
    image: '/spices/chilli-powder.jpg',
    description: 'Vibrant red chilli powder to add heat and color to your dishes.',
    benefits: [
      'Boosts metabolism',
      'Rich in antioxidants',
      'Supports digestive health',
      'May help reduce inflammation'
    ]
  },
    {
      id: 3,
      name: 'Cardamom',
      image: '/spices/uluhal.jpg',
      description: 'Aromatic green cardamom pods for exquisite flavor.',
      benefits: [
        'May lower blood pressure',
        'Contains cancer-fighting compounds',
        'Helps with digestive issues',
        'May help with bad breath'
      ]
    },
    {
      id: 4,
      name: 'Black Pepper',
      image: '/spices/black-pepper.jpg',
      description: 'Freshly ground black pepper for enhanced flavor.',
      benefits: [
        'High in antioxidants',
        'Has anti-inflammatory properties',
        'May benefit your brain',
        'May improve blood sugar control'
      ]
    },
    {
      id: 5,
      name: 'Cloves',
      image: '/spices/thunapaha.jpg',
      description: 'Whole cloves with intense aroma and flavor.',
      benefits: [
        'Contains important nutrients',
        'High in antioxidants',
        'May help protect against cancer',
        'Can kill bacteria'
      ]
    },
    {
      id: 6,
      name: 'Cumin',
      image: '/spices/kelimiris.jpg',
      description: 'Aromatic cumin seeds for authentic flavors.',
      benefits: [
        'Promotes digestion',
        'Rich source of iron',
        'Contains beneficial plant compounds',
        'May help with diabetes'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-orange-500 to-amber-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Quality Spices</h1>
          <p className="text-xl md:text-2xl mb-8">Enhance your cooking with Gamirasa's authentic flavors and health benefits</p>
          <a href="#products" className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 inline-block">
            Explore Products
          </a>
        </div>
      </section> */}

    <section className="relative py-20">
  {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/bg.png')" }}
        ></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Quality Spices</h1>
          <p className="text-xl md:text-2xl mb-8">
            Enhance your cooking with Gamirasa's authentic flavors and health benefits
          </p>
          <a
            href="#products"
            className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 inline-block"
          >
            Explore Products
          </a>
        </div>
      </section>


      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Premium Spices</h2>
            <p className="text-orange-600 font-medium">100% Natural & Organic</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spices.map(spice => (
              <ProductCard key={spice.id} spice={spice} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Pack Section */}
      <SpecialPack />

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Health Benefits</h2>
            <p className="text-orange-600 font-medium">Why our spices are good for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Antioxidant Rich</h3>
              <p className="text-gray-600">Our spices are packed with antioxidants that help fight free radicals in your body.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Anti-Inflammatory</h3>
              <p className="text-gray-600">Many of our spices have natural anti-inflammatory properties to support overall health.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Digestive Aid</h3>
              <p className="text-gray-600">Our spices can help improve digestion and reduce bloating and discomfort.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Immune Boost</h3>
              <p className="text-gray-600">Regular consumption can help strengthen your immune system naturally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h2>
            <p className="text-orange-600 font-medium">We'd love to hear from you</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+94 112 345 678</p>
                    <p className="text-gray-600">+94 765 432 109</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">info@gamirasa.com</p>
                    <p className="text-gray-600">sales@gamirasa.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">123 Spice Street</p>
                    <p className="text-gray-600">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold text-gray-800 mb-3">Business Hours</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;