import Header_Img from '../../../img/Header_img.jpg';
import Links from '../Links/Links';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src={Header_Img} alt="product benefits" />

      <h3>
        We escalate transfer efficiency
        <br /> and productivity
      </h3>
      <Links />
    </header>
  );
}

export default Header;
