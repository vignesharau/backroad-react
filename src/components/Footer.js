import { pageLink, socialLink } from "./Data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links" >
        {pageLink.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="footer-link">
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
      {socialLink.map((slink)=>{
        return (
          <li key={slink.id}>
            <a
              href={slink.href}
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <i className={slink.icon}></i>
            </a>
          </li>
        );
      })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
