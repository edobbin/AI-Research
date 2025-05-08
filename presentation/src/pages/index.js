import Image from "next/image";
import {Typography} from "@mui/material";
import { Geist, Geist_Mono } from "next/font/google";
import TypewriterComponent from "typewriter-effect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const titles = [''];

export default function Home() {
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
          zIndex: -1
        }}
      >
        <source src="/videos/presentation.mp4" type="video/mp4" />       
         Your browser does not support the video tag.
      </video>
      
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start" 
          style={{sfontFamily: "Space Grotesk",
          position: "sticky",
          fontSize: "5vw",
          transform: "scale(1)"}}>

            
      <TypewriterComponent options={{strings: ['The Broken Windows Theory'], autoStart:true,cursor:"_",loop:true}} sx={{fontFamily:"Space Grotesk",
          position:"sticky",
          scale:"auto",
          fontSize:'clamp(1.5rem, 5vw, 4rem)'}}/>

        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
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
