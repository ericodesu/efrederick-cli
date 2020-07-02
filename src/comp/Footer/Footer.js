import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className = "footer">
      <div className = "footer__content">
          Made with love by <a className = "footer__link" href = "https://github.com/pepeyen">Erick</a>
      </div>
      <div className = "footer__content">
          <a className = "footer__language" href = "/#">pt_br</a>/<a className = "footer__language" href = "/#">en_us</a>
      </div>
    </div>
  );
}
export default Footer;