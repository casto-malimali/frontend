import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import ModalPop from './ModalPop';
import './home.scss';





function Home(props) {
  const { userDetails } = props.location.state || {};
  
 
  const [candidates, setCandidates] = useState([]);

  const [isLoading, setIsLoading] = useState(true); // Track loading state for UI feedback
  const [error, setError] = useState(null); 

  useEffect(() => {
    axios.get('http://localhost:4000/api/candidates').then(res =>{
      setCandidates(res.data);
      setIsLoading(false)
    }).catch(error => {
      setError(error);
      setIsLoading(false);
    });
  }, []);

    if (isLoading){
      return <div className='loaderBlock'>
        <div className="loader"></div>
      </div>
    }

    if(error){
      return <div>Error: {error.message}</div>
    }

  return (
    <div>
      <header />
      <h1 className="text-center">Welcome, {userDetails}</h1>
      <Container className="mt-5">
      <Card className="p-4">

        {candidates.map((candidate) => (
          <Row key={candidate.id} className="mb-4">
            <Col md={4}>
              <Image src={candidate.image} rounded  className="full-width-image" fluid />
            </Col>
            <Col md={8} className="d-flex flex-column justify-content-center align-items-center px-auto">
              <Card.Body>
                <Card.Text className='text-center'>
                  <strong>{candidate.name}</strong>
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <ModalPop name={ candidate.name } />
                </div>
              </Card.Body>
            </Col>
          </Row>
        ))}
        
      </Card>
    </Container>
      <hr />
   
   

      {/* <FormPop showModal={showModal} handleClose={false}  /> */}
       
    </div>
  );
}

export default Home;