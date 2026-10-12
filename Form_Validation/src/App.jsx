import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    photo: null,
  });

  const [error, setError] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!form.name.trim()) errors.name = "Name is required";

    if (!form.email.includes("@"))
      errors.email = "Enter a valid email";

    if (!/^[0-9]{10}$/.test(form.phone))
      errors.phone = "Enter 10 digit phone number";

    if (form.password.length < 6)
      errors.password = "Password must contain 6 characters";

    if (form.password !== form.confirmPassword)
      errors.confirmPassword = "Passwords do not match";

    if (!form.address.trim())
      errors.address = "Address is required";

    if (!form.city.trim())
      errors.city = "City is required";

    if (!form.photo)
      errors.photo = "Please upload a photo";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setError(errors);

    if (Object.keys(errors).length === 0) {
      setSuccess("Form submitted successfully!");
    } else {
      setSuccess("");
    }
  };

  return (
    <div className="page">
      <form className="form-box" onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <p>Fill in your details carefully</p>

        <h3>Personal Details</h3>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        <span>{error.name}</span>

        <h3>Contact Details</h3>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />
        <span>{error.email}</span>

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />
        <span>{error.phone}</span>

        <h3>Security Details</h3>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <span>{error.password}</span>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <span>{error.confirmPassword}</span>

        <h3>Address Details</h3>

        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />
        <span>{error.address}</span>

        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
        />
        <span>{error.city}</span>

        <h3>Photo</h3>

        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleChange}
        />
        <span>{error.photo}</span>

        <button type="submit">Submit</button>

        {success && <div className="success">{success}</div>}
      </form>
    </div>
  );
}

export default App;
