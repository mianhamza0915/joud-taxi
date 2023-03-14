import React from "react";

const Intro = () => {
  return (
    <section className="intro section" id="Introduction">
      <div className="container">
        <center
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            width: "100%",
            marginBottom: "5%",
          }}
        >
          <h2>Most Trusted Taxi Company</h2>
          <p>
            The Joud Taxi is a concept taxi application that provides a safe and
            secure ride-hailing service for children and women. The Joud Taxi
            application is designed to cater exclusively to the transportation
            needs of women and children, providing a comfortable and safe
            environment where they can travel with ease. This whitepaper
            outlines the concept, features, and benefits of the Joud Taxi
            application, as well as the underlying technology that powers it.
          </p>
        </center>
        <iframe
          width="100%"
          height="650"
          src="https://www.youtube.com/embed/pVE92TNDwUk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Intro;
