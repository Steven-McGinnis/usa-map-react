# @mirawision/usa-map-react

This library provides a customizable SVG map of the United States, built using React. The map allows for individual state customization, including fill colors, stroke colors, and click handlers.

[Demo and advanced Documentation can be found here!](https://mirawision.github.io/usa-map-react)

## Installation

```bash
npm install @mirawision/usa-map-react
```

or 

```bash
yarn add @mirawision/usa-map-react
```

## Usage

```tsx
import React from 'react';
import { USAMap } from 'react-usa-map';
import { USAStateAbbreviation } from 'react-usa-map/types';

const handleStateClick = (stateAbbreviation: USAStateAbbreviation) => {
  console.log(`You clicked on ${stateAbbreviation}`);
};

const customStates = {
  CA: {
    fill: 'red',
    onClick: handleStateClick,
  },
  TX: {
    fill: 'blue',
    stroke: 'green',
    onClick: handleStateClick,
  },
};

const App = () => (
  <div>
    <h1>US Map</h1>
    <USAMap customStates={customStates} />
  </div>
);

export default App;
```

## Props

### `defaultState`
An optional prop to set the default style and behavior for all states. It can have the following properties:
- `fill` (string): The default fill color for states.
- `stroke` (string): The default stroke color for states.
- `content` (function): A function that returns the content for each state.

### `customStates`
An optional prop to customize individual states. It is an object where the key is the state abbreviation and the value is an object with the same properties as `defaultState`.

### `mapSettings`
An optional prop to set the overall map settings. It can have the following properties:
- `width` (number | string): The width of the SVG element.
- `height` (number | string): The height of the SVG element.
- `title` (string): The title of the SVG element.

## Usage

```tsx
const customStates = {
  NY: {
    fill: 'yellow',
    stroke: 'black',
    onClick: (stateAbbreviation) => alert(`Clicked on ${stateAbbreviation}`),
  },
  FL: {
    fill: 'orange',
    onClick: (stateAbbreviation) => alert(`Clicked on ${stateAbbreviation}`),
  },
};

const App = () => (
  <div>
    <h1>US Map</h1>
    <USAMap
      customStates={customStates}
      mapSettings={{ width: '500px', height: '400px', title: 'Custom USA Map' }}
    />
  </div>
);

export default App;
```

## Contributing

Contributions are always welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.

## Credits

This library is based on the SVG paths for states provided by the [react-usa-map](https://www.npmjs.com/package/react-usa-map) package.
