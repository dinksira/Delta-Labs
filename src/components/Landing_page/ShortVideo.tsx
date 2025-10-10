// src/components/Landing_page/ShortVideo.tsx
export default function ShortVideo() {
  return (
    <div className="w-full max-w-4xl h-64 md:h-96 bg-black rounded-lg overflow-hidden shadow-lg relative flex items-center justify-center">
      <video
        className="w-full h-full object-cover"
        src="/sample-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute text-white text-2xl md:text-4xl font-bold text-center px-4">
        Welcome to Delta Labs
      </div>
    </div>
  );
}
