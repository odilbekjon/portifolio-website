import { AboutItems } from '../utils/aboutItems';
import { LuArrowUpRight } from 'react-icons/lu';

const About = () => {
  return (
    <section id="about" className="section" data-aos="fade-right">
      <div className="container">
        <div className="glass-card p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">About me</p>
              <h2 className="headline-2">Building thoughtful interfaces with care and precision.</h2>
              <div className="space-y-3 text-sm text-slate-300 sm:text-base">
                <p>01 · Fullstack developer</p>
                <p>02 · Frontend mentor</p>
                <p>03 · Computer specialist</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="section-copy">
                Hello! I am a passionate front-end developer with 5 years of experience crafting interactive and user-friendly websites. I specialize in creating responsive designs that adapt beautifully across all devices. I enjoy turning complex problems into simple, elegant solutions that feel effortless to use.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                {AboutItems.map(({ label, number }) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 min-w-[140px]">
                    <div className="text-2xl font-semibold text-white sm:text-3xl">
                      {number}
                      <span className="ml-1 text-sky-400">+</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-400">{label}</p>
                  </div>
                ))}

                <a href="#contact" className="ml-auto rounded-full border border-white/10 bg-white/10 p-3 text-white transition hover:bg-white/15">
                  <LuArrowUpRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
