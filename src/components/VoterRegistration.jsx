
import React, { useState } from 'react';
import { registerVoter } from '../api';

function VoterRegistration() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [isError, setIsError] = useState(false); // State for error handling

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Set loading state on submission
    setIsError(false); // Clear previous errors

    try {
      await registerVoter(emailOrPhone);
      alert('Voter registered successfully!');
    } catch (error) {
      setIsError(true);
      alert(
        error.response?.data?.message || 'Voter registration failed. Please try again.' // More specific messages
      );
    } finally {
      setIsLoading(false); // Clear loading state after success or failure
    }
  };

  return (
    <div>
      <h2>Voter Registration</h2>
      {isLoading && <div>Loading...</div>} {/* Display loading indicator */}
      {isError && <div className="error">Registration failed. Please try again.</div>} {/* Error message */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Phone Number or Email Address"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default VoterRegistration;

























// import React, {useState} from 'react';
// import { registerVoter } from '../api';

// function VoterRegistration() {

//     const [emailOrPhone, setEmailOrPhone] = useState('');
    
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             await registerVoter(emailOrPhone)
//             alert('Voter registered successfully!');
//         } catch (error) {
//             alert('Voter registration failed');
            
//         }
//     }
//   return (
//     <div>
//         <h2>Voter Registration</h2>
//         <form onSubmit={handleSubmit}>
//             <input type="text" placeholder='Enter Your Phone Number or Email address' value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)} Required />
//             <button type='submit'>Register</button>
//         </form>

//     </div>
//   )
// }

// export default VoterRegistration