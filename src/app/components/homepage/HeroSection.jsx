import React from 'react'

export default function HeroSection() {
  return (
    <>
      <section className="relative -top-[100px] -z-10 p-5 ">
        <video className="w-full rounded-3xl" muted playsInline loop autoPlay>
          <source src="./assets/videos/banner-video.mp4" type="video/mp4" />
        </video>
      </section>
    </>
  );
}
