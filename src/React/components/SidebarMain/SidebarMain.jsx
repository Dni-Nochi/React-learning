import Button from '../Button/Button';
import OfferingsBtn from '../OfferingsBtn/OfferingsBtn';
import './SidebarMain.css';

function SidebarMain() {
  return (
    <div className="sidebar-main">
      <p>Our offerings</p>
      <section className="sidebar-main__offerings">
        <OfferingsBtn className="sidebar-btn" />
      </section>
    </div>
  );
}

export default SidebarMain;
