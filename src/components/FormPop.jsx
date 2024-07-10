import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormPop({ showModal, handleClose }) {
  const [show, setShow] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => setInputText(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:4000/api/voters/register', {
      emailorPhone: inputText
    })
    .then((response) => {
      // Handle the successful response here, e.g., console.log(response.data)
      alert(`You entered: ${inputText}`);
      handleClose(); // Close modal after submit
    })
    .catch((error) => {
      // Handle the error here, e.g., console.error(error)
      console.error('There was an error posting the data!', error);
    });
  };

  // Automatically show the modal when showModal is true
  useEffect(() => {
    if (showModal) {
      setShow(true);
    }
  }, [showModal]);

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Enter Text</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Input Text:</Form.Label>
            <Form.Control type="text" value={inputText} onChange={handleInputChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FormPop;


















// import React, { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';

// function FormPop({ showModal}) {
//   const [inputText, setInputText] = useState('');

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
// //   const handleShow = () => setShow(true);

//   const handleInputChange = (event) => setInputText(event.target.value);
  
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post('http:/localhost:4000/api/voters/register',
//         {
//             "emailorPhone" : inputText
//         }
//     )
//     // Handle the submitted text, e.g., send it to an API or display it
//     alert(`You entered: ${inputText}`);
//     handleClose(); // Close modal after submit
//   };

//   return (
//     <Modal show={showModal} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Enter Text</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3">
//             <Form.Label>Input Text:</Form.Label>
//             <Form.Control type="text" value={inputText} placeholder='email or phone number start with 0' onChange={handleInputChange} />
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={show}>
//           Close
//         </Button>
//         <Button variant="primary" type="submit" onClick={handleSubmit}>
//           Submit
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default FormPop;
