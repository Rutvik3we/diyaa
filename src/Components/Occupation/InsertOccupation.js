// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const InsertEducation = ({ onClose }) => {
//     const [formData, setFormData] = useState({
//         FamilyMemberId: localStorage.getItem('FamilyMemberId'),
//         Qualification: '',
//         PassingYear: '',
//         Schooling: '',
//         Organisation: '',
//         GPA: ''
//     });
//     const [familyMembers, ] = useState([]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async () => {
//         try {
//             await axios.post('http://localhost:51294/api/Education/InsEducation', formData);
//             alert('Family member added successfully!');
//             onClose(); // Close the popup
//             // After successful submission, fetch and update the list of family members
//             fetchFamilyMembers();
//         } catch (error) {
//             alert('Error occurred while adding family member');
//             console.error(error);
//         }
//     };

//     // const fetchFamilyMembers = async () => {
//     //     try {
//     //         const response = await axios.get('http://localhost:51294/api/GetEducationById');
//     //         setFamilyMembers(response.data); // Assuming your API returns an array of family members
//     //     } catch (error) {
//     //         console.error('Error fetching family members:', error);
//     //     }
//     // };


//     const fetchFamilyMembers = async () => {
//         try {
//             const response = await axios.get('http://localhost:51294/api/GetEducationById');
//             // Handle success, update state with the fetched data
//             console.log('Fetched data:', response.data);
//             // Update state with fetched data to trigger re-rendering
//         } catch (error) {
//             // Handle error
//             console.error('Error fetching data:', error);
//         }
//     };

//     useEffect(() => {
//         fetchFamilyMembers(); // Fetch family members on component mount
//     }, []);

//     return (
//         <div className="popup">
//             <div className="popup-inner">
//                 <h2>Add Family Member</h2>
//                 <input type="text" name="Qualification" placeholder="Qualification" onChange={handleChange} />
//                 <input type="number" name="PassingYear" placeholder="Passing Year" onChange={handleChange} />
//                 <input type="text" name="Schooling" placeholder="Schooling" onChange={handleChange} />
//                 <input type="text" name="Organisation" placeholder="Organisation" onChange={handleChange} />
//                 <input type="number" name="GPA" placeholder="GPA" onChange={handleChange} />
//                 <button onClick={handleSubmit}>Add</button>
//                 <button onClick={onClose}>Cancel</button>
//             </div>
//             <div>cc    
//                 <h2>Family Members</h2>
//                 <ul>
//                     {familyMembers.map((member, index) => (
//                         <li key={index}>
//                             {member.Qualification}, {member.PassingYear}, {member.Schooling}, {member.Organisation}, {member.GPA}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default InsertEducation;

import Navbar from '../Navbar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InsertOccupation = ({ onClose }) => {
    const [formData, setFormData] = useState({
        FamilyMemberId: localStorage.getItem('FamilyMemberId'),
        Designation: '',
        NameOfCompany: '',
        Industry: '',
        Category: '',
        StartDate: '',
        EndDate: '',
        Address1: '',
        Address2: '',
        City: '',
        State: '',
        Country: '',
        PinCode: '',
   
    });
    const [setOccupationData] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:51294/api/InsOccupation', formData);
            alert('Occupation data added successfully!');
          window.location.href = "/showoccupation";
        } catch (error) {
            alert('Error occurred while adding education data');
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:51294/api/GetOccupationById');
                setOccupationData(response.data);
            } catch (error) {
                console.error('Error fetching occupation data:', error);
            }
        };

        fetchData();
    }, [formData.FamilyMemberId]);

    return (
        
        <div className="popup">
             <Navbar/>
            <div className="popup-inner">
                
                <h2>Add Occupation</h2>
                <input type="text" name="Designation" placeholder="Designation" onChange={handleChange} />
                <input type="text" name="NameOfCompany" placeholder="NameOfCompany" onChange={handleChange} />
                <input type="text" name="Industry" placeholder="Industry" onChange={handleChange} />
                <input type="text" name="Category" placeholder="Category" onChange={handleChange} />
                <input type="date" name="StartDate" placeholder="StartDate" onChange={handleChange} />
                <input type="date" name="EndDate" placeholder="EndDate" onChange={handleChange} />
                <input type="text" name="Address1" placeholder="Address1" onChange={handleChange} />
                <input type="text" name="Address2" placeholder="Address2" onChange={handleChange} />
                <input type="text" name="City" placeholder="City" onChange={handleChange} />
                <input type="text" name="State" placeholder="State" onChange={handleChange} />
                <input type="text" name="Country" placeholder="Country" onChange={handleChange} />
                <input type="number" name="PinCode" placeholder="PinCode" onChange={handleChange} />
                <button onClick={handleSubmit}>Add</button>
                <button onClick={onClose}>Cancel</button>
            </div>
            
           

        </div>
    );
};

export default InsertOccupation;