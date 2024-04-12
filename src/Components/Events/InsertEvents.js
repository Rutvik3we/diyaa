import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
const Advertise = () => {
  const [events, setEvents] = useState({
    FamilyMemberId: localStorage.getItem('FamilyMemberId'),
    Message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvents({ ...events, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:51294/api/Login/InsertEvents', events);
      alert('Advertisement added successfully');
      window.location.href = "/showevents";
    } catch (error) {
      alert('Error adding advertisement:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Events Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Message:</label>
        <input type="text" name="Message" value={events.Message} onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Advertise;