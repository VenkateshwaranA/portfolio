"use client";

import { motion } from "framer-motion";
// import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import hero from "@/public/hero.jpg"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-16">
      <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center md:flex-row md:justify-between md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-1 flex-col items-start space-y-4"
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
          {/* <Button size="lg">Contact us</Button> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex-1 md:mt-0"
        >
          <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-primary md:h-[350px] md:w-[350px]">
            <Image src={hero} alt="venki" className="h-full w-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
