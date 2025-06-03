

// images 
import { LuArrowUpRight } from "react-icons/lu";

const AboutItems = [
    {
        label:'Project done',
        number:5,
    },
    {
        label:'Years of experience',
        number:3,
    },
]

const About = () => {
  return (
    <section
    id='about'
    className='section mb-20'
    data-aos="fade-right"
    >
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 ">

                <div className="flex justify-between lg:flex-row md:flex-col sm:flex-col xs:flex-col ms:flex-col">

                    <div className="ms:w-full">
                        <h2 className="tracking-[1px] text-[20px]"><span className='text-[45px] mr-1'>01</span>   Fullstack developer</h2>
                        <h2 className="tracking-[1px] text-[20px]"><span className='text-[45px]'>02</span>   Frontend mentor</h2>
                        <h2 className="tracking-[1px] text-[20px]"><span className='text-[45px] ms:w-full'>03</span>   Computer specialist</h2>
                    </div>

                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl w-[800px] leading-5 lg:w-full md:w-[600px] md:mt-5 sm:w-[500px] xs:w-[400px] ms:w-[250px]">
                        About Me
                            Hello! I am a passionate front-end developer with 3 years of experience crafting interactive and user-friendly websites. I specialize in creating responsive designs that adapt beautifully across all devices.

                            I enjoy turning complex problems into simple, elegant solutions. Whether it is building sleek interfaces or optimizing performance, I strive to make the web a better place—one project at a time.

                            Currently, I am working at Record IT, where I have contributed to several client projects and am now involved in developing a large-scale platform for training centers.

                            When I am not coding, you can find me exploring new technologies or participating in web development events.

                            Let’s build something amazing together!
                    </p>
                </div>

            <div className="flex flex-wrap items-center gap-6 md:gap-7 sm:">
                {
                    AboutItems.map(({label, number}, key) => {
                        return(
                            <div key={key} className="items-center md:mb-2">
                                <div className=" text-2xl font-semibold md:mb-2 ">
                                    <span className='text-2xl font-semibold md:text-4xl'>{number}</span>
                                    <span className='text-sky-400  font-semibold'>+</span>
                                </div>
                                <p>{label}</p>
                            </div>
                        )
                    })
                }

                <span className='ml-auto md:w-[40px] h-[40px]'>
                    <LuArrowUpRight size={30} />
                </span>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
