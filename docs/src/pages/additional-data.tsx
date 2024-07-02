import React from 'react';

import { content } from '../content/additional-data';

import Markdown from '../components/common/markdown';

interface Props {
}

const AdditionalDataPage: React.FC<Props> = ({}) => {
  return (
    <div>
      <h1>Additional Data</h1>

      <Markdown markdownText={content} />
    </div>
  );
}

export { AdditionalDataPage };