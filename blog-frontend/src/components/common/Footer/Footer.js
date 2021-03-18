import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { SocialIcon } from 'react-social-icons';

const cx = classNames.bind(styles);

const Footer = () => (
  <footer className={cx('footer')}>
    <div className={cx('content')}><SocialIcon url="https://www.linkedin.com/in/harshpatel67/" />  <SocialIcon url="https://github.com/harshpatel67" />  <SocialIcon url="https://twitter.com/ErHarshPatel" /></div>

  </footer>
);

export default Footer;