//component
import Router from "./components/router/Router";
import Route from "./components/router/Route";
import Internationalization from "./components/internationalization/Internationalization";
import About from "./pages/About";
import Home from "./pages/Home";
import Theme from "./components/theme/Theme";

//layout
import PrimaryLayout from "./layout/PrimaryLayout";

export default function App() {
  return (
    <Internationalization>
      <Theme>
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
      </Theme>
    </Internationalization>
  );
}
