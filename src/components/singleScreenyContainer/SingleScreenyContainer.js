import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleScreenyContainer = (screeny) => {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{screeny.containerName}</Card.Title>
            <Button variant="warning">Modify</Button>
            <Button variant="danger">Delete</Button>
        </Card.Body>
    </Card>
  )
}

export default SingleScreenyContainer
