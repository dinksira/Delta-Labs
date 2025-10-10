'use client';

import { useEffect, useRef } from 'react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        ref={modalRef}
        className="relative w-[800px] h-[600px] bg-white rounded shadow-lg"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold"
        >
          ✕
        </button>

        {/* Modal content (empty for now) */}
        <div className="w-full h-full flex items-center justify-center">
          {/* AI Bot content will go here */}
        </div>
      </div>
    </div>
  );
}
