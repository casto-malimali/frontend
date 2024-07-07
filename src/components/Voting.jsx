import React, { useEffect, useState } from "react";
import { getCandidates } from "../api";

function Voting() {
  const [voterId, setVoterId] = useState('');
  const [candidates, setCandidates] = useState([]);
  const [selectCandidate, setSelectCandidate] = useState();
  const [isLoading, setIsLoading] = useState(true); // Initial loading state

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await getCandidates();
        setCandidates(response.data);
      } catch (error) {
        alert('Failed to fetch Candidates:', error.message); // More specific error message
      } finally {
        setIsLoading(false); // Clear loading state after success or failure
      }
    };

    fetchCandidates();
  }, []);

  const handleVote = async (event) => {
    event.preventDefault();
    if (!selectCandidate) {
      alert('Please select a candidate');
      return;
    }

    try {
      // eslint-disable-next-line no-undef
      await vote(voterId, selectCandidate); // Assuming vote function is imported
      alert('Voted Successfully');
    } catch (error) {
      alert('Failed to vote:', error.message); // More specific error message
    }
  };

  return (
    <div>
      <h2>Vote for a Candidate</h2>
    
      <form onSubmit={handleVote}>
        <input
          type="text"
          placeholder="Voter ID"
          value={voterId}
          onChange={(e) => setVoterId(e.target.value)}
          required
        />
        <select
          value={selectCandidate}
          onChange={(e) => setSelectCandidate(e.target.value)}
          required
          disabled={isLoading} // Disable while loading candidates
        >
          <option value="" disabled>Select a candidate</option>
          {candidates.map((candidate) => (
            <option key={candidate._id} value={candidate._id}>
              {candidate.name}
            </option>
          ))}
        </select>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Vote'}
        </button>
      </form>
    </div>
  );
}

export default Voting;















// import React, { useEffect, useState } from "react";
// import { getCandidates } from "../api";


// function Voting() {
//     const [voterId, setVoterId] = useState('');
//     const [candidates, setCandidates] = useState([]);
//     const [selectCandidate, setSelectCandidate] = useState();

//     useEffect(() => {
//         const fetchCandidates = async () => {
//             try {
//                 const response = await getCandidates();
//                 setCandidates(response.data);
//             } catch (error) {
//                 alert('Failed to fetch Candidates');
//             }
//         };
//         fetchCandidates();
//     }, []);
//     const handleVote = async (event) => {
//         event.preventDefault();
//         try {
//             // eslint-disable-next-line no-undef
//             await vote(voterId, selectCandidate);
//             alert('Voted Successfully');
//         } catch (error) {
//             alert('Failed to vote');
//         }
//     }


//     return (
//         <div>
//             <h2>Vote for a Candidate</h2>
//             <form onSubmit={handleVote}>
//                 <input
//                     type="text"
//                     placeholder="Voter ID"
//                     value={voterId}
//                     onChange={(e) => setVoterId(e.target.value)}
//                     required
//                 />
//                 <select
//                     value={selectCandidate}
//                     onChange={(e) => setSelectCandidate(e.target.value)}
//                     required
//                 >
//                     <option value="" disabled>Select a candidate</option>
//                     {candidates.map((candidate) => (
//                         <option key={candidate._id} value={candidate._id}>
//                             {candidate.name}
//                         </option>
//                     ))}
//                 </select>
//                 <button type="submit">Vote</button>
//             </form>

//         </div>
//     )
// }

// export default Voting