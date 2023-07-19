import React from "react";
import {getFullYear, getFooterCopy} from '../utils/utils';

function Footer() {
  return (
    <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
  );
}

export default Footer;