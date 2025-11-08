import './SidebarNav.css';
import Svg from '../Svg/Svg';
import Button from '../Button/Button';
function SidebarNav() {
  return (
    <nav className="sidebar-nav">
      <div className="sidebar-nav__cont">
        <Svg width="25" height="27" id="logo" className="icon-logo" />
        <h3>Ertan</h3>
      </div>

      <Button name="Get started" className="btn" />
    </nav>
  );
}

export default SidebarNav;
