import Router from "./components/router/Router";
import Route from "./components/router/Route";
import Internationalization from "./components/i18n/Internationalization";
import PrimaryLayout from "./layout/PrimaryLayout";

import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
  return (
    <Internationalization>
      <PrimaryLayout>
        <Router>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Router>
      </PrimaryLayout>
    </Internationalization>
  );
}
