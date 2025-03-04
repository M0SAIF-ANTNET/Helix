import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

interface VideoTutorialProps {
  isArabic: boolean;
}

export const VideoTutorial: React.FC<VideoTutorialProps> = ({ isArabic }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative bg-emerald-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">
              {isArabic ? 'كيف يعمل هيلكس؟' : 'How Helix Works?'}
            </h2>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
              {isArabic
                ? 'شاهد كيف يمكنك الاستفادة من منصتنا لتبادل النفايات الصناعية بكفاءة'
                : 'Watch how you can leverage our platform for efficient industrial waste exchange'}
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            {!isPlaying ? (
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200"
                  alt="Video Thumbnail"
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-4 transform transition-transform hover:scale-110"
                  >
                    <Play className="w-8 h-8" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative aspect-video">
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="plyr__video-embed h-full">
                  <iframe
                    src="https://www.youtube.com/embed/-Y9VtoPvtuM?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                    allowFullScreen
                    allow="autoplay"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};