import { motion } from "framer-motion";
import Image from "next/image";

type SectionProps = {
  section: {
    imageSrc: string;
    imageAlt: string;
    text: string;
    title: string;
  };
  index: number;
  isLargeScreen: boolean;
};

const imageVariants = {
  hidden: { scale: 0.9, filter: "blur(10px)", opacity: 0 },
  visible: {
    scale: 1,
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 1 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
};

export default function Section({
  section,
  index,
  isLargeScreen,
}: SectionProps) {
  return (
    <motion.div
      className="flex flex-col md:flex-row justify-between gap-10 items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: isLargeScreen ? 0.5 : 0.15 }}
    >
      <motion.div
        className={`md:basis-3/6 ${index % 2 === 0 ? "" : "md:order-2"}`}
        variants={textVariants}
      >
        <h1 className="text-3xl font-bold text-rose-700">{section.title}</h1>
        <p className="mt-4 text-lg text-slate-600">{section.text}</p>
      </motion.div>

      <motion.div
        className={`relative w-full h-72 md:w-96 lg:h-80 lg:w-[500px] ${
          index % 2 === 0 ? "" : "md:order-1"
        }`}
        variants={imageVariants}
      >
        <Image
          src={section.imageSrc}
          alt={section.imageAlt}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
}
