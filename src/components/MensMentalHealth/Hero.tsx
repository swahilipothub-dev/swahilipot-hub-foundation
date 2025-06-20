import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

interface HeroProps {
  title: string;
  date: string;
  location: string;
  ctaLink: string;
  backgroundImage: string;
}

const fadeIn: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Hero: FC<HeroProps> = ({ title, date, location, ctaLink, backgroundImage }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-[600px] mb-12 rounded-xl overflow-hidden shadow-2xl"
    >
      <div 
        className="absolute inset-0 hero-background" 
        style={{ backgroundImage: `url('${backgroundImage}')` }} 
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex flex-col justify-center items-center text-white">
        <motion.h1 
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
          className="text-5xl md:text-6xl font-bold mb-6 text-center leading-tight"
        >
          {title.split(' ').map((word, i) => (
            <span key={i}>
              {word}
              <br />
            </span>
          ))}
        </motion.h1>
        <motion.p 
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
          className="text-2xl mb-8 font-light"
        >
          {date} | {location}
        </motion.p>
        <motion.div
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.4 }}
        >
          <Link to={ctaLink} target="_blank">
            <Button variant="outline" className="bg-white text-black hover:bg-gray-100 hover:scale-105 transition-transform duration-300 text-lg px-8 py-6">
              RSVP Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
