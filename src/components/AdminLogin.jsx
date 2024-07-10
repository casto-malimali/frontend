import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

async function loginAdmin(email, password) {
  const response = await axios.post('http://localhost:4000/admin/login', {
    email,
    password
  });
  return response;
}

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await loginAdmin(email, password);
      localStorage.setItem('token', response.data.token);
      navigate('/admin/dashboard');
    } catch (error) {
      alert('Login failed: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;





// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { loginAdmin } from '../api';

// function AdminLogin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await loginAdmin(email, password);
//       localStorage.setItem('token', response.data.token);
//       history.push('/admin/dashboard');
//     } catch (error) {
//       alert('Login failed');
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default AdminLogin;
