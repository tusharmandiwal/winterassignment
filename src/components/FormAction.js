import React, { useState } from "react";

const FormAction = (props) => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    age: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear the error when the input changes
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Improved form validation with regular expressions
    const newErrors = {};
    
    if (!formdata.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formdata.name)) {
      newErrors.name = "Invalid name format (only letters and spaces allowed)";
    }

    if (!formdata.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      // Improved email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formdata.email)) {
        newErrors.email = "Invalid email address";
      }
    }

    if (!formdata.age.trim()) {
      newErrors.age = "Age is required";
    } else if (isNaN(formdata.age) || parseInt(formdata.age) <= 0) {
      newErrors.age = "Age must be a positive number";
    }

    setErrors(newErrors);

    // Check if there are no errors before submitting
    if (Object.keys(newErrors).length === 0) {
      props.onFormSubmit(formdata);
      setTimeout(() => {
        alert("Details Updated");
      }, 600);
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="card col-md-4 mt-5" style={{ backgroundColor: "beige" }}>
        <div className="card-body">
          <h1 className="card-title mb-4">Form Page</h1>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formdata.name}
                className={`form-control mt-4 ${errors.name ? "is-invalid" : ""}`}
                placeholder="Name"
                onChange={handleInputChange}
                required
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formdata.email}
                className={`form-control mt-4 ${errors.email ? "is-invalid" : ""}`}
                placeholder="Email"
                onChange={handleInputChange}
                required
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="form-group">
              <input
                type="number"
                name="age"
                value={formdata.age}
                className={`form-control mt-4 ${errors.age ? "is-invalid" : ""}`}
                placeholder="Age"
                onChange={handleInputChange}
                required
              />
              {errors.age && <div className="invalid-feedback">{errors.age}</div>}
            </div>
            <div className="form-group">
              <textarea
                name="address"
                value={formdata.address}
                className="form-control mt-4"
                placeholder="Address..."
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary w-100 mt-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAction;
