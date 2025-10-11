'use client';
import { useState } from 'react';
import Image from 'next/image';
import LanguageDropdown from './LanguageDropdown';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
import AIBotModal from './AIBotModal';
import LoginModal from './LoginModal'; // import the new login modal

export default function TopBar() {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // state for login modal

  return (
    <>
      <header className="h-[70px] bg-[#174A5F] flex items-center justify-between px-6 sticky top-0 z-50">
        {/* Left: Vector + Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/Vector.svg" alt="Vector icon" width={24} height={24} priority />
          <Image
            src="/Public%20landing%20logo.svg"
            alt="Delta Labs Logo"
            width={140}
            height={28}
            priority
          />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-4">
          <LanguageDropdown />
          {/* AI Bot icon */}
          <Image
            src="/AI Bot.svg"
            alt="AI Bot"
            width={32}
            height={32}
            className="cursor-pointer"
            onClick={() => setIsAIModalOpen(true)}
          />
          {/* Login Button */}
          <LoginButton onClick={() => setIsLoginModalOpen(true)} />
          <SignupButton />
        </div>
      </header>

      {/* Modals */}
      <AIBotModal isOpen={isAIModalOpen} onClose={() => setIsAIModalOpen(false)} />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
}
