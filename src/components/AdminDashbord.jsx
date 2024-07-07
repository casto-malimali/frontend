

import React, { useState, useEffect } from 'react';
import { addCandidate, getResults } from '../api';

function AdminDashboard() {
  const [candidateData, setCandidateData] = useState({
    name: '',
    description: '',
    innovationName: '',
    image: '',
  });

  const [result, setResult] = useState(null); // Use null for initial loading state

  const token = localStorage.getItem('token');

  const handleAddCandidate = async (event) => {
    event.preventDefault();

    try {
      await addCandidate(token, candidateData);
      setCandidateData({ // Clear form after successful submission
        name: '',
        description: '',
        innovationName: '',
        image: '',
      });
      alert('Candidate added successfully!');
    } catch (error) {
      alert('Error adding candidate:', error.message); // Provide more specific error message
    }
  };

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await getResults(token);
        setResult(response.data);
      } catch (error) {
        alert('Failed to fetch results:', error.message); // Provide more specific error message
      }
    };

    fetchResults();
  }, [token]);

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <form onSubmit={handleAddCandidate}>
        <input
          type="text"
          placeholder="Name of Candidate"
          value={candidateData.name}
          onChange={(e) =>
            setCandidateData({ ...candidateData, name: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Innovation Description"
          value={candidateData.description}
          onChange={(e) =>
            setCandidateData({ ...candidateData, description: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Innovation Name"
          value={candidateData.innovationName}
          onChange={(e) =>
            setCandidateData({
              ...candidateData,
              innovationName: e.target.value,
            })
          }
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={candidateData.image}
          onChange={(e) =>
            setCandidateData({ ...candidateData, image: e.target.value })
          }
          required
        />
        <button type="submit">Add Candidate</button>
      </form>

      <br />
      <hr />

      <h3>Voting Result</h3>
      {result ? (
        <ul>
          {result.map((resultItem, index) => (
            <li key={index}>
              {resultItem.candidate} : {resultItem.votes} Votes
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading results...</p>
      )}
    </div>
  );
}

export default AdminDashboard; 




























// import React, { useState, useEffect } from 'react';
// import { addCandidate, getResults } from '../api';


// function AdminDashbord() {

//     const [name, setname] = useState('');
//     const [description, setdescription] = useState('');
//     const [innovationName, setinnovationName] = useState('');
//     const [image, setImage] = useState('');
//     const [result, setResult] = useState('');

//     const token = localStorage.getItem('token');

//     const handleAddCandidate = async (event) => {
//         event.preventDefault();
//         try {
//             await addCandidate(token, { name, description, innovationName, image });
//             alert('candidate added successfully');
//         }
//         catch (error) {
//             alert("error adding candidate");
//         }

//     }

//     useEffect(() => {
//         const fetchResults = async () => {
//             try {
//                 const response = await getResults(token);
//                 setResult(response.data);
//             } catch (error) {
//                 alert('Failed to fetch results');

//             }
//         };
//         fetchResults();
//     }, [token]);

//     return (
//         <div>
//             <h2>
//                 Admin Dashbord
//             </h2>
//             <form onSubmit={handleAddCandidate}>
//                 <input type="text" placeholder='Name of Candidate' value={name} onChange={(e) => setname(e.target.value)} required />
//                 <input type="text" placeholder='Innovation description' value={description} onChange={(e) => setdescription(e.target.value)} required />
//                 <input type="text" placeholder='Innovation Name' onChange={(e) => setinnovationName(e.target.value)} required />
//                 <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
//                 <button type="submit">Add Candidate</button>
//             </form>

//             <br />
//             <hr />
//             <h3>Voting Result</h3>
//                 <ul>
//                     {getResults.map((result, index) => {
//                         <li key={index}>
//                             {result.candidate} : {result.votes} Votes
//                         </li>
//                     })}
//                 </ul>
//         </div>
//     )
// }

// export default AdminDashbord
























// import React, { useState, useEffect } from 'react';
// import { addCandidate, getResults } from '../api';


// function AdminDashbord() {

//     const [name, setname] = useState('');
//     const [description, setdescription] = useState('');
//     const [innovationName, setinnovationName] = useState('');
//     const [image, setImage] = useState('');
//     const [result, setResult] = useState('');

//     const token = localStorage.getItem('token');

//     const handleAddCandidate = async (event) => {
//         event.preventDefault();
//         try {
//             await addCandidate(token, { name, description, innovationName, image });
//             alert('candidate added successfully');
//         }
//         catch (error) {
//             alert("error adding candidate");
//         }

//     }

//     useEffect(() => {
//         const fetchResults = async () => {
//             try {
//                 const response = await getResults(token);
//                 setResult(response.data);
//             } catch (error) {
//                 alert('Failed to fetch results');

//             }
//         };
//         fetchResults();
//     }, [token]);

//     return (
//         <div>
//             <h2>
//                 Admin Dashbord
//             </h2>
//             <form onSubmit={handleAddCandidate}>
//                 <input type="text" placeholder='Name of Candidate' value={name} onChange={(e) => setname(e.target.value)} required />
//                 <input type="text" placeholder='Innovation description' value={description} onChange={(e) => setdescription(e.target.value)} required />
//                 <input type="text" placeholder='Innovation Name' onChange={(e) => setinnovationName(e.target.value)} required />
//                 <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
//                 <button type="submit">Add Candidate</button>
//             </form>

//             <br />
//             <hr />
//             <h3>Voting Result</h3>
//                 <ul>
//                     {getResults.map((result, index) => {
//                         <li key={index}>
//                             {result.candidate} : {result.votes} Votes
//                         </li>
//                     })}
//                 </ul>
//         </div>
//     )
// }

// export default AdminDashbord