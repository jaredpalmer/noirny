import * as React from 'react';

import { Container } from 'components/container/Container';

import s from './Footer.scss';

interface ISocial {
  icon: React.ReactNode;
  to: string;
}

interface IFooterProps {
  logo: React.ReactNode;
  social: ISocial[];
}

export const Footer = ({ logo, social }: IFooterProps) => (
  <div className={s.footer}>
    <Container>
      <div className={s.footer__content}>
        <a href="https://ueno.co" target="_blank" rel="noopener noreferrer">
          {logo}
        </a>

        <ul className={s.footer__list}>
          {social.map(item => (
            <li key={item.to} className={s.footer__item}>
              <a href={item.to} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div aria-hidden="true" className={s.footer__bottom} />
    </Container>
  </div>
);
