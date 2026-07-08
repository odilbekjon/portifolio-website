import { FaFigma } from 'react-icons/fa6';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoHtml5, IoLogoReact } from 'react-icons/io5';
import { SiTailwindcss, SiMaterialformkdocs } from 'react-icons/si';
import { FaGitSquare } from 'react-icons/fa';
import { DiBootstrap } from 'react-icons/di';

const skillItem = [
  { imgSrc: <FaFigma size={26} />, label: 'Figma', desc: 'Design systems and UI exploration' },
  { imgSrc: <IoLogoHtml5 size={26} />, label: 'HTML', desc: 'Semantic and accessible structure' },
  { imgSrc: <FaCss3Alt size={26} />, label: 'CSS', desc: 'Responsive layouts and polished visuals' },
  { imgSrc: <DiBootstrap size={26} />, label: 'Bootstrap', desc: 'Rapid prototyping and clean components' },
  { imgSrc: <FaGitSquare size={26} />, label: 'GIT', desc: 'Version control and collaborative workflows' },
  { imgSrc: <IoLogoJavascript size={26} />, label: 'Javascript', desc: 'Interactive interfaces and logic' },
  { imgSrc: <IoLogoReact size={26} />, label: 'React', desc: 'Modern, scalable user interfaces' },
  { imgSrc: <SiTailwindcss size={26} />, label: 'TailwindCSS', desc: 'Utility-first styling at speed' },
  { imgSrc: <SiMaterialformkdocs size={26} />, label: 'Material UI', desc: 'Consistent design patterns' },
];

const Skill = () => {
  return (
    <section id="reviews" className="section" data-aos="zoom-in">
      <div className="container">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">Tools</p>
          <h2 className="headline-2 mt-3">Essential tools that support every build.</h2>
          <p className="section-copy mt-3">A modern workflow depends on reliable tools, thoughtful architecture, and a clean visual system.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <div key={key} className="group flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300 transition group-hover:bg-sky-400/20">{imgSrc}</div>
              <div>
                <h3 className="text-lg font-semibold text-white">{label}</h3>
                <p className="mt-1 text-sm text-slate-400">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
