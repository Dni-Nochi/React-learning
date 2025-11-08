import './SidebarFooter.css';
import { sidebarLinks } from '../../../assets/DataBase/index';
function SidebarFooter() {
  return (
    <ul className="sidebar-footer">
      {sidebarLinks.map((links) => {
        return (
          <li key={links.name}>
            <a>
              <p>{links.name}</p>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SidebarFooter;
