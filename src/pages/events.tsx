import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { BlockText } from 'components/block-text/BlockText';

export default () => (
  <>
    <Helmet title="Reservations &amp; Events" />

    <Intro>Reservations &amp; Events</Intro>
    <BlockText
      heading="About the Venue"
      description={
        <>
          <div style={{ marginBottom: 20 }}>
            Noir is the perfect venue to host a private event. The brand new and
            versatile space is designed to accommodate all types of events
            including cocktail receptions, corporate team building, wine &
            liquor tastings, milestone celebrations, birthday parties, holiday
            parties, photo shoots & so much more. A/V capabilities including
            surround-sound system and DJ equipment onsite.
          </div>
          <div style={{ marginBottom: 20 }}>
            Our Special Events team would welcome the opportunity to assist you
            with booking an event at Noir. For more information, please send us
            an email.
          </div>
          <div>
            Jennifer Bessette, Director of Events.{' '}
            <a href="mailto:jennifer@noirny.com?subject=Noir+Special+Events+Inquiry">
              jennifer@noirny.com{' '}
            </a>{' '}
          </div>
        </>
      }
    />
  </>
);
