import * as React from 'react';
import Helmet from 'react-helmet';

import Logo from 'assets/svg/noir-logo.svg';

import Instagram from 'assets/svg/instagram.svg';
import Facebook from 'assets/svg/facebook.svg';
import Mail from 'assets/svg/mail.svg';

import { helmet } from 'utils/helmet';
import { Header } from 'components/header/Header';
import { Link as HeaderLink } from 'components/header/Link';
import { Footer } from 'components/footer/Footer';
import { Devtools } from 'components/devtools/Devtools';

import s from './AppLayout.scss';

interface IAppLayoutProps {
  children: React.ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

export default ({ children }: IAppLayoutProps) => (
  <div className={s.layout}>
    <Helmet {...helmet} />

    <Header>
      {/* <HeaderLink name="Reservations &amp; Events" to="/events" /> */}

      <HeaderLink
        name=""
        to="https://instagram.com/noirnewyorkcity"
        icon={<Instagram />}
      />
    </Header>

    {children}

    <Footer
      logo={<Logo />}
      social={[
        // { icon: <Dribbble />, to: 'https://dribbble.com/ueno' },
        // { icon: <Twitter />, to: 'https://twitter.com/uenodotco' },
        // { icon: <Github />, to: 'https://github.com/ueno-llc' },
        {
          icon: <Instagram />,
          to: 'https://www.instagram.com/noirnewyorkcity',
        },
        // { icon: <Facebook />, to: 'https://www.facebook.com/uenodotco' },
        {
          icon: <Mail />,
          to: 'mailto:jennifer@noirny.com',
        },
        // { icon: <Linkedin />, to: 'https://www.linkedin.com/company/ueno' },
      ]}
    />

    {isDev && <Devtools />}
  </div>
);
