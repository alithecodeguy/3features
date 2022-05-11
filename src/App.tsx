import Router from "./components/router/Router";
import Route from "./components/router/Route";

import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
}
