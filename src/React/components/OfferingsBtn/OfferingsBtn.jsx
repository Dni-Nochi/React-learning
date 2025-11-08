import './OfferingsBtn.css';
import { offerings } from '../../../assets/DataBase';
import Svg from '../Svg/Svg';

function OfferingsBtn({ className }) {
  return offerings.map((offering) => {
    return (
      <button key={offering.name} className={className}>
        <Svg width="30" height="30" id={offering.icon} />
        {offering.name}
      </button>
    );
  });
}

export default OfferingsBtn;
