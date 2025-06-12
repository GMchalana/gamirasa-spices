import Image from 'next/image';
import { Spice } from '../../types/types';

interface ProductCardProps {
  spice: Spice;
}

const ProductCard: React.FC<ProductCardProps> = ({ spice }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md spice-card transition-all duration-300">
      <div className="relative h-48 w-full">
        <Image 
          src={spice.image} 
          alt={spice.name} 
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{spice.name}</h3>
        <p className="text-gray-600 mb-4">{spice.description}</p>
        <div className="bg-orange-50 p-3 rounded-lg">
          <h4 className="font-semibold text-orange-600 mb-1">Benefits:</h4>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {spice.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;