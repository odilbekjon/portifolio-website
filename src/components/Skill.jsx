import React from 'react'

// components
import SkillCard from './SkillCard'

// images
import { FaFigma } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { DiBootstrap } from "react-icons/di";
import { SiMaterialformkdocs } from "react-icons/si";

const skillItem = [
    {
        imgSrc: <FaFigma size={30} />,
        label:'Figma',
        desc:'Design tool'
    },
    {
        imgSrc:<IoLogoHtml5 size={30} />,
        label:'HTML',
        desc:'User'
    },
    {
        imgSrc: <FaCss3Alt size={30} />,
        label:'CSS',
        desc:'User Interface'
    },
    {
        imgSrc: <DiBootstrap size={30} /> ,
        label:'Bootstrap',
        desc:'You can create easy'
    },
    {
        imgSrc: <FaGitSquare size={30} /> ,
        label:'GIT',
        desc:'Work with community'
    },
    {
        imgSrc: <IoLogoJavascript size={30} />,
        label:'Javascript',
        desc:'Interaction'
    },
    {
        imgSrc:<IoLogoReact size={30} />,
        label:'React',
        desc:'Framework'
    },
    {
        imgSrc:<SiTailwindcss size={30} /> ,
        label:'TailwindCSS',
        desc:'User Interface'
    },
    {
        imgSrc:<SiMaterialformkdocs size={30} />,
        label:'Material UI',
        desc:'User Interface'
    },
]

const Skill = () => {
  return (
    <section id='reviews' className='section mb-20' data-aos="zoom-in">
        <div className="container">
            <h2 className='headline-2'>
                Essintial Tools I use
            </h2>

            <p className='text-zinc-400 mt-3 mb-8 mx-a-[50ch]'>
                
            </p>

            <div className="grid lg:grid-cols-3 gap-5 sm:grid-cols-2 xs:grid-cols-1 ms:grid-cols-1">
                {
                    skillItem.map(({imgSrc, label, desc},key) => {
                        return (
                            <div key={key} className='skill-card flex items-center gap-3 mt-4 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group xsw:flex-col'>
                                <div className='icon bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors'>{imgSrc}</div>
                                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px, _1fr))]">
                                    <h3>{label}</h3>
                                    <p>{desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Skill
