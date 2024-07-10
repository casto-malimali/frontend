import React from 'react'
import { Container } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                        <div className="container-fluid py-5">
                            <h1 className="display-5 fw-bold">Welcome to voting system for our contets</h1>
                            <p className="col-md-8 fs-4">Just Vote for a single contenstnt only</p>
                            <button className="btn btn-primary btn-lg" type="button">Get Started</button>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Header