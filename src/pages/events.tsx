import * as React from "react";
import Helmet from "react-helmet";
import "../styles/forms.css";
import { Intro } from "components/intro/Intro";
import { BlockText } from "components/block-text/BlockText";

export default () => {
  React.useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://api.tripleseat.com/v1/leads/ts_script.js?lead_form_id=11667&public_key=4e10a99084e60dcb01b43af48340690e90cbfb2a&inline_form=true";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Helmet title="Reservations &amp; Events" />
      <div style={{ margin: "0 auto", padding: "1rem", maxWidth: 400 }}>
        <img
          id="logo"
          src="/images/logo-clear.png"
          alt="noir-logo"
          style={{
            height: 50,
            width: "auto",
            margin: "2rem auto",
            display: "block"
          }}
        />
        <a id="tripleseat_link" href="https://www.tripleseat.com"></a>
      </div>
    </>
  );
};
