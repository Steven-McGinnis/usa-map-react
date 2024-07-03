const content = `
If \`customStates\` and \`defaultState\` props are not enough for your requirements, you can easily apply custom styles to the USA Map component using the \\\`className\\\` prop and CSS. Here are some examples of how to do it.

## Styling the Map

\`\`\`css
.usa-map {
  border: 1px solid #ccc;
  border-radius: 10px;
}
\`\`\`

## Styling All States

\`\`\`css
.usa-state {
  fill: blue !important;
  stroke: yellow !important;
}
\`\`\`

## Styling Individual States

\`\`\`css
.usa-state.ny {
  fill: red !important;
  stroke: green !important;
}
\`\`\`

## Applying Custom Styles

\`\`\`tsx
import React from 'react';
import { USAMap } from '@mirawision/usa-map-react';

import './styles.css';

const App = () => (
  <div>
    <h1>Styled USA Map</h1>
    <USAMap className='custom-map' />
  </div>
);

export default App;
\`\`\`
`;

export { content };
