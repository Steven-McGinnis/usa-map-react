import React from 'react';

import { content } from '../content/api-reference';

import Markdown from '../components/common/markdown';

interface Props {
}

const APIReferencePage: React.FC<Props> = ({}) => {
  return (
    <div>
      <h1>API Reference</h1>

      <Markdown markdownText={content} />
    </div>
  );
}

export { APIReferencePage };