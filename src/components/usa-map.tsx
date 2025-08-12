import React from 'react';

import { StatePaths } from '../data/state-paths';
import { USAStateAbbreviation } from '../types/index';

import { USAState } from './usa-state';

import '../styles.css';

/**
 * Callback function type for state click events
 * @param state - The abbreviation of the clicked state
 */
type OnStateClick = (state: USAStateAbbreviation) => void;

/**
 * Configuration for individual state appearance and behavior
 */
interface State {
  /** Fill color for the state. Default: '#d3d3d3' */
  fill?: string;
  /** Stroke (border) color for the state. Default: '#a5a5a5' */
  stroke?: string;
  /** Click handler for the state */
  onClick?: OnStateClick;
}

/**
 * Configuration for the map's dimensions and title
 */
interface MapSettings {
  /** Width of the map. Can be a number (pixels) or string (e.g., '100%'). Default: '100%' */
  width?: string | number;
  /** Height of the map. Can be a number (pixels) or string (e.g., 'fit-content'). Default: 'fit-content' */
  height?: string | number;
  /** Title attribute for the map SVG */
  title?: string;
}

/**
 * Props for the USAMap component
 */
interface Props {
  /** Default styling and behavior for all states. Applied when no custom state configuration is provided */
  defaultState?: State;
  /** Custom configurations for specific states. Keys are state abbreviations (e.g., 'CA', 'NY') */
  customStates?: {
    [key in USAStateAbbreviation]?: State;
  };
  /** Map dimensions and title settings */
  mapSettings?: MapSettings;
  /** Additional CSS class name for the map SVG */
  className?: string;
  /**
   * Array of state abbreviations to hide from the map
   * @default []
   */
  hiddenStates?: USAStateAbbreviation[];
}

/**
 * A customizable and interactive USA map component for React
 * 
 * @example
 * ```tsx
 * // Basic usage with default styling
 * <USAMap />
 * 
 * // Custom styling for all states
 * <USAMap defaultState={{ fill: '#f0f0f0', stroke: '#000' }} />
 * 
 * // Custom styling and click handler for specific states
 * <USAMap customStates={{
 *   CA: { fill: 'blue', onClick: () => console.log('California clicked!') },
 *   NY: { fill: 'red', onClick: () => console.log('New York clicked!') }
 * }} />
 * 
 * // Hide specific states from the map
 * <USAMap hiddenStates={['AK', 'HI', 'DC']} />
 * ```
 */
const USAMap: React.FC<Props> = ({
  defaultState = {
    fill: '#d3d3d3',
    stroke: '#a5a5a5', 
  },
  customStates = {},
  mapSettings = {
    width: '100%',
    height: 'fit-content',
  },
  className = '',
  hiddenStates = [],
}) => {
  const { width, height } = mapSettings;

  const onClick = (stateAbbreviation: USAStateAbbreviation) => {
    if (customStates[stateAbbreviation]?.onClick) {
      customStates[stateAbbreviation]?.onClick!(stateAbbreviation);
    } else {
      defaultState.onClick?.(stateAbbreviation);
    }
  };

  return (
    <svg
      className={`usa-map ${className}`}
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 959 593'
    >
      <g className='outlines'>
        {Object.entries(StatePaths).map(([abbreviation, path]) => {
          if (hiddenStates.includes(abbreviation as USAStateAbbreviation)) {
            return null;
          }
          return (
            <USAState
              key={abbreviation}
              dimensions={path}
              state={abbreviation}
              fill={customStates[abbreviation]?.fill ?? defaultState.fill!}
              stroke={customStates[abbreviation]?.stroke ?? defaultState.stroke!}
              onClick={() => onClick(abbreviation)}
            />
          );
        })}
        
        {!hiddenStates.includes('DC') && (
          <g className='DC state'>
            <circle
              className='dc2'
              onClick={() => onClick('DC')}
              data-name={'DC'}
              fill={customStates['DC']?.fill ?? defaultState.fill!}
              stroke={customStates['DC']?.stroke ?? defaultState.stroke!}
              strokeWidth='1.5'
              cx='801.3'
              cy='251.8'
              r='5'
              opacity='1'
            />
          </g>
        )}
      </g>
    </svg>
  );
};

export { USAMap };
