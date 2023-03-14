import React from "react";
import { Col, Row } from "antd";
import CustomCard from "../../Components/CustomCard";

const Features = () => {
  return (
    <section
      className="Features section"
      id="Features"
      style={{
        background:
          " linear-gradient(to bottom, rgb(250 125 154 / 20%), rgba(238,241,250,0))",
      }}
    >
      <div className="container">
        <center
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            width: "100%",
            marginBottom: "5%",
          }}
        >
          <h2>Quick features in the app</h2>
          <p>
            The Joud Taxi app will have several features designed to provide a
            safe and convenient ride-hailing experience for women and children.
            Some of the key features of the app may include.
          </p>
        </center>
        <Row gutter={[30, 30]}>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <CustomCard
              image="images/Women-only-Drivers.svg"
              title="Women only Drivers"
              description="Joud Taxi will only employ women drivers, ensuring that passengers
          feel safe and comfortable during their ride."
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <CustomCard
              image="images/Child-Friendly.svg"
              title="Child Friendly"
              description="Joud Taxi will provide special child seats for children to
                  ensure their safety and comfort during the ride."
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <CustomCard
              image="images/Blockchain-based-security.svg"
              title="Blockchain-based security"
              description="The app will use blockchain technology to ensure the security
                  of user data and transactions, as well as to prevent fraud and
                  hacking."
            />
          </Col>

          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <CustomCard
              image="images/values-2.png"
              title="In-app chat"
              description="The app will include a chat feature that will allow passengers
                  to communicate with their driver before and during the ride."
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <CustomCard
              image="images/values-3.png"
              title="Customizable ride preferences"
              description="Passengers will be able to specify their ride preferences,
                  such as the temperature and music, to ensure a comfortable
                  ride."
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <CustomCard
              image="images/values-1.png"
              title="Easy payment"
              description="The app will allow passengers to easily pay for their ride
                  using a variety of payment methods, including credit cards,
                  debit cards, and the Joud Token."
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <CustomCard
              image="images/values-3.png"
              title="Real-time tracking"
              description="Passengers will be able to track their driver in real-time, allowing them to know exactly when their driver will arrive."
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <CustomCard
              image="images/values-3.png"
              title="Reports"
              description="Provide insights regarding trips and earnings on a daily/weekly/monthly basis."
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <CustomCard
              image="images/values-3.png"
              title="Trusted"
              description="Aligned with a listed company the token will be backed by shares traded OTC with SEC regulations."
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Features;
