const content = `
## USAMap Component

### Props

- \`defaultState\`: Customization for the default state appearance.
  - \`fill\` (string): Fill color for states.
  - \`stroke\` (string): Stroke color for states.
  - \`content\` (function): Content for tooltips, receives state abbreviation as argument.
  - \`onClick\` (function): Click handler for states, receives state abbreviation as argument.

- \`customStates\`: Customization for individual states.
  - Object with state abbreviations as keys and customization objects as values.
  
- \`mapSettings\`: Settings for the map dimensions and title.
  - \`width\` (string | number): Width of the map.
  - \`height\` (string | number): Height of the map.
  - \`title\` (string): Title of the map.
  
- \`className\` (string): Additional class names for styling.
`;

export { content };
