// import React, {useState , useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Title from "./data/Title";
import Formate from "./data/Formate";
import DataList from "./data/DataList";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        margin: "40px",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "-20px",
        }}
      >
        <h4
          style={{
            fontSize: "24px",
            color: "#333",
            boxShadow: "5px 5px 2px 1px rgba(0, 0, 25, .2)",
          }}
        >
          Profiles
        </h4>
        <button
          onClick={() => {
            navigate("/AddProfile");
          }}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "40px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "5px 5px 2px 1px rgba(0, 0, 25, .2)",
          }}
        >
          Add Your Profile
        </button>
      </div>

      <div style={{ width: "100%", height: "400px", background: "" }}>
        <DataList title={Title} formate={Formate} />
      </div>
    </div>
  );
};

export default Profile;
