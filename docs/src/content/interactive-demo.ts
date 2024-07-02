const content = `
In this section, you can interact with a live example of the USA Map React Library. Try customizing states, handling clicks, and applying different styles.

## Examples of Customizing States

\`\`\`tsx
import React from 'react';
import { USAMap } from 'usa-map-react';

const customStates = {
  CA: {
    fill: 'blue',
    stroke: 'yellow',
    onClick: () => alert('You clicked California!'),
  },
};

const App = () => (
  <div>
    <h1>Custom USA Map</h1>
    <USAMap customStates={customStates} />
  </div>
);

export default App;
\`\`\`
`;

export { content };
