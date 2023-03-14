import React from "react";
import { Col, Row } from "antd";
import CustomStatistics from "../../Components/CustomStatistics";

const Tokenomics = () => {
  return (
    <section className="Tokenomics section" id="Tokenomics">
      <div className="container" style={{ marginBottom: "5%" }}>
        <center
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            width: "100%",
            marginBottom: "5%",
          }}
        >
          <h2>Tokenomics</h2>
          <p>
            JOUD tokens can be used as a payment method for rides on the Joud
            Taxi application. Passengers will be able to purchase JOUD tokens
            through the application or through a cryptocurrency exchange, and
            use them to pay for their rides.
          </p>
        </center>
        <Row gutter={[30, 30]}>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <CustomStatistics
              image="images/values-1.png"
              title="Token Symbol"
              description="JOUD"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <CustomStatistics
              image="images/values-2.png"
              title="Total Supply"
              description="1 billion JOUD tokens"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <CustomStatistics
              image="images/values-3.png"
              title="Token Type"
              description="BSC"
            />
          </Col>
        </Row>
      </div>
      <div
        style={{
          backgroundImage: "url(images/section-bg.png)",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="container">
          <Row gutter={10} style={{ alignItems: "center" }}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <ul
                style={{
                  listStyleImage: "url(images/list-icon.png)",
                  paddingLeft: "20px",
                }}
              >
                <li style={{ marginBottom: "10px" }}>
                  A small transaction fee of 1% will be charged on each JOUD
                  token transaction. The transaction fees will be used to fund
                  the continued development and maintenance of the Joud Taxi
                  application.
                </li>
                <li style={{ marginBottom: "10px" }}>
                  As the adoption of the Joud Taxi application grows, the demand
                  for JOUD tokens will increase. This will likely lead to an
                  increase in the value of JOUD tokens on the market.
                </li>
                <li style={{ marginBottom: "10px" }}>
                  To incentivize early adoption and usage of the Joud Taxi
                  application, discounts and rewards may be offered to
                  passengers who use JOUD tokens as a payment method for their
                  rides.
                </li>
                <li style={{ marginBottom: "10px" }}>
                  In addition to payment for rides, JOUD tokens may be used to
                  purchase exclusive Joud Taxi merchandise or other products and
                  services offered by the Joud Taxi ecosystem.
                </li>
                <li style={{ marginBottom: "10px" }}>
                  Overall, the tokenomics of JOUD tokens are designed to
                  encourage the growth and adoption of the Joud Taxi application
                  while providing a valuable payment method for passengers. By
                  leveraging the security and transparency of the blockchain,
                  Joud Taxi aims to create a safe and secure environment for
                  women and children to travel, and provide a convenient and
                  reliable ride-hailing service.
                </li>
                <li style={{ marginBottom: "10px" }}>
                  The tokens will be backed by shares of an SEC regulated
                  company whose shares are traded on OTC. The JOUD token is
                  secured by a reserve of gold bullion, providing investors with
                  an underlying asset that supports the token's value.
                </li>
              </ul>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <img
                src="images/hero-img.png"
                style={{ width: "100%", height: "auto" }}
                alt="Tokenomics"
              />
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
