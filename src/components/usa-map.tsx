import React from 'react';

import { statesForms } from '../data/states-forms';
import { USAStates, states } from '../data/states-info';

import { USAState } from './usa-state';

interface StateCustomization {
  [key in USAStates]?: {
    fill?: string;
    clickHandler?: (stateAbbreviation: USAStates) => void;
  };
}

interface MapSettings {
  width?: number;
  height?: number;
  title?: string;
}

interface USAMapProps {
  onStateClick: (stateAbbreviation: State) => void;
  defaultStateFill?: string;
  stateCustomization?: StateCustomization;
  mapSettings?: MapSettings;
}

const USAMap: React.FC<USAMapProps> = ({
  onStateClick,
  defaultStateFill = '#D3D3D3',
  stateCustomization = {},
  mapSettings = {
    width: 959,
    height: 593,
    title: 'Blank US states map',
  },
}) => {
  const { width, height, title } = mapSettings;

  const clickHandler = (stateAbbreviation: State) => {
    if (stateCustomization[stateAbbreviation]?.clickHandler) {
      stateCustomization[stateAbbreviation].clickHandler!(stateAbbreviation);
    } else {
      onStateClick(stateAbbreviation);
    }
  };

  const fillStateColor = (state: State) => {
    return stateCustomization[state]?.fill || defaultStateFill;
  };

  const buildPaths = () => {
    return StateArray.map((state) => {
      const stateData = data[state];
      return (
        <USAState
          key={state}
          stateName={stateData.name}
          dimensions={stateData.dimensions}
          state={state}
          fill={fillStateColor(state)}
          onClickState={() => clickHandler(state)}
        />
      );
    });
  };

  return (
    <svg
      className='us-state-map'
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 959 593'
      style={{ cursor: 'pointer' }}
    >
      <title>{title}</title>
      <g className='outlines'>
        {buildPaths()}
        <g className='DC state'>
          <path
            className='DC1'
            fill={fillStateColor('DC1')}
            d='M801.8,253.8 l-1.1-1.6 -1-0.8 1.1-1.6 2.2,1.5z'
          />
          <circle
            className='DC2'
            onClick={() => clickHandler('DC')}
            data-name={'DC'}
            fill={fillStateColor('DC2')}
            stroke='#FFFFFF'
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
