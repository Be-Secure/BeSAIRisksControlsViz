import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./assets/theme";
import routes from "./routes";
import { renderRoutes } from "./routeUtils";
import LandingPages from "./pages/LandingPages";
#import BesVersionHistory from "./pages/BesVersionHistory";
#import BesAssessmentReport from "./pages/BesAssessmentReport";
#import ShowVulnerabilityDetails from "./pages/ShowVulnerabilityDetails";
#import ShowModelDetails from "./pages/ShowModelDetails";
#import ModelVulnerabilitiesDetailed from "./pages/ModelVulnerabilitiesDetailed";
#import FuzzingModel from "./pages/FuzzingModel";
#import InsecureCodeDetection from "./pages/InsecureCodeDetection";
#import LlmBenchmarReport from "./pages/LlmBenchmarkReport";
#import ModelIntegritySuite from "./pages/ModelIntegritySuite";

const App = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [pathname]);

  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <Routes>
        { renderRoutes(routes) } { /* Utilized renderRoutes from utils */ }
        <Route path="*" element={ <Navigate to="/BeSAIRisksControlsViz" /> } />
        <Route path="/BeSAIRisksControlsViz" element={ <LandingPages /> } />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
