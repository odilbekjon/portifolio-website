import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef();

  useEffect(() => {
    const firstLink = document.querySelector(".nav-link");
    if (firstLink) {
      firstLink.classList.add("active");
      lastActiveLink.current = firstLink;
      initActiveBox(firstLink);
    }
  }, []);

  const initActiveBox = (link) => {
    if (link && activeBox.current) {
      activeBox.current.style.top = link.offsetTop + "px";
      activeBox.current.style.left = link.offsetLeft + "px";
      activeBox.current.style.width = link.offsetWidth + "px";
      activeBox.current.style.height = link.offsetHeight + "px";
    }
  };

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    initActiveBox(event.target);
  };

  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Tools", link: "#reviews" },
    { label: "Work", link: "#work" },
    { label: "Contact", link: "#contact", className: "md:hidden" },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          className={`nav-link ${className || ""}`}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
