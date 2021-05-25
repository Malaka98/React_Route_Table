import React from "react";
import { Container } from "react-bootstrap";

import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Page1() {
  let query = useQuery();

  return (
    <div>
      <Container style={{ margin: "auto" }}>
        <h1>Page 1</h1>
        <br />
        <h4>Param: - {query.get("name")}</h4>
      </Container>
    </div>
  );
}
