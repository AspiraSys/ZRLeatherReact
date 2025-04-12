import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../Components/Additional/GlobalButton";

function Home() {
  const navigate = useNavigate(); 

  return (
    <div style={styles.container}>
      <h1>Welcome to ZR Leather</h1>
      <p>Your one-stop shop for premium leather products.</p>

      {/*  About Us Page Navigation Button */}
      <button style={styles.button} onClick={() => navigate("/AboutUs")}>
        Learn More About Us
      </button>
      <CustomButton
        text="Add to cart"
        borderColor="#987760"
        fontColor="#987760"
        hoverStyles={{ backgroundColor: "#987760", color: "white"}}
        swipeHover={true}
        removeBorder={true}
      />
      <CustomButton
        text="Buy Now"
        borderColor="#987760"
        fontColor="#987760"
        padding={3.5}
        hoverStyles={{ backgroundColor: "#987760", color: "white" }}
        swipeHover={true}
        removeBorder={true}
      />

    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    fontFamily: "Poppins, sans-serif",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Home;
