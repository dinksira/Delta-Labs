'use client';

import React, { useRef, useEffect } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

type VideoData = {
  id: string;
  src: string;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
};

// 👇 Replace these filenames with the actual ones you have in /public/videos
const videos: VideoData[] = [
  {
    id: '1',
    src: '/videos/video1.mp4',
    caption: 'First amazing video 🎥',
    likes: 230,
    comments: 12,
    shares: 5,
  },
  {
    id: '2',
    src: '/videos/video2.mp4',
    caption: 'Second trending video 🔥',
    likes: 800,
    comments: 73,
    shares: 21,
  },
  {
    id: '3',
    src: '/videos/video3.mp4',
    caption: 'Third viral clip 🌍',
    likes: 1550,
    comments: 240,
    shares: 89,
  },
];

export default function ShortVideoFeed() {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    videoRefs.current.forEach((video) => {
      if (!video) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch(() => {});
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.6 }
      );

      observer.observe(video);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div
      className="
        h-screen 
        overflow-y-scroll 
        snap-y 
        snap-mandatory 
        bg-black 
        no-scrollbar
      "
    >
      {videos.map((video, index) => (
        <div
          key={video.id}
          className="flex justify-center items-center h-screen snap-start"
        >
          <div className="relative w-[360px] h-[640px] bg-black rounded-lg overflow-hidden shadow-lg">
            <video
              ref={(el) => {
                if (el) videoRefs.current[index] = el;
              }}
              src={video.src}
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-16 text-white z-10">
              <p className="text-sm font-medium mb-2">{video.caption}</p>
            </div>

            {/* Action buttons */}
            <div className="absolute bottom-4 right-4 flex flex-col items-center gap-4 z-10">
              <button className="flex flex-col items-center text-white hover:opacity-80">
                <Heart size={28} />
                <span className="text-xs">{video.likes}</span>
              </button>

              <button className="flex flex-col items-center text-white hover:opacity-80">
                <MessageCircle size={28} />
                <span className="text-xs">{video.comments}</span>
              </button>

              <button className="flex flex-col items-center text-white hover:opacity-80">
                <Share2 size={28} />
                <span className="text-xs">{video.shares}</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
