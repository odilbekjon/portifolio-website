import React from 'react'
import PropTypes from 'prop-types';

// images
import { RiArrowRightUpLine } from "react-icons/ri";

const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    classes
}) => {
  return (
    <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-50/5 transition-colors mb-4 " + classes}>
        <figure className='img-box w-full h-[200px] rounded-md mb-2'>
            <img 
            src={imgSrc} 
            alt={title}
            loading={'lazy'}
            className='img-cover'
            />
        </figure>

        <div className=" justify-between">
            <div>
                <h3 className='title-1 mb-3 w-'>{title}</h3>
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-5">
                {
                    tags.map((label, key) => {
                        return(
                            <span
                             key={key}
                             className='h-8 text-sm text-zinc-400 bg-zinc-50/5 items-center px-3 rounded-lg'
                            >
                                {label}
                            </span>
                        )
                    })
                }
            </div>

            <div className="absolute right-5 ">
                <span
                className='material-symbols-rounded'
                aria-hidden={true}
                >
                    <RiArrowRightUpLine className='' size={20} />
                </span>
            </div>

            <a href={projectLink} target='_blank' className="">See more</a>
        </div>
    </div>
  )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink:PropTypes.string,
    classes:PropTypes.string
}

export default ProjectCard;
