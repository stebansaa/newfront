import React from 'react';

import Fimg from "../../images/image 5.png";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footerImg">
        <img src={Fimg} alt="" />
        <p className='text-gray-500 font-normal'>
          Built with the support of the EOS community, the EOS Network Foundation and the Telos Foundation.
        </p>
      </div>
    </div>
    
    );
};

export default Footer;
