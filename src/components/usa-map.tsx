import React from 'react';

import { StatePaths } from '../data/state-paths';
import { USAStateAbbreviation } from '../types';

import { USAState } from './usa-state';

import '../styles.css';

type OnStateClick = (state: USAStateAbbreviation) => void;

interface State {
  fill?: string;
  stroke?: string;
  content?: (abbreviation: USAStateAbbreviation) => string;
  onClick?: OnStateClick;
}

interface MapSettings {
  width?: number;
  height?: number;
  title?: string;
}

interface Props {
  defaultState?: State;
  customStates?: {
    [key in USAStateAbbreviation]?: State;
  };
  mapSettings?: MapSettings;
  className?: string;
}

const USAMap: React.FC<Props> = ({
  defaultState = {
    fill: '#d3d3d3',
    stroke: '#a5a5a5',
    content: (abbreviation: USAStateAbbreviation) => abbreviation,
  },
  customStates = {},
  mapSettings = {
    width: '100%',
    height: 'fit-content',
    title: undefined,
  },
  className = '',
}) => {
  const { width, height, title } = mapSettings;

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
      style={{ cursor: 'pointer' }}
    >
      {title && <title>{title}</title>}

      <g className='outlines'>
        {Object.entries(StatePaths).map(([abbreviation, path]) => (
          <USAState
            key={abbreviation}
            dimensions={path}
            state={abbreviation}
            content={customStates[abbreviation]?.content?.(abbreviation) ?? defaultState.content?.(abbreviation)}
            fill={customStates[abbreviation]?.fill ?? defaultState.fill!}
            stroke={customStates[abbreviation]?.stroke ?? defaultState.stroke!}
            onClick={() => onClick(abbreviation)}
          /> 
        ))}
        
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
      </g>
    </svg>
  );
};

export { USAMap };
