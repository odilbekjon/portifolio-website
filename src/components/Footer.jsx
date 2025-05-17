const sitemap = [
  { label: "Home", link: "#home" },
  { label: "About", link: "#about" },
  { label: "Work", link: "#work" },
  { label: "Reviews", link: "#reviews" },
  { label: "Contact", link: "#contact" },
];

const Footer = () => {
  return (
    <footer className="section" data-aos="fade-up">
      <hr />
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 mt-5">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[15ch]">
              Transform Your Vision into Reality
            </h2>
            <button className="btn btn-primary">Work with Me</button>
          </div>

          <div className="mb-10">
            <ul className="flex gap-10 mt-10">
              {sitemap.map(({ label, link }, key) => (
                <li key={key} className="flex">
                  <a
                    href={link}
                    className=" text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                  >
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
