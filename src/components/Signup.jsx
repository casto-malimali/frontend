import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Signup() {
    const navigate = useNavigate();

    const [inputText, setInputText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
      
        // Check if inputText has a value before sending the request
        if (!inputText) {
          console.error('Please enter your email or phone number.');
          return; // Exit the function if no input
        }
      
        axios.post('http://localhost:4000/api/voters/register', {
          "emailorPhone": inputText
        })
          .then((response) => {
            console.log(response.data);
            navigate('/home', { state: { inputText } }); // Pass inputText as state
          })
          .catch((error) => {
            console.error('Error posting data:', error.response?.data || error); // More specific error handling
          });
      };
  return (
    <Container className='mx-4'>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="emailOrPhone">Enter Your Email or Phone Number Only</Form.Label>
        <Form.Control type="text" id="emailOrPhone" value={inputText} onChange={(e)=> setInputText(e.target.value)} aria-describedby="emailHelp" placeholder="Email/Phone" />
        <Form.Text id="emailHelp" className="text-muted">
          We'll never share your email/phone number with anyone else.
        </Form.Text>
      </Form.Group>
    <div className="text-center"> <Button variant="primary" type="submit" className="px-5 text-center" onSubmit={handleSubmit }>
        Submit
      </Button></div>
      
    </Form>
    </Container>
  );
}

export default Signup;
