import React from 'react';
import styled, { css } from 'styled-components';
import { useLocation, Link } from 'react-router-dom';

import { Routes } from '../../routes';

interface Props {
}

const MenuItems = [
  {
    name: 'Introduction',
    url: Routes.Introduction,
  },
  {
    name: 'API Reference',
    url: Routes.APIReference,
  },
  {
    name: 'Interactive Demo',
    url: Routes.InteractiveDemo,
  },
  {
    name: 'Custom Styling',
    url: Routes.CustomStyling,
  },
  {
    name: 'Additional Data',
    url: Routes.AdditionalData,
  },
];

const MenuList: React.FC<Props> = ({}) => {
  const location = useLocation();

  return (
    <Container>
      {MenuItems.map((item) => (
        <React.Fragment key={item.url}>
          <MenuItem 
            to={item.url}
            isActive={item.url === location?.pathname}
          >
            {item.name}
          </MenuItem>
        </React.Fragment>
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 24px;
`;

const MenuItem = styled(Link)<{ isActive: boolean, isInactive?: boolean, isSubitem?: boolean }>`
  border-left: 1px solid var(--surface-border);
  font-weight: 400;
  display: flex;
  padding: 8px;
  color: var(--surface-700);
  transition: all .2s;
  text-decoration: none;
  font-family: "Rajdhani", sans-serif;

  &:hover {
    color: var(--surface-900);
    border-left-color: var(--surface-500);
  }

  ${({ isActive }) => isActive && css`
    color: var(--primary-color);
    border-left-color: var(--primary-color);

    &:hover {
      color: var(--primary-color);
      border-left-color: var(--primary-color);
    }
  `}

  ${({ isSubitem }) => isSubitem && css`
    padding-left: 24px;
  `}

  ${({ isInactive }) => isInactive && css`
    cursor: default;

    &:hover {
      border-left-color: var(--surface-border);
    }
  `}

  div {
    margin-left: 4px;
  }
`;

const MenuGroup = styled.div`
  padding: 12px 16px 4px;
  font-weight: 600;
  font-size: 12px;
  font-family: "Rajdhani", sans-serif;
  text-transform: uppercase;
`;

export { MenuList };