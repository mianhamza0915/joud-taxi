import React from "react";
import { Button, Col, Row } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url(images/hero-bg.png)",
        width: "100%",
        height: "100vh",
        minHeight: "800px",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <Row gutter={10} style={{ alignItems: "center" }}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <h1>The Premier Taxi Service for Women & Children</h1>
            <h5>- Joud taxi your trusted ride.</h5>
            <a
              href="images/dummy.pdf"
              download="Whitepaper Plain"
              target="_blank"
            >
              <Button type="primary" size="large">
                Download Whitepaper{" "}
                <DownloadOutlined style={{ fontSize: "20px" }} />
              </Button>
            </a>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <img
              src="images/banner.svg"
              style={{ width: "100%", height: "auto" }}
              alt="Hero"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Hero;
