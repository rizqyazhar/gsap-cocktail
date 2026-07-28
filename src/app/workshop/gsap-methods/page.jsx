"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function GsapTo() {
  const containerRef = useRef();
  const scrollRef = useRef();

  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });
  useGSAP(
    () => {
      gsap.to("#blue-box", {
        x: 250,
        repeat: -1,
        yoyo: true,
        rotation: 360,
        duration: 2,
        ease: "elastic",
      });

      gsap.fromTo(
        "#green-box",
        {
          x: 0,
          rotation: 0,
          borderRadius: "0%",
        },
        {
          x: 250,
          repeat: -1,
          yoyo: true,
          borderRadius: "100%",
          rotation: 360,
          duration: 2,
          ease: "bounce.out",
        },
      );

      timeline.to("#red-box", {
        x: 300,
        ease: "sine.inOut",
      });

      timeline.to("#red-box", {
        y: -200,
        borderRadius: "100%",
      });

      timeline.to("#red-box", {
        y: 0,
        borderRadius: "100%",
      });

      timeline.to("#red-box", {
        x: 600,
        borderRadius: "8px",
      });

      gsap.to(".purple-box", {
        x: -100,
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 1.5,
          grid: [1, 2],
          axis: "y",
          ease: "circ.inOut",
          from: "random",
        },
      });

      gsap.to("#arrow-down", {
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut",
      });

      gsap.to("#text", {
        ease: "power1.inOut",
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: "#text",
          start: "bottom bottom",
        },
      });

      gsap.fromTo(
        ".para",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".para-box",
            start: "top 80%",
            toggleActions: "restart none none none",
          },
        },
      );
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(scrollRef.current.children);

      boxes.forEach((box) => {
        gsap.to(box, {
          x: 100 * (boxes.indexOf(box) + 5),
          rotation: 360,
          scale: 2,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 10%",
            scrub: true,
          },
          ease: "power1.inOut",
        });
      });
    },
    { scope: scrollRef },
  );
  return (
    <main ref={containerRef} className='flex flex-col gap-20'>
      <section>
        <h1>GsapTo</h1>

        <p className='mt-5 text-gray-500'>
          The <code>gsap.to()</code> method is used to animate elements from
          their current state to a new state.
        </p>
        <p className='mt-5 text-gray-500'>
          The <code>gsap.to()</code> method is similar to the{" "}
          <code>gsap.from()</code> method, but the difference is that the{" "}
          <code>gsap.to()</code> method animates elements from their current
          state to a new state, while the <code>gsap.from()</code> method
          animates elements from a new state to their current state.
        </p>

        <p className='mt-5 text-gray-500'>
          Read more about the{" "}
          <a
            href='https://greensock.com/docs/v3/GSAP/gsap.to()'
            target='_blank'
            rel='noreferrer noopener nofollow'>
            gsap.to()
          </a>{" "}
          method.
        </p>

        <div className='mt-20'>
          <div id='blue-box' className='w-20 h-20 bg-blue-500 rounded-lg' />
        </div>
      </section>
      <section>
        <h1>GsapFrom</h1>
        <div className='mt-10'>
          <div id='green-box' className='w-20 h-20 bg-green-500 rounded-lg' />
        </div>
      </section>
      <section>
        <h1>GsapTimeline</h1>
        <div className='mt-10'>
          <button
            onClick={() => {
              if (timeline.paused()) {
                timeline.play();
              } else {
                timeline.pause();
              }
            }}>
            Play/Pause
          </button>
          <div id='red-box' className='mt-10 w-20 h-20 bg-red-500 rounded-lg' />
        </div>
      </section>
      <section>
        <h1>GsapStagger</h1>
        <div className='mt-10 flex gap-5'>
          <div className='purple-box w-20 h-20 bg-purple-100 rounded-lg' />
          <div className='purple-box w-20 h-20 bg-purple-200 rounded-lg' />
          <div className='purple-box w-20 h-20 bg-purple-300 rounded-lg' />
          <div className='purple-box w-20 h-20 bg-purple-400 rounded-lg' />
          <div className='purple-box w-20 h-20 bg-purple-500 rounded-lg' />
          <div className='purple-box w-20 h-20 bg-purple-600 rounded-lg' />
          <div className='purple-box w-20 h-20 bg-purple-700 rounded-lg' />
        </div>
      </section>

      <section>
        <h1>GsapStagger</h1>
        <div className='flex flex-col items-center gap-5'>
          <p className='mt-10'>Scroll down to see the animation</p>
          <svg
            id='arrow-down'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='lucide lucide-move-down-icon lucide-move-down'>
            <path d='M8 18L12 22L16 18' />
            <path d='M12 2V22' />
          </svg>
        </div>
        <div ref={scrollRef} className='mt-30 h-300 py-50 space-y-10'>
          <div id='amber-box' className='w-20 h-20 bg-amber-300 rounded-lg' />
          <div id='sky-box' className='w-20 h-20 bg-sky-300 rounded-lg' />
        </div>
      </section>
      <section>
        <h1 id='text' className='opacity-0 translate-y-10'>
          GsapText
        </h1>
        <div className='para-box mt-10 space-y-3'>
          <p className='para'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            natus ratione molestias, sunt consequuntur, quidem laudantium facere
            temporibus quae veniam, cum illum. Numquam veritatis animi, fugiat
            aut harum voluptas fuga ex debitis facilis sed quaerat tempore, ipsa
            dolores laborum repellendus sint voluptatem error accusamus! Aliquid
            repudiandae labore quae culpa quod.
          </p>
          <p className='para'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            natus ratione molestias, sunt consequuntur, quidem laudantium facere
            temporibus quae veniam, cum illum. Numquam veritatis animi, fugiat
            aut harum voluptas fuga ex debitis facilis sed quaerat tempore, ipsa
            dolores laborum repellendus sint voluptatem error accusamus! Aliquid
            repudiandae labore quae culpa quod.
          </p>
          <p className='para'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            natus ratione molestias, sunt consequuntur, quidem laudantium facere
            temporibus quae veniam, cum illum. Numquam veritatis animi, fugiat
            aut harum voluptas fuga ex debitis facilis sed quaerat tempore, ipsa
            dolores laborum repellendus sint voluptatem error accusamus! Aliquid
            repudiandae labore quae culpa quod.
          </p>
          <p className='para'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            natus ratione molestias, sunt consequuntur, quidem laudantium facere
            temporibus quae veniam, cum illum. Numquam veritatis animi, fugiat
            aut harum voluptas fuga ex debitis facilis sed quaerat tempore, ipsa
            dolores laborum repellendus sint voluptatem error accusamus! Aliquid
            repudiandae labore quae culpa quod.
          </p>
          <p className='para'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            natus ratione molestias, sunt consequuntur, quidem laudantium facere
            temporibus quae veniam, cum illum. Numquam veritatis animi, fugiat
            aut harum voluptas fuga ex debitis facilis sed quaerat tempore, ipsa
            dolores laborum repellendus sint voluptatem error accusamus! Aliquid
            repudiandae labore quae culpa quod.
          </p>
          <p className='para'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            natus ratione molestias, sunt consequuntur, quidem laudantium facere
            temporibus quae veniam, cum illum. Numquam veritatis animi, fugiat
            aut harum voluptas fuga ex debitis facilis sed quaerat tempore, ipsa
            dolores laborum repellendus sint voluptatem error accusamus! Aliquid
            repudiandae labore quae culpa quod.
          </p>
        </div>
      </section>
    </main>
  );
}
