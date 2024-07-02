import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Routes } from './routes';

import { Logo } from './components/common/logo';
import { MenuList } from './components/menu/menu-list';
import { Button } from 'primereact/button';
import DocumentTitle from './components/common/dynamic-title';
import { IntroductionPage } from './pages/introduction';
import { APIReferencePage } from './pages/api-reference';
import { InteractiveDemoPage } from './pages/interactive-demo';
import { CustomStylingPage } from './pages/custom-styling';
import { AdditionalDataPage } from './pages/additional-data';

const App: React.FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth > 768 && isSidebarVisible) {
      setIsSidebarVisible(false);
    }
  }, [windowWidth, isSidebarVisible]);

  const toggleSidebar = () => {
    setIsSidebarVisible(prev => !prev);
  };

  const isMobile = windowWidth <= 768;

  return (
    <Router>
      <DocumentTitle />
      <Container>
        {isMobile && (
            <HamburgerIcon onClick={toggleSidebar}>
              <Button
                icon="pi pi-bars"
                className="p-button-rounded p-button-text"
                aria-label="Menu"
              />
            </HamburgerIcon>
          )}
        {isMobile && isSidebarVisible && <Overlay onClick={toggleSidebar} />}
        <Sidebar isVisible={isMobile && isSidebarVisible}>
          <Logo />
          <MenuList />
        </Sidebar>
        <Content>
          <GitHubLogo href='https://github.com/MiraWision/usa-map-react' target='_blank'>
            {/* @ts-ignore */}
            <img src='./assets/icons/github.svg' alt='github' />
          </GitHubLogo>
          <NPMLogo href='https://www.npmjs.com/package/@mirawision/usa-map-react' target='_blank'>
            {/* @ts-ignore */}
            <img src='./assets/icons/npm.png' alt='npm' />
          </NPMLogo>
          <StyledSwitch>
            <Redirect exact from='/' to={Routes.Introduction} />
            <Redirect exact from='/usa-map-react' to={Routes.Introduction} />
            <Redirect exact from='/usa-map-react/' to={Routes.Introduction} />

            <Route path={Routes.Introduction} component={IntroductionPage} />
            <Route path={Routes.APIReference} component={APIReferencePage} />
            <Route path={Routes.InteractiveDemo} component={InteractiveDemoPage} />
            <Route path={Routes.CustomStyling} component={CustomStylingPage} />
            <Route path={Routes.AdditionalData} component={AdditionalDataPage} />
          </StyledSwitch>
        </Content>
      </Container>
    </Router>
  )
};

const Container = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 270px calc(100vw - 270px);
  grid-template-rows: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledSwitch = styled(Switch)`
  @media (max-width: 768px) { 
    width: 100vw;
    padding: 30px 10px 10px 10px;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  position: fixed;
  top: 5px;
  left: 5px;
  z-index: 10;

  @media (max-width: 768px) {
    display: block; 
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 500; 
  overflow: hidden;
`;

const Sidebar = styled.div<{ isVisible: boolean }>`
  padding: 24px; 
  position: relative;
  min-height: 100vh;
  max-height: 100vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    max-height: 100vh;
    background-color: white;
    z-index: 1000;
    transform: ${(props) => (props.isVisible ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;
  }
`;

const Content = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  overflow: scroll;
  position: relative;
  padding: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 750px;
  margin: auto;

  @media (max-width: 768px) { 
    width: 100vw;
  }
`;

const BaseLogo = styled.a`
  position: fixed;
  top: 16px;
  width: 24px;
  height: 24px;
  transition: transform 0.5s;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.35);
  }
`;

const GitHubLogo = styled(BaseLogo)`
  right: 16px;
`;

const NPMLogo = styled(BaseLogo)`
  right: 56px;
`;

export default App;
