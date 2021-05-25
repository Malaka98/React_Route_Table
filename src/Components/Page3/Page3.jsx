import React from "react";
import { Switch, Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import { RoutWithSubRoutes } from "../../Routes"

export default function Page3({ routes }) {
  return (
    <div>
      <Container style={{ margin: "auto" }}>
        <h1>Page 3</h1>
        <Link to="/page3/page4" className="btn btn-primary">Sub route 1</Link>{" "}
        <Link to="/page3/page5" className="btn btn-primary">Sub route 2</Link>
      </Container>
      <Switch>
        {routes.map((route, i) => {
          return <RoutWithSubRoutes key={i} {...route} />;
        })}
      </Switch>
    </div>
  );
}
