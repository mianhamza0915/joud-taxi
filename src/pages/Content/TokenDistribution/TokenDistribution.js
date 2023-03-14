import React from "react";
import { Col, Row } from "antd";

const TokenDistribution = () => {
  return (
    <section className="TokenDistribution section">
      <div className="container">
        <Row gutter={0} style={{ alignItems: "center" }}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <img
              src="images/about.jpg"
              style={{ width: "100%", height: "auto" }}
              alt="TokenDistribution"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div style={{ backgroundColor: "#fa7d9a33", padding: "30px" }}>
              <h3>Token Distribution</h3>
              <ul
                style={{
                  listStyleImage: "url(images/list-icon.png)",
                  paddingLeft: "20px",
                }}
              >
                <li style={{ marginBottom: "10px" }}>
                  40% of the tokens will be sold during the initial token
                  offering to fund the development and launch of the Joud Taxi
                  application.
                </li>
                <li style={{ marginBottom: "10px" }}>
                  30% of the tokens will be reserved for future development and
                  marketing efforts to promote the growth and adoption of the
                  Joud Taxi application.
                </li>
                <li style={{ marginBottom: "10px" }}>
                  20% of the tokens will be allocated to the founding team and
                  advisors as a long-term incentive to ensure their commitment
                  to the project.
                </li>
                <li style={{ marginBottom: "10px" }}>
                  10% of the tokens will be reserved for a community development
                  fund, which will be used to support the growth of the Joud
                  Taxi community and ecosystem.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default TokenDistribution;
