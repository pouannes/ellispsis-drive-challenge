import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import * as ROUTES from "./constants/routes";
import Overview from "./components/Overview/Overview";
import PersistentDrawer from "./components/PersistentDrawer/PersistentDrawer";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0D2E4C",
      light: "#69b2c7",
    },
    secondary: {
      main: "#C75B1C",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path={ROUTES.OVERVIEW}>
            <PersistentDrawer>
              <Overview />
            </PersistentDrawer>
          </Route>
          <Route exact path={ROUTES.INDEX}>
            <Redirect to={ROUTES.OVERVIEW} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
