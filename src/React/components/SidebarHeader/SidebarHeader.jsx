import './SidebarHeader.css';

function SidebarHeader() {
  return (
    <header className="sidebar-header">
      <h1>
        Money Transfers Made{' '}
        <span className="sidebar-header__simple">Simple</span>
      </h1>
      <p>No personal credit checks or founder guarantee.</p>
    </header>
  );
}

export default SidebarHeader;
