import Image from 'next/image';

const SpecialPack = () => {
  const spicesInPack = [
    "Turmeric",
    "Cinnamon",
    "Cardamom",
    "Cloves",
    "Black Pepper",
    "Cumin",
    "Chili Powder"
  ];

  return (
    <section id="special" className="py-12 bg-gradient-to-r from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Special Collection Pack</h2>
          <p className="text-orange-600 font-medium">7 Premium Spices in One Pack</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/spices/spPack.jpg" 
                alt="Gamirasa 7 Spices Collection Pack" 
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Gamirasa Premium Spice Collection</h3>
            <p className="text-gray-600 mb-6">
              Our special collection pack includes 7 of our most popular and beneficial spices, 
              carefully selected to enhance your cooking experience. Perfect for both home cooks 
              and professional chefs.
            </p>
            
            <div className="mb-6">
              <h4 className="font-semibold text-orange-600 mb-2">Includes:</h4>
              <ul className="grid grid-cols-2 gap-2">
                {spicesInPack.map((spice, index) => (
                  <li key={index} className="flex items-center">
                    <span className="bg-orange-100 text-orange-600 p-1 rounded-full mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {spice}
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialPack;