import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
const InsEducation = ({ onClose }) => {
    const [formData, setFormData] = useState({
        FamilyMemberId: localStorage.getItem('FamilyMemberId'),
        Qualification: '',
        PassingYear: '',
        Schooling: '',
        Organisation: '',
        GPA: ''
    });
    const [educationData, setEducationData] = useState([]);
    const [qualificationOptions, setQualificationOptions] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:51294/api/Education/InsEducation', formData);
            alert('Education data added successfully!');
            window.location.href = "/education"
            onClose(); // Close the popup
        } catch (err) {
            alert('Error occurred while adding education data');
            console.error(err);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:51294/api/Education/GetEducationById`);
                setEducationData(response.data);
            } catch (error) {
                console.error('Error fetching education data:', error);
            }
        };

        fetchData();
    }, [formData.FamilyMemberId]);

    useEffect(() => {
        // Fetch qualification options from an API or define them locally
        const qualifications = ['High School', 'Associate Degree', 'Bachelor\'s Degree', 'Master\'s Degree', 'Doctorate'];
        setQualificationOptions(qualifications);
    }, []);

    return (
        <><div><Navbar /></div><div className="popup">
            <div className="popup-inner">
                <h2>Add Family Member</h2>
                <select name="Qualification" onChange={handleChange}>
                    <option value="">Select Qualification</option>
                    {qualificationOptions.map((qualification, index) => (
                        <option key={index} value={qualification}>{qualification}</option>
                    ))}
                </select>
                <input type="number" name="PassingYear" placeholder="Passing Year" onChange={handleChange} />
                <input type="text" name="Schooling" placeholder="Schooling" onChange={handleChange} />
                <input type="text" name="Organisation" placeholder="Organisation" onChange={handleChange} />
                <input type="number" name="GPA" placeholder="GPA" onChange={handleChange} />
                <button onClick={handleSubmit}>Add</button>
                <button onClick={onClose}>Cancel</button>
            </div>
          
        </div></>
    );
};

export default InsEducation;
