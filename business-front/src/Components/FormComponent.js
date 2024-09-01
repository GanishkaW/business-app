import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    business_name: '',
    email: '',
    website: ''
  });
  let choreoApiUrl='/'
  if (window.config && window.config.choreoApiUrl) {
    choreoApiUrl = window?.configs?.apiUrl ? window.configs.apiUrl : "/";
    console.log("Choreo API URL:", choreoApiUrl);
    } else {
        console.error("Choreo API URL is not defined in window.config");
    }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(choreoApiUrl, formData);
      console.log('Response:', response.data);
      // Handle success actions here
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error actions here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Business Name:</label>
        <input 
          type="text" 
          name="business_name" 
          value={formData.business_name} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Website:</label>
        <input 
          type="url" 
          name="website" 
          value={formData.website} 
          onChange={handleChange} 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;