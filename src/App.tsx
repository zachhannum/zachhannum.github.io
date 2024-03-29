import { useRef } from "react";
import Color from "color";
import styled, { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import { theme } from "./theme";
import {
  Header,
  Hero,
  CareerSection,
  AboutSection,
  ProjectSection,
} from "./organisms";

const StyledApp = styled.div`
  background-color: ${(p) => p.theme.bg};
  background: linear-gradient(
    174deg,
    ${(p) => Color(p.theme.bg).lighten(0.8).hsl().toString()} 0%,
    ${(p) => p.theme.bg} 100%
  );
  color: ${(p) => p.theme.fg};
  font-family: "Poppins", sans-serif;

  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  justify-content: center;
`;

function App() {
  const aboutRef = useRef(null);
  const careerRef = useRef(null);
  const projectRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=block"
          rel="stylesheet"
        />
      </Helmet>
      <StyledApp>
        <Header
          navList={[
            { name: "About", navRef: aboutRef },
            { name: "Career", navRef: careerRef },
            { name: "Projects", navRef: projectRef },
          ]}
        />
        <Hero />
        <AboutSection innerRef={aboutRef} />
        <CareerSection innerRef={careerRef} />
        <ProjectSection innerRef={projectRef} />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
