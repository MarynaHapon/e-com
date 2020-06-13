// Core
import React from 'react';
import { Link } from 'react-router-dom';

// Hooks
import { useDirectoryData } from '../../hook/useDirectoryData';

// Components
import { Logo } from '../../components';

// Other
import './index.styles.scss';

export const Footer = () => {
  const { directoryData } = useDirectoryData();

  const footerMenuJSX = directoryData.map(({ id, title, linkUrl }) => (
    <Link key={id} to={linkUrl} className='navLink'>{title}</Link>
  ));

  return (
    <>
      <footer className='footer'>
        <div className='footerCol'>
          <h4 className='footerTitle'>ABOUT US</h4>
          <ul className='footerList'>
            <li className='footerListItem'>Do your shopping today from confort of your home with free delivery to your door.</li>
            <li className='footerListItem'>Best Online Experience.</li>
            <li className='footerListItem'>Register To Get Updates.</li>
            <li className='footerListItem'>Payment Options Available.</li>
            <li className='footerListItem'>Payment Options Available.</li>
            <li className='footerListItem'>Track Order.</li>
          </ul>
        </div>

        <div className='footerCol'>
          <h4 className='footerTitle'>ONLINE SHOPPING</h4>
          <nav className='nav'>
            {footerMenuJSX}
          </nav>
        </div>

        <div className='footerCol'>
          <h4 className='footerTitle'>SUPPORT</h4>
          <a href='tel:18479999999' className='footerTel'>Click Here To Call Support 1-847-999-9999</a>
        </div>
      </footer>
      <div className='copyright'>
        <Logo />
        <p className='copyrightText'>© {new Date().getFullYear()} E-com All Rights Reserved</p>
      </div>
    </>
  )
};
