'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25">
      <div
        ref={modalRef}
        className="relative w-[500px] max-w-[90%] bg-white rounded-lg shadow-lg p-8 flex flex-col items-center"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold"
        >
          ✕
        </button>

        {/* Header + Subheader */}
        <div className="mt-10 flex flex-col items-center w-full">
          <h2
            className="text-center text-[#525252]"
            style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '26px' }}
          >
            Login to Your Account
          </h2>
          <p
            className="mt-2 text-center text-[#525252]"
            style={{ fontFamily: 'Poppins', fontWeight: 300, fontSize: '15px' }}
          >
            Learn more and do more
          </p>
        </div>

        {/* Form Fields */}
        <div className="w-full mt-6 flex flex-col gap-6">
          {/* Email/Phone Field */}
          <div className="flex flex-col">
            <label
              htmlFor="login-input"
              className="mb-1 text-[#828282]"
              style={{ fontFamily: 'Poppins', fontWeight: 500 }}
            >
              Email or phone number
            </label>
            <input
              id="login-input"
              type="text"
              placeholder="mail@abc.com"
              className="
                w-full
                border border-[#DED2D9]
                rounded-[6px] 
                px-3 py-2 
                text-[#000000] 
                placeholder-[#E0E0E0]
                font-['Nunito_Sans'] font-normal
                focus:outline-none focus:ring-1 focus:ring-[#DED2D9]
                transition
              "
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label
              htmlFor="pass-input"
              className="mb-1 text-[#828282]"
              style={{ fontFamily: 'Poppins', fontWeight: 500 }}
            >
              Password
            </label>
            <input
              id="pass-input"
              type="password"
              placeholder="*****************"
              className="
                w-full
                border border-[#DED2D9]
                rounded-[6px] 
                px-3 py-2 
                text-[#000000] 
                placeholder-[#E0E0E0]
                font-['Nunito_Sans'] font-normal
                focus:outline-none focus:ring-1 focus:ring-[#DED2D9]
                transition
              "
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mt-2 w-full">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 border border-[#DED2D9] rounded mr-2"
              />
              <label
                htmlFor="remember"
                className="text-[#A1A1A1]"
                style={{ fontFamily: 'Poppins', fontWeight: 400 }}
              >
                Remember Me
              </label>
            </div>
            <button
              type="button"
              className="text-[#0C6AA0]"
              style={{ fontFamily: 'Poppins', fontWeight: 500 }}
            >
              Forgot Password?
            </button>
          </div>

          {/* Divider with "Or Sign in with" */}
          <div className="flex items-center w-full justify-center my-4 text-center">
            <span className="text-[#DDDDDD] font-['Nunito_Sans'] font-semibold">
              ------------- 
            </span>
            <span className="px-2 text-[#A1A1A1] font-['Nunito_Sans'] font-regular">
              Or Sign in with
            </span>
            <span className="text-[#DDDDDD] font-['Nunito_Sans'] font-semibold">
              -------------
            </span>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center mt-4">
            <Image
              src="/Social media icons.svg"
              alt="Social Media Icons"
              width={400}  
              height={240}  
            />
          </div>

          {/* Footer: Not Registered Yet? / Create an account */}
          <div className="flex justify-center items-center mt-6 gap-2">
            <span
              className="text-[#828282]"
              style={{ fontFamily: 'Poppins', fontWeight: 400 }}
            >
              Not Registered Yet?
            </span>
            <button
              type="button"
              className="text-[#174A5F]"
              style={{ fontFamily: 'Poppins', fontWeight: 500 }}
            >
              Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
