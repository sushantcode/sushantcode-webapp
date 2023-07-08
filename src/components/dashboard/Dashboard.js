import React from "react";
import { Container } from "react-bootstrap";
import IFrame from "../../utils/IFrame";
import { Card } from "react-bootstrap";
import { Portfolio } from "@sushantcode/portfolio-sushant/src/components";

const Dashboard = () => {
  return (
    <Container className="mt-4">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <IFrame>
            <Portfolio />
          </IFrame>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dashboard;
