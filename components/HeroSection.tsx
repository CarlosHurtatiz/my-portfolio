"use client";

import React, { useState } from "react"
import Image from "next/image"
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai"

const HeroSection = () => {

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">

        <div className="md:mt-2 md:w-1/2">
          <Image
            src={'/assets/images/cvpicture.jpg'}
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
          />
        </div>

        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl font-custom">Hi, I&#39;m <span className="text-azulO">Carlos Hurtatiz!</span></h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "} {" "}
            <span className="font-semibold text-azulC">
              Frontend Developer{" "}
            </span>
            based in Minsk, Belarus. I&#39;m Colombian and love Salsa & Building Software Solutions.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <a href="https://github.com/carloshurtatiz" rel="noreferrer" target="_blank">
              <AiOutlineGithub
                className="hover:-translate-y-1 transition-transform cursor-pointer text-azulO dark:text-azulC"
                size={30}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/carloshurtatiz/?locale=en_US/"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineLinkedin
                className="hover:-translate-y-1 transition-transform cursor-pointer text-azulO dark:text-azulC"
                size={30}
              />
            </a>
            <a href="mailto:carloshurtatiz@gmail.com" rel="noreferrer" target="_blank">
              <AiOutlineMail
                className="hover:-translate-y-1 transition-transform cursor-pointer text-azulO dark:text-azulC"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
    </section >
  )
}

export default HeroSection
