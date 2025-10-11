// src/components/Landing_page/LoginButton.tsx
'use client';

interface LoginButtonProps {
  onClick?: () => void;
}

export default function LoginButton({ onClick }: LoginButtonProps) {
  return (
    <button
      onClick={onClick} // <- this makes the button clickable
      className="
        w-[129px] h-[47px]
        border border-white
        rounded-full
        text-white
        text-[18px] font-poppins font-medium
        bg-transparent
      "
    >
      Login
    </button>
  );
}
