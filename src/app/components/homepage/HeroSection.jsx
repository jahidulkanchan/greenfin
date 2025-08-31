import React from 'react'

export default function HeroSection() {
  return (
    <>
      <section className="relative -z-10">
        <div className="px-3 max-w-[1420px] mx-auto">
          <video className="w-full min-h-[500px] object-cover object-left-top" muted playsInline loop autoPlay>
            <source src="./assets/videos/banner-video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
}
