// components/TopBar.tsx
import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Topnav() {
  return (
    <div className="bg-gray-900 text-white ">
     <div className='max-w-7xl mx-auto flex justify-between items-center px-4  py-2'>

      <div className="flex items-center space-x-2">
        <span className='text-[12px]'>allsparktechnologies.com</span>
        <span className='text-[12px]'>|</span>
        <span className='text-[12px]'>1-888-445-480</span>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-2">
        <span  className='text-[12px]'>Follow us:</span>
        <a href="#" className="hover:text-gray-300">
          <Facebook size={12} />
        </a>
        <a href="#" className="hover:text-gray-300">
          <Twitter size={12} />
        </a>
        <a href="#" className="hover:text-gray-300">
          <Linkedin size={12} />
        </a>
      </div>
     </div>

    </div>
  );
}
