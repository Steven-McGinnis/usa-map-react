const content1 = `
Specify custom colors for each state in the map by providing a custom object to the \`customStates\` prop. The object should have the state abbreviation as the key and the object with fill and/or stroke color as the value.

\`\`\`tsx
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

      <ExampleButton selected onClick={() => setRefreshIndex(refreshIndex + 1)}>Refresh</ExampleButton>
    </div>
  );
};
\`\`\`
`;

const content2 = `
You can also add interactivity to the map by providing an \`onClick\` function to each state. This function will be called when the state is clicked.

\`\`\`tsx
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
\`\`\`
`;

const content3 = `
You can also style the map using CSS. The map is rendered as an SVG element with the class name \`usa-map\`.

\`\`\`tsx
const ExampleCustomStyling: React.FC = ({}) => {
  return (
    <div>
      <USAMapStyled />
    </div>
  );
}

const USAMapStyled = styled(USAMap)\`
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
\`;
\`\`\`
`;

export { content1, content2, content3 };
