import Image from "next/image";
import {Typography,Button, Container} from "@mui/material";
import { Geist, Geist_Mono } from "next/font/google";
import TypewriterComponent from "typewriter-effect";
import { useEffect, useState } from "react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const titles = ['Title','Introduction','Factor(s) Observed','Demographics','Linear Regression Model','Integration with Neural Network','Adjustments', 'Results'];

export default function Home() {
  const [title,setTitle] = useState(0);
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`} style={{background:"transparent"}}
   >
        <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          opacity:.5
        }}
      >
        <source src="/videos/presentation.mp4" type="video/mp4" />       
         Your browser does not support the video tag.
      </video>
      
      <main 
          style={{sfontFamily: "Space Grotesk",
          position: "sticky",
          fontSize: "5vw",
          transform: "scale(1)",
          top:"120px"
          }}>
            
            <TypewriterComponent
              options={{
              autoStart: true,
              loop: false,
              cursor: "_",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('The Broken Windows Theory')
                .callFunction(() => {
                  document.querySelector('.Typewriter__cursor')?.classList.add('hidden');
                })
                .start();
            }}
          />
      </main>

      <div
          style={{
            width: "24vw",
            height: "5vh",
            display: "flex",
            gap: "2rem", // or adjust as needed
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top:"-150px"            
          }}
        >
            <TypewriterComponent sx={{fontFamily:"Space Grotesk",
            position:"sticky",
            scale:"auto",
            fontSize:'clamp(2.5rem, 3vw, 4.5rem)',
            }}
             options={{ autoStart:true,cursor:"_"}} 
            onInit={(typewriter) => {
              typewriter
                .typeString('By: Daniel Anoruo and Ethan Dobbin')
                .callFunction(() => {
                  document.querySelector('.Typewriter__cursor')?.classList.add('hidden');
                })
                .start();
                
            }}/>

        </div>
      <div
          style={{
            width: "50vw",
            height: "10vh",
            display: "flex",
            gap: "5rem", // or adjust as needed
            justifyContent: "center",
            alignItems: "center",
            position: "sticky",
          }}
        >
          <Button sx={{width:"10vw",height:"7vh",background:"gray", border:"3px solid black", fontFamily:"Space Grotesk", color:"black",fontSize:"medium"}}>Prev</Button>
          <Button sx={{width:"10vw",height:"7vh",background:"gray", border:"3px solid black", fontFamily:"Space Grotesk", color:"black",fontSize:"medium"}}>Next</Button>

      </div>

      <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/edobbin/AI-Research"
          target="_blank"
          rel="noopener noreferrer"
          fontFamily="Space Grotesk"
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
            fontFamily="Space Grotesk"
          />
          Reference
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/search/results/all/?keywords=Baltimore%20Data%20Science%20Corps&sid=R7d"
          target="_blank"
          rel="noopener noreferrer"
          fontFamily="Space Grotesk"
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
    </div>
  );
}
