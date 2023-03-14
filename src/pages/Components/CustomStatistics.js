import React from "react";

const CustomStatistics = ({ image, title, description }) => {
  return (
    <div
      className="custom_card"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          maxWidth: "130px",
          height: "auto",
        }}
      />

      <div style={{ padding: "20px" }}>
        <p style={{ marginTop: "0" }}>{title}</p>
        <div
          style={{
            fontSize: "20px",
            lineHeight: "1.5em",
            color: "#f97e9b",
            fontWeight: "bold",
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default CustomStatistics;
