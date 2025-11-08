import './Sidebar.css';
import SidebarNav from '../SidebarNav/SidebarNav';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import SidebarMain from '../SidebarMain/Sidebarmain';
import SidebarFooter from '../SidebarFooter/SidebarFooter';
import Exemple from '../Exemple/Exemple';

function Sidebar() {
  return (
    <aside className="sidebar">
      <SidebarNav />
      <SidebarHeader />
      <SidebarMain />
      <SidebarFooter />
    </aside>
  );
}

export default Sidebar;
