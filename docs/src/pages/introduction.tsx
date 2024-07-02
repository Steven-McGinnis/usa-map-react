import React from 'react';

import { content } from '../content/introduction';

import Markdown from '../components/common/markdown';

interface Props {
}

const IntroductionPage: React.FC<Props> = ({}) => {
  return (
    <div>
      <h1>USA Map React</h1>

      <Markdown markdownText={content} />
    </div>
  );
}

export { IntroductionPage };