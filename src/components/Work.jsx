import ProjectCard from './ProjectCard';
import { works } from '../utils/works';

const Work = () => {
  return (
    <section id="work" className="section" data-aos="fade-up">
      <div className="container">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">Selected work</p>
            <h2 className="headline-2 mt-3">A curated collection of recent projects.</h2>
          </div>
          <p className="section-copy">Each experience reflects thoughtful UX, responsive interfaces, and purposeful development choices.</p>
        </div>

        <div className="portfolio-grid grid gap-6">
          {works?.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes=""
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
