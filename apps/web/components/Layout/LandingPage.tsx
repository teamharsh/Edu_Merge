import React from 'react';
import { BackgroundLinesDemo } from './Herosection';
import { InfiniteMoving } from './InfiniteMoving';
import { About } from './About';
import PricingPlans from './PricingPlans';
import { OurRich } from './OurRich';
import { WhatWeDo } from './WhatWeDo';

const LandingPage = () => {
  return (
    <div>
      <BackgroundLinesDemo />
      <About />
      <WhatWeDo />
      <InfiniteMoving />
      <PricingPlans />
      <OurRich />
    </div>
  );
};

export default LandingPage;
