import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import * as ROUTES from "./constants/routes";
import Overview from "./components/Overview/Overview";
import PersistentDrawer from "./components/PersistentDrawer/PersistentDrawer";
import Fuse from "fuse.js";

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
              <Overview Fuse={Fuse} />
            </PersistentDrawer>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
