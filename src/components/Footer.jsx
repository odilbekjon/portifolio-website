import { sitemap } from '../utils/sitemap';

const Footer = () => {
  return (
    <footer className="pb-10 pt-4" data-aos="fade-up">
      <div className="container">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 sm:p-8 lg:grid lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-10">
          <div className="mb-8 lg:mb-0">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">Let’s connect</p>
            <h2 className="headline-2 mt-3 ">Turn your vision into a high-performing product.</h2>
            <a href="https://t.me/odilbekdev" target="_blank" rel="noreferrer" className="btn btn-primary mt-6">
              Work with me
            </a>
          </div>

          <div>
            <ul className="flex flex-wrap gap-4 sm:gap-8">
              {sitemap.map(({ label, link }, key) => (
                <li key={key}>
                  <a href={link} className="text-sm text-slate-400 transition hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
