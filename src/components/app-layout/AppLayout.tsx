import * as React from "react";
import Helmet from "react-helmet";

import Logo from "assets/svg/noir-logo.svg";

import Instagram from "assets/svg/instagram.svg";
import Facebook from "assets/svg/facebook.svg";
import Mail from "assets/svg/mail.svg";

import { helmet } from "utils/helmet";
import { Header } from "components/header/Header";
import { Link as HeaderLink } from "components/header/Link";
import { Footer } from "components/footer/Footer";
import { Devtools } from "components/devtools/Devtools";

interface IAppLayoutProps {
  children: React.ReactNode;
}

const isDev = process.env.NODE_ENV === "development";

export default ({ children }: IAppLayoutProps) => (
  <div>
    <Helmet {...helmet} />

    {children}

    {isDev && <Devtools />}
  </div>
);
