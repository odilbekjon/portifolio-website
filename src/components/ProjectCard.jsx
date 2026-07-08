import PropTypes from 'prop-types';
import { RiArrowRightUpLine } from 'react-icons/ri';

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-4 shadow-[0_20px_70px_rgba(2,6,23,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-slate-800/80 ${classes}`}>
      <figure className="img-box mb-4 h-[220px] rounded-[1.25rem]">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover transition duration-500 group-hover:scale-105" />
      </figure>

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="title-1">{title}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((label, key) => (
              <span key={key} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-400">
                {label}
              </span>
            ))}
          </div>
        </div>

        <a href={projectLink} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/20 bg-sky-400/10 text-sky-300 transition hover:bg-sky-400/20" aria-label={`Open ${title}`}>
          <RiArrowRightUpLine size={18} />
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
