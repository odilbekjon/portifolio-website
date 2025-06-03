import ProjectCard from './ProjectCard';
import { works } from '../utils/works';

const Work = () => {
  return (
    <section id="work" className="section" data-aos="fade-up">
      <div className="container">
        <h2 className="headline-2 mb-5">My portifolio</h2>

        <div className="portfolio-grid grid gap-5">
          {works?.map(({ imgSrc, title, tags, projectLink }, key) => {
            return (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                className=""
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Work
