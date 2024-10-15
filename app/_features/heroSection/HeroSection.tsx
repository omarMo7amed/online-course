"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";

const Button = dynamic(() => import("@/app/_components/Button"));

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

export default function HeroSection() {
  return (
    <motion.section
      className="pt-10 pb-20 flex md:justify-between gap-5 flex-col-reverse md:flex-row"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Text Section */}
      <motion.div
        className="md:basis-2/4 md:mt-32 mt-10"
        variants={textVariants}
      >
        <h1 className="sm:text-4xl text-3xl font-bold text-rose-700">
          Unlock Your Potential in Web Development
        </h1>

        <p className="text-base my-6 text-slate-600">
          Take the leap into a thriving career with our expertly crafted{" "}
          <strong>web development course</strong>. Whether you&#39;re just
          starting out or looking to level up your skills, we provide the tools
          and guidance to help you succeed.
          <br />
          <br />
          Learn from <em>industry leaders</em>, build a portfolio of real-world
          projects, and unlock endless opportunities in the tech world. Don’t
          just learn—
          <strong>master the art of web development</strong> and step
          confidently into your future.
        </p>

        <div className="inline-block transform transition-transform duration-150 hover:scale-105 active:scale-95">
          <Button
            role="link"
            href="/signup"
            ariaLabel="Sign up for web development course"
          >
            Let&#39;s Start
          </Button>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="relative flex justify-center h-[480px]"
        variants={imageVariants}
      >
        <Image
          src="/heroSection.webp"
          width={320}
          height={320}
          alt="Web development course hero image"
          loading="eager"
          layout="intrinsic"
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
        />
      </motion.div>
    </motion.section>
  );
}
