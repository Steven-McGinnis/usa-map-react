import React, { useMemo, useState } from 'react';
import { styled } from 'styled-components';
import { USAMap, StateAbbreviations, USAStateAbbreviation } from '@mirawision/usa-map-react';

import { content1, content2, content3 } from '../content/interactive-demo';

import Markdown from '../components/common/markdown';

interface Props {
}

const Examples = [
  {
    title: 'Visualize Data',
    description: 'Visualize data on map by customizing the fill color of states.',
    render: () => <ExampleVisualizeData />,
    content: content1,
  },
  {
    title: 'Select States',
    description: 'Select or unselect states by clicking on them.',
    render: () => <ExampleSelectStates />,
    content: content2,
  },
  {
    title: 'Custom Styling',
    description: 'Customize the styling of the map and states the way you need it.',
    render: () => <ExampleCustomStyling />,
    content: content3,
  },
];

const InteractiveDemoPage: React.FC<Props> = ({}) => {
  const [selectedExample, setSelectedExample] = useState(Examples[0]);

  return (
    <div>
      <h1>Interactive Demo</h1>

      <ExampleSelector>
        {Examples.map((example, index) => (
          <ExampleButton
            key={index}
            onClick={() => setSelectedExample(example)}
            selected={selectedExample === example}
          >
            {example.title}
          </ExampleButton>
        ))}
      </ExampleSelector>

      <Description>{selectedExample.description}</Description>

      {selectedExample.render()}

      <Markdown markdownText={selectedExample.content} />
    </div>
  );
};

const ExampleSelector = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`;

const ExampleButton = styled.button<{ selected: boolean }>`
  background-color: transparent;
  color: var(--primary-color);
  border: ${({ selected }) => selected ? '1px solid var(--primary-color)' : '1px solid transparent'};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0.25rem 0.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 1rem 0;
`;

type MapSettings = Record<string, { 
  fill?: string,
  stroke?: string,
  onClick?: (state: USAStateAbbreviation) => void,
}>;

const ExampleVisualizeData: React.FC = ({}) => {
  const Colors = ['#3b4cc0', '#6c79d0', '#9da6e0', '#ced2ef', '#ffffff', '#ecc0c9', '#da8293', '#c7435c', '#b40426'];
  
  const [refreshIndex, setRefreshIndex] = useState(0);

  const mapSettings = useMemo<MapSettings>(() => {
    const settings: MapSettings = {};

    StateAbbreviations.forEach((state) => {
      settings[state] = {
        fill: Colors[Math.floor(Math.random() * Colors.length)],
      };
    });

    return settings;
  }, [refreshIndex]);
  
  return (
    <div>
      <USAMap
        customStates={mapSettings}
      />

      <ExampleButton selected={false} onClick={() => setRefreshIndex(refreshIndex + 1)}>Refresh</ExampleButton>
    </div>
  );
};

const ExampleSelectStates: React.FC = ({}) => {
  const [selectedStates, setSelectedStates] = useState<string[]>([]);

  const mapSettings = useMemo<MapSettings>(() => {
    const settings: MapSettings = {};

    StateAbbreviations.forEach((state) => {
      settings[state] = {
        fill: selectedStates.includes(state) ? '#c6dbee' : undefined,
        stroke: selectedStates.includes(state) ? '#6f8fa5' : undefined,
        onClick: () => setSelectedStates(selectedStates.includes(state) ? selectedStates.filter(s => s !== state) : [...selectedStates, state]),
      };
    });

    return settings;
  }, [selectedStates]);
  
  return (
    <div>
      <USAMap
        customStates={mapSettings}
      />
    </div>
  );
}

const ExampleCustomStyling: React.FC = ({}) => {
  return (
    <div>
      <USAMapStyled />
    </div>
  );
}

const USAMapStyled = styled(USAMap)`
  .usa-map {
    border: 0.0625rem solid var(--surface-border);
    border-radius: 0.5rem;
  }

  .usa-state {
    fill: #e9e9e9;
  }

  .usa-state:hover {
    fill: #c6dbee;
    stroke-width: 3px;
  }

  .usa-state:active {
    fill: #6f8fa5;
    stroke-width: 3px;
  }

  .usa-state.il {
    fill: pink;
  }
`;

export { InteractiveDemoPage };