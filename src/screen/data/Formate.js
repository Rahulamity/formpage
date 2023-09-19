import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import "./format.css";

const Formate = () => {
  const [arr, setarr] = useState([]);
  // const [maintask, setMaintask] = useState([]);

  const deleteHandler = (i) => {
    let copytask = [...arr];
    copytask.splice(i, 1);
    setarr(copytask);
  };

  useEffect(() => {
    try {
      const get_date = localStorage.getItem("Data");
      const data_is = get_date ? JSON.parse(get_date) : [];
      setarr(data_is);
    } catch (error) {
      console.error("Error parsing data from localStorage:", error);
      setarr([]); // Set an empty array or handle the error appropriately
    }
  }, []);

  // Function to handle deletion of an item
 

  return (
    <>
    {arr?.length === 0 ? (
      <tr>
        <td colSpan="8" style={{ textAlign: "center" }}>
          No Data Found
        </td>
      </tr>
    ) : (
      <>
        {arr.map((item, i) => (
          <tr key={i}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.phone_no}</td>
            <td>{item.Date_of_birth}</td>
            <td>{item.gender}</td>
            <td>{item.city}</td>
            <td>{item.state}</td>

            {/* Render other fields */}
            <td>
              <Link
                to={"/AddProfile"}
                state={{ data: item }}
                style={{
                  textDecoration: "none",
                  color: "#007bff",
                  marginRight: "10px",
                }}
              >
                <BiEdit/>
              </Link>
              <button
                style={{
                  color: "white",
                  border: "2px solid white",
                  backgroundColor: "black",
                  margin: "1px",
                  borderRadius: "6px",
                  padding: "5px 10px",
                  cursor: "pointer",
                  display: "inline-block",
                }}
                onClick={() => deleteHandler(i)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </>
    )}
  </>
  
  );
};

export default Formate;
