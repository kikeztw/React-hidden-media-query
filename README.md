# React hidden media query

A reacted component created to handle the visibility of components in different responsive views

## Motivation

Create this component in order to learn more about the different apis that window object offers, and because of the need for a component that is difficult to use in my projects


## Quick Start

the component accepts 3 properties
<br />
queryKey: which indicates in which direction the component will be hidden
<br />
breakPoint: which indicates turn off when the component will be hidden
<br />
range: a range in which only the component will be displayed


example without range
```
import React from 'react';
import HiddenMediaQuery from './HiddenMediaQuery';

export default () => (
  <div>
    <HiddenMediaQuery queryKey="up" breakPoint="sm">
      <div>I hide in sm and up :D </div>
    </HiddenMediaQuery>
    <div>
      i never hide
    </div>
  </div>
)
```


example with range
```
import React from 'react';
import HiddenMediaQuery from './HiddenMediaQuery';

export default () => (
  <div>
    <HiddenMediaQuery range={["sm", "md"]}>
      <div>i hide in sm - md :D</div>
    </HiddenMediaQuery>
    <div>
      i never hide
    </div>
  </div>
)
```
