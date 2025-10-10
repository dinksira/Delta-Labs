'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import ModalTextField from './ModalTextField';

interface AIBotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIBotModal({ isOpen, onClose }: AIBotModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#174A5F]/25">
      <div
        ref={modalRef}
        className="relative w-[600px] h-[500px] bg-white rounded shadow-lg flex flex-col items-center justify-center"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold"
        >
          ✕
        </button>

        {/* Modal content */}
        <div className="flex flex-col items-center justify-center w-full h-full">
          {/* Bot Image */}
          <Image
            src="/botmodalimage.svg"
            alt="AI Bot Modal Image"
            width={200}
            height={200}
          />

          {/* Greeting Text */}
          <p
            className="mt-4 text-[#174A5F] text-center"
            style={{ fontFamily: 'Roboto', fontWeight: 300, fontSize: '40px' }}
          >
            Hi! How Can I Help You?
          </p>

          {/* Mic Icon */}
          <div className="mt-6">
            <Image src="/micicon.svg" alt="Mic Icon" width={50} height={50} />
          </div>

          {/* Text Field */}
          <ModalTextField />
        </div>
      </div>
    </div>
  );
}
