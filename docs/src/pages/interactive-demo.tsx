import React from 'react';

import { content } from '../content/interactive-demo';

import Markdown from '../components/common/markdown';

interface Props {
}

const InteractiveDemoPage: React.FC<Props> = ({}) => {
  return (
    <div>
      <h1>Interactive Demo</h1>

      

      <Markdown markdownText={content} />
    </div>
  );
}

export { InteractiveDemoPage };