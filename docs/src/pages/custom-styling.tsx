import React from 'react';

import { content } from '../content/custom-styling';

import Markdown from '../components/common/markdown';

interface Props {
}

const CustomStylingPage: React.FC<Props> = ({}) => {
  return (
    <div>
      <h1>Custom Styling</h1>

      <Markdown markdownText={content} />
    </div>
  );
}

export { CustomStylingPage };