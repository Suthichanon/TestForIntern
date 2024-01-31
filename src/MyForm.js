  import React, { useState } from 'react';
  import './App.css';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    tel: '',
    address: '',
    gender: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Check fields are not empty
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === '') {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is a required field`;
        valid = false;
      }
    });

    // Check password is at least 8 characters
    if (formData.password.trim().length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSubmittedData(formData);
    // hold Data in field after submit  if u don't need please un commnet
    //   setFormData({
    //     name: '',
    //     email: '',
    //     password: '',
    //     tel: '',
    //     address: '',
    //     gender: '',
    //   });
    } else {
      console.log('Form has errors. Please fix them before submitting.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='out-side'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="label-with-asterisk">
            Name<span className="asterisk"> *</span>
          </label>
          <input type="text" id="name" name="name" placeholder='Name' value={formData.name} onChange={handleChange} />
          <span>{errors.name}</span> 
        </div>

        <div>
          <label htmlFor="email" className="label-with-asterisk">
            Email<span className="asterisk"> *</span>
          </label>
          <input type="email" id="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} />
          <span>{errors.email}</span>
        </div>

        <div>
          <label htmlFor="password" className="label-with-asterisk">
            Password<span className="asterisk"> *</span>
          </label>
          <input type="password" id="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} />
          <span>{errors.password}</span>
        </div>

        <div>
          <label htmlFor="tel" className="label-with-asterisk">
            Tel<span className="asterisk"> *</span>
          </label>
          <input type="tel" id="tel" name="tel" placeholder='Tel' value={formData.tel} onChange={handleChange} />
          <span>{errors.tel}</span>
        </div>

        <div>
         <label htmlFor="address" className="label-with-asterisk">
            Address<span className="asterisk"> *</span>
        </label>
         <textarea id="address" name="address" placeholder='Address' value={formData.address} onChange={handleChange} />
         <span>{errors.address}</span>
        </div>

        <div>
          <label htmlFor="gender" className="label-with-asterisk" >
            Gender<span className="asterisk"> *</span>
          </label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="" disabled>
              Select gender
            </option> 
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
          <span>{errors.gender}</span>
        </div>

        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div className='Submit-Form'>
          <p>Name : {submittedData.name}</p>
          <p>Email : {submittedData.email}</p>
          <p>Password : {submittedData.password}</p>
          <p>Tel : {submittedData.tel}</p>
          <p>Address : {submittedData.address}</p>
          <p>Gender : {submittedData.gender}</p>
        </div>
      )}
    </div>
  );
};

export default MyForm;
