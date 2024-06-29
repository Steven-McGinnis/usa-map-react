import React from 'react';

interface USAStateProps {
  dimensions: string;
  state: string;
  fill: string;
  stroke: string;
  content?: string;
  onClick: () => void;
}

const USAState: React.FC<USAStateProps> = ({ 
  dimensions, 
  state, 
  fill,
  stroke,
  content, 
  onClick,
}) => {
  return (
    <path
      d={dimensions}
      fill={fill}
      stroke={stroke}
      data-name={state}
      className={`state ${state}`}
      onClick={onClick}
    >
      {content && <title>{content}</title>}
    </path>
  );
};

export { USAState };
