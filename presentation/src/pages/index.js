import Image from "next/image";
import { Typography, Button, Box } from "@mui/material";
import { Geist, Geist_Mono } from "next/font/google";
import TypewriterComponent from "typewriter-effect";
import { useState } from "react";
import { motion } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const prop1 = {
  hidden: { opacity: 1 },
  show: {
    opacity: 0.5,
    transition: {
      staggeredChildren: 0.25,
    },
  },
};

const titles = [
  "Title",
  "Introduction",
  "Factor(s) Observed",
  "Demographics",
  "Linear Regression Model",
  "Integration with Neural Network",
  "Adjustments",
  "Results",
];

export default function Home() {
  const [titlePage, setTitle] = useState(0);

  return (
    <motion.div
      variants={prop1}
      initial="hidden"
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-x-2 gap-y-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
      style={{ background: "transparent" }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          opacity: 0.5,
        }}
      >
        <source src="/videos/presentation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <main
        style={{
          position: "sticky",
          fontSize: "clamp(2rem, 5vw, 5.5rem)",
          transform: "scale(1)",
          top: "40px",
          fontFamily: "Space Grotesk",
          marginBottom:"0px",
        }}
      >
        {titlePage === 0 && (
          <TypewriterComponent
            options={{
              autoStart: true,
              loop: false,
              cursor: "_",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("The Broken Windows Theory")
                .callFunction(() => {
                  document
                    .querySelector(".Typewriter__cursor")
                    ?.classList.add("hidden");
                })
                .start();
            }}
          />
        )}
      </main>

      <div
        style={{
          width: "clamp(220px, 24vw, 480px)",
          height: "clamp(40px, 5vh, 80px)",
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
          position: "sticky",
          marginTop: "clamp(-80px, -8vh, 0px)",
          top:"-90px"
        }}
      >
        {titlePage === 0 && (
          <TypewriterComponent
            options={{ autoStart: true, cursor: "_" }}
            onInit={(typewriter) => {
              typewriter
                .typeString("By: Daniel Anoruo and Ethan Dobbin")
                .callFunction(() => {
                  document
                    .querySelector(".Typewriter__cursor")
                    ?.classList.add("hidden");
                })
                .start();
            }}
          />
        )}
      </div>

      {titlePage === 0 && (
       <Box
        sx={{
          marginTop: "clamp(-120px, -12vh, -40px)",
          width: "clamp(200px, 30vw, 600px)",
          height: "clamp(100px, 40vh, 300px)",
          background: "transparent",
          backgroundImage: 'url("/videos/logo.png")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position:"relative"
          
       }}
     />
     
      )}

      <div
        style={{
          width: "clamp(250px, 60vw, 900px)",
          height: "clamp(60px, 10vh, 120px)",
          display: "flex",
          gap: "3rem",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          flexWrap: "wrap",
        }}
      >
        <Button
          sx={{
            width: "clamp(100px, 10vw, 200px)",
            height: "clamp(40px, 7vh, 80px)",
            background: "transparent",
            border: "2px solid black",
            fontFamily: "Space Grotesk",
            color: "black",
            fontSize: "clamp(0.9rem, 1vw, 1.2rem)",
          }}
          onClick={() => setTitle((titlePage - 1 + titles.length) % titles.length)}
        >
          Prev
        </Button>
        <Button
          sx={{
            width: "clamp(100px, 10vw, 200px)",
            height: "clamp(40px, 7vh, 80px)",
            background: "transparent",
            border: "2px solid black",
            fontFamily: "Space Grotesk",
            color: "black",
            fontSize: "clamp(0.9rem, 1vw, 1.2rem)",
          }}
          onClick={() => setTitle((titlePage + 1) % titles.length)}
        >
          Next
        </Button>
      </div>

      <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/edobbin/AI-Research"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.britannica.com/topic/broken-windows-theory"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Reference
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/search/results/all/?keywords=Baltimore%20Data%20Science%20Corps&sid=R7d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
      </footer>
    </motion.div>
  );
}
