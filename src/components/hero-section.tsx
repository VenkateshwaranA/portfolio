"use client";

import { motion } from "framer-motion";
// import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import hero from "@/public/hero.jpg";
import { Button } from "./ui/button";

export function HeroSection() {
  // const resume = require('@/public/venkateshwaran.pdf');

  const resumeDowload = () => {
    console.log("resumeDowload");
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/venkateshwaran.pdf";
      link.download = "venkateshwaran.pdf";
      link.click();
    }, 500);
  };

  return (
    <section id="home" className="min-h-screen ">
      <div className="container flex flex-col-reverse  min-h-[calc(100vh-4rem)] justify-between  items-center  md:flex-row md:justify-between md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start space-y-4"
        >
          <span className="text-lg font-medium text-primary">
            Hello, Welcome
          </span>
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            I&apos;m Venkateshwaran A
          </h1>
          <p className="text-muted-foreground">
            I'm an India-based self-taught developer skilled in various
            technologies spanning backend and frontend domains. Presently, I'm
            employed as a Software Engineer at SNS iHub. For further insights
            into my professional journey, feel free to explore my LinkedIn
            profile.
          </p>
          <Button
            size="lg"
            className="mt-4 bg-slate-600"
            onClick={resumeDowload}
          >
            Download Resume
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" flex-1 md:mt-0"
        >
          <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-primary md:h-[350px] md:w-[350px]">
            <Image
              src={hero}
              alt="venki"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>

  );
}
