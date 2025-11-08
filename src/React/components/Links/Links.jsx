import './Links.css';
import { brands } from '../../../assets/DataBase/index';
import Svg from '../Svg/Svg';

function Links() {
  return (
    <nav className="nav">
      <ul className="nav__brends">
        {brands.map((icons) => {
          return (
            <li key={icons.name}>
              <a className="nav__brends-link">
                <Svg width="21" height="21" id={icons.id} />
                <p>{icons.name}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default Links;
