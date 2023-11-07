import { BsCodeSlash } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="main-footer">
      <BsCodeSlash />
      <span className="year">2023</span> by
      <a
        rel="noreferrer"
        target="_blank"
        className="author"
        href="https://www.linkedin.com/in/ahmed-ayman-723605229/"
      >
        Ahmed Ayman
      </a>
    </footer>
  );
};

export default Footer;
