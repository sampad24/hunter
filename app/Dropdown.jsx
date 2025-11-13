'use client';
import { useState, useRef, useEffect } from 'react';

export default function Dropdown({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option); // send selected course to parent
  };

  return (
    <div className="relative inline-block text-left w-full" ref={dropdownRef}>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      </label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="w-full text-left text-white bg-blue-700 border border-gray-300 rounded-lg text-sm px-4 py-2.5 inline-flex justify-between items-center"
      >
          {selected || 'Select course'}
        <svg
          className="w-2.5 h-2.5 ml-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1l4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full">
          <ul className="py-2 text-sm text-gray-700">
            {[
              'UNREAL ENGINE AND MOCAP',
              'PRODUCT MODELING HELPING WITH AI',
              'AI VIDEO MAKING',
              'SPECIAL EFFECTS FOR MOVIE AND GAME',
              '3D ANIMATION',
              'VFX A TO Z',
            ].map((option) => (
              <li key={option}>
                <button
                  onClick={() => handleSelect(option)}
                  type="button"
                  className="w-full text-left block px-4 py-2 hover:bg-gray-100"
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
