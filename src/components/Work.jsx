import ProjectCard from './ProjectCard';

// images
import Img1 from "../assets/photo_2024-12-22_08-05-34.jpg";
import Img2 from "../assets/photo_2024-12-22_08-05-40.jpg";
import Img3 from "../assets/photo_2024-12-22_08-08-55.jpg";
import Img4 from "../assets/photo_2024-12-22_08-09-00.jpg";
import Img5 from "../assets/photo_2024-12-24_16-06-32.jpg";
import Img6 from "../assets/crm.jpg";

const works = [
    {
        imgSrc:Img1,
        title:'Savdo 5 jiek website',
        tags:['API', 'MVC', 'Development'],
        projectLink:'https://savdo5jiek.uz/'
    },
    {
        imgSrc:Img2,
        title:'Full stack website',
        tags:['API', 'MVC', 'Development'],
        projectLink:'https://najottalim.uz/'
    },
    {
        imgSrc:Img3,
        title:'Library platform form books',
        tags:['API', 'MVC', 'Development'],
        projectLink:'https://jarkurgon-takm.uz/'
    },
    {
        imgSrc:Img6,
        title:'Edu CRM',
        tags:['API', 'MVC', 'Development'],
        projectLink:'https://super-edu-94ac.vercel.app/'
    },
    {
        imgSrc:Img5,
        title:'Kun uz website',
        tags:['API', 'MVC', 'Development'],
        projectLink:'https://kun-uz-new.netlify.app/'
    },
    {
        imgSrc:Img4,
        title:'Animals website',
        tags:['API', 'MVC', 'Development'],
        projectLink:'https://portfoilo-animals.netlify.app/'
    },
]

const Work = () => {
  return (
    <section id="work" className="section" data-aos="fade-up">
      <div className="container">
        <h2 className="headline-2 mb-5">My portifolio</h2>

        <div className="grid gap-5 grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))]">
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
