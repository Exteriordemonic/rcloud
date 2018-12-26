import React from 'react';

import { HeroWrapper, HeroContent, HeroTracklist } from './styled';
import { List } from '../List';

const diskExample = [{ id: 'disc1', title: 'Record I' }, { id: 'disc2', title: 'Record II' }];
const sideExample = [{ id: 'sideA', title: 'side A' }, { id: 'sideB', title: 'side B' }];
const Hero = () => (
  <HeroWrapper>
    <HeroContent>
      <h1 className="title title--h1">
        Mantovani
        <span className="title title--h2">Master of melody</span>
      </h1>
      <HeroTracklist>
        <h3 className="title title--h4">TRACKLIST</h3>
        <List elements={diskExample} />
        <List elements={sideExample} />
      </HeroTracklist>
    </HeroContent>
  </HeroWrapper>
);

export { Hero };
