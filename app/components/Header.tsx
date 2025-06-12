import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Gamirasa Spices Logo" 
            width={60} 
            height={30} 
            className="mr-4"
          />
          <h1 className="text-2xl font-bold text-orange-600 hidden md:block">Gamirasa Spices</h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="#products" className="text-gray-700 hover:text-orange-600 font-medium">Products</Link>
          <Link href="#special" className="text-gray-700 hover:text-orange-600 font-medium">Special Pack</Link>
          <Link href="#benefits" className="text-gray-700 hover:text-orange-600 font-medium">Benefits</Link>
          <Link href="#contact" className="text-gray-700 hover:text-orange-600 font-medium">Contact Us</Link>
        </nav>
        
        <button className="md:hidden text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;