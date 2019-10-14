import React from 'react';
import HiddenMediaQuery from './HiddenMediaQuery';



export default () => (
  <div>
    <HiddenMediaQuery range={["sm", "md"]}>
      <div>me escondo :D </div>
    </HiddenMediaQuery>
    <div>
      no me escondo
    </div>
  </div>
  
)


