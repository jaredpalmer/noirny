import * as React from "react";
import Helmet from "react-helmet";
import "../styles/styles.css";
import { Intro } from "components/intro/Intro";
import { Highlight } from "components/intro/Highlight";
import { BlockText } from "components/block-text/BlockText";

import { UenoButton } from "components/button/UenoButton";

export default () => (
  <>
    <Helmet titleTemplate="">
      <title>Noir New York</title>
    </Helmet>
    <div className="container">
      <div className="section side-section">
        <img className="face" src="/images/face.jpg" alt="noir-face" />
      </div>
      <div className="section center-section">
        <img id="logo" src="/images/logo-clear.png" alt="noir-logo" />
        <div id="flavor-text">
          Vibrantly gold in the midst of the chrome facades of West 16th Street,
          an ageless destination beckons:
          <div id="new-york">
            <div className="capital">N</div>OIR,{" "}
            <div className="capital">N</div>EW{" "}
            <div className="capital less-space">Y</div>ORK
            <div id="new-york-strip"></div>
          </div>
        </div>
        <div id="fall-2019">Opening 12.12.19</div>
        <div style={{ marginBottom: 60 }}>
          <UenoButton
            white={true}
            aria-label="Make a Reservation"
            href="https://noirny.tripleseat.com/party_request/11667"
            style={{ letterSpacing: ".1em" }}
          >
            Make a Reservation
          </UenoButton>
        </div>
        <div id="icons">
          <a href="https://www.instagram.com/noirnewyorkcity/">
            <img
              id="instagram"
              src="/images/instagram-icon.png"
              alt="instagram-icon"
            />
          </a>
          <a href="mailto:info@noirny.com">
            <img id="mail" src="/images/mail-icon.png" alt="mail-icon" />
          </a>
        </div>
        <img id="center-face" src="/images/face.jpg" alt="noir-face" />
      </div>
      <div className="section side-section">
        <img className="face" src="/images/face.jpg" alt="noir-face" />
      </div>
    </div>
  </>
);
