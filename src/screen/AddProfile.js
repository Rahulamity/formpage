import React, { useState, useEffect } from "react";
import "./AddProfile.css";
import { useLocation, useNavigate } from "react-router-dom";
const AddProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setemail] = useState("");
  const [phone_no, setphone_no] = useState("");
  const [gender, setgender] = useState("");
  const [dob, setdob] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");

  const [first_name_err, setfirst_name_err] = useState(false);
  const [last_name_err, setlast_name_err] = useState(false);
  const [email_err, setemail_err] = useState(false);
  const [phone_err, setphone_err] = useState(false);
  const [gender_err, setgender_err] = useState(false);
  const [dob_err, setdob_err] = useState(false);
  const [city_err, setcity_err] = useState(false);
  const [state_err, setstate_err] = useState(false);

  const [update, setupdate] = useState(false);

  const Submit = () => {
    // Retrieve existing data from local storage
    const existingData = localStorage.getItem("Data");
    const parsedData = existingData ? JSON.parse(existingData) : [];
    // Create a new profile object
    const newProfile = {
      first_name,
      last_name,
      email,
      phone_no,
      Date_of_birth: dob,
      gender,
      city,
      state,
    };

    // Append the new profile to the existing data
    parsedData.push(newProfile);

    // Store the updated data in the local storage
    const updatedData = JSON.stringify(parsedData);
    localStorage.setItem("Data", updatedData);

    alert("Form Submitted Successfully");
  };

  useEffect(() => {
    const data = location.state?.data;
    if (data) {
      setfirst_name(data.first_name);
      setlast_name(data.last_name);
      setemail(data.email);
      setphone_no(data.phone_no);
      setdob(data.Date_of_birth);
      setgender(data.gender);
      setcity(data.city);
      setstate(data.state);
      setupdate(true);
    }
  }, [location.state]);
//-----------------------------------------------------------------Validation Part--------------------------------------------------------//
  useEffect(() => {
    // Validation logic for the "First Name" field
    if (first_name === "") {
      setfirst_name_err(true);
    } else {
      setfirst_name_err(false);
    }
  }, [first_name]);
  
  useEffect(() => {
    // Validation logic for the "Last Name" field
    if (last_name === "") {
      setlast_name_err(true);
    } else {
      setlast_name_err(false);
    }
  }, [last_name]);
  
  useEffect(() => {
    // Validation logic for the "Phone Number" field
    if (phone_no === "") {
      setphone_err(true);
    } else {
      setphone_err(false);
    }
  }, [phone_no]);
  
  useEffect(() => {
    // Validation logic for the "Email ID" field
    // You can use a regular expression to check for a valid email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === "" || !emailPattern.test(email)) {
      setemail_err(true);
    } else {
      setemail_err(false);
    }
  }, [email]);
  
  useEffect(() => {
    // Validation logic for the "Gender" field
    if (gender === "") {
      setgender_err(true);
    } else {
      setgender_err(false);
    }
  }, [gender]);
  
  useEffect(() => {
    // Validation logic for the "Date of Birth" field
    if (dob === "") {
      setdob_err(true);
    } else {
      setdob_err(false);
    }
  }, [dob]);
  
  useEffect(() => {
    // Validation logic for the "City" field
    if (city === "") {
      setcity_err(true);
    } else {
      setcity_err(false);
    }
  }, [city]);
  
  useEffect(() => {
    // Validation logic for the "State" field
    if (state === "") {
      setstate_err(true);
    } else {
      setstate_err(false);
    }
  }, [state]);
  
  return (
    <>
      <form
        style={{ maxWidth: "600px", margin: "0 auto" }}
        onSubmit={(e) => {
          e.preventDefault();
          if (first_name === "") {
            setfirst_name_err(true);
          } else if (last_name === "") {
            setlast_name_err(true);
          } else if (phone_no === "") {
            setphone_err(true);
          } else if (email === "") {
            setemail_err(true);
          } else if (gender === "") {
            setgender_err(true);
          } else if (dob === "") {
            setdob_err(true);
          } else if (city === "") {
            setcity_err(true);
          } else if (state === "") {
            setstate_err(true);
          } else {
            Submit();
          }
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="form">
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="first_anme"
                placeholder="Enter First Name"
                value={first_name}
                onChange={(e) => {
                  setfirst_name(e.target.value);
                }}
              />{" "}
              {first_name_err ? <div>Please Enter First Name</div> : null}
            </div>
          </div>

          <div className="form">
            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="last_name"
                placeholder="Enter Last Name"
                value={last_name}
                onChange={(e) => {
                  setlast_name(e.target.value);
                }}
              />
              {last_name_err ? <div>Please Enter Last Name</div> : null}
            </div>
          </div>

          <div className="form">
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="number"
                maxLength={10}
                name="phone_no"
                placeholder="Enter Phone No."
                value={phone_no}
                onChange={(e) => {
                  setphone_no(e.target.value);
                }}
              />
              {phone_err ? <div>Please Enter Phone Number</div> : null}
            </div>
          </div>

          <div className="form">
            <div className="form-group">
              <label className="form-label">Email ID</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              {email_err ? <div>Please Enter Email ID</div> : null}
            </div>
          </div>
          <label className="form-label">Gender</label>
          <select
            className="choose-label"
            value={gender}
            onChange={(e) => setgender(e.target.value)}
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            {gender_err ? <div>Please Select Gender</div> : null}
          </select>

          <div className="form">
            <div className="form-group">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                name="date_of_birth"
                value={dob}
                onChange={(e) => {
                  setdob(e.target.value);
                }}
              />
              {dob_err ? <div>Please Enter DOB</div> : null}
            </div>
          </div>

          <div className="form">
            <div className="form-group">
              <label className="form-label">City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter City"
                value={city}
                onChange={(e) => {
                  setcity(e.target.value);
                }}
              />
              {city_err ? <div>Please Enter City</div> : null}
            </div>
          </div>

          <div className="form">
            <div className="form-group"></div>
            <label className="form-label">State</label>
            <input
              type="text"
              name="state"
              placeholder="Enter State"
              value={state}
              onChange={(e) => {
                setstate(e.target.value);
              }}
            />
            {state_err ? <div>Please Enter First Name</div> : null}
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="submit-button"
              onClick={() => {
                navigate(-1);
              }}
            >
              {update ? "Update" : "Add Profile"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddProfile;
