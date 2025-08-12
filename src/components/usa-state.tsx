import React from 'react';

/**
 * Props for the USAState component
 */
interface USAStateProps {
  /** SVG path data defining the shape of the state */
  dimensions: string;
  /** State abbreviation (e.g., 'CA', 'NY') */
  state: string;
  /** Fill color for the state */
  fill: string;
  /** Stroke (border) color for the state */
  stroke: string;
  /** Click handler for the state */
  onClick: () => void;
}

/**
 * Individual state component used internally by USAMap
 * Renders a single state as an SVG path with the specified styling and behavior
 * 
 * @internal
 */
const USAState: React.FC<USAStateProps> = ({ 
  dimensions, 
  state, 
  fill,
  stroke,
  onClick,
}) => {
  return (
    <path
      d={dimensions}
      fill={fill}
      stroke={stroke}
      data-name={state}
      className={`usa-state ${state.toLowerCase()}`}
      onClick={onClick}
    />
  );
};

export { USAState };
