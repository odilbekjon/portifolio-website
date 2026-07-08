import { FaDownload } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

import { ButtonPrimary } from './Button';
import person from '../assets/person.jpg';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85 }}
      id="home"
      className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col">
          <div className="inline-flex w-max items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-300">
            <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
            </span>
            <span className="typewriter">Available for work</span>
          </div>

          <h1 className="headline-1 mt-6 max-w-[12ch] sm:max-w-[14ch] lg:max-w-[13ch]">
            I build polished digital experiences with{" "}
            <span className="text-sky-300">
              <Typewriter
                words={["React", "Frontend", "Design"]}
                loop={8}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            .
          </h1>

          <p className="section-copy mt-5 max-w-xl">
            I am a frontend developer with three years of experience crafting
            responsive, user-friendly products for businesses, learning
            platforms, and modern brands.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="/Odilbek_Safarov_CV.pdf" download="Odilbek_Safarov_CV.pdf">
              <ButtonPrimary label="Download CV" icon={<FaDownload />} />
            </a>
            <a
              href="#work"
              className="btn border border-white/10 bg-white/10 text-white hover:bg-white/15"
            >
              View projects
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { value: "5+", label: "years experience" },
              { value: "10+", label: "finished projects" },
              { value: "100%", label: "client focus" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <p className="text-xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky-400/30 to-violet-500/30 blur-3xl" />
          <div className="glass-card overflow-hidden p-3">
            <img
              className="h-full w-full rounded-[1.5rem] object-cover"
              src={person}
              width={550}
              height={680}
              alt="Odilbek Safarov"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
