"use client";

import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { navLinks } from "@/data/navlinks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  }, []);
  return (
    <nav>
      <div>
        <a href={"/"} className='flex items-center gap-2'>
          <Image src={logo} alt='Velvet Pour' />
          {/* <img src='/images/logo.png' alt='Velvet Pour' /> */}
          <p>Velvet Pour</p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`/${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
