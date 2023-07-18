import { FaTimes } from "react-icons/fa";
import logo from "./logo.svg";
import { useGlobalContext } from "./context";

export default function Sidebar({ social, links }) {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <section className={isSidebarOpen? "sidebar show-sidebar": 'sidebar'}>
      <div className="sidebar-header">
        <img src={logo} alt="sidebar logo" className="sidebar-logo" />
        <button onClick={closeSidebar} className="sidebar-btn">
          <FaTimes />
        </button>
      </div>

      <ul className="sidebar-links">
        {links.map((link) => {
          const { icon, text, url, id } = link;
          return (
            <a key={id} className="sidebar-link" href={url}>
              <span className="icon">{icon}</span>
              <span className="text">{text}</span>
            </a>
          );
        })}
      </ul>

      <ul className="sidebar-icons">
        {social.map((item) => {
          const { icon, url, id } = item;
          return (
            <a key={id} href={url} className="sidebar-icon">
              {icon}
            </a>
          );
        })}
      </ul>
    </section>
  );
}
