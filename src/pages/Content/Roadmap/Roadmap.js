import React from "react";
import { Col, Row } from "antd";

const Roadmap = () => {
  return (
    <section className="Roadmap section" id="Roadmap">
      <center
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          width: "100%",
          marginBottom: "5%",
        }}
      >
        <h2>Roadmap</h2>
        <p>
          Launch an IEO (Initial Exchange Offering) for the Joud Token on a
          reputable cryptocurrency exchange
        </p>
      </center>
      <img
        src="images/roadmap.png"
        alt="Roadmap"
        style={{ width: "100%", height: "auto", marginBottom: "5%" }}
      />
      <div className="container">
        <Row gutter={[30, 30]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div
              className="custom_card"
              style={{
                background: "#ffffff",
                transition: "0.3s",
                height: "100%",
              }}
            >
              <div style={{ padding: "20px" }}>
                <div
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.5em",
                    color: "#1867df",
                    fontWeight: "bold",
                  }}
                >
                  Quarter 1
                </div>
                <ul
                  style={{
                    listStyleImage: "url(images/list-icon.png)",
                    paddingLeft: "20px",
                  }}
                >
                  <li style={{ marginBottom: "10px" }}>
                    Finalize the development plan for the Joud Taxi mobile
                    application
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Hire a team of experienced developers to work on the project
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Conduct market research and develop a marketing plan
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Launch a website and social media channels to promote the
                    project
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Begin the process of SEC regulation and compliance for the
                    Joud Token
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div
              className="custom_card"
              style={{
                background: "#ffffff",
                transition: "0.3s",
                height: "100%",
              }}
            >
              <div style={{ padding: "20px" }}>
                <div
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.5em",
                    color: "#fc96ae",
                    fontWeight: "bold",
                  }}
                >
                  Quarter 2
                </div>
                <ul
                  style={{
                    listStyleImage: "url(images/list-icon.png)",
                    paddingLeft: "20px",
                  }}
                >
                  <li style={{ marginBottom: "10px" }}>
                    Develop and launch the Joud Taxi mobile application for
                    Android and iOS
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Test the application and address any bugs or issues
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Launch a beta version of the application for a limited user
                    base
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Begin the process of driver recruitment and training
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Begin developing partnerships with local businesses and
                    organizations to promote the Joud Taxi service
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div
              className="custom_card"
              style={{
                background: "#ffffff",
                transition: "0.3s",
                height: "100%",
              }}
            >
              <div style={{ padding: "20px" }}>
                <div
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.5em",
                    color: "#ffd200",
                    fontWeight: "bold",
                  }}
                >
                  Quarter 3
                </div>
                <ul
                  style={{
                    listStyleImage: "url(images/list-icon.png)",
                    paddingLeft: "20px",
                  }}
                >
                  <li style={{ marginBottom: "10px" }}>
                    Launch the Joud Taxi service in select cities and regions
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Increase driver recruitment efforts and expand the driver
                    network
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Launch a marketing campaign to promote the service to
                    potential users
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Develop and implement additional features for the mobile
                    application, such as ride-sharing and rewards programs
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Evaluate user feedback and make necessary updates to the
                    application and service
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div
              className="custom_card"
              style={{
                background: "#ffffff",
                transition: "0.3s",
                height: "100%",
              }}
            >
              <div style={{ padding: "20px" }}>
                <div
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.5em",
                    color: "#14e64f",
                    fontWeight: "bold",
                  }}
                >
                  Quarter 4
                </div>
                <ul
                  style={{
                    listStyleImage: "url(images/list-icon.png)",
                    paddingLeft: "20px",
                  }}
                >
                  <li style={{ marginBottom: "10px" }}>
                    Expand the Joud Taxi service to additional cities and
                    regions
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Continue driver recruitment and training efforts
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Develop partnerships with more businesses and organizations
                    to promote the service
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Explore new markets and potential expansion opportunities
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Roadmap;
