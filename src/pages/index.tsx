import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';

import { UenoButton } from 'components/button/UenoButton';

export default () => (
  <>
    <Helmet title="Home" />

    <Intro>
      Vibrantly gold in the midst of the chrome facades of West 16th Street, an
      ageless destination beckons: <Highlight>Noir, New York</Highlight>.
      <div style={{ marginTop: 20 }}>
        <UenoButton
          white={true}
          aria-label="Follow Noir on Instagram"
          href="https://www.instagram.com/noirnewyorkcity"
        >
          Follow @noirnewyorkcity
        </UenoButton>
      </div>
    </Intro>

    <BlockText
      heading="Opening Fall 2019"
      description={
        <>
          <div style={{ marginBottom: 20 }}>
            High ceilings open to the impressive ambience which includes
            revolving chandeliers, floating lamps on mirrors, and the design
            sophistication of art deco. The essence of Noir is not always
            apparent at first glance; nuanced layers of detail are subtly
            revealed with each visit through our golden doors.
          </div>{' '}
          <div style={{ marginBottom: 20 }}>
            Becoming somebody at Noir is the mission we aim to deliver. Classic
            cocktails such as a Gin Fizz or a True Manhattan, made with Carpano
            Antica, solidifies a connection to a time of nostalgia that we all
            yearn for. Noir serves a unique niche; combining classic simplicity
            with the avant-guard of New York.
          </div>{' '}
          <div style={{ marginBottom: 100 }}>
            Noir is located at <Highlight>357</Highlight>{' '}
            <Highlight>West</Highlight> <Highlight>16th</Highlight>{' '}
            <Highlight>Street</Highlight> (between 8th and 9th Avenues) in New
            York, New York.
          </div>
        </>
      }
    />
  </>
);
