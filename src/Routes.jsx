import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Navbar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import Page1 from "./Components/Page1/Page1";
import Page2 from "./Components/Page2/Page2";
import Page3 from "./Components/Page3/Page3";
import Page4 from "./Components/Page4/Page4";
import Page5 from "./Components/Page5/Page5";

export default function Routes() {
  const routes = [
    {
      path: "/page1",
      component: Page1,
    },
    {
      path: "/page2",
      component: Page2,
    },
    {
      path: "/page3",
      component: Page3,
      routes: [
        {
          path: "/page3/page4",
          component: Page4,
        },
        {
          path: "/page3/page5",
          component: Page5,
        },
      ],
    },
    {
      path: "/",
      component: HomePage,
    },
  ];

  return (
    <Router>
      <Navbar />
      <Switch>
        {routes.map((route, i) => {
          return <RoutWithSubRoutes key={i} {...route} />;
        })}
      </Switch>
    </Router>
  );
}

export const RoutWithSubRoutes = (route) => {
  return (
    <React.Fragment>
      <Route
        path={route.path}
        render={(props) => <route.component {...props} routes={route.routes} />}
      />
    </React.Fragment>
  );
};
