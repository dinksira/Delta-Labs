'use client';

import { useRef } from 'react';
import Image from 'next/image';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export default function SignUpModal({ isOpen, onClose, onSwitchToLogin }: SignUpModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside modal
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  if (typeof window !== 'undefined') {
    document.addEventListener('mousedown', handleClickOutside);
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#174A5F]/25 transition-opacity ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        ref={modalRef}
        className={`relative w-[480px] max-w-[90%] bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform transition-transform ${
          isOpen ? 'translate-y-0' : '-translate-y-10'
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-gray-600 text-lg font-bold"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mt-10 flex flex-col items-center w-full">
          <h2 className="text-center text-[#525252]" style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '24px' }}>
            Create Your Account
          </h2>
          <p className="mt-2 text-center text-[#525252]" style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '14px' }}>
            Learn More, Do More
          </p>
        </div>

        {/* Form */}
        <div className="w-full mt-5 flex flex-col gap-3">
          {/* First Name */}
          <div className="flex flex-col">
            <label htmlFor="first-name" className="mb-1 text-[#828282]" style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '14px' }}>
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="Abel"
              className="w-full border border-[#DED2D9] rounded-[6px] px-3 py-2 text-sm text-[#000000] placeholder-[#E0E0E0] font-['Nunito_Sans'] focus:outline-none focus:ring-1 focus:ring-[#DED2D9] transition"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label htmlFor="last-name" className="mb-1 text-[#828282]" style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '14px' }}>
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Bekele"
              className="w-full border border-[#DED2D9] rounded-[6px] px-3 py-2 text-sm text-[#000000] placeholder-[#E0E0E0] font-['Nunito_Sans'] focus:outline-none focus:ring-1 focus:ring-[#DED2D9] transition"
            />
          </div>

          {/* Username */}
          <div className="flex flex-col">
            <label htmlFor="signup-username" className="mb-1 text-[#828282]" style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '14px' }}>
              User Name
            </label>
            <input
              id="signup-username"
              type="text"
              placeholder="Enter User Name"
              className="w-full border border-[#DED2D9] rounded-[6px] px-3 py-2 text-sm text-[#000000] placeholder-[#E0E0E0] font-['Nunito_Sans'] focus:outline-none focus:ring-1 focus:ring-[#DED2D9] transition"
            />
          </div>

          {/* Sign Up Button */}
          <button type="button" className="w-full h-11 rounded-[6px] bg-[#174A5F] text-white text-sm font-['Poppins'] font-semibold">
            Continue
          </button>

          {/* Divider */}
          <div className="flex items-center w-full justify-center my-2 text-center text-xs">
            <span className="text-[#DDDDDD] font-['Nunito_Sans'] font-semibold">-------------</span>
            <span className="px-2 text-[#A1A1A1] font-['Nunito_Sans'] font-regular">Or Sign up with</span>
            <span className="text-[#DDDDDD] font-['Nunito_Sans'] font-semibold">-------------</span>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center mt-1 w-full">
            <div className="flex items-center justify-center border border-[#DED2D9] rounded-[6px] h-10 w-full px-3 bg-white space-x-2">
              <Image src="/google.svg" alt="Google" width={24} height={24} />
              <Image src="/apple.svg" alt="Apple" width={24} height={24} />
              <Image src="/git-hub-logo.svg" alt="GitHub" width={24} height={24} />
              <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-center items-center mt-8 gap-2 text-sm">
            <span className="text-[#828282]" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>
              Already have an account?
            </span>
            <button
              type="button"
              className="text-[#174A5F]"
              style={{ fontFamily: 'Poppins', fontWeight: 500 }}
              onClick={onSwitchToLogin} // ✅ works now
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
