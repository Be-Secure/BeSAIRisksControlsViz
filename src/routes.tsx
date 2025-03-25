import * as React from "react";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";
import Icon from "@mui/material/Icon";
//import ModelOfInterest from "./pages/ModelOfInterest";
//import VulnerabilityOfInterest from "./pages/VulnerabilityOfInterest";
//import ProjectOfInterest from "./pages/ProjectOfInterest";
import { AddModerator } from "@mui/icons-material";

const routes = [
  {
    name: "github",
    key: "github",
    icon: <GitHubIcon fontSize="small"/>,
    href: "https://github.com/Be-Secure/BeSAIRisksControlsViz"
  },
  {
    name: "Be-Secure",
    key: "github",
    icon: <AddModerator fontSize="small" />,
    href: "https://be-secure.github.io/Be-Secure/"
  },
];

export default routes;
