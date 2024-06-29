import React from 'react';

interface USAStateProps {
  stateName: string;
  dimensions: string;
  state: string;
  fill: string;
  onClickState: () => void;
}

const USAState: React.FC<USAStateProps> = ({ stateName, dimensions, state, fill, onClickState }) => {
  return (
    <path
      d={dimensions}
      fill={fill}
      data-name={state}
      className={`state ${state}`}
      onClick={onClickState}
      style={{
        transition: 'fill 0.3s ease',
        cursor: 'pointer',
      }}
    >
      <title>{stateName}</title>
    </path>
  );
};

export { USAState };
